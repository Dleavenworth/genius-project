import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
window.calendarData = {};
//require('./style.css');
const App = React.createClass ({
    render() {
        return (
            <div className="app">
            <Header/>
            <Sidebar/>
            </div>
        );
    }
});
export default App;
