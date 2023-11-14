// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


/*

projectImages = document.getElementById("project-images");
topImage = document.getElementById("top-image");
bottomImage = document.getElementById("bottom-image");

projectImages.addEventListener('mouseenter', function () {
    topImage.style.transformOrigin = 'left bottom'; // Set the origin to the bottom left corner
    topImage.style.transform = 'rotate(-10deg)';

    bottomImage.style.transformOrigin = 'left bottom'; // Set the origin to the bottom left corner
    bottomImage.style.transform = 'rotate(10deg)';
});

projectImages.addEventListener('mouseleave', function () {
    topImage.style.transform = 'rotate(0deg)'; // Reset to original position
    bottomImage.style.transform = 'rotate(0deg)'; // Reset to original position
});

*/

projectImages = document.getElementById("project-images"); 

projectImages.addEventListener('mouseenter', function (event) {
    event.target.classList.toggle('hovered');
});