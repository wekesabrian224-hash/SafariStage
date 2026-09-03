import { Link } from "react-router-dom";

import stages from "../data/stages";

import StageCard from "../components /StageCard";
import StageMap from "../components /StageMap";

import NearbyStages from "../components /NearbyStages";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* ================= HERO SECTION ================= */}

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-label">AFRICA'S TRAVEL NAVIGATION PLATFORM</p>

          <h1>
            Find Your Way
            <span>Across Africa</span>
          </h1>

          <p className="hero-description">
            Discover bus stages, routes and landmarks so you can travel with
            confidence wherever your journey takes you.
          </p>

          {/* Search */}

          <div className="hero-search">
            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder="Search a city, stage or destination..."
            />

            <button>Search</button>
          </div>

          <Link to="/explore" className="hero-button">
            Explore Stages
            <span>→</span>
          </Link>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}

      <section className="intro-section">
        <p className="section-label">TRAVEL WITH CONFIDENCE</p>

        <h2>
          Know where you are.
          <br />
          Know where you're going.
        </h2>

        <p>
          SafariStage helps travelers discover transport stages, understand
          routes and identify important landmarks across African cities.
        </p>
      </section>

      {/* ================= STAGES SECTION ================= */}

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">DISCOVER</p>

            <h2>Popular Stages</h2>
          </div>

          <Link to="/explore">View all stages →</Link>
        </div>

        <div className="stage-grid">
          {stages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">
        <div>
          <p className="section-label">SAFARISTAGE</p>

          <h2>Your journey starts with knowing the way.</h2>

          <Link to="/explore" className="cta-button">
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
