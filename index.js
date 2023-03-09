const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  
  const randomLeft = Math.floor(Math.random() * (bodyWidth - btnWidth));
  const randomTop = Math.floor(Math.random() * (bodyHeight - btnHeight));
  
  btn.style.left = `${randomLeft}px`;
  btn.style.top = `${randomTop}px`;

  console.log(bodyHeight);
});