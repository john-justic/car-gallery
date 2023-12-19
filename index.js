const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Get description element inside the clicked card
      const description = card.querySelector('.card-description');

      // Toggle class to show/hide description
      description.classList.toggle('show-description');
    });
  });