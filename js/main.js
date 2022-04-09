let elMovieList = document.querySelector(".movie-list");
let elMovieListPost = document.querySelector(".movie-list-post");
let elMovieListComment = document.querySelector(".movie-list-comment");
//USER
function renderMovies(array, node) {
  node.innerHTML = null;
  let moviesFragment = document.createDocumentFragment();

  array.forEach((item) => {
    let newLi = document.createElement("li");
    let newTitle = document.createElement("p");
    let newBody = document.createElement("p");

    newLi.dataset.movieId = item.id;
    newLi.textContent = item.id;
    newTitle.textContent = `User: ${item.name}`;
    newBody.textContent = `Email: ${item.email}`;

    newLi.appendChild(newTitle);
    newLi.appendChild(newBody);

    moviesFragment.appendChild(newLi);
  });

  node.appendChild(moviesFragment);
}
//POST
function renderMoviesPost(array, index) {
  index.innerHTML = null;
  let moviesFragment = document.createDocumentFragment();

  array.forEach((item) => {
    let newLi = document.createElement("li");
    let newTitle = document.createElement("p");
    let newBody = document.createElement("p");

    newLi.dataset.movieId = item.id;
    newLi.textContent = item.id;
    newTitle.textContent = `Info: ${item.title}`;

    newLi.appendChild(newTitle);
    newLi.appendChild(newBody);

    moviesFragment.appendChild(newLi);
  });

  index.appendChild(moviesFragment);
}

//USER
(async function (params) {
  let responce = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await responce.json();
  renderMovies(data, elMovieList);
})();
//POST
(async function (params) {
  let responce = await fetch(
    "https://jsonplaceholder.typicode.com/user/1/posts"
  );
  let data = await responce.json();
  renderMoviesPost(data, elMovieListPost);
});

elMovieList.addEventListener("click", function (evt) {
  let foundUser = evt.target.dataset.movieId;

  if (foundUser) {
    (async function () {
      let responce = await fetch(
        `https://jsonplaceholder.typicode.com/users/${foundUser}/posts`
      );
      let data = await responce.json();
      console.log(data);
      renderMoviesPost(data, elMovieListPost);
    })();
  }
});
// COMMENTS
// function renderMoviesComment(array, node) {
//   // node.innerHTML = null;
//   let moviesFragment = document.createDocumentFragment();

//   array.forEach((item) => {
//     let newLi = document.createElement("li");
//     let newTitle = document.createElement("p");
//     let newBody = document.createElement("p");

//     newLi.dataset.movieId = item.id;
//     newLi.textContent = item.id;
//     newLi.dataset.userId = item.title;
//     newTitle.textContent = item.title;
//     newLi.dataset.postId = item.email;
//     newBody.textContent = item.email;

//     newLi.appendChild(newTitle);
//     newLi.appendChild(newBody);

//     moviesFragment.appendChild(newLi);
//   });

//   node.appendChild(moviesFragment);
// }
//  function (params) {
//   let responce = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1/comments"
//   );
//   let data = await responce.json();
//   renderMoviesComment(data, elMovieListComment);
// })();
// elMovieListPost.addEventListener("click", function (evt) {
//   let foundUser = evt.target.dataset.userId;

//   if (foundUser) {
//     (async function () {
//       let responce = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${foundUser}/posts`
//       );
//       let data = await responce.json();
//       console.log(data);
//       renderMoviesComment(data, elMovieListComment);
//     })();
//   }
// });
