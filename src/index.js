console.log('It works !')

import './elements.js'

import { loadArtists } from "./artists.js";
import { loadArtistSongs } from "./songs.js";

loadArtists();
loadArtistSongs(1);