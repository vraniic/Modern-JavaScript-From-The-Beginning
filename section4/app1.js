let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3,

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn')
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')


      // Assign ui min max
      minNum.textContent = min
      maxNum.textContent = max

      // listen for guesses

      guessBtn.addEventListener('click')