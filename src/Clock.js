import { Component } from "react";

export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount(){
    this.timerID = setInterval(() =>
    this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render(){
    return <p>Time - {this.state.time}</p>
}
}


