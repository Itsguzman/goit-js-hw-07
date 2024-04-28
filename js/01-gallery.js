import { galleryItems } from "./gallery-items.js";
// Change code below this line

let ulGallery = document.querySelector(".gallery");

galleryItems.forEach((itemImage) => {
  let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="javascript:void(0)">
            <img
                class="gallery__image"
                src="${itemImage.preview}"
                data-source="${itemImage.original}"
                alt="${itemImage.description}"
                />
        </a>
    </li>
    `;
  ulGallery.innerHTML += li;
});

ulGallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let bgImage = e.target.getAttribute("data-source");
    let instance = basicLightbox.create(
      `<img src="${bgImage}" width="800" height="600">`
    );
    instance.show();

    window.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
});
