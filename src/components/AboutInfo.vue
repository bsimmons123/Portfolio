<template>
  <div>
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
                      <button class="button-js-tilt tilt-button">Learn more</button>
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
  name: 'AboutInfo',
  mounted() {
    initTiltAnimation()
  }
};
</script>

<style scoped>
.about-section {
  color: #333;
}

.tilt-button {
  padding: 10px 20px;
  border: 2px solid #007bff; /* Blue border */
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  color: #007bff;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tilt-button:hover {
  background-color: #007bff; /* Blue background on hover */
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
