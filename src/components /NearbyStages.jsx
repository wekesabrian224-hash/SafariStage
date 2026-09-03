function NearbyStages({ stages }) {
  return (
    <div className="nearby-stages">
      <h2>Nearby Stages</h2>

      <div className="nearby-list">
        {stages.map((stage) => (
          <div className="nearby-card" key={stage.id}>
            <h3>{stage.name}</h3>

            <p>📍 {stage.landmark}</p>

            <p>🚌 {stage.destinations.join(", ")}</p>

            {stage.verified && <span>✓ Verified</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyStages;
