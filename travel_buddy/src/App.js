import Nav from './components/navbar';
import Prof from './components/profile';
import Cards from './components/cards';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* call the components here */}
      <Nav/>   {/* example  to call, you can pass attributes inside the calls*/}
      <Prof/>
      <Cards/>

    </div>
  );
}

export default App;
