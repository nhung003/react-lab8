import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button style={{ backgroundColor: color, color: '#ffffff', borderRadius: '5px', border: '1px solid', padding: '5px 13px' }}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}