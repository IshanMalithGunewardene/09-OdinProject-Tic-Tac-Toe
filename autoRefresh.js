//Add event listener to the entire document
document.addEventListener('click', function() {
    location.reload();
    // Refresh the page every 10 seconds
    setInterval(function() {
    location.reload();
    }, 1000);
  
  });
  
  