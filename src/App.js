import React from 'react';
import './App.css';
import { DISHES } from './components/Shared/dishes';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './components/Redux/ConfigureStore';

const store = ConfigureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
