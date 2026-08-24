function StageCard({ stage }) {
  return (
    <article className="stage-card">
      <div className="stage-image">
        <span>BUS STAGE</span>
      </div>

      <div className="stage-info">
        <h2>{stage.name}</h2>

        <p>
          📍 {stage.city}, {stage.country}
        </p>

        <p>Landmark: {stage.landmark}</p>

        <p>
          Destinations:
          {stage.destinations.join(", ")}
        </p>

        {stage.verified && <span className="verified">✓ Verified</span>}
      </div>
    </article>
  );
}

export default StageCard;
