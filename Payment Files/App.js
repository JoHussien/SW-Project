import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/PaymentStore';
import Nav from './component/Nav';
import Payment from './component/Payment';
import Home from './component/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
	<BrowserRouter>
		<Provider store={store}>
			<div className="App">
				<Nav />
				<Switch>	
					<Route path='/' exact component={Home} />
					<Route path='/payment' exact component={Payment} />
				</Switch>		
			</div>
		</Provider>
	</BrowserRouter>
  );
}

export default App;
