
const list =document.getElementById('list')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((data)=>{
    data.json().then(response=>{
        response.forEach(element=>{
            const user = document.createElement('div')

            const hr = document.createElement('hr')

           const name = document.createElement('p')
            name.innerText = ` Name: ${element.name} `

            const lastName = document.createElement('p')
            lastName.innerText =`Username: ${ element.username} `

            user.append(name, lastName, hr)

            list.append(user)

        })
    })
})

// let xhr = new XMLHttpRequest();
//
// let params = 'name=' + encodeURIComponent(name) +
//   '&surname=' + encodeURIComponent(username);
//
// xhr.open("GET", '/submit?' + params, true);
//
// xhr.onreadystatechange =[...]
//
// xhr.send();
const urls = 'https://jsonplaceholder.typicode.com/users';
 const nameInput = document.getElementById('name12');
 const surnameInput = document.getElementById(' surname12');
const postBtn = document.getElementById('postBtn');

function postUser() {
    const user = {
        name:nameInput.value,
        surname:surnameInput.value
    }
    fetch(urls,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
        .then(response =>response)
        .then(data =>console.log(data))
}

postBtn.addEventListener('click',postUser);