import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import { Navegacao } from './Navegacao';
import './App.css';
import { ItemCardapio } from './ItemCardapio';
import {pratosPrincipais, sobremesas, bebidas} from './cardapio';


function App() {

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={Hashtaurante} className='capa' alt=''/>
      <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
      <div className='menu'>
       {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
      </div>
    </>
  )
}

export default App;
