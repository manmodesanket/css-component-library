
let toggle = 0;

const toggleNav = () => {
    if(toggle === 0) {
        const nav = document.querySelector('.component-list');
        nav.className = 'component-list show';
        toggle = 1;
    }
    else if(toggle === 1) {
        const nav = document.querySelector('.component-list');
        nav.className = 'component-list hide';
        toggle = 0;
    }
}


const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', toggleNav)