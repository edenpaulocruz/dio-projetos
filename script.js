(function(win, doc) {
  'use strict'

  const dino = doc.querySelector('[data-js="dino"]')
  let isJumping = false

  function handleKeyUp(event) {
    if (!isJumping) jump()
  }

  function jump() {
    let position = 0
    isJumping = true

    let upInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(upInterval)
        
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval)
            isJumping = false
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