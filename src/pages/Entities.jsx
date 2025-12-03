import { useEffect } from 'react';
import CardList from '../components/CardList';
import { useStore } from '../store/store';

const Entities = () => {
  const { products, isLoading, error, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="py-5">
      <div className="container">
        <header className="text-center mb-4">
          <h1 className="display-6 fw-bold">Productos FakeStore</h1>
          <p className="text-muted">Consumiendo datos de fakestoreapi.com</p>
        </header>

        {isLoading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger d-flex align-items-center gap-3" role="alert">
            <i className="bi bi-exclamation-triangle fs-3"></i>
            <div>
              <h5 className="mb-1">Error</h5>
              <p className="mb-0">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && <CardList products={products} />}
      </div>
    </section>
  );
};

export default Entities;