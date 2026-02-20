class ArtistCover extends HTMLElement {
    static observedAttributes = ["id", "name", "image-url"];
    
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="#">
          <img src="${this.getAttribute("image-url")}" />
          <div class="artist-list-item-title">${this.getAttribute("name")}</div>
        </a>
        `
    }
}

class SongItem extends HTMLElement {
    static observedAttributes = ["id, name"];

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
        <a href="#">
          <div class="list-item-title">${this.getAttribute("name")}</div>
          <div class="list-item-actions">
            <button type="button" class="icon-button favorite-button ">
              <span class="material-icons">playlist_add</span>
            </button>
            <button type="button" class="icon-button play-button">
              <span class="material-icons">play_arrow</span>
            </button>
          </div>
        </a>
        `
    }
}

customElements.define('artist-cover', ArtistCover);
customElements.define('song-item', SongItem);