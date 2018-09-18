import React, { Component } from 'react';
import logo from './logo.png';
import './style/App.css';
import {Helmet} from 'react-helmet';
import {Icon, Button} from 'antd';

class App extends Component {
  state = {
    size: 'large',
  };
  render() {
    return (
      <div className="App">
      <Helmet>
            <style>{'body { background-color: white; }'}</style>
      </Helmet>
      {/* <Icon type="menu-fold" theme="outlined" size='large' /> */}
      <img className="App" src={logo} style={{width: 260, height: 210}} align='center'/>
      <h1 className="App-title">TheBowl</h1>
      <p className='App-description'>Access Easier. Analyse Better. Execute Faster.</p>
      {/* <body> */}
      {/* <Button.Group size={this.state.size}> */}
        <div><Button type="primary" size={'large'}>Logical Research<Icon type="right" /></Button></div>
        <div><Button type="primary">Mathematical Research<Icon type="right" /></Button></div>
        <div><Button type="primary">Sociological Research<Icon type="right" /></Button></div>
      {/* </Button.Group> */}
      {/* </body> */}
        {/* </header> */}
        {/* <p className="App-intro">
          Hello! Welcome to The Bowl
           {/* <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;


