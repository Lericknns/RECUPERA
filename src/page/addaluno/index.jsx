import './index.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
  return(
       <main className='prin'>
 <Link to={'/'}>

<button className='WeAre'><h1 className='tet'>cancelar</h1></button>
   
       </Link> 
       <section className='space'><h1> nome do aluno</h1>
        <input className='enput' type={"text"}/></section>


        <section className='space2'>
                            <h1>ano</h1>
                            <select>
                            <option>Selecione</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>3</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            </select>
       </section>
       <section className='space3'>
                            <h1>turma</h1>
                            <select>
                            <option>Selecione</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                            <option>e</option>
                            </select>
        </section>
                            

                            <Link to={'/'}>

<button className='botao'><h1 className='textb'>add aluno</h1></button>
    
       </Link>

       </main>
    )
}

 