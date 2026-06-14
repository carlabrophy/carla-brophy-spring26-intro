const catImageBtn = document.querySelector("#getImage");
const breedBtn = document.querySelector("#getBreed");

const getCatImage = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
    );

    return response.data[0].url;
  } catch (error) {
    console.error(error);

    document.querySelector("#catHolder").innerHTML =
      "<p>Sorry, we couldn't load a cat image. Please try again.</p>";

    return null;
  }
};

const getCatBreed = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");

    const breeds = response.data;

    return breeds[Math.floor(Math.random() * breeds.length)];
  } catch (error) {
    console.error(error);

    document.querySelector("#breedHolder").innerHTML =
      "<p>Sorry, we couldn't load breed information. Please try again.</p>";

    return null;
  }
};

catImageBtn.addEventListener("click", async () => {
  const catPic = await getCatImage();

  if (!catPic) return;

  const catDiv = document.querySelector("#catHolder");

  catDiv.innerHTML = `
    <img src="${catPic}" alt="Random Cat">
  `;
});

breedBtn.addEventListener("click", async () => {
  const breed = await getCatBreed();

  if (!breed) return;

  const breedDiv = document.querySelector("#breedHolder");

  breedDiv.style.backgroundColor = "#909a9d83";
  breedDiv.innerHTML = `
    <h3>${breed.name}</h3>
    <p><strong>Origin:</strong> ${breed.origin}</p>
    <p><strong>Temperament:</strong> ${breed.temperament}</p>
    <p>${breed.description}</p>
  `;
});
