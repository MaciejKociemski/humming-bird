document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".product__cards");

  cards.forEach(card => {
    card.addEventListener("click", function(e) {
      const isActive = card.classList.contains("active");

      // usuń aktywność ze wszystkich kart
      document.querySelectorAll(".product__cards.active").forEach(c => c.classList.remove("active"));

      // jeśli ta karta nie była aktywna, włącz ją
      if (!isActive) {
        card.classList.add("active");
      }

      e.stopPropagation();
    });
  });

  // kliknięcie poza kartą — ukrywa overlay
  document.addEventListener("click", function() {
    document.querySelectorAll(".product__cards.active").forEach(c => c.classList.remove("active"));
  });
});
