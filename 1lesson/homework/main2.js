const input = document.getElementById('name');
const btn = document.getElementById('btn');


const numbers = document.getElementById('number')
const regex = /\D/gi;
const tel = numbers.textContent.match(regex).replace('')





numbers.setAttribute('href',`tel:+${tel}`)
btn.addEventListener('click',addNumberTeg)





