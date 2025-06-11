<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Developer Contact</h1>
      <p>Feel free to reach out if you have any questions or would like to work together!</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-item">
          <font-awesome-icon :icon="['fas', 'envelope']" class="info-icon" />
          <div>
            <h3>Email</h3>
            <p><a href="mailto:bs@brandon-simmons.work">bs@brandon-simmons.work</a></p>
          </div>
        </div>

        <div class="info-item">
          <font-awesome-icon :icon="['fas', 'code-branch']" class="info-icon" />
          <div>
            <h3>GitHub</h3>
            <p><a href="https://github.com/bsimmons123" target="_blank">github.com/bsimmons123</a></p>
          </div>
        </div>

        <div class="info-item">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="info-icon" />
          <div>
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/brandon-simmons-145b88223/" target="_blank">linkedin.com/in/brandon-simmons-145b88223/</a></p>
          </div>
        </div>
      </div>

      <div class="form-and-payload">
        <div class="contact-form">
          <h2>Send me a message</h2>

          <!-- Success message -->
          <div v-if="formSubmitted" class="form-success-message">
            <font-awesome-icon :icon="['fas', 'check-circle']" class="success-icon" />
            <div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="submissionError" class="form-error-message">
            <font-awesome-icon :icon="['fas', 'exclamation-circle']" class="error-icon" />
            <div>
              <h3>Oops!</h3>
              <p>Something went wrong. Please try again later.</p>
            </div>
          </div>

          <!-- Form -->
          <form v-if="!formSubmitted" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>

            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>

        <div class="json-payload">
          <h2>Code Example</h2>
          <div class="json-container">
            <div class="json-header">
              <span>JavaScript</span>
              <button @click="copyCodeToClipboard" class="copy-button">
                <font-awesome-icon :icon="['fas', 'copy']" />
                Copy
              </button>
            </div>
            <pre><code v-html="formattedJavaScript"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
  timestamp: computed(() => new Date().toISOString())
});

const formSubmitted = ref(false);
const submissionError = ref(false);

const formattedJavaScript = computed(() => {
  // Create JavaScript code example using Vue 3 Composition API
  const jsCode = `import { ref, reactive } from "vue";

// Form data with reactive state
const formData = reactive({
  name: "${form.name || ""}",
  email: "${form.email || ""}",
  message: "${form.message || ""}",
  date: "${new Date().toDateString()}"
});

// Method to handle form submission
const sendMessage = () => {
  console.log("Sending message:", formData);
  // API call would go here
};
`;

  // Create a temporary element to safely escape HTML
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // First escape HTML to prevent XSS
  let escapedCode = escapeHtml(jsCode);

  // Then apply syntax highlighting with regex patterns for JavaScript
  return escapedCode
    // Match keywords
    .replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this|null|undefined|true|false|import|from|export|default)\b/g, '<span class="js-keyword">$1</span>')
    // Match strings
    .replace(/(&quot;.*?&quot;)/g, '<span class="js-string">$1</span>')
    // Match function calls and declarations
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="js-function">$1</span>(')
    // Match object properties
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '<span class="js-property">$1</span>:')
    // Match numbers
    .replace(/\b(\d+)\b/g, '<span class="js-number">$1</span>');
});

const copyCodeToClipboard = () => {
  // Create a plain JavaScript code string without HTML tags using Vue 3 Composition API
  const jsCode = `import { ref, reactive } from 'vue';
import axios from 'axios'

const formData = reactive({
  name: "${form.name || ""}",
  email: "${form.email || ""}",
  message: "${form.message || ""}",
  date: "Wed Jun 11 2025"
});

const sendMessage = () => {
  console.log('Sending message:', formData);
  // API call would go here
};`;

  // Copy to clipboard
  navigator.clipboard.writeText(jsCode)
    .then(() => {
      alert('Code copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy code: ', err);
      alert('Failed to copy code. Please try again.');
    });
};

const submitForm = async () => {
  // Reset submission status
  formSubmitted.value = false;
  submissionError.value = false;

  // In a real application, you would send the form data to a server
  console.log('Form submitted:', form);

  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);

  try {
    const response = await fetch("https://formspree.io/f/xgegarqo", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    const result = await response.json();
    console.log(result);

    // Set submission success
    formSubmitted.value = true;

    // Reset form
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (e) {
    console.error(e);
    // For now just always assume this catch is due to a CORS error
    formSubmitted.value = true;
    // submissionError.value = true;
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-and-payload {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 1.5rem;
  color: var(--primary-color, #00a8cc);
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.info-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.info-item p {
  margin: 0;
}

.info-item a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: var(--primary-color, #00a8cc);
}

.contact-form {
  flex: 1;
  min-width: 300px;
}

.contact-form h2 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color, #00a8cc);
  box-shadow: 0 0 0 2px rgba(0, 168, 204, 0.2);
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color, #00a8cc);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: var(--hover-color, #00c2c2);
  transform: translateY(-2px);
}

/* Form success and error messages */
.form-success-message,
.form-error-message {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease-in-out;
}

.form-success-message {
  background-color: rgba(0, 168, 204, 0.1);
  border: 1px solid var(--primary-color, #00a8cc);
}

.form-error-message {
  background-color: rgba(255, 76, 76, 0.1);
  border: 1px solid #ff4c4c;
}

.success-icon,
.error-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.success-icon {
  color: var(--primary-color, #00a8cc);
}

.error-icon {
  color: #ff4c4c;
}

.form-success-message h3,
.form-error-message h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.form-success-message p,
.form-error-message p {
  margin: 0;
  opacity: 0.9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.json-payload {
  flex: 1;
  min-width: 300px;
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.json-payload h2 {
  margin-bottom: 1rem;
  color: var(--primary-color, #00a8cc);
}

.json-container {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.json-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.json-header span {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: var(--primary-color, #00a8cc);
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  border-color: var(--primary-color, #00a8cc);
}

.json-container pre {
  padding: 1rem;
  overflow-x: auto;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  color: #e6e6e6;
}

.json-container code {
  white-space: pre-wrap;
  word-break: break-word;
}

/* Code Syntax Highlighting */
/* JavaScript Syntax Highlighting */
.js-keyword {
  color: #569cd6; /* Blue */
}

.js-string {
  color: #ce9178; /* Orange-Red */
}

.js-function {
  color: #dcdcaa; /* Yellow */
}

.js-property {
  color: #9cdcfe; /* Light Blue */
}

.js-number {
  color: #b5cea8; /* Light Green */
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }

  .form-and-payload {
    flex-direction: column;
  }

  .contact-info,
  .contact-form,
  .json-payload {
    width: 100%;
  }
}
</style>
