const quote_url = 'http://api.quotable.io/random'

const mainh1 = document.querySelector('main h1')
const textArea = document.querySelector('textarea')
const mainP = document.querySelector('main p')
const result = document.querySelector('main h3')

const quoteDisplay = document.getElementById('para')
const typingInput = document.getElementById('longInput')

const timer = document.getElementById('timer')

const displaySpeed = document.getElementById('speed')
const displayAccuracy = document.getElementById('acc')


let words = 0
let correctchar = 0
let totalchar = 0
let isPlaying
let time = 60
let flag = 0


typingInput.addEventListener('input', () => {
    if (flag === 0) {
        flag++
        startTimer()
    }
    const arrQuote = quoteDisplay.querySelectorAll('span')
    const arrInput = typingInput.value.split('')
    
    console.log(arrInput.length)
    let chars = arrQuote.length
    arrQuote.forEach((charSpan, index) => {
        const char = arrInput[index]
        if (char == null) {
            charSpan.classList.remove('correct')
            charSpan.classList.remove('incorrect')
        }
        else if (char === charSpan.innerText) {
            charSpan.classList.add('correct')
            charSpan.classList.remove('incorrect')
            correctchar++
        }
        else if (arrInput.length === chars) {
            console.log('will print new quote')
            words+=typingInput.value.split(' ').length
            totalchar+=arrInput.length
            console.log(`No. of words: ${words}`)
            console.log(`correct char = ${correctchar}`)
            console.log(`Total char = ${totalchar}`)
            rendernewquote()
        }
        else {
            totalchar++
            charSpan.classList.add('incorrect')
            charSpan.classList.remove('correct')
        }
    })
})

function getrandomquote() {
    return fetch(quote_url)
        .then(response => response.json())
        .then(data => data.content)
}

async function rendernewquote() {
    typingInput.value = null //clears input everytime a new quote is displayed
    console.log('posting new quote')
    const quote = await getrandomquote()
    quoteDisplay.innerHTML = ''
    quote.split('').forEach(element => {
        const charSpan = document.createElement('span')
        charSpan.innerText = element
        quoteDisplay.appendChild(charSpan)
    });    
}

function startTimer() {
    var x=setInterval(function () {
        if (time > 0) {
            time--
        }
        else if (time === 0) {
            words+=typingInput.value.split(' ').length
            totalchar+=typingInput.value.split('').length
            result.classList.remove('hide')
            displaySpeed.innerText = words
            displayAccuracy.innerText = Math.round((correctchar/totalchar)*100)
            mainh1.classList.add('hide')
            textArea.classList.add('hide')
            mainP.classList.add('hide')
            clearInterval(x)
        }
        timer.innerHTML = time
    }, 1000)
}

rendernewquote()