import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dados enviados:", { username, password })
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div id="username-div">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required />
                </div>

                <div id="password-div">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
                </div>

                <button type="submit">Acessar</button>
            </form>
        </div>
    );
}

export default Login;
