let modalContainer = document.getElementById('modalContainer');
let signIn = document.getElementById('cta');
let close = document.getElementById('close')
let navbar = document.getElementById('navbar')
let openNav = document.getElementById('toggle')

function closeNavbar(e) {
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNavbar);
    } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar);
    }
}

openNav.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavbar);
});

signIn.addEventListener('click', () => {
    modalContainer.classList.add('showModal')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('showModal')
})
