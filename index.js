
let toggle = 0;

const toggleNav = () => {
    if(toggle === 0) {
        const nav = document.querySelector('.component-list');
        let arr = ['component-list', 'show'];
        nav.classList.add(...arr);
        nav.classList.remove('hide');
        toggle = 1;
    }
    else if(toggle === 1) {
        const nav = document.querySelector('.component-list');
        let arr = ['component-list', 'hide'];
        nav.classList = ['component-list', 'hide'];
        nav.classList.remove('show');
        nav.classList.add(...arr);
        toggle = 0;
    }
}


const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', toggleNav)