const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("✅ Message sent successfully!");
    form.reset();
  } else {
    alert("❌ Oops! Something went wrong. Please try again later.");
  }
});
