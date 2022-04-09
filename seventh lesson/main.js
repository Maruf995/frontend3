//
//
// //
// // const number = 10;
// //
// // const promise = new Promise((resolve , reject) =>{
// //     setTimeout(()=>{
// //         resolve('good bro')
// //     },1000)
// //
// //     // if (number<=10){
// //     //     resolve('you got it ')
// //     // }else{
// //     //     reject('bro it is a mistake')
// //     // }
// //     //
// //     // resolve('Marvelous');
// //
// //
// // })
// // const onFullFillied = (text)=>{
// //     console.log(text);
// // }
// // const onRejected = (text)=>{
// //     console.log(text)
// // }
// //
// //
// // const handleFinally = ()=>{
// //     console.log('i will always work ')
// // }
// //
// //
// // promise.finally(handleFinally)
// // promise.then(onFullFillied);
// // promise.catch(onRejected)
// const myfetch = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr  = new XMLHttpRequest()
//
//         xhr.open('GET',url, true)
//
//         xhr.onload = () => {
//             if ( xhr.status === 200){
//                 resolve(xhr.response)
//             }else{
//                 reject('there is a mistake when taking response')
//             }
//         }
//         xhr.onerror=()=>{
//             reject('there is a mistake when taking response ')
//         }
//         xhr.send()
//     })
// }
// myfetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => JSON.parse(response))
//     .then(data => console.log(data))
//     .catch(e =>console.log(e))

const number = document.getElementById('number_input')
const BTN = document.getElementById('BTN')

// function FuncClick(){
//     return new Promise((resolve,reject)=>{
//         if (number.value == 17){
//             resolve('you got it ')
//         }else{
//             reject('you did mistake bro')
//         }
//     })
// }
// const onresolve = (text)=>{
//     console.log(text)
// }
// const onreject = (text)=>{
//     console.log(text)
// }
//
// BTN.addEventListener('click', function () {
//     FuncClick()
//         .then(onresolve)
//         .catch(onreject)
// })
const js = 'JavaScript'


function comparison() {
    return new Promise((resolve,reject)=>{
        if(number.value == js.length){
            resolve('you did it')
        }else{
            reject('you did mistake bro')
        }
    })
}
const onresolve = (text)=>{
    console.log(text)
}
const onreject = (text)=>{
    console.log(text)
}
BTN.addEventListener('click',function () {
    comparison()
        .then(onresolve)
        .catch(onreject)
})