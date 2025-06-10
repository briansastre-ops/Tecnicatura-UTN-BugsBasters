const teamMembers = [
  {
    id: 1,
    name: "Brian Sastre",
    role: "Front-End Developer | Técnico Electromecánico",
    bio: "PERFIL DESTACADO: Soy Técnico Electromecánico con un fuerte interés en el Front-End y una sólida formación en programación. Mi experiencia académica en la Escuela Técnica N° 2 Francisco Ramírez y mi continuo compromiso con el aprendizaje me han preparado para enfrentar desafíos en el desarrollo web. Soy proactivo, creativo y orientado a resultados, con habilidades avanzadas en React y TypeScript.",
    skills: [
      "React", "TypeScript", "HTML", "CSS", "JavaScript", "Python", "Flask",
      "Accesibilidad Web", "Unit Testing", "Next.js", "SQL"
    ],
    softSkills: [
      "Comunicación efectiva", "Trabajo en equipo", "Adaptabilidad", "Capacidad de aprendizaje rápido"
    ],
    avatar: "BS",
    portfolio: "https://briansastre-portfolio.vercel.app/",
    projects: [
      {
        name: "Travel App",
        description: "Desarrollé una aplicación web para planificar viajes, destacando el enmaquetado de una App de Campamentos y Viajes."
      },
      {
        name: "Full Responsive Web Application",
        description: "Creé una aplicación web completamente responsive utilizando HTML, CSS y JavaScript. El proyecto incluyó diseño adaptativo y desarrollo para garantizar una experiencia de usuario fluida en todos los dispositivos."
      },
      {
        name: "Inventory Management System",
        description: "Desarrollé un sistema de gestión de inventario utilizando Python y Flask, con una base de datos SQL. Permite seguimiento eficiente del inventario, administración de productos y generación de informes detallados."
      }
    ],
    experience: "Formación profesional y práctica en desarrollo web, especializado en Front-End y aplicaciones responsive con énfasis en React y TypeScript.",
    education: `Escuela Técnica N° 2 Francisco Ramírez, Concepción del Uruguay (Técnico Electromecánico, Marzo 2014 - Diciembre 2022)
Codo a Codo 4.0, Ciudad de Buenos Aires (Full Stack Python, Abril 2024 - Julio 2024)`,
    hardSkills: [
      "Curso Profesional Desarrollo Web",
      "Curso de CSS",
      "Curso Profesional de JavaScript",
      "Curso de JavaScript y el DOM",
      "Curso de Controles y Efectos Frontend",
      "Curso Profesional de React (Legado)",
      "Curso de Accesibilidad Web",
      "Estilos en React - Bootcamp de React g2",
      "React en Producción - Bootcamp de React g2",
      "Curso de Manejo de Estado en React",
      "Curso de Unit Testing en React",
      "Curso para Crear Single Page Applications con React",
      "Curso de React con TypeScript",
      "Taller de Introducción a Next.js",
      "JavaScript Moderno y Programación Funcional - Bootcamp de React",
      "Fundamentos de JavaScript - Bootcamp de React g2",
      "Qué Hace Realmente un Frontend - Bootcamp Frontend",
      "Fundamentos del Lenguaje - Bootcamp de JavaScript",
      "Fundamentos de HTML y CSS - Bootcamp de Frontend",
      "Curso de React con Ejercicios Prácticos",
      "Programación Asíncrona - Bootcamp de JavaScript",
      "Sintaxis Moderna del Lenguaje - Bootcamp de JavaScript",
      "Manejo del DOM - Bootcamp de JavaScript",
      "Eventos - Bootcamp de JavaScript",
      "Web APIs Fundamentales - Bootcamp de JavaScript",
      "Formularios y Validaciones - Bootcamp de JavaScript"
    ],
    contact: "briansastre-portfolio.vercel.app"
  },
  {
    id: 2,
    name: "María Candelaria Ribotta",
    role: "Estudiante de Tecnicatura en Programación",
    bio: "Tengo 18 años, me egresé de la escuela Centro Polivalente de Arte (CPA) en el año 2024. Actualmente estudio la Tecnicatura en Programación en la Universidad Tecnológica Nacional (UTN), apasionada por el aprendizaje y las nuevas tecnologías.",
    skills: [
      "HTML", "CSS", "Python", "Java", "JavaScript", "Pseint", "Git Bash"
    ],
    softSkills: [
      "Responsabilidad", "Aprendizaje rápido", "Creatividad", "Trabajo en equipo"
    ],
    avatar: "MR",
    github: "https://github.com/ribcande13",
    linkedin: "https://www.linkedin.com/in/candelaria-ribotta-072b9736a",
    contact: "candelariaribotta385@gmail.com",
    projects: [
      {
        name: "Portfolio Personal",
        description: "Desarrollo y mantenimiento de portafolio personal para presentar habilidades y proyectos en programación y diseño web."
      }
    ],
    experience: "Formación académica en programación y desarrollo web. Participación en proyectos educativos y personales, aplicando conocimientos en HTML, CSS, Python, Java y JavaScript.",
    education: `Centro Polivalente de Arte (CPA), Egresada 2024.\nTecnicatura en Programación, Universidad Tecnológica Nacional (UTN), En curso.`,
    hardSkills: [
      "HTML", "CSS", "Python", "Java", "JavaScript", "Pseint", "Git Bash"
    ]
  },
  {
    id: 3,
    name: "Tobías Carbajal",
    role: "Estudiante de Tecnicatura en Sistemas y Desarrollador Web/App",
    bio: "Vivo en San Rafael, Mendoza. Llevo 1 año programando e informándome sobre el desarrollo de aplicaciones y sitios web. Actualmente estudio la Tecnicatura en Sistemas en UTN San Rafael. Apasionado por aprender y crear soluciones digitales.",
    skills: [
      "HTML", "CSS", "Java", "Python"
    ],
    softSkills: [
      "Trabajo en equipo", "Aprendizaje continuo", "Responsabilidad", "Proactividad"
    ],
    avatar: "TC",
    github: "",
    linkedin: "",
    contact: "Tobycarbajal43@gmail.com",
    projects: [
      {
        name: "Desarrollo de Aplicaciones",
        description: "Participación en cursos y proyectos de desarrollo de aplicaciones, aplicando conocimientos de Java y Python."
      },
      {
        name: "Desarrollo Web",
        description: "Creación de sitios web personales y educativos aplicando HTML y CSS, enfocado en el aprendizaje de buenas prácticas y diseño responsivo."
      }
    ],
    experience: "1 año programando e investigando sobre el desarrollo web y de aplicaciones, participando en cursos y proyectos personales.",
    education: `Secundario: Colegio del Carmen, egresado.\nTecnicatura en Sistemas, UTN San Rafael, en curso.`,
    hardSkills: [
      "HTML", "CSS", "Java", "Python", "Desarrollo de Apps", "Desarrollo Web"
    ]
  },
  {
    id: 4,
    name: "Elena Díaz",
    role: "Ingeniera DevOps",
    bio: "Experta en DevOps enfocada en automatización, pipelines CI/CD e infraestructura en la nube. Especializada en Python para automatización.",
    skills: ["Python", "Docker", "Jenkins", "AWS", "Automatización"],
    avatar: "ED",
    projects: [
      {
        name: "Pipeline CI/CD",
        description:
          "Implementó pipeline de despliegue automatizado para múltiples proyectos, reduciendo el tiempo de despliegue en 80% y eliminando errores manuales a través de automatización integral de pruebas.",
      },
      {
        name: "Infraestructura como Código",
        description:
          "Diseñó infraestructura en la nube usando herramientas de automatización, permitiendo despliegues consistentes y reproducibles en múltiples entornos con escalado y monitoreo automatizado.",
      },
    ],
    experience:
      "4+ años en DevOps y computación en la nube, especializándose en automatización, gestión de infraestructura y monitoreo de rendimiento para aplicaciones empresariales.",
    education:
      "Licenciatura en Sistemas de Información de la Universidad Estatal, con certificaciones de AWS y Kubernetes.",
  },
  {
    id: 5,
    name: "Carlos Mendoza",
    role: "Desarrollador Frontend",
    bio: "Especialista en desarrollo frontend con experiencia en crear interfaces de usuario modernas y responsivas usando HTML, CSS y JavaScript.",
    skills: ["JavaScript", "HTML", "CSS", "React", "Vue.js"],
    avatar: "CM",
    projects: [
      {
        name: "Aplicación de Fitness",
        description:
          "Desarrolló una app web de seguimiento de fitness con interfaz moderna, características sociales y recomendaciones personalizadas de ejercicios usando algoritmos de machine learning.",
      },
      {
        name: "Plataforma Social",
        description:
          "Construyó una plataforma social móvil con características avanzadas de mensajería, notificaciones en tiempo real y capacidades de compartir multimedia sin problemas.",
      },
    ],
    experience:
      "3+ años en desarrollo frontend, especializándose en soluciones multiplataforma y optimización de rendimiento para aplicaciones web modernas.",
    education:
      "Licenciatura en Desarrollo Web de la Universidad Digital, con certificaciones en desarrollo de interfaces de usuario modernas.",
  }
]

