"use strict";

const blockMenu = document.getElementById('block-menu')
const ham = document.getElementById('ham')

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
})

ham.addEventListener('click', () => {
    blockMenu.classList.toggle('active');
})

let images = ['img/salonBeppu.png', 'img/codevillage.png', 'img/myblog.png', 'img/premil.png'];
let current = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let main_image = document.getElementById('main_image');


prev.addEventListener('click', function () {
    current = current === 0 ? images.length - 1 : current - 1;
    console.log(current);
    main_image.src = images[current];
});

next.addEventListener('click', function () {
    current = current === images.length - 1 ? 0 : current + 1;
    main_image.src = images[current];
});