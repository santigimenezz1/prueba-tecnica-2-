import React from 'react'    //para empezar de cero un proyecto debo importar react
import ReactDOM from 'react-dom/client'   //tambien debo importar react dom / client
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')) // seleccionamos el contenedor que quiero mostrar (Esta en el index)
.render(<App/>)  //Renderizo el elemento que quiero mostrar
