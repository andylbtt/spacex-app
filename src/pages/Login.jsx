import "./Login.css";

export default function Login() {
  return (
    <main className="login-page">
      <div className="login-box">
        <h1 className="login-title">🔑 Iniciar Sesión</h1>
        <form className="login-form">
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </main>
  );
}
