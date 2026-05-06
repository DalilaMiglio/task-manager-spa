import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister() {
    try {
      setError("");
      await register(email, password);
      navigate("/");
    } catch {
      setError("No se pudo crear la cuenta. Usa otro email o una contraseña más segura.");
    }
  }

  return (
    <main className="container">
      <h1>Registro</h1>

      {error && <p className="error">{error}</p>}

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Crear cuenta</button>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </main>
  );
}