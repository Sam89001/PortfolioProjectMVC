// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



var topImages = document.querySelectorAll('.left-side');
var rightTopImages = document.querySelectorAll('.right-side');

topImages.forEach(function (topImage) {

    topImage.addEventListener('mouseenter', function (event) {
        event.target.querySelector('img.img-fluid.image-styles.rotate-top').classList.toggle('hovered');
        event.target.nextElementSibling.querySelector('img.img-fluid.image-styles.rotate-bottom').classList.toggle('hovered');
    });

    topImage.addEventListener('mouseleave', function (event) {
        event.target.querySelector('img.img-fluid.image-styles.rotate-top').classList.toggle('hovered');
        event.target.nextElementSibling.querySelector('img.img-fluid.image-styles.rotate-bottom').classList.toggle('hovered');
    });

});

rightTopImages.forEach(function (rightTopImage) {
    rightTopImage.addEventListener('mouseenter', function (event) {
        event.currentTarget.querySelector('.img-fluid.image-styles.right-rotate-top').classList.toggle('hovered');
        event.currentTarget.nextElementSibling.querySelector('.img-fluid.image-styles.right-rotate-bottom').classList.toggle('hovered');
    });

    rightTopImage.addEventListener('mouseleave', function (event) {
        event.currentTarget.querySelector('.img-fluid.image-styles.right-rotate-top').classList.toggle('hovered');
        event.currentTarget.nextElementSibling.querySelector('.img-fluid.image-styles.right-rotate-bottom').classList.toggle('hovered');
    });
});


function updateNumberOfProjects() {
    var projectAmount = document.querySelectorAll('[class*="project-block-formatting"]');
    var numberOfProjects = projectAmount.length 

    document.getElementById('numberOfProjects').innerText = numberOfProjects;
}

document.addEventListener('DOMContentLoaded', function () {
    updateNumberOfProjects();
});

function loadPopUp() {
    var popUpBox = document.getElementById("popupBox")
    var blur = document.getElementById("blur")

    popUpBox.classList.add('active')
    blur.classList.add('active')

    blur.addEventListener('click', function () {
        blur.classList.remove('active');
    });
}

function removePopUp() {
    var popUpBox = document.getElementById("popupBox")
    var blur = document.getElementById("blur")

    popUpBox.classList.remove('active')
    blur.classList.remove('active')
}


project - block - formatting
