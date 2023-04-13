const link = document.querySelectorAll('nav > .this-hover');
const cursor = document.querySelector('.cursor');

(() => {
    const animate = (e) => {
        const span = document.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        moveX = x / width * (move * 2) - move,
        moveY = y / hieght * (move * 2) - move;
    
        span.style.transform = `translate(${moveX}, ${moveY})`;
        if (e.type === 'mouseleave') span.style.transform = '';
    }
    
    const moveCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    }

    link.forEach(i => i.addEventListener("mousemove", animate))
    link.forEach(i => i.addEventListener("mouseleave", animate))
    window.addEventListener('mousemove', moveCursor);
})();