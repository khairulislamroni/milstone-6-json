function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => post2(data))
}
function post2(posts){
    const container = document.getElementById('container')
    for(const post of posts){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
    <h2>Identity: ${post.id}</h2>
    <h4>title: ${post.title}</h4>
    <p>description: ${post.body}</p>
    `;
    container.appendChild(postDiv);
    };
};
post();