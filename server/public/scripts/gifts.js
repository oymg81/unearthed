//const main = document.querySelector('main')

/*const message = document.createElement('h2')
message.textContent = "Welcome to UnEarthed"*/

//main.appendChild(message)

/**
 * scripts/gifts.js
 * This file is ONLY for the Home page (index.html).
 * It fetches the gifts from the backend and creates the gift cards dynamically.
 */

const renderGifts = async () => {
  // 1) Fetch gifts from the server (Vite proxy forwards /gifts to http://localhost:3001/gifts)
  const response = await fetch("/gifts");

  // Debug info
  console.log("status:", response.status);
  console.log("content-type:", response.headers.get("content-type"));

  // 2) Parse JSON response
  const data = await response.json();

  // 3) Get the container where cards will be inserted
  const mainContent = document.getElementById("main-content");

  // Safety check
  if (!mainContent) return;

  // Clear existing cards (in case it runs again)
  mainContent.innerHTML = "";

  // 4) If we have gifts, build cards
  if (data && data.length > 0) {
    data.forEach((gift) => {
      // Card wrapper
      const card = document.createElement("div");
      card.classList.add("card");

      // Top container (image area)
      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      // Set background image
      // NOTE: Some image URLs (like certain Amazon links) may fail with 400 due to hotlink protection.
      topContainer.style.backgroundImage = `url(${gift.image})`;

      // Bottom container (text area)
      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      // Gift name
      const name = document.createElement("h3");
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      // Price
      const price = document.createElement("p");
      price.textContent = `Price: ${gift.pricePoint}`;
      bottomContainer.appendChild(price);

      // Audience
      const audience = document.createElement("p");
      audience.textContent = `Great For: ${gift.audience}`;
      bottomContainer.appendChild(audience);

      // Link to detail page (gift.html reads the query string ?id=)
      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.href = `/gift.html?id=${gift.id}`;
      link.role = "button";
      bottomContainer.appendChild(link);

      // Assemble the card
      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      // Add card to the page
      mainContent.appendChild(card);
    });
  } else {
    // 5) If no gifts found, show a message
    const h2 = document.createElement("h2");
    h2.textContent = "No Gifts Available 😞";
    mainContent.appendChild(h2);
  }
};

/**
 * Step 10 (404 behavior):
 * - Only render gifts when user is on the HOME page.
 * - If user navigates to an invalid URL (like /abc), redirect to 404.html
 *
 * The lab suggests grabbing the part after the last "/".
 */
const requestedUrl = window.location.href.split("/").pop();

/**
 * Home page cases:
 * - http://localhost:5173/  -> requestedUrl === ""  (falsy)
 * - http://localhost:5173   -> requestedUrl may be "5173" depending on browser (rare)
 * - http://localhost:5173/index.html -> requestedUrl === "index.html" (should be treated as home)
 */
if (requestedUrl && requestedUrl !== "" && requestedUrl !== "index.html") {
  // If there is something after the last "/", it's NOT the home page -> send to 404
  window.location.href = "/404.html";
} else {
  // Otherwise, we're on home -> render gifts
  renderGifts();
}