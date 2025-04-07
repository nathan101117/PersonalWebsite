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

  const descriptions = {
    "MyFundi Platform": "MyFundi is a full-stack job connection platform that links clients with artisans. It includes user authentication, wallet integration, payment splitting logic, and admin dashboards. Built with React, Node.js, and MongoDB.",
    "Portfolio Website": "This site you're browsing! A fully responsive personal portfolio using HTML5, CSS3, and JavaScript, showcasing projects and blog posts with interactive features and dark mode."
  };

  document.getElementById("modalDesc").textContent = descriptions[title] || "More information about the selected project will go here.";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

const blogData = [
  {
    title: "Welcome to My Portfolio",
    content: "This blog is a space where I share insights, reflections, and lessons I've learned on my journey as a developer, student, and innovator. Thanks for stopping by!"
  },
  {
    title: "Building MyFundi: From Concept to Code",
    content: "MyFundi started as a simple idea — to connect artisans with clients more efficiently. I designed it as a full-stack platform using React, Node.js, and MongoDB. Features include real-time job tracking, payment splitting, and a wallet system. The project taught me the importance of planning, UI/UX, and working with complex backend logic."
  },
  {
    title: "Balancing Tech & Studies at USIU",
    content: "As a 4th-year student at USIU, managing time between school and coding projects hasn’t been easy. But it’s helped me master productivity and focus. I’ve learned that consistent effort > burnout sprints — and making time to rest is just as important."
  },
  {
    title: "Dark Mode in JavaScript — The Easy Way",
    content: "Want to build a light/dark theme switcher in JavaScript? It's easier than you think. Use `classList.toggle('dark')`, store preferences in `localStorage`, and you’ve got a beautiful, accessible theme toggle."
  },
  {
    title: "Debugging Like a Pro",
    content: "The best tool in your dev belt? `console.log()`. Seriously. But also — use breakpoints, `try/catch`, and browser DevTools to inspect the DOM, track performance, and crush bugs faster."
  },
  {
    title: "Future Plans After Graduation",
    content: "After USIU, I’m aiming to join a forward-thinking dev team, sharpen my full-stack skills, and eventually build SaaS tools that solve real African problems — especially in tech education and e-commerce."
  }
];
renderBlogPosts();

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
