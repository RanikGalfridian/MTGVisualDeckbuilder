import React from 'react';
import '../assets/main.css';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div id="title-bar"> 
          <div id="title-bar-btns">
            <span className="fas fa-times" id="close_btn" onclick="closeWindow()"></span>
          </div>
        </div>
    );
  }
}