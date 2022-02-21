import React from "react";
import EventCatalog from "../EventCatalog/EventCatalog";

const ProductTable = ({ catalog }) => {
  const eventCatalogs = catalog.map((item, index) => (
    <EventCatalog
      events={item.events}
      catalogName={item.catalogName}
    ></EventCatalog>
  ));

  return <div>{eventCatalogs}</div>;
};

export default ProductTable;
