 // Placeholder for swipe/click logic
    document.getElementById('ribbon').addEventListener('click', function() {
      alert('Door animation will appear next!'); // Replace with door animation later
    });

    // Swipe support for mobile
    let startY = 0;
    document.getElementById('ribbon').addEventListener('touchstart', function(e) {
      startY = e.touches[0].clientY;
    });
    document.getElementById('ribbon').addEventListener('touchmove', function(e) {
      let currentY = e.touches[0].clientY;
      let diff = startY - currentY;
      if (diff > 50) {
        alert('Door animation will appear next!'); // Replace with animation trigger later
      }
    });