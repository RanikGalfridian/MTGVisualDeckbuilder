const {app, BrowserWindow} = require('electron').remote
window.$ = window.jQuery = require('jquery')

function closeWindow() {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}

$('.create_deck').click(() => {
  $('#img_container').css("display", "none");
  $('#tabletop').css("display", "block");
});

document.onreadystatechange = () => {
  if (document.readState == "complete") {
    init();
  }
};