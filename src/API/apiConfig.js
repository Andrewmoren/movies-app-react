const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "3f4db891c05cdb8385474840c68fbbfc",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500//${imgPath}`,
};

export default apiConfig;
