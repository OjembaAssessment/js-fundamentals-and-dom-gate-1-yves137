console.log("Exercise 3 - Timer");
let countDown;
// change time value function
function differentSec(val){
    let mytime=document.getElementById('myTimer')
    let startBtn=document.getElementById('startBtn')
    if((Number.parseInt(mytime.innerHTML)+val )>=0 && startBtn.innerHTML=='Start')
        mytime.innerHTML=Number.parseInt(mytime.innerHTML)+val
}

// interval timer function
 function start(){
    countDown= setInterval(()=>{
        let mytime=document.getElementById('myTimer')
        if(mytime.innerHTML==0){
            let startBtn=document.getElementById('startBtn')
            startBtn.innerHTML='Start'
            startBtn.classList.remove('bg-green-800')
            startBtn.classList.add('bg-gray-800')
            stopCounter();
        }else{
            mytime.innerHTML=Number.parseInt(mytime.innerHTML)-1
        }
    },1000)
 } 

// start button click handler
document.getElementById('startBtn').addEventListener('click',startStopCounter)

// reset time counter
document.getElementById('resetBtn').addEventListener('click',()=>{
    if(document.getElementById('startBtn').innerHTML=='Start')
        document.getElementById('myTimer').innerHTML=0
})

//  srart & stop timer handler
function startStopCounter(){
    let startBtn=document.getElementById('startBtn')
    if(startBtn.innerHTML=='Start'){
        startBtn.innerHTML='Stop'
        startBtn.classList.remove('bg-gray-800')
        startBtn.classList.add('bg-green-800')
        start()
    }else{
        startBtn.innerHTML='Start'
        startBtn.classList.remove('bg-green-800')
        startBtn.classList.add('bg-gray-800')
        stopCounter()
    }
}

// stop interval timer function
function stopCounter(){
    clearInterval(countDown)
}