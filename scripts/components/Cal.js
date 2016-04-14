import React from 'react';
import moment from 'moment';
import Week from './Week';
import Day from './Day';

export default React.createClass({
    render() {
        return(
            <div className='cal'>
                <Week/>
            </div>
        )
    }
});
