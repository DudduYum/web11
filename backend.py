from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# install uvicorn to run server:
# uvicorn <filename>:app --reload
app = FastAPI()
sneakerList = []


class Item(BaseModel):
    id: Optional[str]
    name: str
    price_in_uah: int


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/sneaker')
def post(item: Item):
    temp_id = 1
    while str(temp_id) in map(lambda i: i.id, sneakerList):
        temp_id += 1
    item.id = str(temp_id)
    sneakerList.append(item)
    print(sneakerList)


@app.get('/sneaker')
def get():
    return sneakerList


@app.get('/item/{id}')
def get_by_id(id):
    for sneak in sneakerList:
        if sneak.id == id:
            return sneak

@app.put('/sneaker/{id}')
def put(id, item: Item):
    for i in range(len(sneakerList)):
        if sneakerList[i].id == id:
            sneakerList[i] = item
            return


@app.delete('/sneaker/{id}')
def delete(id):
    for i in range(len(sneakerList)):
        if sneakerList[i].id == id:
            return sneakerList.pop(i)

@app.get('/sneaker?min=/{name}&{price_in_uah}')
def getFiltered(name,price_in_uah):
    return [i for i in sneakerList
    if name in (i.name, 'None') and price_in_uah in (i.price_in_uah, 'None')
    ]