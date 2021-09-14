(function () {
    const URL = "https://jsonplaceholder.typicode.com/posts",
        grid = document.querySelector(".grid"),
        card__template = document.getElementById("card__template");

    for (let i = 0; i < 10; i++) {
        grid.append(card__template.content.cloneNode(true));
    }

    fetch(URL).then(response => response.json()).then(posts => {
        grid.innerHTML = "";
        posts.forEach(post => {
            const div = card__template.content.cloneNode(true);
            div.querySelector("[data-title]").textContent = post.title;
            div.querySelector("[data-body]").textContent = post.body;
            grid.append(div);
        });
    });
})();