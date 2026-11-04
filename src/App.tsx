import { Routes, Route, Navigate } from 'react-router';
import Login from "./pages/Login";
import HomeAluno from "./pages/aluno/HomeAluno";
import NovaDuvida from "./pages/aluno/NovaDuvida";
import HomeProfessor from "./pages/professor/HomeProfessor";
import ProtectRoute from "./components/ProtectRoute";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectRoute papel="aluno" />}>
                <Route path='/aluno' element={<HomeAluno />} />
                <Route path='/aluno/duvida' element={<NovaDuvida />} />
            </Route>

            <Route element={<ProtectRoute papel="professor" />}>
                <Route path='/professor' element={<HomeProfessor />} />
            </Route>

            <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default App
