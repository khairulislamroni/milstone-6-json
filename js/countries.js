const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
}
const display = countries => {
    const parentDiv = document.getElementById('container');
    countries.forEach(country => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('country');
    newdiv.innerHTML = `
    <h1>Name: ${country.name.common}</h1>
    <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
    <button onclick="buttonHandler('${country.cca2}')">Details</button>
    `;
    parentDiv.appendChild(newdiv)
    });
    
};
const buttonHandler = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showCountry(data[0]))

};
const showCountry = country => {
    
    const section = document.getElementById('show');
    section.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
}
loadcountries();