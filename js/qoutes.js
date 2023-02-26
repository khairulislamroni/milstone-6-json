const loadqoutes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => loadqoutes2(data))
}
const loadqoutes2 = qoute => {
    const blockQoute = document.getElementById('qoutes');
    blockQoute.innerText = qoute.quote;
}
loadqoutes();