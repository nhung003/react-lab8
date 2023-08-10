import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;
  
  render() {
    return (
      <>
      <h3> Select a Language</h3>

      <div className='d-flex justify-content-center'>
        <div className='mr-2'>
        <label htmlFor="" className='mr-2'>USA</label>
        <FontAwesomeIcon
          icon={faFlag}
          className='flag-icon'
          onClick={() => this.context.onLanguageChange('english')}
        />
        </div>
       <div>
       <label htmlFor="" className='mr-2'>Netherlands</label>
        <FontAwesomeIcon
          icon={faFlag}
          className='flag-icon'
          onClick={() => this.context.onLanguageChange('dutch')}
        />
       </div>
      </div>
      </>
    )
  }
}