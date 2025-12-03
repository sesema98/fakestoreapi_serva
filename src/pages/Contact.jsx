const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4">
          <h1 className="h3 fw-bold">Contacto</h1>
          <p className="text-muted">Déjanos tus comentarios sobre la integración con FakeStore.</p>
        </header>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="mb-2">
              <i className="bi bi-envelope me-2"></i>
              Email: soporte@example.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone me-2"></i>
              Teléfono: +1 234 567 890  
            </p>
            <p className="mb-0">
              <i className="bi bi-globe me-2"></i>
              Fuente de datos oficial:{' '}
              <a href="https://fakestoreapi.com" className="text-decoration-none">
                fakestoreapi.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;