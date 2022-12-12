const loader = document.querySelector(".loader");
const reviews = document.querySelector(".reviews");
const error = document.querySelector(".error");
const listOfReviews = document.querySelector(".reviews-list");

const createReview = (email, name, body) => {
    return `<div class="reviews-list__item">
            <strong>${email}</strong>
            <p>${body}</p>
        </div>`;
};

window.addEventListener("load", async () => {
    loader.style.display = "block";
    reviews.style.display = "none";
    error.style.display = "none";
    // await new Promise(r => setTimeout(r, 2000));
    await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => {

            const page = Math.floor(Math.random() * 20);
            const result = data.slice(page * 20, page * 20 + 5);
            result.forEach(({email, name, body}) => {
                listOfReviews.insertAdjacentHTML(
                    "afterbegin",
                    createReview(email, name, body)
                );
            });
            loader.style.display = "none";
            reviews.style.display = "block";
            error.style.display = "none";
        })
        .catch(() => {
            loader.style.display = "none";
            reviews.style.display = "none";
            error.style.display = "block";
        });
});