window.addEventListener('load', function () {
    const  elem = document.querySelector('section.container');
    const  imageElem = document.querySelectorAll('img');
    
    elem.classList.add('containerActive');

    imageElem.addEventListener('mousemove', function (event) {
        const xPosition= event.layerX;  
        const yPosition= event.layerY;

        imageElem.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;
    });
});