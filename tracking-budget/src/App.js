import React, {useState} from 'react';
import Navbar from './components/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import History from './pages/history';
import Home from './pages/'
import AddTransaction from './pages/addTransaction';
import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Switch} from "@mui/material"

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  // function to toggle the dark mode as true or false


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
    <Router>
      <div>
      <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/review' element={<History />} />
        <Route path='/addTransaction' element={<AddTransaction />} />
      </Routes>
    </Router>
    </div>
    </ThemeProvider>
    </div>
  )
}
export default App;