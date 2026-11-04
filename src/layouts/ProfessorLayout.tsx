import { NavLink, Outlet } from "react-router";

function ProfessorLayout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside style={{ width: 240, padding: 16, borderRight: "1px solid #ddd" }}>
                <h3>Área do Professor</h3>
                <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <NavLink to="/professor" end>Meus conteúdos</NavLink>
                    <NavLink to="/professor/adicionar">Adicionar conteúdo</NavLink>
                </nav>
            </aside>

            <main style={{ flex: 1, padding: 24 }}>
                <Outlet />
            </main>
        </div>
    );
}

export default ProfessorLayout;
