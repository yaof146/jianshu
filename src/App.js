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
import Concern from './pages/concern'
import Hooks from './pages/hooks/hooks1'
import Callback from './pages/hooks/hooks2'
import CountReducer from './pages/hooks/hooks3'
import Games from './pages/gamePlane'
import Gobang from './pages/gameGobang'

function App() {
  return (
    //如果一个组件的祖先被Provider包裹并传入store，那么这个组件就可以用connect将组件与Redux.store
    //绑定，如果connect函数传入了第一个参数mapStateToProps，则组件可以根据该参数选择要传入组件的属性值。
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
            <Route path='/concern' exact component={Concern}></Route>
            <Route path='/hooks/hooks1' exact component={Hooks}></Route>
            <Route path='/hooks/hooks2' exact component={Callback}></Route>
            <Route path='/hooks/hooks3' exact component={CountReducer}></Route>
            <Route path='/gamePlane' exact component={Games}></Route>
            <Route path='/gameGobang' exact component={Gobang}></Route>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
