import './equipe.css';

function Equipe({titulo, listaP}){
    function cat (c, n){
        if(c === 'Professor'){
        return(
            <div className='prof'>
            <p>Professor</p>
            </div>
        )
    }else if (c === 'Aluno'){
        return(
            <div className='Aluno'>
            <p>Aluno</p>
            </div>
        )
    }else{
        console.log(`falta categoria para: ${n}`);
        return (
            <div className='s-cat'>
                <p>Atenção! {n} está sem categoria</p>
            </div>
        )
    }
}

    return(
        <>
        <h1>{titulo}</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
            <div>
            <img className="img-exibe-perfil" src={p.imagem} alt={p.nome}/>
            <h1>Nome: {p.nome}</h1>
            {cat(p.categoria, p.nome)}
            {/* {p.categoria === "Professor" ? <div className='prof'><p>Professor</p></div>: ""} 
            {p.categoria === "Aluno" ? <div className='Aluno'><p>Aluno</p></div> : ""} */}
            {
                p.crt === undefined ?
                <div className='crt'><p>Falta Habilidade</p></div> : <p>Habilidades: {p.crt}</p> 
            }
            {
                p.nome === undefined ?<div className='nome'><p>Falta nome</p></div> : <p>Nome: {p.nome}</p>
            }

            </div>
            )} 
        </div>
        </>
    )
}

export default Equipe;