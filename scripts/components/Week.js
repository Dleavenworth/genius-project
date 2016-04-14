//Importing required components
import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
  render() {
    //Declaring and formating the current date variable this will be used as a starting point for rendering the dates
    var currentDate = moment('2016-01-01T00:00:00.000Z').utc().format('MM-DD-YYYY')
    //An array called dayNodes that will be used to store the code that will be rendered
    var dayNodes = []
    //January
    //Declaring variables and formating them to UTC and into the correct month or date
    var lastMonth = moment(currentDate).utc().format('MM');
    var lastYear = moment(currentDate).utc().format('YYYY');
    var thisYear = moment(currentDate).utc().format('YYYY');
    //While last year is equal to this year meaning at the start of a year it will push a anchor tag into dayNodes and be rendered on the page if thisMonth does not equal last month
    while(lastYear === thisYear) {
      var thisMonth = moment(currentDate).utc().format('MM');
      if(thisMonth != lastMonth) {
        //Pushing anchor tag with name of thisMonth i.e. 01, 02 etc
        dayNodes.push(<a name={thisMonth}></a>)
      }
      //Will render all of the days in each month onto the page
      dayNodes.push(<Day className="col day" date={currentDate} desc='Description'/>)
      currentDate = moment(currentDate).add(1, 'day').utc().format('MM-DD-YYYY')
      thisYear = moment(currentDate).utc().format('YYYY');
    }
    return (
      <div className="container middle row">
        {dayNodes}
      </div>
    );
  }
})
