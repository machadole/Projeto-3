const monstros = [
    {
        id: 1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, rerum! Hic recusandae, doloremque reiciendis praesentium harum quas vel eius laudantium tempore placeat nisi nam culpa quam, quos veniam? At, minus!',
        foto: 'https://robohash.org/Osvaldo'



    },
    {
        id: 2,
        nome: 'MegaMente',
        altura: 3,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, rerum! Hic recusandae, doloremque reiciendis praesentium harum quas vel eius laudantium tempore placeat nisi nam culpa quam, quos veniam? At, minus!',
        foto: 'https://robohash.org/MegaMente'



    },
    {
        id: 3,
        nome: 'Devinho',
        altura: 7,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, rerum! Hic recusandae, doloremque reiciendis praesentium harum quas vel eius laudantium tempore placeat nisi nam culpa quam, quos veniam? At, minus!',
        foto: 'https://robohash.org/Devinho'



    },
    {
        id: 4,
        nome: 'Abacate',
        altura: 1.4,
        habilidades: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, rerum! Hic recusandae, doloremque reiciendis praesentium harum quas vel eius laudantium tempore placeat nisi nam culpa quam, quos veniam? At, minus!',
        foto: 'https://robohash.org/Abacate'



    }

]

const section = document.querySelector(".monstros")
const button = document.querySelector(".btn")

button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstro => {
    return `<div>
    <span>Nome: ${monstro.nome}</span> 
    <span>Altura: ${monstro.altura}</span>
    <img src="${monstro.foto}">
    <span class="habilidades" >Habilidades: ${monstro.habilidades}</span>
    
    </div>`
    
})

section.innerHTML = todosOsMonstros