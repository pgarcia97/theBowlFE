import React, { Component } from 'react';
import './App.css';
import img_elBiobowl from './images/BioBowlScreen_elBiobowl_974608.png';
import btn_icon_back_biobowl from './images/btn_icon_back_biobowl.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class BioBowlScreen extends Component {

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
    const style_biobowl = {
        backgroundImage: 'url('+img_elBiobowl+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_biobowl_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_columns = {
        height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="AppScreen BioBowlScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBiobowl' style={style_biobowl_outer}>
            <div style={style_biobowl} />
          
          </div>
          
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder="Search" onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='hasNestedComps elColumns'>
            <div style={style_columns} />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">BioBowl</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_biobowl} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
