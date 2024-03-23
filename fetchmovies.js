export const fetchMovies = async () => {
  const response = await fetch(url, options)

  const data = await response.json()

  console.log(data)
  
  return data.results
}

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRmYTVjZmFhZjNjM2I3MWRkZmM3MTQ5MzM2OWY2YiIsInN1YiI6IjY1ZmYyNDlhMTk3ZGU0MDE2MzE2Y2U1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcpbAmMVnc9NXD4P2cNU4avZ548FgB7Jlx4QRVUZPH4",
  },
}
