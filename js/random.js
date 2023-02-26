const loadusers = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayusers(data))
}
const displayusers = info => {
    const userDiv = document.getElementById('users');
    const div = document.createElement('div');
    div.classList.add('info');
    div.innerHTML = `
    <h2>Name: ${info.results[0].name.title + ' ' + info.results[0].name.first + ' ' + info.results[0].name.last}</h2>
    <img src="${info.results[0].picture.large}">
    `;
    userDiv.appendChild(div);

}
loadusers();