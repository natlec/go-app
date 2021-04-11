export default class GoData {
  static instance = null;
  user = {};
  loggedIn = false;
  trips = [];

  static getInstance() {
    if (GoData.instance == null) {
      GoData.instance = new GoData();
    }
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

  getTrips() {
    return this.trips;
  }

  setTrips(trips) {
    this.trips = trips;
  }
}
