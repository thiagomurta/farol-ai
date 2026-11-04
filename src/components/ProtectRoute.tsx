import { Navigate, Outlet } from "react-router";

type Props = { papel: "aluno" | "professor" };

function ProtectRoute({ papel }: Props) {
    const usuario = JSON.parse(localStorage.getItem("usuario") ?? "null");

    if (!usuario) return <Navigate to="/login" replace />;
    if (usuario.papel !== papel) return <Navigate to="/login" replace />;

    return <Outlet />;
}

export default ProtectRoute;
