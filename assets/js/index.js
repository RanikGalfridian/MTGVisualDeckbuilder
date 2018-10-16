const {app, BrowserWindow} = require('electron').remote

function closeWindow() {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}

$("")

document.onreadystatechange = () => {
  if (document.readState == "complete") {
    init();
  }
};