import logo from "../Assets/Images/logo.svg";
import fans from "../Assets/Images/fans_cheering.jpeg";

const genericEvent1 = {
  img: logo,
  title: "Superb Owl",
  location: "Yum Center",
  pricesFrom: 99,
};

const genericEvent2 = {
  img: fans,
  title: "Event",
  location: "Place",
  pricesFrom: 49,
};

const events = [genericEvent1, genericEvent2, genericEvent1, genericEvent2];

const catalogs = [
  {
    catalogName: "Sports",
    events: [genericEvent1, genericEvent2, genericEvent1, genericEvent2],
  },
  {
    catalogName: "Concerts",
    events: [genericEvent2, genericEvent2, genericEvent2],
  },
  {
    catalogName: "Family",
    events: [genericEvent1, genericEvent2, genericEvent2, genericEvent2],
  },
  {
    catalogName: "Comedy",
    events: [genericEvent1, genericEvent2, genericEvent2],
  },
];
export { events };
export { catalogs };
