import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import TotalSum from '../components/totalSum'
const defaultList = []
const Home = () => {
  const [list, setList] = useState(defaultList);
  useEffect(() => {
      const list = JSON.parse(localStorage.getItem('list'));
      if (list) {
          setList(list)
      }
  }, []);
  const displayingFourHistory = () => {
    console.log('its a me mario')
    // const modiList = [list[0], list[1], list[2], list[3]]
    // console.log(modiList)
    return (
      <div>
        {list.map((item) => (
          <div>{JSON.parse(JSON.stringify(item.amount))}</div>
        ))}
      </div>
    )
  }
    return (
    <div className="App">
      <div class="AppSection">
      <h1>Budget Tracker</h1>
      <h2>Your Balance:</h2>
      <h2><TotalSum list={list} /></h2>
      <div id="amountBox">
        <div>
          <h3>INCOME</h3>
          <p>positive nums</p>
        </div>
        <div>
          <h3>EXPENSE</h3>
          <p>negative nums</p>
        </div>
      </div>
      <Link to="/addTransaction" id="addTransactionRouteButton">Add new transaction</Link>
    </div>
    <div class="AppSection">
      <h2>History</h2>
      <hr></hr>
      <div id="historyContainer">{displayingFourHistory}</div>
    </div>
  </div>
    )
}
export default Home;