const API_URL = "http://localhost:3000/movies";

let currentpage = 1;
let perpage = 5;
let totalpages = 1;

async function fetchmovies(page = 1) {
  //   let res = await fetch(`${API_URL}`);
  //   let data = await res.json();
  //   displayMovies(data);

  let res = await fetch(`${API_URL}?_page=${page}&_per_page=${perpage}`);
  let movies = await res.json();

  totalpages = movies.pages;

  displayMovies(movies.data);
  updatepaginationbutton();
}

function displayMovies(movies) {
  let movielist = document.getElementById("movie-list");
  let moviecount = document.getElementById("counter");
  movielist.innerHTML = "";

  moviecount.textContent = `${movies.length}`;

  movies.forEach((movie) => {
    let moviecard = document.createElement("div");
    moviecard.classList.add("movie-card");

    moviecard.innerHTML = `
      <div class="movie-image-container">
         <img src = "${movie.poster}" alt = "${movie.title}"
      
      </div>
      <div class = "movie-info">
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Genre: ${movie.genre} </p>
      </div>
      <button class="btn" onClick="deletemovie(${movie.id})">Delete</button>
    `;

    movielist.appendChild(moviecard);
  });
}

// initial fetch
fetchmovies();

// pagination

document.getElementById("movie-pages").innerHTML = `
<div class = "pagination">
<button id= "prevbtn" onClick="prevPage()">previous</button>
<span id="pageindicator">Pages ${totalpages}</span>
<button id="nextbtn" onClick="nextPage()">next</button>
`;

function nextPage() {
  if (currentpage < totalpages) {
    currentpage++;
    fetchmovies(currentpage);
  }
}

function prevPage() {
  if (currentpage > 1) {
    currentpage--;
    fetchmovies(currentpage);
  }
}

function updatepaginationbutton() {
  document.getElementById("prevbtn").disabled = currentpage === 1;
  document.getElementById("nextbtn").disabled = currentpage === totalpages;
  document.getElementById(
    "pageindicator"
  ).textContent = `Page ${currentpage} of ${totalpages} `;
}

// delete movie

async function deletemovie(id) {
  const data = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

// sort movies
async function sortmovies() {
  let sortby = document.getElementById("sort").value;

  let res = await fetch(`${API_URL}?_page=${page}&_per_page=${perpage}`);

  let data = await res.json();

  if (sortby === "asc") {
    data.sort((a, b) => a.year - b.year);
  } else if (sortby === "desc") {
    data.sort((a, b) => b.year - a.year);
  }

  displayMovies(data);
}

// sort movies by genre
async function sortmoviesbygenre() {
  let sortby = document.getElementById("sortbygenre").value;

  let res = await fetch(API_URL);

  let data = await res.json();

  if (sortby === "asc") {
    data.sort((a, b) => a.genre.localeCompare(b.genre));
  } else if (sortby === "desc") {
    data.sort((a, b) => b.genre.localeCompare(a.genre));
  }

  displayMovies(data);
}

// search movies

async function searchMovies() {
  let searchvalue = document.getElementById("search").value.toLowerCase();

  let res = await fetch(API_URL);

  let moviesdata = await res.json();

  let filtermovies = moviesdata.filter((movie) => {
    return movie.title.toLowerCase().includes(searchvalue);
  });

  displayMovies(filtermovies);
}

// show modal

function showmodal() {
  document.getElementById("movie-model").style.display = "flex";
}

function closemodal() {
  document.getElementById("movie-model").style.display = "none";
}

// form submit

document
  .getElementById("movie-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    let newMovie = {
      title: document.getElementById("movie-title").value,
      year: document.getElementById("movie-year").value,
      genre: document.getElementById("movie-genre").value,
      poster: document.getElementById("movie-poster").value,
    };

    let res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    });

    console.log(res);
  });
