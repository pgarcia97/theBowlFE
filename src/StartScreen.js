import React, { Component } from 'react';
import './App.css';
import img_elDishes5 from './images/StartScreen_elDishes5_439496.png';
import img_elBiobowl from './images/BioBowlScreen_elBiobowl_974608.png';
import img_elPsychbowl from './images/PsychBowlScreen_elBowl_65226.png';
import img_elLexbowl from './images/LexBowlScreen_elPsychbowl_839323.png';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>Hi, Welcome to TheBowl</div>),
      text_plainText: "Hi, Welcome to TheBowl",
      textblock3: (<div>LexBowl</div>),
      textblock3_plainText: "LexBowl",
      textblock2: (<div>PsychBowl</div>),
      textblock2_plainText: "PsychBowl",
      textblock: (<div>BioBowl</div>),
      textblock_plainText: "BioBowl",
      text5: (<div>Thank You For Stopping By… :) </div>),
      text5_plainText: "Thank You For Stopping By… :) ",
      home: (<div>Home</div>),
      home_plainText: "Home",
      tutorial: (<div>Tutorial</div>),
      tutorial_plainText: "Tutorial",
      aboutus: (<div>About Us</div>),
      aboutus_plainText: "About Us",
      boards: (<div>Boards</div>),
      boards_plainText: "Boards",
      faq: (<div>FAQ</div>),
      faq_plainText: "FAQ",
      signin: (<div>Sign In</div>),
      signin_plainText: "Sign In",
    };
  }

  onClick_elBiobowl = (ev) => {
    // Go to screen 'BioBowl'
    this.props.appActions.goToScreen('biobowl', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elPsychbowl = (ev) => {
    // Go to screen 'PsychBowl'
    this.props.appActions.goToScreen('psychbowl', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elLexbowl = (ev) => {
    // Go to screen 'LexBowl'
    this.props.appActions.goToScreen('lexbowl', { transitionId: 'fadeIn' });
  
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
        backgroundColor: '#feffff',
        pointerEvents: 'none',
     };
    const style_dishes5 = {
        backgroundImage: 'url('+img_elDishes5+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_dishes5_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 6.8px 18.1px',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_biobowl = {
        backgroundImage: 'url('+img_elBiobowl+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_biobowl_outer = {
        cursor: 'pointer',
     };
    const style_psychbowl = {
        backgroundImage: 'url('+img_elPsychbowl+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_psychbowl_outer = {
        cursor: 'pointer',
     };
    const style_lexbowl = {
        backgroundImage: 'url('+img_elLexbowl+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_lexbowl_outer = {
        cursor: 'pointer',
     };
    const style_textBlock3 = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
     };
    const style_textBlock3_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
     };
    const style_textBlock2_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
     };
    const style_textBlock_outer = {
        pointerEvents: 'none',
     };
    const style_card_outer = {
        backgroundColor: '#f7f7f7',
        boxShadow: '0.0px 2.3px 18px #919191',
        pointerEvents: 'none',
     };
    const style_text5 = {
        fontSize: 12.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#fefb00',
        textAlign: 'center',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
     };
    const style_text5_outer = {
        display: 'none',
        pointerEvents: 'none',
     };
    const style_home = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    const style_tutorial = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    const style_aboutUs = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    const style_boards = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    const style_FAQ = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    const style_signIn = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.3000) 0.0px 2.0px 4.5px',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elDishes5' style={style_dishes5_outer}>
            <div style={style_dishes5} />
          
          </div>
          
          <div className='elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.state.text}</div>
            </div>
          
          </div>
          
          <div className="flowRow flowRow_StartScreen_elBiobowl_654875">
          <div className='elBiobowl' style={style_biobowl_outer}>
            <div style={style_biobowl} onClick={this.onClick_elBiobowl}  />
          
          </div>
          
          <div className='elPsychbowl' style={style_psychbowl_outer}>
            <div style={style_psychbowl} onClick={this.onClick_elPsychbowl}  />
          
          </div>
          
          <div className='elLexbowl' style={style_lexbowl_outer}>
            <div style={style_lexbowl} onClick={this.onClick_elLexbowl}  />
          
          </div>
          
          <div className='elTextBlock3' style={style_textBlock3_outer}>
            <div style={style_textBlock3}>
              <div>{this.state.textblock3}</div>
            </div>
          
          </div>
          
          <div className='elTextBlock2' style={style_textBlock2_outer}>
            <div style={style_textBlock2}>
              <div>{this.state.textblock2}</div>
            </div>
          
          </div>
          
          <div className='elTextBlock' style={style_textBlock_outer}>
            <div style={style_textBlock}>
              <div>{this.state.textblock}</div>
            </div>
          
          </div>
          
          </div>
          <div className='elCard' style={style_card_outer}>
            <div />
          
          </div>
          
          <div className="flowRow flowRow_StartScreen_elText5_655308">
          <div className='elText5' style={style_text5_outer}>
            <div style={style_text5}>
              <div>{this.state.text5}</div>
            </div>
          
          </div>
          
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elHome' style={style_home}>
              <div>{this.state.home}</div>
            </div>
            <div className='elTutorial' style={style_tutorial}>
              <div>{this.state.tutorial}</div>
            </div>
            <div className='elAboutUs' style={style_aboutUs}>
              <div>{this.state.aboutus}</div>
            </div>
            <div className='elBoards' style={style_boards}>
              <div>{this.state.boards}</div>
            </div>
            <div className='elFAQ' style={style_FAQ}>
              <div>{this.state.faq}</div>
            </div>
            <div className='elSignIn' style={style_signIn}>
              <div>{this.state.signin}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
