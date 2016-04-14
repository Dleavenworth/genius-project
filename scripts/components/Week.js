import React from 'react';
import moment from 'moment';
import Day from './Day'

export default React.createClass({
    render() {
        var currentDate = moment('2016-01-01T00:00:00.000Z').utc().format('MM-DD-YYYY');
        var dayNodes = [];
        var lastMonth = moment(currentDate).utc().format('MM');
        var lastYear = moment(currentDate).utc().format('YYYY');
        var thisYear = moment(currentDate).utc().format('YYYY');

        while(lastYear === thisYear) {
            var thisMonth = moment(currentDate).utc().format('MM');
            if(thisMonth != lastMonth) {
                dayNodes.push(<a name={thisMonth}></a>)
            }
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
