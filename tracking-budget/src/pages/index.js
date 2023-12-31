import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import TotalSum from '../components/totalSum'
import HistoryList from '../components/historyList'
import ListContext from '../components/listContext';
const defaultList = [];
const Home = () => {
  const [list, setList] = useState(defaultList);
  useEffect(() => {
      const list = JSON.parse(localStorage.getItem('list'));
      if (list) {
          setList(list)
      }
  }, []);
    return (
      <ListContext.Provider value={list}>
    <div className="App">
      <div class="AppSection">
      <h1>Budget Tracker</h1>
      <h2>Your Balance:</h2>
      <h2><TotalSum /></h2>
      <Link to="/addTransaction" id="addTransactionRouteButton">Add new transaction</Link>
    </div>
    <div class="AppSection">
      <h2>History</h2>
      <hr></hr>
      <div id="historyContainer"><HistoryList list={list}/></div>
      <div>Want to see more? Check out the Review Information page!</div>
    </div>
  </div>
  </ListContext.Provider>
    )
}
export default Home;