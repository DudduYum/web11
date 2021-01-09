import React from "react";
import Filters from "./Filters/filters";
import ItemsList from "./ItemsList/itemslist";

const Catalog = () => {
    return (
        <div>
            <Filters />
            <ItemsList />
        </div>
    );
}

export default Catalog;