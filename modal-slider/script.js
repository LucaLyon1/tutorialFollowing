let modalContainer = document.getElementById('modalContainer');
let signIn = document.getElementById('cta');
let close = document.getElementById('close')

signIn.addEventListener('click', () => {
    modalContainer.classList.add('showModal')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('showModal')
})
