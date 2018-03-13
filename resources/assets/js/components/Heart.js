import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Heart extends Component {
    render() {
        return (
            <div className="chest">
                <div className="heart left side top"></div>
                <div className="heart center"></div>
                <div className="heart right side"></div>
            </div>
        );
    }
}
