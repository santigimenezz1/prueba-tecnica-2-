import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [objeto, setObjeto] = useState()
  const [fact, setFact] = useState("")
  const [palabras, setPalabras] = useState("")
  const [gif, setGif] = useState()
  const API_KEY = "ePmQ0cnIUrKknxPIsuliW3F7IVWZZ5gG"

  useEffect(()=>{
    fetch("https://catfact.ninja/fact")
    .then((res)=>res.json())
    .then((res)=>{
      setFact(res.fact)
    })
  },[])

  useEffect(()=>{
     const primerasPalabras = fact.split(" ").slice(0,3).join(" ")
     setPalabras(primerasPalabras)
     fetch(`https://api.giphy.com/v1/gifs/search?q=${primerasPalabras}&api_key=${API_KEY}`)
     .then((res)=>res.json())
     .then((res)=>{
      console.log(res)
      setObjeto(res.data)
      setGif(res.data[0])
     })
  },[fact])

  const BuscarGif = () =>{
    console.log(fact)
    const cantidadObjetos = objeto.length
    console.log({cantidadObjetos})
    const ramdon = Math.random() * cantidadObjetos
    const redondear = Math.round(ramdon)
    console.log({redondear})
    const primerasPalabras = fact.split(" ").slice(0,3).join(" ")
    setPalabras(primerasPalabras)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${primerasPalabras}&api_key=${API_KEY}`)
    .then((res)=>res.json())
    .then((res)=>setGif(res.data[redondear]))
  }


  console.log(palabras)
  console.log({gif})
  return (
    <>
    <div className='container__button'>
    <button onClick={()=>BuscarGif()}>Aleatorio</button>
    </div>
    <main className='main'>
      { fact && <h1>{fact}</h1> }
      { gif && <img className='img' src={gif.images.original.url}></img>}
    </main>
    </>
    
  )
}

export default App

//Crear un boton y que al presionarlo me muestre otro gif, tiene que acceder al arreglo y aleatoriamente que me muestre otro gif