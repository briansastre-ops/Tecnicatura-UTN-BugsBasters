// Datos de miembros
const teamMembers = [
  {
    id: 1,
    name: "Brian Sastre",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "BS",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 2,
    name: "Lourdes Eschler",
    role: "Desarrolladora",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "LE",
    projects: [],
    experience: "Desarrolladora en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 3,
    name: "Tobías Carbajal",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "TC",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 4,
    name: "Cristian Rosas",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "CR",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 5,
    name: "Tomas Brachmann",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "TB",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 6,
    name: "Tobias Carbajal",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "TC",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 7,
    name: "Darian Ravalle",
    role: "Desarrollador",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "DR",
    projects: [],
    experience: "Desarrollador en formación",
    education: "Tecnicatura UTN"
  },
  {
    id: 8,
    name: "Candelaria Ribotta",
    role: "Desarrolladora",
    bio: "Miembro del equipo BugsBaster",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    avatar: "CR",
    projects: [],
    experience: "Desarrolladora en formación",
    education: "Tecnicatura UTN"
  }
];

// ========================== PERFIL ==========================

function loadMemberProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = Number.parseInt(urlParams.get("id"));
  const member = teamMembers.find(m => m.id === memberId);

  if (!member) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("profileAvatar").textContent = member.avatar;
  document.getElementById("profileName").textContent = member.name;
  document.getElementById("profileRole").textContent = member.role;
  document.getElementById("profileBio").textContent = member.bio;
  document.getElementById("profileExperience").textContent = member.experience;
  document.getElementById("profileEducation").textContent = member.education;

  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("");

  const projectsList = document.getElementById("projectsList");
  projectsList.innerHTML = member.projects.length > 0
    ? member.projects.map(project => `
        <div class="project-item">
          <h4>${project.name}</h4>
          <p>${project.description}</p>
        </div>
      `).join("")
    : "<p>Sin proyectos asignados.</p>";

  document.title = `${member.name} - Portafolio BugsBaster`;
}

// ========================== CARRUSEL ==========================

let currentSlide = 0;

function initCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselIndicators = document.getElementById("carouselIndicators");
  if (!carouselTrack || !carouselIndicators) return;

  carouselTrack.innerHTML = "";
  carouselIndicators.innerHTML = "";

  teamMembers.forEach((member, index) => {
    const card = createMemberCard(member);
    carouselTrack.appendChild(card);

    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    carouselIndicators.appendChild(indicator);
  });

  document.getElementById("prevBtn")?.addEventListener("click", prevSlide);
  document.getElementById("nextBtn")?.addEventListener("click", nextSlide);

  setInterval(nextSlide, 5000);
}

function createMemberCard(member) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.innerHTML = `
    <div class="member-avatar">${member.avatar}</div>
    <h3 class="member-name">${member.name}</h3>
    <p class="member-role">${member.role}</p>
    <p class="member-bio">${member.bio}</p>
    <div class="member-skills">
      ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}
    </div>
    <button class="view-profile-btn" onclick="viewProfile(${member.id})">
      Ver Perfil Completo
    </button>
  `;
  return card;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % teamMembers.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + teamMembers.length) % teamMembers.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const indicators = document.querySelectorAll(".indicator");

  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((ind, i) => {
    ind.classList.toggle("active", i === currentSlide);
  });
}

function viewProfile(memberId) {
  window.location.href = `profile.html?id=${memberId}`;
}

// ========================== OTROS EFECTOS ==========================

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

function scrollHeaderEffect() {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
}

// ========================== INICIALIZACIÓN ==========================

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("carouselTrack")) {
    initCarousel();
  }
  if (document.getElementById("profileAvatar")) {
    loadMemberProfile();
  }
  initSmoothScrolling();
  initMobileNav();
});

window.addEventListener("scroll", scrollHeaderEffect);
