import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;

        // return `${difference} milliseconds`
        return `${years} 年, ${months} 月, ${days} 天`
    }

    render() {
        return (
            <div>
                <br/>
                <h3>{this.props.date}</h3>
                <h4>您已經來到這個世界【 {this.timeSince(this.props.date)} 】了！</h4>
                <img  src={partyPopper} alt="party-popper" className="party-popper"/>
                
            </div>
        )
    }
}

export default AgeStats;