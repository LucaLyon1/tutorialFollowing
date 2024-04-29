let container = document.getElementById("postContainer");

function addPost() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("post");

    newDiv.innerHTML = `
        <h2>Lorem Ipsum</h2>
        <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illum totam eius iusto obcaecati error dolore maiores, quasi aliquid laboriosam distinctio laudantium. Error, numquam ullam dolor odio explicabo voluptatem. Alias.</p>
    `;

    document.body.appendChild(newDiv);
}

for (let i = 0; i < 10; i++) {
    addPost();
}

