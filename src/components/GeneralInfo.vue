<template>
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
            <button class="button-js-tilt tilt-button">Learn more</button>
          </a>
        </p>
      </div>
    </b-jumbotron>
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
}

.landing-container h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tilt-button {
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.landing-container p {
  font-size: 1.5rem;
}

.tilt-button:hover {
  background-color: #007bff;
}
</style>