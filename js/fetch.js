// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))

// function load(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// const stringyfing = fetch('https://jsonplaceholder.typicode.com/todos/1')
// const convert = parse(stringyfing)

// function load(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => load2(data))
// }
// function load2(data){
//     console.log(data)
// }

function loaduser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadusers2(data))
}
function loadusers2(data){
    const ul = document.getElementById('get-data');
    for(const user of data){
        
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
        console.log(li);
        
    };
   
}