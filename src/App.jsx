import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    if (this.props.appState.isLoading)
      return <p>....</p>
    else
      return (
      <div>
        <input type="text" id="facility_name"/>

        <ul>
          {this.props.appState.backend.facilities.filter(function(facility){
            return facility.name != 'not sure';
          }).map(facility => <li key={facility._id}>{facility.name}</li>) }
        </ul>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <br />
        <button onClick={this.cF}>
        Create Facility
        </button>

        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }

  cF = () => {
    this.props.appState.backend.createFacility({name: 'not sure'});
  }
};

export default App;
