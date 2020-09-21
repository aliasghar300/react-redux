import React from 'react';
import './App.css';
import { connect } from "react-redux";
import user from "./actions/user";
import TestClass from './testClass';
import Test from "./test";


function App(props) {

  let description = "lorem epsum.."

  React.useEffect(() => {
    props.dispatch(user({description}))
  },[])
  
  
  console.log(props.user, "user")
  return (
    <div className="App">
        {props.user.name} {props.user.description}
        <TestClass />
        <Test />
   </div>
  );
}

function mapStateToProps({user}){
  return {
    user
  }  
}

export default connect(mapStateToProps)(App) ;
