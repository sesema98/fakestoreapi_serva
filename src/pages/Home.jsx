import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <article className="py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold">Bienvenido a FakeStore</h1>
          <p className="lead mt-3">Explora productos usando la API oficial de fakestoreapi.com</p>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-bag-check-fill display-1 text-primary"></i>
                <h2 className="h4 mt-3">Catálogo</h2>
                <p className="mt-2">Revisa todos los productos disponibles con imágenes, categorías y precios.</p>
                <Link to="/entities" className="btn btn-primary">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-envelope-paper-fill display-1 text-primary"></i>
                <h2 className="h4 mt-3">Contacto</h2>
                <p className="mt-2">¿Dudas o feedback? Escríbenos para mejorar la experiencia.</p>
                <Link to="/contact" className="btn btn-outline-primary">
                  Ir a contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
