let images = document.querySelectorAll('.img-gallery img');
let wrapper = document.getElementById('wrapper');
let btn = document.getElementById('btn');
let imageWrapper = document.getElementById('fulling');
let close = document.querySelector('span');

images.forEach((img) => {
    img.addEventListener('click', () => {
        openModel(img.src);
    });
});

btn.addEventListener('click', () => {
    let link = document.createElement('a');
    link.href = imageWrapper.src;
    link.download = imageWrapper.src.split('images/').pop(); // filename from src
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

function openModel(pic) {
    wrapper.style.display = 'flex';
    imageWrapper.src = pic;
}
