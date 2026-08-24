import stages from "../data/stages";
import StageCard from "../components /StageCard";

function Explore() {
  return (
    <section className="page">
      <h1>Explore Bus Stages</h1>

      <p>Find bus stages across African cities.</p>

      <div className="stage-grid">
        {stages.map((stage) => (
          <StageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
}

export default Explore;
