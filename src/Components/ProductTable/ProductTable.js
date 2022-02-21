import React from "react";
import EventCatalog from "../EventCatalog/EventCatalog";

const ProductTable = ({ catalog, handleClick}) => {
  const eventCatalogs = catalog.map((item, index) => (
    <EventCatalog
      events={item.events}
      catalogName={item.catalogName}
      key={index}
      handleClick={handleClick}
    ></EventCatalog>
  ));

  return <div>{eventCatalogs}</div>;
};

export default ProductTable;
