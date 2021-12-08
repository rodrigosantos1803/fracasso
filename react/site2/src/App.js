import './App.css';

import { useLayoutEffect, useState } from 'react';


import Api from '../../site2/src/services/api'


const api = new Api();

export default function Lista() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState('');

  async function listar() {
    let r= await api.listar(pessoas);
    setPessoas(r);
  }

  async function inserirPessoas() {
    let r = await api.inserir(nome);
    console.log(r);

    limparCampo();
    listar();
  }

  function limparCampo() {
    setNome('');
  }

  useLayoutEffect (() => {
    listar ()
  }, 
  )

  

   


  return (
   
    <div className="App">
      <header className="App-header">

      <div className= "cabecalho">
            <div className="palavra">- Ok</div>
        </div>

        <div className= "box-1">
        <div className= "titulo">Novo</div>
        <div className= "inserir-nome">
      <label className= "titulo-2">Nome:</label>
      <div className= "inserir"> <input type= "text" onChange= {e => setNome(e.target.value)}></input> </div>
      </div>
      <button onClick={inserirPessoas} className= "botao">ok</button>
    </div> 

    <div className="box-2">
            <div className= "titulo-3">Lista</div>
                <button  className= "botao-1">ok</button>
            </div>
 
    <table className= "tabela">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
        </tr>
      </thead>

      <tbody>

        {pessoas.map (  x =>
        <tr>
          <td>{x.id_nome}</td>
          <td>{x.tb_rodrigo.nm_nome}</td>
          </tr>
        )}
        
      </tbody>
      
    </table>
      </header>
    </div>
  
  );
}

