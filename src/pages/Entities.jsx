import { Link } from "react-router-dom";

const Entities = () => {
  return (
    <article className="py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold">Catálogo de Productos</h1>
          <p className="lead mt-3">Explora todos los productos disponibles en FakeStore.</p>
        </div>
        <div className="row g-4 mt-5">
          {/* Aquí iría la lógica para listar los productos */}
          <div className="col-12 text-center">
            <Link to="/" className="btn btn-outline-primary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Entities;