function scrollLeftRow() {
    document.getElementById("movieRow").scrollBy( {
       left: -300,
       behavior: "smooth"
    });
}
function scrollRightRow() {
    document.getElementById("movieRow").scrollBy( {
       right: 300,
       behavior: "smooth" 
    });
}