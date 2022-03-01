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

      guessBtn.addEventListener('click', function() {
        let guess = parseInt(guessInput.value)

        // validate
        if (isNaN(guess) || guess < min || guess > max) {
          setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        }

        // check if won
        if (guess === winningNum) {
          // disabel input
          guessInput.disabled = true
          // change border color
          guessInput.style.borderColor = 'green'
        } else {
          // wrong number 
          guessesLeft -= 1
          if (guessesLeft === 0) {
            // game over - lost 

            // disabble input 
            guessInput.disabled = true
            // change border color
            guessInput.style.borderColor = 'red'
            // set messsage
            setMessage(`game over, you lost. the correct number was ${winningNum}`, 'red')
          } else {
            // game continues - ansqwe wrong

            // change border color 
            guessInput.style.borderColor = 'red'

            // clear input 
            guessInput.value = ''

            // tell user its the wrond number 
            setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red')
          }
        }

      })
      function gameOver(won, msg) {
        let color;
        won === true ? color = 'green' : color = 'red'

        // disable input
        guessInput.disabled = true
        // change border color 
        guessInput.style.borderColor = color 
        // set nessage 
        setMessage(msg)
      }

      function setMessage(msg, color) {
        message.style.color = color
        message.textContent = msg
      }