(function(win, doc) {
  'use strict'

  const dino = doc.querySelector('[data-js="dino"]')
  const main = doc.querySelector('[data-js="main"]')
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

  function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000

    cactus.classList.add('cactus')
    cactus.style.left = cactusPosition + 'px'
    main.appendChild(cactus)
  }

  createCactus()
  doc.addEventListener('keyup', handleKeyUp)
})(window, document)