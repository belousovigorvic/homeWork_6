let input = document.querySelector('input')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')

plus.addEventListener('click', () => {
    input.value++
})

minus.addEventListener('click', () => {
    input.value--
})

