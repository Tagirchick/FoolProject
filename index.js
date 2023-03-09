let btn = document.querySelector('.btn');
let x;
btn.addEventListener('mouseover', () => btn.style.transform = `translateX(${x ? x = 0 : x = 150}px)`);
