import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addEmail } from './redux/actions';

class App extends React.Component{
  state={
    emailLocal:'',
  }
  handleChange=({target:{name,value}})=>{
this.setState({[name]:value});
  }

  handleClick=()=>{
    const {emailLocal}=this.state;
    const {dispatch}=this.props;
    dispatch(addEmail(emailLocal));
  }
  render(){
    const{emailGlobal}=this.props;
  return (
    <div className="App">
      <h1>Teste</h1>
      <label htmlFor='email'>
        <input type='text' name='emailLocal' id='email' onChange={this.handleChange}/>
      </label>
      <button type='button' onClick={this.handleClick}>Salvar</button>
       <h2>{emailGlobal}</h2>
    </div>
  );
}
}
const mapStateToProps=(state)=>({
emailGlobal:state.loginReducer.emailGlobal,

})

export default connect(mapStateToProps,null)(App);
