import React from 'react'

import{ store} from "./Redux/BgRedux/store"
import Buttons from "./Components/Buttons";

import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      
        <React.Fragment>
        <Buttons />
      
      </React.Fragment>
    </Provider>
  );
}

export default App;
