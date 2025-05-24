const filterItems = document.querySelectorAll('.portfolio-filters li');

  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove 'active' class from all
      filterItems.forEach(i => i.classList.remove('active'));
      
      // Add 'active' class to clicked item
      this.classList.add('active');
    });
  })
