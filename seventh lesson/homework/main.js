// const myfetch = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//
//         xhr.open('GET',url)
//
//         xhr.onload = () => {
//             if (xhr.status === 200){
//                 resolve(xhr.response)
//             }else{
//                 reject('Bro there is a mistake')
//             }
//         }
//         xhr.onerror= ()=>{
//             reject('you did mistake Brother')
//         }
//         xhr.send()
//     })
// }
// myfetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => JSON.parse(response))
//     .then(data => console.log(data))
//     .catch(e => console.log(e))
//
//=====================================================================
// const InputValue = document.getElementById('integerSpace')
// const BTN = document.getElementById('BtnPush')
// const url = 'https://jsonplaceholder.typicode.com/posts/'
//
// BTN.addEventListener('click',()=>{
//     const InputValues = InputValue.value;
//     console.log(`${url}${InputValues}`);
//
//     fetch(`${url}${InputValues}`)
//         .then(response =>response.json())
//         .then(data=>console.log(data));
// })
//========================================================================
const url = 'https://jsonplaceholder.typicode.com/posts/2'
const BTN = document.getElementById('integerSpace')
const data1 = {
    title:'test',
    body:'test body'
}
function putFetch(e) {
    e.preventDefault();
    const id = BTN.value;
    fetch(`${url}${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data1)
    })
        .then(response=>response.json())
        .then(data =>console.log(data))
}
BTN.addEventListener('click',putFetch);













