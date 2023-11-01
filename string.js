//string methods
//1. uppercase

let str = document.querySelector('h1').textContent
// alert(str)

//2. uppercase
const list = document.querySelectorAll('ul li')
list[0].textContent += str.toUpperCase()

//3. lowercase
list[1].textContent += str.toLowerCase()

//4. length
list[2].innerHTML += `The number of characters is ${str.length}`

//5. first member in str
list[3].innerHTML += str[0]

//6. last member in str
list[4].innerHTML += str[str.length-1]

//7. indexof
list[5].innerText += `Dog is located at index ${str.indexOf('dog')}`
list[6].innerText += `Goat is located at index ${str.indexOf('Goat')}`

//8. lastIndexof
list[7].innerText += `The last index of 'the' is ${str.lastIndexOf('the')}`

//9. replace
list[8].innerHTML += `replace 'the' with 'that' <strong>${str.replace('the', 'that')}</strong>`
//10. replaceAll
list[10].innerHTML += `find character at '6' <strong>${str.charAt(6)}</strong>`

//11. slice
list[11].innerHTML += `cut out from 5 - 12 <strong>${str.slice(5, 12)}</strong>`

//10. split
list[12].innerHTML += `remove all spaces: <strong>${str.split(" ")}</strong>`

