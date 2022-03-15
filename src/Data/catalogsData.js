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
    events: [
      {
        img: "https://images.pexels.com/photos/1462361/pexels-photo-1462361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Kentucky Derby",
        location: "Churchill Downs",
        pricesFrom: 259,
      },
      {
        img: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Louisville City FC",
        location: "Lynn Family Stadium",
        pricesFrom: 199,
      },
      {
        img: "https://images.pexels.com/photos/163218/football-stadium-hughes-stadium-fort-collins-colorado-163218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Louisville Football",
        location: "Cardinal Stadium",
        pricesFrom: 89,
      },
      {
        img: "https://images.pexels.com/photos/2207/red-people-outside-sport.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Kentucky Football",
        location: "Kroger Field",
        pricesFrom: 49,
      },
    ],
  },
  {
    catalogName: "Concerts",
    events: [
      {
        img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "The Band",
        location: "The Louisville Palace",
        pricesFrom: 49,
      },
      {
        img: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Kanye West",
        location: "KFC Yum! Center",
        pricesFrom: 49,
      },
      {
        img: "https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Mitski",
        location: "The Louisville Palace",
        pricesFrom: 49,
      },
    ],
  },
  {
    catalogName: "Family",
    events: [
      {
        img: "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Picnic",
        location: "The Field",
        pricesFrom: 9,
      },
      {
        img: "https://images.pexels.com/photos/4519856/pexels-photo-4519856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Ball Pit",
        location: "KFC Yum! Center",
        pricesFrom: 15,
      },
      {
        img: "https://images.pexels.com/photos/8838155/pexels-photo-8838155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Rabbit Show",
        location: "Louisville Zoo",
        pricesFrom: 49,
      },
      {
        img: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Fancy Event",
        location: "Galt House",
        pricesFrom: 99,
      },
    ],
  },
  {
    catalogName: "Comedy",
    events: [
      {
        img: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Comedy Club",
        location: "The Louisville Palace",
        pricesFrom: 49,
      },
      {
        img: "https://images.pexels.com/photos/5696394/pexels-photo-5696394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Eric Andre Show",
        location: "KFC Yum! Center",
        pricesFrom: 49,
      },
      {
        img: "https://images.pexels.com/photos/7234415/pexels-photo-7234415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "The Roast",
        location: "Brown Theatre",
        pricesFrom: 49,
      },
    ],
  },
  {
    catalogName: "Arts & Theater",
    events: [
      {
        img: "https://images.pexels.com/photos/6896314/pexels-photo-6896314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Romeo and Juliet",
        location: "Brown Theatre",
        pricesFrom: 25,
      },
      {
        img: "https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "The Ballet",
        location: "Brown Theatre",
        pricesFrom: 36,
      },
      {
        img: "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Swan Lake",
        location: "Brown Theatre",
        pricesFrom: 59,
      },
    ],
  },
];
export { events };
export { catalogs };
