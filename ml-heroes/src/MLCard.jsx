export default function MLCard({ data }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4"> 
      <div className="card h-100 border-0 shadow-sm hero-card">
        <div className="position-relative overflow-hidden">
          <img
            src={data.image}
            className="card-img-top img-fluid"
            alt={data.name}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="badge bg-success position-absolute top-0 end-0 m-2">
            {data.role || "Hero"}
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold mb-2">{data.name}</h5>
          <p className="card-text hero-description">
            {data.description}
          </p>
        </div>
        <div className="card-footer bg-transparent border-0 pb-3">
          <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}