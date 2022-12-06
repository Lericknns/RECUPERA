import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListaAlunos from './page/escola/index.jsx';
import Add from './page/addaluno/index.jsx';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListaAlunos />} />
                <Route path='/addaluno' element={<Add />} />
            </Routes>
        </BrowserRouter>
    )
}