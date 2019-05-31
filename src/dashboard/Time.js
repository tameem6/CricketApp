import React, { Component } from 'react'

export default class Time extends Component {
    state={}

componentWillMount(){
    this.setState({time:this.props.time})
}

componentDidMount(){
    let time;
   
    const startTime = () => {
    var endDate = new Date(this.state.time);
    var startdate = new Date(endDate);
   
    var time1 = new Date( startdate.getTime() - 1000 * 1 );
            time=time1.toString();
         time=time.split("GMT+0530 (India Standard Time)"); 
         this.setState({time:time})
}
   startTime();
//    setInterval(() => {
//     startTime();
//     this.setState({time:time}) ;
//        }, 1000);
}
    render() {      
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}
