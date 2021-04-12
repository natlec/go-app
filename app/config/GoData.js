import GoUser from "./data/GoUser";
import GoTrip from "./data/GoTrip";
export default class GoData {
  static instance = null;
  user = {};
  loggedIn = false;
  trips = [];
  tripView = {};
  categories = {
    'All': 'explore',
    'Restaurant': 'local-restaurant',
    'Cafe': 'local-cafe',
    'Hotel': 'hotel'
  };
  costs = {
    'Very Affordable': '$',
    'Affordable': '$-$$',
    'Expensive': '$$-$$$',
    'Very Expensive': '$$$+'
  };

  static getInstance() {
    if (GoData.instance == null) {
      GoData.instance = new GoData();
    }
    GoUser.createTable();
    GoTrip.createTable();
    return this.instance;
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  getLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(loggedIn) {
    this.loggedIn = loggedIn;
  }

  setTripView(trip) {
    this.tripView = trip;
  }

  getTripView() {
    return this.tripView;
  }

  getTrips() {
    return this.trips;
  }

  setTrips(trips) {
    this.trips = trips;
  }

  getCategory(category) {
    return this.categories[category];
  }

  getCategories() {
    return this.categories;
  }

  getCost(cost) {
    return this.costs[cost];
  }

  getCosts() {
    return this.costs;
  }
}
