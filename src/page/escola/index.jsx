import './index.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
  return(
       <main className='mae'>

        <section className='sec1'>
            <h1>pesquise o nome do aluno</h1>
            <input className='anput' type={"text"}/>
            <Link to={'/addaluno'}>

        <button className='botao'><h1 className='textb'>add aluno</h1></button>
            
               </Link>
           
        </section>
        

        <section className='sec2'> 
        <table border="1" >
   <thead>
   <tr>
       <th>numero</th>
       <th>nome</th>
       <th>ano</th>
       <th>turma</th>
   </tr>
   </thead>
   <tbody>
   <tr>
       <td>1</td>
       <td>Leandro Geraldo Nunes dos Santos</td>
       <td>1</td>
       <td>B</td>
   </tr>
   <tr>
       <td>2</td>
       <td>Leandro Geraldo Nunes dos Santos</td>
       <td>1</td>
       <td>B</td>
   </tr>
   </tbody>
   <tfoot>
       <td>3</td> 
       <td>Leandro Geraldo Nunes dos Santos</td>
       <td>1</td>
       <td>B</td>
   </tfoot>
</table>
</section>
          




    
       </main>
    )
}

 