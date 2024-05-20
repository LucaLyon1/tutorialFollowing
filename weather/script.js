let search = document.getElementById('search-btn');
let input = document.getElementById('query');
let query = '';
let API_KEY = "4af1eb05dc0c76dc03ab0c8cac2e4064";

input.addEventListener('input', (e) => {
    query = e.target.value;
});

search.addEventListener('click', async (event) => {
    const ans = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`);
    const data = await ans.json();
    console.log(data);
})