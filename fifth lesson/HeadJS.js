// const url = 'https://jsonplaceholder.typicode.com/users'
//
//
// let user = {
//     name:'Dastan',
//     age: 25,
//     position:'front-end'
// }
// fetch(url,{
//     method:'POST',
//     headers:{
//     'Content-Type':'application/json'
//     },
//     body: JSON.stringify(user)
// })
//     .then(response =>response.json())
//     .then(data=>console.log(data))
// fetch(url)
//     .then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{
//             throw Error('error ')
//             // console.log('error')
//         }
//     })
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))
const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
//     .then(response =>response.json())
//     .then(data =>console.log(data))
let post ={
    title:'new',
    section:'sport'
}
fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
})
    // .then(response =>response.json())
    // .then(data =>console.log(data))
fetch(url)
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            throw Error('error')
        }
    })
    .then(data=>console.log(data))
    .catch(error => console.log(error))