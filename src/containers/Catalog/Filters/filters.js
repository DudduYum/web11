import React, { useContext, useState,useEffect } from "react";
import { StyledFilter, StyledButton } from "./filters.style";
import { Input, Slider, Select } from "antd";
import API from "../../../API/APIserv";
import MyContext from "../../../Context/context";

const { Option } = Select;

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Filters = () => {
  const { updataArr } = useContext(MyContext);

  const [optionValue, setOptionValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);

  const load = () => {
    async function getData() {
      let userData = await API.get(
        "/sneaker?min=" +
          priceRangeValue[0] +
          "&max=" +
          priceRangeValue[1] +
          "&sortBy=" +
          optionValue
      );
      let arr = userData.data.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
      );
      updataArr(arr);
      console.log(userData);
    }
    updataArr([]);
    setTimeout(() => {
      getData();
    }, 1000);
  };

  useEffect(load, []);

  return (
    <MyContext.Consumer>
      {() => (
        <StyledFilter>
          <div>
            <Input
              placeholder="Enter name"
              style={{ width: 200 }}
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
              }}
            />
            <Select
              placeholder="Sort by"
              style={{ width: 120 }}
              allowClear
              onChange={(value) => setOptionValue(value)}
            >
              <Option value="name">name</Option>
            </Select>
            Price range:
            <Slider
              range
              defaultValue={[0, 1000]}
              max={1000}
              style={{ width: 200 }}
              onChange={(value) => setPriceRangeValue(value)}
            />
          </div>
          <StyledButton
            type="primary"
            onClick={() => {
              load();
            }}
          >
            Apply
          </StyledButton>
        </StyledFilter>
      )}
    </MyContext.Consumer>
  );
};

export default Filters;
