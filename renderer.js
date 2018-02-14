const app = require('electron').remote.require('main')
const newWindowBtn = document.getElementById('frameless-window')
console.log(newWindowBtn)
console.log(app)

app.on('ready',function(){
  console.log('ready')
})

newWindowBtn.addEventListener('click', function (event) {  
  console.log('pulso')
  win.show()
})
