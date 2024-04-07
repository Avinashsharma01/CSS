let btn = document.querySelector('#btn')
let hire = document.querySelector('#hire')


let temp = 0
btn.addEventListener('click', function () {
  if (temp == 0) {
    hire.innerHTML = 'HIRED'
    btn.innerHTML = 'REMOVE HIM'
    btn.style.backgroundColor = 'red'
    temp = 1
  }
  else {
    btn.innerHTML = 'ADD HIM'
    hire.innerHTML = 'HIRE'
    btn.style.backgroundColor = '#22781f'
    temp = 0
  }
})

// Start the code of heart frome here

let card = document.querySelector('.card')
let dil = document.querySelector('i')

card.addEventListener('dblclick', function () {
  dil.style.color = 'red'
  dil.style.transform = 'scale(1)'
  dil.style.opacity = 1
  setTimeout(function () {
    dil.style.transform = 'scale(0)'
    dil.style.opacity = 0
  }, 1000)
})


// code of cursor start from here 

// let main=document.querySelector('#page1')
// let cursor=document.querySelector('.cursor')

// main.addEventListener('mousemove', function(move){
//   cursor.style.left=move.x+"px"
//   cursor.style.top=move.y+"px"
// })