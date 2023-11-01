const heading = document.getElementById('title')


heading.textContent = 'Fundamentals of Js'

const header = document.querySelector('#title')
header.style.background = "#00f"
header.style.textTransform = "uppercase"
document.querySelector('p').style.color = '#4dd'

const list1 = document.querySelector('li')
const list2 = document.querySelector('ul :nth-child(2)')
const list = document.querySelectorAll('li')
// const list3 = document.querySelector('ul :nth-child(3)')
// const list4 = document.querySelector('ul :nth-child(4)')
// const list5 = document.querySelector('ul :nth-child(5)')


list1.innerText = 'pepsi'
list2.innerText = 'coke'
// list3.innerText = 'sprite'
// list4.innerText = 'fanta'
// list5.innerText = '7up'
 
list[2].textContent = 'sprite'
list[3].textContent = 'fanta'
list[4].textContent = '7up'


// const para = document.querySelector('p')
const para = document.querySelectorAll('p')

para[0].innerText = '<strong>Mohammed Ali</strong> said <q>suffer now and live the rest of your life a champion</q>' 
para[1].textContent = '<strong>Paul Ali</strong> said <q>suffer now and live the rest of your life a champion</q>' 
para[2].innerHTML = '<strong>Seyi Law</strong> said <q>suffer now and live the rest of your life a champion</q>' 

document.getElementsByClassName('para')[0].style.fontSize = '2rem'
document.getElementsByClassName('para')[2].style.border = '2rem double blue'
document.querySelector('.para').style.border = '30px dashed green'
document.getElementsByTagName('p')[0].innerHTML = 'alcohol'