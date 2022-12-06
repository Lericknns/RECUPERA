import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListaAlunos from './page/escola/index.jsx';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListaAlunos />} />
            </Routes>
        </BrowserRouter>
    )
}