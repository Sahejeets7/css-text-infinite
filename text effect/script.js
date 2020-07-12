const text = document.getElementById('text')
const lang = 'Hi, My Name is Prabhi!'

setInterval(animateText,100)

let index = 1

function animateText(){
    text.innerText = lang.slice(0,index)
    index++

    if(index > lang.length){
        index = 1
    }
}
