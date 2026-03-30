/*const header = document.querySelector('header')

const logo = document.createElement('img')
logo.src = '/public/logo.png'
logo.alt = 'UnEarthed Logo'
logo.width = 150

header.appendChild(logo)*/


// 1) Seleccionamos el <header>
const header = document.querySelector('header')

// 2) Contenedor del header
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// 3) Lado izquierdo
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// Logo
const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'   // ✅ correcto
headerLogo.alt = 'UnEarthed Logo'

// Título
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

// Append logo + title
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// 4) Lado derecho
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Botón Home
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', () => {
  window.location = '/'
})

headerRight.appendChild(headerButton)

// 5) Unir left + right
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// 6) Insertar en <header>
header.appendChild(headerContainer)