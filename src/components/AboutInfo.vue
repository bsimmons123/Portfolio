<template>
  <div>
    <section id="about">
      <b-jumbotron text-variant="black" bg-variant="light" class="rounded-4 landing-container">
        <template #header>About me</template>

        <template #lead>
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div>
                <p>
                  Hello! I'm a motivated computer science student with experience in designing, building, and utilizing
                  technical skills in team
                  settings; dedicated to completing tasks before deadlines. I have a strong interest in improving my
                  community
                  through my work
                </p>
                <p>
                  I am very interested in the self-hosting community and currently have a large stack of applications
                  that I use all deployed via
                  docker compose.
                </p>
                <span>
                  <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--resume"
                      href="/resume.pdf"
                      download
                  >
                    <button class="button-js-tilt tilt-button">Learn more</button>
                  </a>
                </span>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="about-wrapper__image load-hidden">
                <img
                    class="img-fluid rounded shadow-lg"
                    height="auto"
                    width="300px"
                    src="@/assets/profile.jpg"
                    alt="Profile Image"
                />
              </div>
            </div>
          </div>
        </template>
      </b-jumbotron>
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
.tilt-button {
  padding: 10px 20px;
  border: 2px solid #007bff; /* Blue border */
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tilt-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>