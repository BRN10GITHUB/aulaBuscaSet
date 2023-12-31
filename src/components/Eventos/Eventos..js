import { useState } from "react";

function Eventos(){
    let [conta, setConta] = useState(0);
    const [nome, setNome] = useState();

    function enviaNome(e){
        e.preventDefault();
        alert(`Nome: ${nome} enviado com sucesso!`);
    }
  function clicarBtn(){
    alert("Botão clicado!");
  }

    return(
        <>
        <p>O botão foi clicado {conta} vezes</p>
        <button onClick={() => setConta(conta + 1)}>Clique aqui!</button>
        <br></br>

        <form>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        </form><br></br>

        <button type="submit" onClick={enviaNome}>Enviar</button>
        <p>O nome é: {nome}</p>
        </>
    )
}

export default Eventos;