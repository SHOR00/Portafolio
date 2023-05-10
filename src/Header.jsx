import './App.css'
import jorge from '../jorge.jpg'

export default function Header() {

  return (
    <header>
      <p>hey, i'm</p>
      <h1>Jorge Rios</h1>
      <img src={jorge}/>
    </header>
  )
}
