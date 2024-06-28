(() => {
  const buttonsContainer = document.querySelector(".buttons-js");
  const items = document.querySelectorAll(".gallery-js");
  let selectedFilter = null;

  buttonsContainer.addEventListener("click", handleFilterClick);

  function handleFilterClick(e) {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    const currentActiveButton = document.querySelector(".active-button-js");
    if (currentActiveButton) {
      currentActiveButton.classList.remove("active-button-js");
    }

    const nextActiveButton = e.target;
    nextActiveButton.classList.add("active-button-js");

    selectedFilter = nextActiveButton.dataset.value;

    items.forEach((item) => {
      if (selectedFilter === "all" || item.dataset.tag === selectedFilter) {
        item.classList.remove("hidden-item");
      } else {
        item.classList.add("hidden-item");
      }
    });
  }
})();
