import React, { Component } from 'react';
import './App.css';
import img_elPsychbowl from './images/LexBowlScreen_elPsychbowl_839323.png';
import btn_icon_back_lexbowl from './images/btn_icon_back_lexbowl.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class LexBowlScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#929292',
        pointerEvents: 'none',
     };
    const style_psychbowl = {
        backgroundImage: 'url('+img_elPsychbowl+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_psychbowl_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    return (
      <div className="AppScreen LexBowlScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elPsychbowl' style={style_psychbowl_outer}>
            <div style={style_psychbowl} />
          
          </div>
          
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder="Search" onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">LexBowl</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_lexbowl} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
