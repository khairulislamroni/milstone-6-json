function loadcomment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => loadcomment2(data))
}
function loadcomment2(comments){
    const declareTo = document.getElementById('container');
    for(const comment of comments){
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `
    <h3>Name: ${comment.name}</h3>
    <h4>Email: ${comment.email}</h4>
    <p>Id: ${comment.id}</p>
    `;
    declareTo.appendChild(div);
    }
    
};
loadcomment();