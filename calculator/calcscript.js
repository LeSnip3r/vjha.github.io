var total=0
var buffer='0'
var prevoperator
var screen=document.querySelector('h1')
var key=document.querySelector('.keys')

key.onclick=function(event){
    console.log(event.target.innerText)
    if(isNaN(parseInt(event.target.innerText))){
        handlesymbol(event.target.innerText)
    }
    else{
        handlenum(event.target.innerText)
    }
}

function handlenum(x){
    if(buffer==='0'){
        buffer=''+x
    }
    else{
        buffer=buffer+x
    }
    updatescreen()
}

function handlesymbol(x){
    switch(x){
        case 'C':
            total=0
            buffer='0'
            updatescreen()
            break
        case '←':
            if(isNaN(screen.innerText)){
                prevoperator=null
            }
            else{
                if(buffer.length==1){
                    buffer='0'
                }
                else{
                    buffer=buffer.substr(0,buffer.length-1)
                }
            }
            updatescreen()
            break
        case '=':
            if(prevoperator==null){
                return //do nothing
            }
            else{
                result(parseInt(buffer))
                prevoperator=null
                buffer=''+total
                total=0
                updatescreen()
            }           
            break
        case '÷':
        case 'x':
        case '+':
        case '-':
            screen.innerText=x
            calculation(x) //calculation(prevoperator)
            break
    }
}

function result(intbuff){
    switch(prevoperator){
        case '÷':
            total/=intbuff
            break
        case 'x':
            total*=intbuff
            break
        case '+':
            total+=intbuff
            break
        case '-':
            total-=intbuff
            break
    }
}

function calculation(currentoperator){
    if(buffer==='0'){
        return
    }
    if(total===0){
        total=parseInt(buffer)
    }
    else{
        result(parseInt(buffer))
    }

    prevoperator=currentoperator
    buffer='0'
}

function updatescreen(){
    screen.innerText=buffer  
}