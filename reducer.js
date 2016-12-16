import {combineReducers} from 'redux';

const defaultConfig = {
  user: {
    name: "Jára",
    id: 33
  },
  beers:[
    {
      name: "Drsoň",
      price: 30
    }
  ],
  customBeer: {
    name: null
  }
}

export default (state, action) => {
  if (Object.getOwnPropertyNames(state).length === 0) {
    return defaultConfig;
  }

  switch (action.type) {
  case 'addBeer':
    const beers = state.beers;
    beers.push(action.beer)
    return Object.assign({}, state, {
      beers: beers
    })
    break;
  case 'setCustomBeerNamed':
    return Object.assign({}, state, {
      customBeer: {
        name: action.name
      }
    })
    break;
  default:
    return state;
  }
}