// === Cargar perfil del miembro ===
function loadMemberProfile() {
  // Obtener ID del miembro de los parámetros de URL
  const urlParams = new URLSearchParams(window.location.search)
  const memberId = Number.parseInt(urlParams.get("id"))

  // Buscar siempre en teamMembers (nunca en localStorage)
  let member = teamMembers.find((m) => m.id === memberId)

  if (!member) {
    // Redirigir a inicio si no se encuentra el miembro
    window.location.href = "index.html"
    return
  }

  // Poblar información del perfil
  document.getElementById("profileAvatar").textContent = member.avatar
  document.getElementById("profileName").textContent = member.name
  document.getElementById("profileRole").textContent = member.role
  document.getElementById("profileBio").textContent = member.bio
  document.getElementById("profileExperience").textContent = member.experience
  document.getElementById("profileEducation").textContent = member.education

  // Poblar habilidades
  const skillsList = document.getElementById("skillsList")
  skillsList.innerHTML = member.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")

  // Poblar proyectos
  const projectsList = document.getElementById("projectsList")
  projectsList.innerHTML = member.projects
    .map(
      (project) => `
    <div class="project-item">
      <h4>${project.name}</h4>
      <p>${project.description}</p>
    </div>
  `,
    )
    .join("")

  // Actualizar título de la página
  document.title = `${member.name} - Portafolio BugsBaster`
}

