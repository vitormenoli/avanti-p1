function allCategories() {
    const allCategoriesEvent = document.querySelector('.allCategories-event')

    const allCategories = document.querySelector('.allCategories')
    
    allCategoriesEvent.addEventListener('mouseover', (ev) => {
        allCategories.style.display = 'flex'
    })
    
    allCategoriesEvent.addEventListener('mouseleave', (ev) => {
        allCategories.style.display = 'none'
    })
}

function departamentos() {
    const departamentosEvent = document.querySelector('.departamento-event')

    const departamentos = document.querySelector('.departamento')
    
    departamentosEvent.addEventListener('mouseover', (ev) => {
        departamentos.style.display = 'flex'
    })
    
    departamentosEvent.addEventListener('mouseleave', (ev) => {
        departamentos.style.display = 'none'
    })
}

function fetchProduct() {
    const input = document.querySelector('#fetchProduct')
    const button = document.querySelector('#fetchButton')
    const searchText = document.querySelector('#searchText')

    button.addEventListener('click', (ev) => {
        ev.preventDefault()

        if (!input.value) return

        searchText.textContent = `Você buscou por: ${input.value}`
        searchText.style.display = 'block'
        input.value = ''
    })
}

function main() {
    fetchProduct()
    allCategories()
    departamentos()
}

main()