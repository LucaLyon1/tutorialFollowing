let container = document.getElementById("postContainer");
let loader = document.getElementById("loader");

const limit = 5;
let page = 1;

async function addPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const posts = await res.json();
    posts.forEach((post) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("post");
        newDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p class="paragraph">${post.body}</p>
        `;
        document.body.appendChild(newDiv);
    });
}

function showLoader() {
    loader.classList.add('show');
    setTimeout(() => {
        addPost();
        loader.classList.remove('show');
        page++;
    }, 1000);
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (Math.round(scrollHeight - scrollTop) === clientHeight) {
        showLoader();
    }
});

addPost();