// Inicializar página de perfil
document.addEventListener("DOMContentLoaded", () => {
  // Si existe la sección de perfil, cargar el perfil
  if (document.getElementById("profileAvatar")) {
    loadMemberProfile()
  }

  // ==== CÓDIGO PARA EL CARRUSEL DINÁMICO DE INTEGRANTES ====
  // Solo si existe el carrusel
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselIndicators = document.getElementById("carouselIndicators");
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carouselTrack && carouselIndicators && prevBtn && nextBtn) {
    // 1. Filtrar duplicados y mantener el orden original de teamMembers
    const uniqueMembers = [];
    const seenIds = new Set();
    for (const m of teamMembers) {
      if (!seenIds.has(m.id)) {
        uniqueMembers.push(m);
        seenIds.add(m.id);
      }
    }

    // 2. Renderizar las tarjetas de integrantes en el carrusel
    carouselTrack.innerHTML = uniqueMembers.map((member, idx) => `
      <div class="carousel-card" data-index="${idx}">
        <div class="member-avatar">${member.avatar}</div>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <p class="member-bio">${member.bio}</p>
        <div class="member-skills">
          ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <a href="profile.html?id=${member.id}" class="profile-link">Ver perfil</a>
      </div>
    `).join("");

    // 3. Renderizar los indicadores
    carouselIndicators.innerHTML = uniqueMembers.map((_, idx) => `
      <span class="indicator${idx === 0 ? " active" : ""}" data-index="${idx}"></span>
    `).join("");

    // 4. Lógica básica del carrusel
    let currentIndex = 0;
    const updateCarousel = () => {
      carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((dot, idx) =>
        dot.classList.toggle('active', idx === currentIndex)
      );
    };
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + uniqueMembers.length) % uniqueMembers.length;
      updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % uniqueMembers.length;
      updateCarousel();
    });
    document.querySelectorAll('.indicator').forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateCarousel();
      });
    });

    // Inicializa la posición del carrusel
    updateCarousel();
  }
  // ==== FIN DEL CÓDIGO PARA EL CARRUSEL ====

})

// Agregar efecto de scroll al header (igual que la página principal)
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
    }
  }
})