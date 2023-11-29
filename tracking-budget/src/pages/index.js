import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {

    return (
    <div className="App">
      <div class="AppSection">
      <h1>Budget Tracker</h1>
      <h2>Your Balance:</h2>
      <h2>num</h2>
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
      <div id="historyContainer">
        <p class="historyItems">Dog</p>
        <p class="historyItems">Dog</p>
        <p class="historyItems">Dog</p>
        <p class="historyItems">Dog</p>
      </div>
    </div>
  </div>
    )
}
export default Home;