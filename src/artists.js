
import { getArtists } from "./api.js";

// const createArtistImage = (artist) => {
//     const image = document.createElement("img");
//     image.src = artist.image_url;
//     return image;
// }

// const createArtistName = (artist) => {
//     const name = document.createElement("div");
//     name.classList.add("artist-list-item-title");
//     name.textContent = artist.name;
//     return name;
// }

// const createArtistElement = (artist) => {
//     const element = document.createElement("a");
//     element.href = "#";
//     element.appendChild(createArtistImage(artist));
//     element.appendChild(createArtistName(artist));
//     return element;
// }

// const displayArtist = (artist, selector) => {
//     const element = createArtistElement(artist);
//     document.querySelector(selector).appendChild(element);
// }

const displayArtist = (artist, selector) => {
    const element = document.createElement("artist-cover");
    element.setAttribute("id", artist.id);
    element.setAttribute("name", artist.name);
    element.setAttribute("image-url", artist.image_url);
    document.querySelector(selector).appendChild(element);
}

const loadArtists = async () => {
    const artists = await getArtists();
    artists.forEach(artist => {
        displayArtist(artist, ".artist-list");
    });
}

export { loadArtists };