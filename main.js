 // Function to reload the iframe with autoplay and start the video
 function reloadIframe() {
    // Get a reference to the iframe
    var iframe = document.getElementById('myIframe');
    
    // Set the source of the iframe with autoplay and start the video
    iframe.src = "https://www.youtube.com/embed/TyANlYYqKbI?autoplay=1&controls=0";
}

// Call the function on page load
window.onload = function() {
    video.play();
};