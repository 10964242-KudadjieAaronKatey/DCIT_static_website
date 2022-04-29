const slide = () => {
    const burger = document.querySelector('.burger');
    const link = document.querySelector('.links');
    const navLinks = document.querySelectorAll ('.links li')

    burger.addEventListener('click', () => {
        //menu
        link.classList.toggle('links-active');
        
        //menu animation
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `links-fade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });

        //burger animation
        burger.classList.toggle('tog') 
    });
}

slide();
