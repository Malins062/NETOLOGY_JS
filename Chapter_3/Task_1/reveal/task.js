const reveals = Array.from(document.querySelectorAll('.reveal'));
// console.log(reveals);

window.addEventListener('scroll', () => {
    reveals.forEach((block) => {
        const { top, bottom } = block.getBoundingClientRect();
    
        if ((bottom < 0 || top > window.innerHeight))  {
            block.classList.remove('reveal_active');
        } else {
            block.classList.add('reveal_active');
        }
    });
})
