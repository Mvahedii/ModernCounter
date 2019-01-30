import React, { Component } from 'react';
import {Provider} from 'react-redux'

import Counter from './Component/counter'
import counterStore from './redux/store/store'


class App extends Component {
  render() {
    return (
      <Provider store={counterStore}>
     <div className="counters">
       <Counter />
      
     </div>
     </Provider>
    );
  }
}

export default App;
