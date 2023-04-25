const send = document.querySelector(".send");
const inputName = document.getElementById("name");
const inputCell = document.getElementById("telefone");
const inputEmail = document.getElementById("email");
const inputTextarea = document.getElementById("message");

send.addEventListener('click', () => {
  if (inputName.value == "" || inputCell.value == "" || inputEmail.value == "" || inputTextarea.value == "" || !inputName.value || !inputCell.value || !inputEmail.value || !inputTextarea.value) {
    return Toastify({
      text: "Preencha todos os campos",
      duration: 1500,
      className: "info",
      style: {
        background: "red",
        borderRadius: "8px"
      }
    }).showToast();
  } else {
    document.querySelector(".form").submit();
    Toastify({
      text: "Mensagem enviada com sucesso",
      duration: 1500,
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        borderRadius: "8px"
      }
    }).showToast();
  }
});

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Adiciona sombra no header ao dar scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials slider usando swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonals,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

/* menu ativo conforme a seção visível */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint =
    window.pageYOffset +
    (window.innerHeight / 8) *
    4 /* número encontrado por testes de força bruta */
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})
