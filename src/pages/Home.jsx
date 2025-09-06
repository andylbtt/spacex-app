export default function Home() {
  return    ( 
  <main className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SpaceX Launch Tracker</h1>
          <p className="hero-text">
            SpaceX es una compañía aeroespacial fundada por Elon Musk con la
            misión de revolucionar el transporte espacial, reducir los costos y
            permitir la colonización de Marte.  
            <br />  
            En esta aplicación puedes explorar lanzamientos, conocer detalles de
            las misiones y sentir el futuro de la exploración espacial.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explorar lanzamientos</button>
            <button className="btn-secondary">Ver próximos eventos</button>
          </div>
        </div>
      </div>
    </main>
  );
}
