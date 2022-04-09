// console.log('start')
// console.log('start2')
// console.log('start3')
//
// function start() {
//     console.log('start1')
// }
// function start2() {
//     console.log('start2')
//
// }
// function start3() {
//     console.log('start3')
// }
// start()
// start3()
// start2()

// function start() {
//     console.log('start1')
// }
// function start2() {
//     console.log('start2')
// }
// function after2sec() {
//     console.log('i ma asynk function after 2 sec')
// }
// function after5sec() {
//     console.log('i ma asynk function after 5 sec')
// }
// setTimeout(after5sec,5000)
// setTimeout(after2sec,2000)
// setTimeout(function (){
//     console.log('i am asynk function');
// },2000 {


// function end() {
    // console.log('the end')
// }
// start()
// start2()
// end()
const click = document.getElementById('btn')
const second = document.getElementById('bt2')
const third = document.getElementById('bt3')

function testing(){
    setTimeout(function () {
        console.log('after 2 sec');
    },2000)
    console.log('...')
}function testing2(){
    setTimeout(function () {
        console.log('after 3 sec');
    },3000)
    console.log('...')
}function testing3(){
    setTimeout(function () {
        console.log('after 4 sec');
    },4000)
    console.log('...')
}
click.addEventListener('click',testing)
second.addEventListener('click',testing2)
third.addEventListener('click',testing3)