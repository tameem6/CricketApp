import React, { Component } from 'react'

export default class Time extends Component {
    state={
        time:'2019-05-20 15:01:10'
     
    }

componentDidMount(){
    let time;
   

      const startTime = () => {
    //          let today = new Date();
    //          let h = today.getHours();
    //          let m = today.getMinutes();
    //          let s = today.getSeconds();
    //  // add a zero in front of numbers<10
    //                 if (m < 10) {
    //                     m = "0" + m;
    //                     }
    //                     if (s < 10) {
    //                         s = "0" + m;
    //                         }
             
    //          time= h + ":" + m + ":" + s

       

    var endDate = new Date(this.state.time);

    var startdate = new Date(endDate);
    
  

    var time1 = new Date( startdate.getTime() - 1000 * 1 );
            time=time1.toString();
         time=time.split("GMT+0530 (India Standard Time)"); 
         console.log(time);

}

   startTime();

  
   setInterval(() => {
    startTime();
    this.setState({time:time}) ;
       }, 1000);
}


    render() {
       

        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}
