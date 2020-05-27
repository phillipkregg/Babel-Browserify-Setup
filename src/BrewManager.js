class BrewManager {
  async getBreweries() {
    const breweries = await fetch('https://api.openbrewerydb.org/breweries')
      .then((breweries) => {
        return breweries.json();
      })
      .then((breweries) => {
        return breweries;
      });

    return breweries;
  }
}

export default BrewManager;
