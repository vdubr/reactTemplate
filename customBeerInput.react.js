import {connect} from 'react-redux';
import React, {Component} from 'react';

class CustomBeerInput extends Component {
  handleChange (evt) {
    const {dispatch} = this.props;
    dispatch({
      type:'setCustomBeerName',
      name: evt.target.value
    })
  }

  render() {
    const {data} = this.props;
console.log(data,data.name);
    return (
      <div>
        <label>
          Vlastní pivo
          <input type="text" value={data.name || ''} onChange={this.handleChange.bind(this)}/>
        </label>
      </div>
    )
  }
}

export default connect()(CustomBeerInput);
