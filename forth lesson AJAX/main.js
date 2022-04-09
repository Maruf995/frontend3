// console.log('something')
// const requestURL = 'https://jsonplaceholder.typicode.com/users';
//
// const xhr = new XMLHttpRequest();
let data = {
    name:'sultan',
    age: 17,
    position: 'Full=Stack'
}
// XHR.open('GET',requestURL);
// XHR.responseType = 'json'
// XHR.onload=()=>{
//     console.log(XHR.status)
//     // if (XHR.status>=400){
//     //     console.error('error', XHR.status)
//     // }else {
//     //     console.log(JSON.parse(XHR.response))
//     // }
//     // console.log( JSON.parse( XHR.response))
// }
// XHR.onerror=()=>{
//     console.log(XHR.response)
// }
// XHR.send();

xhr.open('POST',requestURL)
xhr.setRequestHeader('Content-Type','application/json');
xhr.open=()=>{
    console.log(xhr.response)
}
const data = JSON.stringify(user)
xhr.send( JSON.stringify(data));
// const requestURL = 'https://jsonplaceholder.typicode.com/users';
// const getUsersBtn = document.getElementById('button');
// const usersList = document.getElementById('users-list')
//
//
// function getUsers(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',url)
//
//     xhr.responseType = 'json';
//
//     xhr.onload= ()=>{
//         if(xhr.status>=400){
//             console.error('BIg mistake BRO',xhr.status)
//         }else{
//             const users = [...xhr.response]
//             console.log(users);
//             users.forEach(user => {
//                 console.log(`name:${user.name} email:${user.email}`)
//                 usersList.innerHTML+= `<li>
//                     <p>name:${user.name}</p>
//                     <p>email:${user.email}</p> </li>`
//             })
//
//         }
//
//     }
//     xhr.send()
// }
// getUsersBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     getUsers(requestURL)
// })










