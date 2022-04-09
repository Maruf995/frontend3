const url = 'https://jsonplaceholder.typicode.com/posts/';
const btn_get = document.getElementById(' get_btn');
const userName = document.getElementById('input_id');

const post = {
    userID:1,
    title:'test',
    body:'test body'
}
function putFunc(e) {
    e.preventDefault();

    const id = userName.value

    fetch(`${url}${id}`,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response =>response.json())
        .then(data =>console.log(data))
}
btn_get.addEventListener('click',putFunc);
// btn_get.addEventListener('click',()=>{
//     const userIdValue = userName.value;
//     console.log(`${url}?name=${userIdValue}`);
//
//     fetch(`${url}?name=${userIdValue}`)
//         .then(response=>response.json())
//         .then(data=>console.log(data));
// })