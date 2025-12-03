const Card = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top p-3" alt={product.title} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{product.title}</h5>
        <p className="card-text text-muted small flex-grow-1">{product.category}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold">${product.price.toFixed(2)}</span>
          <span className="badge bg-warning text-dark">Rating: {product.rating?.rate ?? 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
