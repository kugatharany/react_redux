import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreator from './store/action/action';


const mapStateToProps=(state)=>{
  return {
    age :state.age,
    loading:state.loading
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  }
}

class App extends React.Component{
  render(){
    return(
    <div className="App">
      <h1>MY AGE :{this.props.age}</h1>
      <button onClick={this.props.onAgeUp}>AGe Up</button>
      <button onClick={this.props.onAgeDown}>AGe Down</button>
      {this.props.loading && <img src={logo} alt="" />}
      </div>
      )
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
