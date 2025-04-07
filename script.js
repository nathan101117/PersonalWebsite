// Greeting
function setGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");
  greeting.textContent = hour < 12
    ? "Good Morning!"
    : hour < 18
    ? "Good Afternoon!"
    : "Good Evening!";
}
setGreeting();

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Scrollspy
document.addEventListener("scroll", () => {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      links.forEach(link => link.classList.remove("active"));
      document.querySelector(`a[href="#${section.id}"]`).classList.add("active");
    }
  });
});

// Portfolio filter
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(p => {
    p.style.display = category === "all" || p.classList.contains(category) ? "block" : "none";
  });
}

// Modal
function openModal(title) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalTitle").textContent = title;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Blog
const blogData = [
  { title: "Welcome Post", content: "Hey there! Thanks for visiting." },
  { title: "CSS Grid vs Flexbox", content: "Let’s compare two layout systems." },
  { title: "Debugging JS", content: "Console.log is your best friend." }
];
function renderBlogPosts(data = blogData) {
  const container = document.getElementById("blogPosts");
  container.innerHTML = data.map(post => `<h3>${post.title}</h3><p>${post.content}</p>`).join('');
}
renderBlogPosts();
document.getElementById("blogSearch").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = blogData.filter(post => post.title.toLowerCase().includes(val));
  renderBlogPosts(filtered);
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) return alert("All fields are required.");
  if (!/\S+@\S+\.\S+/.test(email)) return alert("Invalid email.");
  alert("Message sent successfully!");
});
