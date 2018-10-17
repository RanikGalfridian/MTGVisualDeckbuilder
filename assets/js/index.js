const {app, BrowserWindow} = require('electron').remote
window.$ = window.jQuery = require('jquery')

function closeWindow() {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}

document.onreadystatechange = () => {
  if (document.readState == "complete") {
    init();
  }
};