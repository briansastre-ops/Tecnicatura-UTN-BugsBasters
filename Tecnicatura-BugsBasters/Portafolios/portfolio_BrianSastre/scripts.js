// Menú hamburguesa
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Navbar transparente al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(26, 26, 26, 0.98)"
  } else {
    navbar.style.background = "rgba(26, 26, 26, 0.95)"
  }
})

// Animación de aparición de elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observar elementos para animación
document.querySelectorAll(".project-card, .skill-category, .about-content, .contact-content").forEach((el) => {
  observer.observe(el)
})

// Efecto de escritura en el título
const heroTitle = document.querySelector(".hero-title")
if (heroTitle) {
  const text = heroTitle.innerHTML
  heroTitle.innerHTML = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Iniciar efecto después de un pequeño delay
  setTimeout(typeWriter, 500)
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Formulario de contacto
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando EmailJS o una API

    // Simulación de envío exitoso
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Enviando..."
    submitBtn.disabled = true

    setTimeout(() => {
      submitBtn.textContent = "¡Mensaje Enviado!"
      submitBtn.style.background = "var(--accent-secondary)"

      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
        contactForm.reset()
      }, 2000)
    }, 1000)
  })
}

// Efecto parallax sutil en el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroVisual = document.querySelector(".hero-visual")
  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`
  }
})

// Contador animado para las estadísticas
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
    const suffix = counter.textContent.replace(/\d/g, "")
    let current = 0
    const increment = target / 50

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current) + suffix
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target + suffix
      }
    }

    updateCounter()
  })
}

// Activar contador cuando la sección sea visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters()
      statsObserver.unobserve(entry.target)
    }
  })
})

const aboutSection = document.querySelector(".about")
if (aboutSection) {
  statsObserver.observe(aboutSection)
}

// Efecto de hover en las habilidades
document.querySelectorAll(".skill-item").forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skill.style.transform = "translateY(-10px) scale(1.05)"
  })

  skill.addEventListener("mouseleave", () => {
    skill.style.transform = "translateY(0) scale(1)"
  })
})

// Cambio de tema (opcional - para futuras mejoras)
const createThemeToggle = () => {
  const themeToggle = document.createElement("button")
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
  themeToggle.className = "theme-toggle"
  themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        border: none;
        color: var(--primary-bg);
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        box-shadow: var(--shadow);
    `

  document.body.appendChild(themeToggle)

  themeToggle.addEventListener("click", () => {
    // Lógica para cambiar tema (implementar según necesidades)
    console.log("Cambio de tema - Funcionalidad por implementar")
  })
}

// Inicializar toggle de tema
// createThemeToggle();

console.log("🚀 Portafolio cargado correctamente")
