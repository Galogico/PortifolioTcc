import { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser"
import logo from "./imgs/Galogico.png"
import 'bootstrap/dist/css/bootstrap.min.css';

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

    emailjs.send("service_qdtzyo9", "template_r1dillu", TemplateParams, "y-iIsE2KO1hWmh_R_")
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
      <div className="container2">
      <div className="navbar">
      <button className="navButton">home</button>
      <button className="navButton">skills</button>
      <button className="navButton">contact</button>


      </div>
    {/* TITLE */}
      <img src={logo} className="title"/>
      <button type="button" className="saibaMais">SAIBA MAIS</button>

    {/* ABOUT ME */}
      <div className='divinfo'>
      <h1 className="hitxt">HI!</h1>
      <p className="hitxt">My name is Gabriel Matias, I'm currently studying web development in Taubaté, São Paulo</p>
      <p className="hitxt">and studying Game Development in my free times. I'm apart of Taubatexas, a First Robotics</p>
      <p className="hitxt">Competition team, where I program robots usin RobotPy.</p>
      </div>
    {/* SKILLS */}
      <h1>SKILLS</h1>
      <div className='galleryskilldiv'>
        <div class="gallery">
          <a target="_blank" href="https://rubyonrails.org">
            <img src="https://miro.medium.com/max/400/1*eRErB-NQYgwF52eUUK_kkQ.png" alt="Cinque Terre" width="600" height="400"/>
          </a>
          <div class="desc">Ruby On Rails</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://reactjs.org">
            <img src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579" alt="Forest" width="50" height="50"/>
          </a>
          <div class="desc">React</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://unity.com">
            <img src="https://avatars.githubusercontent.com/u/1326761?s=200&v=4" alt="Northern Lights" width="600" height="400"/>
          </a>
          <div class="desc">Unity</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://docs.wpilib.org/en/stable/">
            <img src="https://avatars.githubusercontent.com/u/19267233?s=280&v=4" alt="Mountains" width="600" height="400"/>
          </a>
          <div class="desc">RobotPy</div>
        </div>
      </div>

    {/* CONTACT */}
      <h1>CONTACT ME</h1>

      
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

      
      <div className='gallerycontdiv'>
        <div class="gallerycont">
          <a target="_blank" href="https://github.com/Galogico">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Cinque Terre" width="50" height="50"/>
          </a>
        </div>

        <div class="gallerycont">
          <a target="_blank" href="https://discord.gg/GQnf2SFwXg">
            <img src="https://files.jotform.com/jotformapps/daf31868d5777668747df865dfc3f0d2.png" alt="Forest" width="50" height="50"/>
          </a>
        </div>
      </div>

</div>
  );
}

export default App;
