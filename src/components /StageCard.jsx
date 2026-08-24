function StageCard({ stage }) {
  return (
    <article className="stage-card">
      {/* Stage photograph */}

      <img
        src={stage.image}
        alt={`${stage.name} in ${stage.city}`}
        className="stage-card-image"
      />

      {/* Dark cinematic overlay */}

      <div className="stage-card-overlay"></div>

      {/* Stage information */}

      <div className="stage-card-content">
        <div className="stage-card-top">
          {stage.verified && <span className="verified">✓ VERIFIED</span>}
        </div>

        <div>
          <p className="stage-location">
            📍 {stage.city}, {stage.country}
          </p>

          <h2>{stage.name}</h2>

          <p className="stage-landmark">{stage.landmark}</p>

          <div className="destinations">
            {stage.destinations.map((destination) => (
              <span key={destination}>{destination}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default StageCard;
