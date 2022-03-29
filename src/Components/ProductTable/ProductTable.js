import React from "react";
import EventCatalog from "../EventCatalog/EventCatalog";

const ProductTable = ({ catalog, handleClick}) => {
  const events  =Object.entries(catalog);
  console.log(events)
  const eventCatalogs = events.map((item, index) => (
    <EventCatalog
      events={item[1]}
      catalogName={item[0]}
      key={index}
      handleClick={handleClick}
    ></EventCatalog>
  ));

  return <div>{eventCatalogs}</div>;
};

export default ProductTable;
