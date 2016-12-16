import {connect} from 'react-redux';
import React, {Component} from 'react';
import CustomBeerInput from './customBeerInput.react';

class App extends Component {
  onClick (evt) {
    const {dispatch} = this.props;
    dispatch({
      type:'addBeer',
      beer: {
        name: 'Kozel',
        price: 25
      },
      customBeer: {
        beerName: null
      }
    })
  }

  render() {
    const {state:{user, beers, customBeer}} = this.props;
    const beersElems = beers.map((beer, index) => {
      return (<li key={index}>{beer.name} za cenu {beer.price}</li>)
    })
    console.log(customBeer);
    return (
      <div>
        <p>
          Hello CleverMaps.
        </p>
        <p>
          {user.name}
        </p>
        <ul>
          {beersElems}
        </ul>
        <CustomBeerInput data={customBeer} />

        <button onClick={this.onClick.bind(this)}>
          Přidat Kozle
        </button>
      </div>
    )
  }
}

const select = (state) => {
  return {state:state};
};

export default connect(select)(App);
