import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context.language === 'english' ? 'Name: ' : 'Naam: ';
        return (
            <div className=''>
            <label className='pr-2'>{text}</label>
            <input type='text' className=''></input>
          </div>
        );
    }
}