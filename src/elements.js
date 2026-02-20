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

customElements.define('artist-cover', ArtistCover);