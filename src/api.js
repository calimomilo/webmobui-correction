const fetchJson = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const getArtists = async () => {
    return await fetchJson('https://webmob-ui-22-spotlified.herokuapp.com/api/artists');
}

const getArtistSongs = async (id) => {
    return await fetchJson(`https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${id}/songs`);
}

export { getArtists, getArtistSongs };