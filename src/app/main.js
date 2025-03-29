import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const showButton = document.querySelector(".offices__button");
const mapContainer = document.querySelector(".offices__map");

showButton.addEventListener("click", () => {
  showButton.classList.toggle("turn-over");
  const locationList = document.querySelector(".locations");
  const officesList = document.querySelector(".offices__list");
  if (showButton.classList.contains("turn-over")) {
    locationList.style.display = window.innerWidth >= 767 ? "flex" : "grid";
    mapContainer.style.opacity = "0.3";
    officesList.style.opacity = "0.1";
  } else {
    locationList.style.display = "none";
    mapContainer.style.opacity = "1";
    officesList.style.opacity = "1";
  }
});

document
  .querySelectorAll(".business-direction__subtitle")
  .forEach((subtitle) => {
    subtitle.addEventListener("mouseenter", function () {
      const parentContainer = this.closest(".business-direction__content");
      const text = parentContainer.querySelector(
        ".business-direction__description"
      );
      text.style.display = "block";
      parentContainer.style.height = "100%";
      parentContainer.style.paddingTop = "28px";
    });

    subtitle.addEventListener("mouseleave", function () {
      const parentContainer = this.closest(".business-direction__content");
      const text = parentContainer.querySelector(
        ".business-direction__description"
      );
      text.style.display = "none";
      parentContainer.style.height = "auto";
      parentContainer.style.paddingTop = "0";
    });
  });

document.querySelectorAll(".locations__button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("turn-over");
    const text = this.closest(".locations__item--bold");
    const parentContainer = this.closest(".locations__list");
    const locationList = parentContainer.querySelectorAll(".locations__item");
    if (this.classList.contains("turn-over")) {
      text.style.color = "#a30c33";
      locationList.forEach((item) => (item.style.display = "flex"));
    } else {
      text.style.color = "#444444";
      locationList.forEach((item) => (item.style.display = "none"));
      text.style.display = "flex";
    }
  });
});

document.querySelectorAll(".business-direction__button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("turn-over");
    const parentContainer = this.closest(".business-direction__content");
    const text = parentContainer.querySelector(
      ".business-direction__description"
    );
    if (this.classList.contains("turn-over")) {
      text.style.display = "block";
      parentContainer.style.paddingTop = "20px";
      parentContainer.style.minHeight = "240px";
    } else {
      text.style.display = "none";
      parentContainer.style.paddingTop = "0";
      parentContainer.style.minHeight = "60px";
    }
  });
});

document.querySelectorAll(".offices__item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".offices__item").forEach((i) => {
      i.classList.remove("offices__item--selected");
    });
    this.classList.add("offices__item--selected");
    const mapName = this.getAttribute("data-map");
    const mapImage = {
      all: "map-all.png",
      moscow: "map-moscow.png",
      center: "map-center.png",
      northwest: "map-northwest.png",
      south: "map-south.png",
      volga: "map-volga.png",
      ural: "map-ural.png",
      siberia: "map-siberia.png",
      east: "map-far-east.png",
    };
    mapContainer.style.backgroundImage = `url('./src/image/${mapImage[mapName]}')`;
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".buttons__item--next",
    prevEl: ".buttons__item--prev",
  },
  modules: [Navigation, Pagination],
});

let observer = new IntersectionObserver(appearance, { threshold: [0.6] });

const animationClasses = [
  ".introduction",
  ".achievements",
  ".offices",
  ".mission",
  ".business-directions",
  ".benefits",
  ".swiper",
];

animationClasses.forEach((itemClass) => {
  const block = document.querySelector(itemClass);
  observer.observe(block);
});
function appearance(blocks) {
  blocks.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
      item.target.style.transform = "translateY(0)";
    }
  });
}
