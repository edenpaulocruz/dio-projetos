(function(win, doc) {
  'use strict'
  
  const dino = doc.querySelector('[data-js="dino"]')
  const main = doc.querySelector('[data-js="main"]')
  let position = 0
  let isJumping = false

  function handleKeyUp(event) {
    if (!isJumping) jump()
  }

  function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
      if (position >= 200) {
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
    let randomTime = Math.random() * 6000

    cactus.classList.add('cactus')
    cactus.style.left = cactusPosition + 'px'
    main.appendChild(cactus)

    let leftInterval = setInterval(() => {
      if (cactusPosition < 40) {
        clearInterval(leftInterval)
        main.removeChild(cactus)
      } else if (cactusPosition > 100 && cactusPosition < 160 && position < 60) {
        clearInterval(leftInterval)
        doc.body.innerHTML = '<div class="game-over">Fim de jogo!</div>'
      } else {
        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'
      }
    }, 20)

    setTimeout(createCactus, randomTime)
  }

  createCactus()
  doc.addEventListener('keyup', handleKeyUp)
})(window, document)