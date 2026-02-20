import { getArtistSongs } from "./api.js";

const createSongTitle = (song) => {
    const title = document.createElement("div");
    title.classList.add("list-item-title");
    title.textContent = song.title;
    return title;
}

const createSongButton = (className, iconName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("icon-button", className);

    const icon = document.createElement("span");
    icon.classList.add("material-icons");
    icon.textContent = iconName;
    button.appendChild(icon);

    return button;
}

const createAddButton = () => {
    return createSongButton("favorite-button", "playlist_add");
}

const createPlayButton = () => {
    return createSongButton("play-button", "play_arrow");
}

const createSongActions = () => {
    const actions = document.createElement("div");
    actions.classList.add("list-item-actions");
    actions.appendChild(createAddButton());
    actions.appendChild(createPlayButton());
    return actions;
}

const createSongElement = (song) => {
    const element = document.createElement("a");
    element.href = "#";
    element.appendChild(createSongTitle(song));
    element.appendChild(createSongActions());
    return element;
}

const displaySong = (song, selector) => {
    const element = createSongElement(song);
    document.querySelector(selector).appendChild(element);
}

const loadArtistSongs = async (id) => {
    const songs = await getArtistSongs(id);
    document.querySelector("#list-section h4").textContent += songs[0].artist.name;
    songs.forEach(song => {
        displaySong(song, ".list");
    })
}

export { loadArtistSongs };