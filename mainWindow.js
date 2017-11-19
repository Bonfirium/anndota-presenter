
const { ipcRenderer } = require('electron');
ipcRenderer.on('onResize', (e) => setTimeout(onResize, 17))

const graphStep = 16

var isLoaded = false

function onLoad( ) {
    // ...

    onResize( )
}

function onResize( ) {
    if (!isLoaded) return

    // if resized ...
}
