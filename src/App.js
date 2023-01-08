import { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser"
import logo from "./imgs/Galogico.png"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function SendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos');
      return;
    }

    const TemplateParams = {
      from_name: name,
      message: message,
      email: email

    }

    emailjs.send("", "", TemplateParams, "")
    .then((response) => {
      console.log("email", response.status, response.text)
      setName("")
      setEmail("")
      setMessage("")
    }, (error) =>{
      console.log("error")
    })
  }

  return (
    <div className="container">
      <img src={logo} className="title"/>
      <button type="button" className="saibaMais">SAIBA MAIS</button>

      <form className="form" onSubmit={SendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
