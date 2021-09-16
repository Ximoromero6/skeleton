(function () {
    const URL = "https://jsonplaceholder.typicode.com/posts",
        grid = document.querySelector(".grid"),
        card__template = document.getElementById("card__template"),
        API_KEY = "563492ad6f9170000100000120c4713381704856b73e53642541346a",
        URL__IMAGES = "https://api.pexels.com/v1/search?query=rome";

    for (let i = 0; i < 10; i++) {
        grid.append(card__template.content.cloneNode(true));
    }

    setTimeout(() => {
        fetch(URL).then(response => response.json()).then(posts => {
            grid.innerHTML = "";
            posts.forEach(post => {
                const div = card__template.content.cloneNode(true);
                div.querySelector("[data-title]").textContent = post.title;
                div.querySelector("[data-body]").textContent = post.body;



                grid.append(div);
            });
        });
    }, 3000);

    /* fetch(URL__IMAGES, {
        headers: {
            "Authorization": API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.photos.forEach(photo => {
            div.querySelector(".header__image").src = photo.src.landscape;
        });
    }); */

})();