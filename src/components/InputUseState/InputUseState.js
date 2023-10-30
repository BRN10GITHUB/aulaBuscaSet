import { useState } from "react";

function InputUseState(){
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();
    const [vLogin, setVlogin] = useState();

    function verificaLogin(e){
        e.preventDefault();
      if(login.toLowerCase() === "bruno" && senha === "Senac"){ 
            setVlogin(true);
      }else{
        if(login.toLowerCase() !== "bruno" && senha === "Senac"){
            setVlogin("login inválido");
        }else if(login.toLowerCase() === "bruno" && senha !== "Senac"){
            setVlogin("Senha inválido");
        }else{
            setVlogin("Login ou Senha inválido");
        }
      }
    }

    return(
        <form>
            <label>Login: </label>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>
            <p>{login}</p>
            <br></br>
            <label>Senha: </label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <br></br>
            <button type="submit" onClick={verificaLogin}>Logar!</button>
            {
                vLogin === true
                ? <p>Logado com sucesso!</p>
                : ''
            }
            {
                vLogin !== false
                ? <p>{vLogin}</p>
                : ''
            }
        </form>
    )
}

export default InputUseState;