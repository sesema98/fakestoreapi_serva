import Card from './Card';

const CardList = ({ products }) => {
  if (!products.length) {
    return (
      <div className="alert alert-warning">
        <strong>Sin productos.</strong> No se encontraron productos para mostrar.
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <Card product={product} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
