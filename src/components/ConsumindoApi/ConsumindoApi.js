import { useState } from "react";
import axios from 'axios';
import './Consumindo.css'

function ConsumindoApi(){
    const [buscaCep, setBuscaCep] = useState();
    const api = `https://viacep.com.br/ws/${buscaCep}/json/`;
    const [data, setData] = useState([]);

    function buscaApi(e){
        e.preventDefault();

        axios.get(api)
        .then(response => {
            if(response.data.erro == true){
                setData([])
            }else{
                setData(response.data)
            }
            console.log(response.data);
            setData(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="senha">
        <form>
            <label>Pesquisar usúario:</label> <br></br>
            <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}></input><br></br>
            <button onClick={buscaApi}>Pesquisar</button>
        </form>
        <p className="f-bold">{
            data.length === 0 ? 'cep não identificado!'
            : 
            ``
            }</p>
            <p>{
            data.length === 0 ? ''
            : 
            `${data.localidade} -
            ${data.logradouro},
            ${data.bairro}`
            }</p>
        </div>
     )
}

export default ConsumindoApi;