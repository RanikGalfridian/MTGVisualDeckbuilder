const {app, BrowserWindow} = require('electron').remote
const url = require('url');
const path = require('path');

function closeWindow() {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}

document.onreadystatechange = () => {
  if (document.readState == "complete") {
    init();
  }
};