import '@babel/polyfill';

import BrewManager from './BrewManager';

const manager = new BrewManager();

const breweries = manager.getBreweries().then((breweries) => {
  console.log(breweries);
  return breweries;
});
