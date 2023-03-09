const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('mouseover', () => {
  const bodyWidth = container.clientWidth;
  const bodyHeight = container.clientHeight;
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  
  const randomLeft = Math.floor(Math.random() * (bodyWidth - btnWidth));
  const randomTop = Math.floor(Math.random() * (bodyHeight - btnHeight));
  
  btn.style.left = `${randomLeft}px`;
  btn.style.top = `${randomTop}px`;
});