import React from 'react';
import Header from './components/Header';
import Week from './components/Week';
import Day from './components/Day';
import Cal from './components/Cal'
import Side from './components/Sidebar'
import Footer from './components/Footer'
window.calenderData = {};
require('./index.css');
//Rendering all of the components
const App = React.createClass({
  render() {
    return (
      <div className='app'>
        <Header/>
        <Side/>
        <Cal/>
        <Footer/>
      </div>
    );
  }
});

export default App;
