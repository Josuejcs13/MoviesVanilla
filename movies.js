import { fetchMovies } from "./fetchmovies"

const containerMovies = document.querySelector("#container-movies")
const imageBase = "https://image.tmdb.org/t/p/w500/"

const getMovies = async () => {
  const movies = await fetchMovies()

  movies.forEach((movie) => {
    printMovies(movie)
  })
}

const printMovies = (movie) => {
  const divCard = document.createElement("div")
  const imageMovie = document.createElement("img")
  const titleMovie = document.createElement("h3")
   
  
  titleMovie.innerText = movie.title
  imageMovie.src = `${imageBase}${movie.poster_path}`

  divCard.appendChild(imageMovie)
  divCard.appendChild(titleMovie)
  containerMovies.append(divCard)
}
getMovies()
