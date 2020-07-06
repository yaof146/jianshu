import React from 'react';
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import DownLoad from './pages/download'
import Author from './pages/author'
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/download' exact component={DownLoad}></Route>
            <Route path='/author' exact component={Author}></Route>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
