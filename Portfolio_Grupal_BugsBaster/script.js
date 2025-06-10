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
      name: "Lucas Alexis Rios",
      role: "Desarrollador",
      bio: "Miembro del equipo BugsBaster",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
      avatar: "LR",
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
      id: 7,
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
      id: 8,
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
      id: 9,
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

// Funcionalidad del carrusel
let currentSlide = 0;
const totalSlides = teamMembers.length;

// Inicializar carrusel
function initCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselIndicators = document.getElementById("carouselIndicators");

  // Crear tarjetas de miembros
  teamMembers.forEach((member, index) => {
    const memberCard = createMemberCard(member);
    carouselTrack.appendChild(memberCard);

    // Crear indicador
    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    carouselIndicators.appendChild(indicator);
  });

  // Agregar event listeners
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  // Auto-reproducir carrusel
  setInterval(nextSlide, 5000);
}

// Crear tarjeta de miembro
function createMemberCard(member) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.innerHTML = `
      <div class="member-avatar">${member.avatar}</div>
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <p class="member-bio">${member.bio}</p>
      <div class="member-skills">
          ${member.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
      </div>
      <button class="view-profile-btn" onclick="viewProfile(${member.id})">
          Ver Perfil Completo
      </button>
  `;
  return card;
}

// Funciones de navegación
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  const indicators = document.querySelectorAll(".indicator");

  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

// Función ver perfil
function viewProfile(memberId) {
  const member = teamMembers.find((m) => m.id === memberId);
  if (member) {
    // Almacenar datos del miembro en localStorage para la página de perfil
    localStorage.setItem("selectedMember", JSON.stringify(member));
    // Navegar a la página de perfil
    window.location.href = `profile.html?id=${memberId}`;
  }
}

// Desplazamiento suave para enlaces de navegación
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Navegación móvil toggle
function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initSmoothScrolling();
  initMobileNav();
});

// Agregar efecto de scroll al header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
});
  