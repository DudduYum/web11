from typing import Optional,List
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

class Items(BaseModel):
    items: List[Item]


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/sneakers')
def insertTestSnikers(items: Items):
    for i in items.items:
        sneakerList.append(i)
    #sneakerList = [i for i in items.items]


@app.post('/sneaker')
def post(item: Item):
    temp_id = 1
    while str(temp_id) in map(lambda i: i.id, sneakerList):
        temp_id += 1
    item.id = str(temp_id)
    sneakerList.append(item)


@app.get('/sneaker')
def getFiltered(name: str = 'None', min: int=0, max: int=1000):
    print (sneakerList)
    return [i for i in sneakerList
    if name in (i.name, 'None') and min < i.price_in_uah and max > i.price_in_uah
    ]



    
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


