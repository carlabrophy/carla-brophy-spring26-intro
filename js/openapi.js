//FOOTER
const footer = document.createElement("footer");
//Inserting the footer before the script tag
document.body.insertBefore(footer, document.body.lastElementChild);

//Append the copyright text directly to your variable
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Carla Brophy ${thisYear}`;
footer.appendChild(copyright);

//***
//OPEN API JS */
const catImageBtn = document.querySelector("#getImage");
const breedBtn = document.querySelector("#getBreed");

const catHolder = document.querySelector("#catHolder");
const breedHolder = document.querySelector("#breedHolder");

const catLoading = document.querySelector("#catLoading");
const breedLoading = document.querySelector("#breedLoading");


//Cat Image API Fetch
const getCatImage = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
    );
    return response.data[0].url;
  } catch (error) {
    catHolder.innerHTML = "<p>Sorry, we couldn't load a cat image.</p>";
    return null;
  }
};


//Cat Breed API Fetch
const getCatBreed = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");

    const breeds = response.data;
    return breeds[Math.floor(Math.random() * breeds.length)];
  } catch (error) {
    breedHolder.innerHTML = "<p>Sorry, we couldn't load breed information.</p>";
    return null;
  }
};


//Cat Image Button Events
catImageBtn.addEventListener("click", async () => {
  catLoading.textContent = "Loading cat image...";

  const catPic = await getCatImage();

  catLoading.textContent = "";

  if (!catPic) return;

  breedHolder.innerHTML = "";

  catHolder.innerHTML = `
    <img src="${catPic}" alt="Random cat" />
  `;
  breedHolder.style.backgroundColor = "";
});



//Cat Breed Button Events
breedBtn.addEventListener("click", async () => {
  breedLoading.textContent = "Loading breed info...";

  const breed = await getCatBreed();

  breedLoading.textContent = "";

  if (!breed) return;

  catHolder.innerHTML = "";

  breedHolder.style.backgroundColor = "#909a9d8d";
  breedHolder.innerHTML = `
    <h3>${breed.name}</h3>
    <p><strong>Origin:</strong> ${breed.origin}</p>
    <p><strong>Temperament:</strong> ${breed.temperament}</p>
    <p>${breed.description}</p>
  `;
});
