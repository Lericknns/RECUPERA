import './index.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
  return(
       <main className='mae'>

        <section className='sec1'>
            <h1>pesquise o nome do aluno</h1>
            <input type={"text"}/>
            <button className='botao'><h1 className='textb'>add aluno</h1></button>
            <button className='botao' ><h1 className='textb'>remover aluno</h1></button>
        </section>
          




    
       </main>
    )
}

 