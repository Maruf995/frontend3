const requestURL ='https://jsonplaceholder.typicode.com/photos'
const usersList = document.getElementById('users-list')
const button1 = document.getElementById('btn1')
const xhr = new XMLHttpRequest();
function getInfo(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.responseType= 'json';
    xhr.onload = ()=>{
        if (xhr.status>=400){
            console.log('BigMistakeBro',xhr.status)
        }else {
            const users = [...xhr.response]
            console.log(users);
            users.forEach(user =>{
                console.log(`albumId:${user.albumId} title:${user.title} url:${user.url} thumbnailUrl:${user.thumbnailUrl}`)
                usersList.innerHTML+=`<li>
                <p>albumId:${user.albumId}</p>
                <p>title:${user.title}</p>
                <p>url:${user.user}</p>
                <p>thumbnaiUrl:${user.thumbnailUrl}</p> </li>`
            })
        }
    }
    xhr.send()
}

button1.addEventListener('click',(e)=>{
    e.preventDefault();
    getInfo(requestURL)
})
xhr.open('POST',requestURL)


xhr.send(JSON.stringify());