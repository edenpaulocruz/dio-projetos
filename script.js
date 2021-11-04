(function(win, doc) {
  'use strict'

  const dino = doc.querySelector('[data-js="dino"]')

  function handleKeyUp(event) {
    jump()
  }

  function jump() {
    let position = 0

    let upInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(upInterval)
        
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval)
          } else {
            position -= 20
            dino.style.bottom = position + 'px'
          }
        }, 20)
      } else {
        position += 20
        dino.style.bottom = position + 'px'
      }
    }, 20)
  }

  doc.addEventListener('keyup', handleKeyUp)
})(window, document)