import React from 'react';
import axios from "axios";

class App extends React.Component{
  state = {
    count: 0,
    isLoading:true
  };

  //async: await.뒤의 과정을 기다려라
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    // 6초간 딜레이 시키는 함수
    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // }, 6000);
    this.getMovies();
  }
  
  add = () => { 
     this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading: ": "We are ready"}
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS </button>
        
      </div>
    );
  }

}
export default App;
