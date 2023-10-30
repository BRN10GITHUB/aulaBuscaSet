import { useState } from "react";

function Nome(){
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();

function EnviarNome(e){
    e.preventDefault();
    if(nome === "Bruno" && senha === "Senac"){
        alert("Enviado com sucesso!")
    }else{
        return(
            alert("Senha ou nome inválido")
        )
    }
}
    return(
        <>
        <form>
        <label for="nome">Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input><br></br>
        <label for="senha">Senha:</label>
        <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)}></input><br></br>
        <button type="submit" onClick={EnviarNome}>Enviar</button>
        </form>
        </>
    )
}

export default Nome;
