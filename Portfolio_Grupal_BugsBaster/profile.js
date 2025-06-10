const teamMembers = [
  {
    "id": 1,
    "name": "Tobías Carbajal",
    "role": "Desarrollador Web y de Aplicaciones",
    "bio": "Apasionado por el desarrollo de aplicaciones web y móviles. Con conocimientos en CSS, HTML, JavaScript, Java y Python. Actualmente formándose como Técnico en Sistemas.",
    "skills": ["HTML", "CSS", "JavaScript", "Java", "Python"],
    "avatar": "TC",
    "projects": [
      {
        "name": "Sitio Web de Presentación Personal",
        "description":
          "Diseñó y programó un sitio web responsive como portafolio personal, aplicando HTML, CSS y JavaScript."
      }
    ],
    "experience": "1 año de experiencia aprendiendo y practicando programación, con proyectos personales y cursos especializados en desarrollo web y de aplicaciones.",
    "education": "Estudiante de la Tecnicatura en Sistemas en UTN San Rafael. Egresado del Colegio del Carmen en nivel secundario.",
    "contact": "Tobycarbajal43@gmail.com"
  },
    {
      id: 2,
      name: "Sofia Martínez",
      role: "Diseñadora UI/UX",
      bio: "Diseñadora creativa enfocada en principios de diseño centrado en el usuario. Experta en crear interfaces intuitivas con HTML y CSS.",
      skills: ["HTML", "CSS", "JavaScript", "Figma", "Diseño Responsivo"],
      avatar: "SM",
      projects: [
        {
          name: "App Bancaria Móvil",
          description:
            "Diseñó la interfaz de usuario para una aplicación bancaria segura, realizando investigación extensiva de usuarios y pruebas de usabilidad para asegurar una experiencia óptima.",
        },
        {
          name: "Dashboard de Salud",
          description:
            "Creó un panel intuitivo para profesionales de la salud, enfocándose en visualización de datos y optimización de flujo de trabajo para mejorar la eficiencia en el cuidado de pacientes.",
        },
      ],
      experience:
        "4+ años en diseño UI/UX, especializándose en aplicaciones móviles e interfaces complejas de visualización de datos para varias industrias.",
      education:
        "Maestría en Diseño y Comunicación Visual del Instituto de Arte, con certificación adicional en Interacción Humano-Computadora.",
    },
    {
      id: 3,
      name: "Miguel Rodríguez",
      role: "Desarrollador Backend",
      bio: "Especialista en backend con experiencia en construcción de APIs robustas y sistemas de bases de datos usando Java y Python.",
      skills: ["Java", "Python", "Spring Boot", "PostgreSQL", "APIs REST"],
      avatar: "MR",
      projects: [
        {
          name: "Arquitectura de Microservicios",
          description:
            "Diseñó e implementó un sistema escalable de microservicios que maneja millones de solicitudes diarias, con enfoque en tolerancia a fallos y optimización de rendimiento.",
        },
        {
          name: "API de Chat en Tiempo Real",
          description:
            "Construyó un sistema de mensajería de alto rendimiento que soporta miles de usuarios concurrentes con características avanzadas como encriptación de mensajes y compartir archivos.",
        },
      ],
      experience:
        "5+ años en desarrollo backend, con experiencia en sistemas distribuidos, diseño de APIs y optimización de bases de datos para aplicaciones de alto tráfico.",
      education:
        "Licenciatura en Ingeniería de Software de la Universidad Tecnológica, con certificaciones adicionales en arquitectura en la nube y seguridad.",
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
    },
    
    {
      "id": 6,
      "name": "Tobías Carbajal",
      "role": "Desarrollador Web y de Aplicaciones",
      "bio": "Apasionado por el desarrollo de aplicaciones web y móviles. Con conocimientos en CSS, HTML, JavaScript, Java y Python. Actualmente formándose como Técnico en Sistemas.",
      "skills": ["HTML", "CSS", "JavaScript", "Java", "Python"],
      "avatar": "TC",
      "projects": [
        {
          "name": "Sitio Web de Presentación Personal",
          "description":
            "Diseñó y programó un sitio web responsive como portafolio personal, aplicando HTML, CSS y JavaScript."
        }
      ],
      "experience": "1 año de experiencia aprendiendo y practicando programación, con proyectos personales y cursos especializados en desarrollo web y de aplicaciones.",
      "education": "Estudiante de la Tecnicatura en Sistemas en UTN San Rafael. Egresado del Colegio del Carmen en nivel secundario.",
      "contact": "Tobycarbajal43@gmail.com"
    },
  ]
  
  // Cargar perfil del miembro
  function loadMemberProfile() {
    // Obtener ID del miembro de los parámetros de URL
    const urlParams = new URLSearchParams(window.location.search)
    const memberId = Number.parseInt(urlParams.get("id"))
  
    // Intentar obtener datos del miembro de localStorage primero, luego del array
    let member = null
    const storedMember = localStorage.getItem("selectedMember")
  
    if (storedMember) {
      member = JSON.parse(storedMember)
    } else {
      member = teamMembers.find((m) => m.id === memberId)
    }
  
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
    loadMemberProfile()
  
    // Limpiar datos almacenados del miembro después de cargar
    localStorage.removeItem("selectedMember")
  })
  
  // Agregar efecto de scroll al header (igual que la página principal)
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })
  