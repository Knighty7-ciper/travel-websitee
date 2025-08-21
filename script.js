/* styles.css */

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Lato:wght@300;400;700&display=swap');

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.header {
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2c3e50;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #2c3e50;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}

.nav a:hover {
  color: #e74c3c;
}

/* Hero Section */
.hero {
  position: relative;
  height: 80vh;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 2rem;
  border-radius: 8px;
}

.hero-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #c0392b;
}

/* Destinations Section */
.destinations {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.destinations h2 {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.destination-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.destination-card {
  flex: 1 1 30%;
  background-color: white;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  text-align: center;
}

.destination-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.destination-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.destination-card p {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #555555;
}

/* Tours Section */
.tours {
  padding: 4rem 0;
}

.tours h2 {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.tour-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.tour-card {
  flex: 1 1 30%;
  background-color: white;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  text-align: center;
}

.tour-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.tour-card p {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #555555;
  margin-bottom: 1rem;
}

/* About Section */
.about {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.about h2 {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.about p {
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #555555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Contact Section */
.contact {
  padding: 4rem 0;
}

.contact h2 {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

#contact-form input, #contact-form textarea {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
}

#contact-form button {
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#contact-form button:hover {
  background-color: #c0392b;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
}

.footer p {
  font-family: 'Lato', sans-serif;
  text-align: center;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-links a {
  color: white;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
}

.social-links a:hover {
  color: #e74c3c;
}