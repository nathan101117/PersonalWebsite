// Greeting
function setGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");
  if (hour < 12) greeting.textContent = "Good Morning!";
  else if (hour < 18) greeting.textContent = "Good Afternoon!";
  else greeting.textContent = "Good Evening!";
}
setGreeting();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Portfolio Filter
function filterProjects(category) {
  const items = document.querySelectorAll(".project-item");
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Blog Posts
const blogData = [
  { title: "My First Blog Post", content: "Welcome to my blog!" },
  { title: "JavaScript Tips", content: "Use let/const instead of var." },
  { title: "Responsive Design", content: "Flexbox and Grid are awesome!" },
];
function renderBlogPosts() {
  const blogPosts = document.getElementById("blogPosts");
  blogPosts.innerHTML = "";
  blogData.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    blogPosts.appendChild(div);
  });
}
renderBlogPosts();
document.getElementById("blogSearch").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = blogData.filter(post => post.title.toLowerCase().includes(val));
  document.getElementById("blogPosts").innerHTML = filtered.map(p => `<h3>${p.title}</h3><p>${p.content}</p>`).join('');
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }
  alert("Message sent successfully!");
});
