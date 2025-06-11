<template>
  <div>
    <!-- Hero Section -->
    <div class="landing-container">
      <b-jumbotron>
        <div>
          <h1>
            Hi, my name is <span class="fw-bold">Brandon Simmons</span>
            <br/>
            I'm a Software Developer.
          </h1>
          <p class="hero-cta load-hidden">
            <a rel="noreferrer" href="#about">
              <button class="button-js-tilt hero-button">Learn more</button>
            </a>
          </p>
        </div>
      </b-jumbotron>
    </div>

    <!-- About Section -->
    <section id="about">
      <div class="about-section">
        <div class="container py-5">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-md-6 p-5">
                  <h2 class="fw-bold mb-4">About me</h2>
                  <p class="lead">
                    Hello! I'm a motivated computer science student with experience in designing, building, and utilizing
                    technical skills in team settings; dedicated to completing tasks before deadlines. I have a strong interest in improving my
                    community through my work.
                  </p>
                  <p>
                    I am very interested in the self-hosting community and currently have a large stack of applications
                    that I use all deployed via docker compose.
                  </p>
                  <div class="mt-4">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="/resume.pdf"
                      download
                    >
                      <button class="button-js-tilt about-button">Download Resume</button>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center justify-content-center p-4 bg-light">
                  <div class="about-wrapper__image">
                    <img
                      class="img-fluid rounded shadow-lg"
                      src="@/assets/profile.jpg"
                      alt="Profile Image"
                      style="max-width: 50%;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import initTiltAnimation from "@/helpers/ButtonTiltAnimation";
export default {
  name: 'GeneralInfo',
  mounted() {
    initTiltAnimation()
  }
}
</script>

<style>
.landing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh; /* Make the container span the entire viewport height */
  color: white;
  margin-bottom: 2rem;
}

.landing-container h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.landing-container p {
  font-size: 1.5rem;
}

/* Hero Button Styles */
.hero-button {
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  color: white;
}

.hero-button:hover {
  background-color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

/* About Section Styles */
.about-section {
  color: #333;
}

.about-button {
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  color: #007bff;
  font-weight: 600;
  transition: all 0.3s ease;
}

.about-button:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
