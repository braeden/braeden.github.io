document.addEventListener('mousemove', (e) => {
    const g = document.getElementById('glow');
    g.style.left = `${e.clientX}px`;

    g.style.top = `${e.clientY}px`;
});
document.addEventListener('touchmove', (e) => {
    const g = document.getElementById('glow');
    g.style.left = `${e.touches[0].pageX}px`;

    g.style.top = `${e.touches[0].pageY}px`;
});



// document.addEventListener('mouseleave', () => {
//     document.getElementById('glow').style.opacity = 0;
// });
// document.addEventListener('mouseenter', () => {
//     document.getElementById('glow').style.opacity = 1;
// })