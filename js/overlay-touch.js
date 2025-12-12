document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".product__cards");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const isActive = card.classList.contains("active");

      document
        .querySelectorAll(".product__cards.active")
        .forEach((c) => c.classList.remove("active"));

      if (!isActive) {
        card.classList.add("active");
      }

      e.stopPropagation();
    });
  });

  document.addEventListener("click", function () {
    document
      .querySelectorAll(".product__cards.active")
      .forEach((c) => c.classList.remove("active"));
  });
});
