<script>
  import emailjs from 'emailjs-com'
  import { register } from 'swiper/element/bundle'
  register()
  import Cursor from './components/AppCursor.vue'
  import Loader from './components/AppLoading.vue'
  import ScrollToTop from './components/ScrollToTop.vue'
  import FacebookIcon from './components/icons/FacebookIcon.vue'
  import LinkedinIcon from './components/icons/LinkedincIcon.vue'
  import GithubIcon from './components/icons/GithubIcon.vue'
  import EmailIcon from './components/icons/EmailIcon.vue'
  import ArrowRightIcon from './components/icons/ArrowRightIcon.vue'
  import BootstrapIcon from './components/icons/skills/BootstrapIcon.vue'
  import CssIcon from './components/icons/skills/CssIcon.vue'
  import HtmlIcon from './components/icons/skills/HtmlIcon.vue'
  import JiraIcon from './components/icons/skills/JiraIcon.vue'
  import JsIcon from './components/icons/skills/JsIcon.vue'
  import ReactIcon from './components/icons/skills/ReactIcon.vue'
  import TailwindcssIcon from './components/icons/skills/TailwindcssIcon.vue'
  import UxIcon from './components/icons/skills/UxIcon.vue'
  import VueIcon from './components/icons/skills/VueIcon.vue'
  import StarIcon from './components/icons/StarIcon.vue'
  import CopyrightIcon from './components/icons/CopyrightIcon.vue'
  import MenuIcon from './components/icons/MenuIcon.vue'

  export default {
    components: {
      Cursor,
      Loader,
      ScrollToTop,
      FacebookIcon,
      LinkedinIcon,
      GithubIcon,
      EmailIcon,
      ArrowRightIcon,
      BootstrapIcon,
      CssIcon,
      HtmlIcon,
      JiraIcon,
      JsIcon,
      ReactIcon,
      TailwindcssIcon,
      UxIcon,
      VueIcon,
      StarIcon,
      CopyrightIcon,
      MenuIcon
    },
    data() {
      return {
        loading: true,
        experiences: [
          {
            period: '04/21 - Present',
            company: 'Protect',
            role: 'Front End Engineer',
            link: 'https://protect.inc'
          },
          {
            period: '04/21 - Present',
            company: 'Le ventures',
            role: 'Front End Engineer',
            link: 'https://leventures.com'
          },
          {
            period: '08/18 - 04/21',
            company: 'YouCan',
            role: 'Front End Developer',
            link: 'https://youcan.shop/en'
          },
          {
            period: '03/17 - 08/18',
            company: 'Webdevia',
            role: 'Front End Developer',
            link: 'https://themeforest.net/user/mymoun/portfolio'
          }
        ],
        skills: [
          {
            title: 'React',
            icon: 'ReactIcon',
            progress: 80
          },
          {
            title: 'VueJs',
            icon: 'VueIcon',
            progress: 95
          },
          {
            title: 'Ux Design',
            icon: 'UxIcon',
            progress: 95
          },
          {
            title: 'Javascript',
            icon: 'JsIcon',
            progress: 95
          },
          {
            title: 'TailwindCss',
            icon: 'TailwindcssIcon',
            progress: 90
          },
          {
            title: 'HTML5',
            icon: 'HtmlIcon',
            progress: 100
          },
          {
            title: 'CSS3',
            icon: 'CssIcon',
            progress: 100
          },
          {
            title: 'Bootstrap',
            icon: 'BootstrapIcon',
            progress: 95
          },
          {
            title: 'Jira',
            icon: 'JiraIcon',
            progress: 90
          }
        ],
        services: [
          {
            letter: 'W',
            title: 'Web Development',
            description: 'Visual elements and interactive features of your website. Translate design mockups and wireframes into actual code using HTML, CSS, and JavaScript.'
          },
          {
            letter: 'R',
            title: 'Responsive Design',
            description: 'Ensuring that your website look and function well on different devices and screen sizes. Use techniques like media queries and flexible layouts to achieve responsive design.'
          },
          {
            letter: 'U',
            title: 'User Experience',
            description: 'Collaborate with UX designers to create a seamless and intuitive user experience. Implement interactive elements, animations, and transitions to enhance the user journey.'
          },
          {
            letter: 'C',
            title: 'Cross-Browser Compatibility',
            description: 'Ensure that your websites work consistently across different web browsers, addressing any compatibility issues that may arise.'
          },
          {
            letter: 'P',
            title: 'Performance Optimization',
            description: 'Optimizing the performance of your website to deliver a fast and smooth user experience. Optimize code, images, and assets to improve loading times and overall performance.'
          },
          {
            letter: 'F',
            title: 'Front-End Frameworks',
            description: 'Work with frameworks like React, and Vue.js to streamline development, manage state, and build interactive user interfaces.'
          },
          {
            letter: 'I',
            title: 'Integration With Back End',
            description: 'Work closely with back-end developers to integrate front-end code with back-end systems, APIs, and databases.'
          },
          {
            letter: 'T',
            title: 'Testing And Debugging',
            description: 'Use browser developer tools and testing frameworks to identify and resolve issues.'
          }
        ],
        projects: [
          {
            image: 'protect.webp',
            skills: ['VueJs', 'TailwindCss'],
            name: 'Protect',
            link: 'https://protect.inc'
          },
          {
            image: 'hypefury.webp',
            skills: ['VueJs', 'TailwindCss'],
            name: 'Hypefury',
            link: 'https://hypefury.com'
          },
          {
            image: 'youcan.webp',
            skills: ['React', 'TailwindCss'],
            name: 'YouCan',
            link: 'https://youcan.shop/en'
          },
          {
            image: 'apocalypsecoffee.webp',
            skills: ['Shopify'],
            name: 'Apocalypse Coffee',
            link: 'https://apocalypsecoffee.com'
          },
          {
            image: 'littlemass.webp',
            skills: ['Shopify'],
            name: 'Little Mass',
            link: 'https://littlemass.com'
          },
          {
            image: 'gear-aarmy.webp',
            skills: ['Shopify'],
            name: 'Aarmy',
            link: 'https://gear.aarmy.com'
          },
          {
            image: 'chouftv.webp',
            skills: ['HTML5', 'CSS3', 'Javascript'],
            name: 'Chouftv',
            link: 'https://chouftv.ma'
          },
          {
            image: 'medi1.webp',
            skills: ['VueJs', 'Nuxt'],
            name: 'Medi1',
            link: 'https://medi1.com'
          },
          {
            image: 'menara.webp',
            skills: ['VueJs', 'Nuxt'],
            name: 'Menara',
            link: 'https://menara.ma'
          },
          {
            image: 'rajesh.webp',
            skills: ['HTML5', 'CSS3', 'Javascript'],
            name: 'Rajesh',
            link: 'https://rajesh-personal-template.netlify.app'
          },
          {
            image: 'creativo.webp',
            skills: ['HTML5', 'CSS3', 'Javascript'],
            name: 'Creativo',
            link: 'https://creative-themes.netlify.app'
          },
          {
            image: 'fat2fit.webp',
            skills: ['HTML5', 'CSS3', 'Javascript'],
            name: 'Fat2Fit',
            link: 'https://fat2fit-theme.netlify.app'
          }
        ],
        testimonials: [
          {
            author: {
              name: 'Mohamed El Ghaissani',
              title: 'CEO & Co Founder, YouCan Inc.',
              image: 'elghissani-mohamed.jpeg'
            },
            quote: "Crafting captivating user experiences through code is not just a job for Othmane, it's a passion. With an expert command over front-end technologies, Othmane brings life to designs and transforms ideas into interactive digital realities. Creating seamless journeys for users. As a Front-end Engineer, Othmane illuminates the path where creativity and technology converge.",
            reviews: 5
          },
          {
            author: {
              name: 'Mohamed El Ghaissani',
              title: 'CEO & Co Founder, YouCan Inc.',
              image: 'elghissani-mohamed.jpeg'
            },
            quote: "Crafting captivating user experiences through code is not just a job for Othmane, it's a passion. With an expert command over front-end technologies, Othmane brings life to designs and transforms ideas into interactive digital realities. Creating seamless journeys for users. As a Front-end Engineer, Othmane illuminates the path where creativity and technology converge.",
            reviews: 5
          },
        ],
        form: {
          to_name: 'Othmane Gourirran',
          name: '',
          from_name: '',
          subject: '',
          message: ''
        },
        sended: false,
        emailResponse: {
          status: false,
          message: '',
          type: 'success'
        },
        isMenuCollapsed: false
      }
    },
    mounted() {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
      }
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 700
            }
          },
          "color": {
              "value": ["#fff", "#fff", "#fff", "#fff"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 15
            }
          },
          "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1.5,
              "opacity_min": 0.15,
              "sync": false
            }
          },
          "size": {
            "value": 2.5,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.15,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#F5C332",
            "opacity": 0.25,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    })
    },
    methods: {
      async sendMessage () {
        try {
          this.form.message = this.form.name + ' Sent you a message: ' + this.form.message + ' SUBJECT: ' + this.form.subject
          await emailjs.send(
            'service_3oky19f',
            'template_7rbi9c2',
            this.form,
            'eiHe9w7qd8lmbk6eQ'
          )
          this.sended = true
          this.emailResponse = {
            status: true,
            message: "Thank you for reaching out! I'll be in touch with you shortly.",
            type: 'success'
          }
          this.form = {
            to_name: 'Othmane Gourirran',
            name: '',
            email: '',
            subject: '',
            message: ''
          }
          setTimeout(() => {
            this.emailResponse.status  = false
          }, 5000)
        } catch (error) {
          this.emailResponse = {
            status: true,
            message: "Unfortunately, there was an issue while attempting to send your message. Please try again. If the problem persists, feel free to contact me through othmandeveloppeur@gmail.com.",
            type: 'error'
          }
          setTimeout(() => {
            this.emailResponse.status  = false
          }, 5000)
        }
      },
      scrollToSection(sectionId) {
        const targetSection = document.querySelector(sectionId)
        window.scrollTo({
          top: sectionId !== '#home' ? targetSection.offsetTop - 20 : targetSection.offsetTop,
          behavior: 'smooth'
        })
        this.isMenuCollapsed = false
      }
    }
  }
</script>

<template>
  <div>
    <Cursor />
    <Loader :class="{ 'slide-out': !loading }" />
    <ScrollToTop />
    <div id="particles-js" class="fixed bottom-0 left-0 w-full opacity-50 h-2/3 -z-10"></div>
    <header class="py-2.5 md:border-b md:border-dark-75 md:border-opacity-10">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="flex items-center justify-between md:w-full">
            <a href="/" class="flex items-center w-40 -ml-2 outline-none md:w-36">
              <img src="./assets/logo.svg" loading="lazy" alt="Othmane Gourirran" class="w-full h-auto" width="160" height="51"/>
            </a>
            <div @click="isMenuCollapsed = !isMenuCollapsed" class="text-white hidden md:block">
              <MenuIcon class="w-5 h-5" />
            </div>
          </div>
          <ul class="flex items-center justify-center gap-10 flex-1 md:hidden lg:gap-5">
            <li>
              <a href="/" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">H</span>
                    <span class="letter">O</span>
                    <span class="letter">M</span>
                    <span class="letter">E</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">H</span>
                    <span class="letter">O</span>
                    <span class="letter">M</span>
                    <span class="letter">E</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#about')" href="#about" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">A</span>
                    <span class="letter">B</span>
                    <span class="letter">O</span>
                    <span class="letter">U</span>
                    <span class="letter">T</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">A</span>
                    <span class="letter">B</span>
                    <span class="letter">O</span>
                    <span class="letter">U</span>
                    <span class="letter">T</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#services')" href="#services" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">S</span>
                    <span class="letter">E</span>
                    <span class="letter">R</span>
                    <span class="letter">V</span>
                    <span class="letter">I</span>
                    <span class="letter">C</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">S</span>
                    <span class="letter">E</span>
                    <span class="letter">R</span>
                    <span class="letter">V</span>
                    <span class="letter">I</span>
                    <span class="letter">C</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#portfolio')" href="#portfolio" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">P</span>
                    <span class="letter">O</span>
                    <span class="letter">R</span>
                    <span class="letter">T</span>
                    <span class="letter">F</span>
                    <span class="letter">O</span>
                    <span class="letter">L</span>
                    <span class="letter">I</span>
                    <span class="letter">O</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">P</span>
                    <span class="letter">O</span>
                    <span class="letter">R</span>
                    <span class="letter">T</span>
                    <span class="letter">F</span>
                    <span class="letter">O</span>
                    <span class="letter">L</span>
                    <span class="letter">I</span>
                    <span class="letter">O</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#testimonials')" href="#testimonials" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">T</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                    <span class="letter">T</span>
                    <span class="letter">I</span>
                    <span class="letter">M</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">I</span>
                    <span class="letter">A</span>
                    <span class="letter">L</span>
                    <span class="letter">S</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">T</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                    <span class="letter">T</span>
                    <span class="letter">I</span>
                    <span class="letter">M</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">I</span>
                    <span class="letter">A</span>
                    <span class="letter">L</span>
                    <span class="letter">S</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#contact')" href="#contact" class="text-sm uppercase tracking-widest">
                <span class="rolling-text">
                  <div>
                    <span class="letter">C</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">T</span>
                    <span class="letter">A</span>
                    <span class="letter">C</span>
                    <span class="letter">T</span>
                  </div>
                  <div class="text-primary hover:brightness-105">
                    <span class="letter">C</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">T</span>
                    <span class="letter">A</span>
                    <span class="letter">C</span>
                    <span class="letter">T</span>
                  </div>
                </span>
              </a>
            </li>
          </ul>
          <ul v-if="isMenuCollapsed" class="hidden md:absolute md:top-full md:grid md:justify-normal md:z-10 md:mt-3 md:bg-dark-header md:gap-0 md:-mx-4 md:w-header">
            <li>
              <a href="/" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Home
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#about')" href="#about" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                About
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#services')" href="#services" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Services
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#portfolio')" href="#portfolio" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Portfolio
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#testimonials')" href="#testimonials" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Testimonials
              </a>
            </li>
            <li>
              <a @click.prevent="scrollToSection('#contact')" href="#contact" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Contact
              </a>
            </li>
          </ul>
          <a @click.prevent="scrollToSection('#contact')" href="#contact" class="text-sm text-black bg-primary px-6 py-4 leading-none flex items-center rounded-lg tracking-wide hover:brightness-105 md:hidden">Hire Me!</a>
        </div>
      </div>
    </header>
    <main>
      <section class="py-16 lg:py-8">
        <div class="container">
          <div class="flex items-start justify-between gap-24 md:flex-col md:gap-6">
            <div class="w-author sticky top-20 md:top-0 md:relative md:w-full">
              <div class="grid gap-6">
                <div class="bg-primary rounded-xl overflow-hidden relative blur-image">
                  <img src="/profile.webp" loading="lazy" alt="Othmane Gourirran" class="w-full h-auto" width="400" height="410" />
                </div>
                <div class="grid gap-5">
                  <div class="text-center grid gap-2">
                    <h5 class="text-2xl">Othmane Gourirran</h5>
                    <p>
                      <a href="https://www.upwork.com/freelancers/~01aebf796030857cd1" target="_blank" class="text-base font-extralight text-dark-75">@OthmanG</a>
                    </p>
                  </div>
                  <ul class="flex items-center justify-center gap-4">
                    <li>
                      <a href="https://facebook.com/othman.gourriran" target="_blank" aria-label="Othmane Gourirran Facebook" class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white border-opacity-50 transition-all duration-500 hover:bg-white hover:text-black">
                        <FacebookIcon class="w-3.5 h-3.5" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/othman-gourirran-2932a5127" aria-label="Othmane Gourirran Linkedin" target="_blank" class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white border-opacity-50 duration-500 transition-all hover:bg-white hover:text-black">
                        <LinkedinIcon class="w-3.5 h-3.5" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/OthmanDev" target="_blank" aria-label="Othmane Gourirran Github" class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white border-opacity-50 transition-all duration-500 hover:bg-white hover:text-black">
                        <GithubIcon class="w-3.5 h-3.5" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:othmandeveloppeur@gmail.com" target="_blank" aria-label="Othmane Gourirran Email" class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white border-opacity-50 transition-all duration-500 hover:bg-white hover:text-black">
                        <EmailIcon class="w-3.5 h-3.5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="grid gap-16 md:gap-8">
                <h1 class="text-6xl leading-normal md:text-3xl md:leading-normal">Hello, I’m <span class="text-primary">Othmane Gourirran</span>, <span class="bord">Front-end Engineer<i></i></span> Based in Morocco.</h1>
                <div class="flex items-center gap-20 md:grid md:grid-cols-2 md:gap-6">
                  <div class="flex items-center gap-5 md:gap-3">
                    <h2 class="text-7xl md:text-5xl">7</h2>
                    <p class="text-base font-extralight text-dark-75">Years <br /> of Experance</p>
                  </div>
                  <div class="flex items-center gap-5 md:gap-3">
                    <h2 class="text-7xl md:text-5xl">31</h2>
                    <p class="text-base font-extralight text-dark-75">Clients <br /> Worldwide</p>
                  </div>
                  <div class="md:col-span-2">
                    <a href="othmane.gourirran.pdf" download="othmane.gourirran.pdf" class="text-sm text-black bg-primary px-6 py-4 leading-none flex items-center justify-center rounded-lg tracking-wide hover:brightness-105">Dwonload C.V</a>
                  </div>
                </div>
                <div id="about" class="grid gap-5 md:gap-4">
                  <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
                    <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">About</h3>
                  </div>
                  <p class="text-dark-75 text-lg font-extralight leading-8 md:text-base">A highly skilled and experienced front-end developer with a passion for crafting elegant and user-friendly web interfaces. With 7 years of hands-on experience in front-end development, I have honed my skills in HTML, CSS, and JavaScript to create seamless and responsive web applications.</p>
                </div>
                <div class="grid gap-8 md:gap-6">
                  <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
                    <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Experience Porfessional</h3>
                  </div>
                  <div class="grid gap-6 md:gap-5">
                    <div v-for="(experience, key) in experiences" class="flex items-center justify-between gap-12 md:gap-5 md:pb-5 border-b border-white pb-6 border-opacity-10" :key="key">
                      <div class="rounded-lg py-2 text-center text-xs text-black w-date bg-white bg-opacity-90">
                        {{ experience.period }}
                      </div>
                      <div class="flex-1">
                        <h3 class="text-xl md:text-lg">
                          <a :href="experience.link" target="_blank" class="text-primary uppercase tracking-widest hover:brightness-105">{{ experience.company }}</a> - {{ experience.role }}
                        </h3>
                      </div>
                      <div>
                        <a :href="experience.link" target="_blank" :aria-label="experience.company" class="w-6 h-6 flex items-center justify-center group md:w-4 md:h-4">
                          <ArrowRightIcon class="w-full stroke-2 stroke-white transition-colors group-hover:stroke-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid gap-8 md:gap-6">
                  <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
                    <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Skills</h3>
                  </div>
                  <div class="grid grid-cols-3 gap-7 md:grid-cols-2 md:gap-5 sm-grid-cols-1">
                    <div v-for="(skill, key) in skills" class="relative border border-white border-opacity-10 rounded-xl px-7 pt-7 md:px-5 md:pt-5" :key="key">
                      <div class="flex items-center gap-5 mb-7 md:mb-5">
                        <div class="w-10 h-10">
                          <component :is="skill.icon" class="w-full h-full"/>
                        </div>
                        <h4 class="text-lg capitalize">{{ skill.title }}</h4>
                      </div>
                      <div class="h-progress relative bg-white bg-opacity-10">
                        <div class="bg-white h-full absolute transition-all duration-500" :data-progress="skill.progress" :style="{ 'width': skill.progress + '%' }"></div>
                      </div>
                      <span class="absolute top-2.5 right-2.5 text-badge text-black bg-white px-2.5 py-1 rounded-full bg-opacity-90">{{ skill.progress }}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="pt-8 pb-16 md:pt-4 md:pb-8">
        <div class="container">
          <div class="grid gap-8 md:gap-6">
            <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
              <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Services</h3>
            </div>
            <div class="grid grid-cols-4 gap-7 md:grid-cols-2 md:gap-5 sm-grid-cols-1">
              <div v-for="(service, key) in services" class="relative border border-white border-opacity-10 rounded-xl p-7 md:p-5 transition-all duration-300 hover:bg-white hover:text-black hover:border-opacity-100 group scale-100 hover:scale-105 ease-in-out" :key="key">
                <div class="flex flex-col gap-3 mb-2">
                  <h3 class="text-6xl md:text-5xl">{{ service.letter }}</h3>
                  <h4 class="text-lg capitalize">{{ service.title }}</h4>
                </div>
                <p class="text-base font-extralight text-dark-75 group-hover:text-black">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" class="pt-8 pb-16 md:pt-4 md:pb-8">
        <div class="container">
          <div class="mb-8 md:mb-6">
            <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
              <h3 class="text-2xl uppercase tracking-widest md:text-xl">Portfolio</h3>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-x-7 gap-y-10 sm-grid-cols-1 md:grid-cols-2 md:gap-y-8 md:gap-x-6">
            <div class="relative group" v-for="(project, key) in projects" :key="key">
                <div class="h-project overflow-hidden rounded-xl bg-white relative md:h-80">
                  <img :src="`/projects/${project.image}`" loading="lazy" :alt="project.name" class="w-full h-full object-cover rounded-xl object-top" />
                </div>
                <div class="mt-7 px-2">
                  <ul class="flex items-center flex-wrap gap-x-2 gap-y-2.5 mb-4">
                    <li v-for="(skill, index) in project.skills" class="text-black bg-white py-1 px-3 rounded-lg text-xs tracking-wide" :key="index">{{ skill }}</li>
                  </ul>
                  <div class="flex items-center justify-between">
                    <h4 class="leading-none text-lg text-white font-medium tracking-wider transition-colors group-hover:text-primary">{{ project.name }}</h4>
                    <span class="w-6 h-6 flex items-center justify-center text-white transition-colors group-hover:text-primary">
                      <ArrowRightIcon class="w-full stroke-2 stroke-white transform -rotate-45 transition-colors group-hover:stroke-primary" />
                    </span>
                  </div>
                </div>
                <a :href="project.link" target="_blank" :aria-label="project.name" class="absolute inset-0 z-10"></a>
              </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="pt-8 pb-16 md:pt-4 md:pb-8">
        <div class="container">
          <div class="mb-8 md:mb-6">
            <div class="border-b border-white border-opacity-10 pb-5 md:pb-0 md:border-0">
              <h3 class="text-2xl uppercase tracking-widest md:text-xl">Testimonials</h3>
            </div>
          </div>
          <swiper-container
            :slides-per-view="1"
            :space-between="24"
            :loop="true"
            :lazy="true"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
            :breakpoints= "{
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              }
            }"
          >
            <swiper-slide v-for="(testimonial, key) in testimonials" :key="key">
              <div class="relative border border-white border-opacity-10 rounded-xl p-7 estimonials-shadow overflow-hidden md:p-5">
                <div class="flex items-center gap-7 md:gap-5 md:flex-col">
                  <div class="w-24 h-24 bg-primary rounded-lg overflow-hidden">
                    <img :src="`/testimonials/${testimonial.author.image}`" loading="lazy" :alt="testimonial.author.name" class="w-full h-full object-cover"/>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-primary text-2xl mb-2.5 leading-none">{{ testimonial.author.name }}</h4>
                    <span class="text-base text-dark-75">{{ testimonial.author.title }}</span>
                  </div>
                </div>
                <div class="mt-7 mb-4 md:mt-5 md:text-center md:mb-3">
                  <p class="text-lg text-dark-75 font-extralight md:text-base">{{ testimonial.quote }}</p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="flex items-center gap-0.5">
                      <span v-for="index in 5" class="text-primary w-4 h-4" :key="index">
                        <StarIcon class="w-full h-full" />
                      </span>
                    </div>
                    <span class="text-xs text-dark-75 leading-none pt-1">{{ testimonial.reviews }} reviews</span>
                  </div>
                  <div class="w-10 h-10">
                    <img src="/quote.webp" :alt="testimonial.author.name" class="w-full h-full"/>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
      <section id="contact" class="pt-8 pb-20 relative md:pt-4 md:pb-10">
        <div class="container">
          <div class="flex items-start justify-between gap-10 md:flex-col md:gap-8">
            <div class="w-1/2 md:w-full">
              <span class="uppercase text-xs leading-none text-black bg-white rounded-lg tracking-wide py-3 px-4 inline-block">Get In Touch</span>
              <h2 class="text-5xl mt-4 mb-4 leading-tight md:text-4xl md:leading-tight">Let's collaborate to create outstanding web experiences.</h2>
              <p class="text-dark-75 font-extralight text-base leading-normal mb-10 md:mb-6">If you would like to work with us or just want to get in touch, we'd love <br /> to hear from you!</p>
              <a href="//api.whatsapp.com/send?phone=212627329145" target="_blank" class="text-primary text-3xl font-medium underline md:text-2xl">+212 627329145</a>
            </div>
            <div class="flex-1 md:w-full">
              <div v-if="emailResponse.status" class="rounded-lg p-4 mb-7 md:mb-5" :class="[ emailResponse.type === 'success' ? 'bg-success-50' : 'bg-error-50']">
                <p class="leading-normal" :class="[ emailResponse.type === 'success' ? 'text-success-100' : 'text-error-100']">{{ emailResponse.message }}</p>
              </div>
              <form @submit.prevent="sendMessage" class="grid gap-7 md:gap-5">
                <div class="flex items-center gap-7 md:flex-col md:gap-5">
                  <div class="flex-1 md:w-full">
                    <input v-model="form.name" type="text" class="border border-white border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" placeholder="Name" required/>
                  </div>
                  <div class="flex-1 md:w-full">
                    <input v-model="form.from_name" type="email" class="border border-white border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" placeholder="Email" required/>
                  </div>
                </div>
                <div class="flex-1">
                  <input v-model="form.subject" type="text" class="border border-white border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" placeholder="Subject" />
                </div>
                <div class="flex-1">
                  <textarea v-model="form.message" class="border border-white border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100" rows="8" placeholder="Message" required />
                </div>
                <div class="flex-1">
                  <button type="submit" class="relative overflow-hidden border border-white border-opacity-10 uppercase text-white tracking-widest bg-transparent px-4 py-5 leading-none flex items-center justify-center rounded-lg w-full group transition-colors duration-500 hover:text-black">
                    Send a message
                    <span class="absolute inset-0 w-1.5 bg-primary transition-all duration-500 group-hover:w-full -z-10"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 -z-10 pointer-events-none bg-center bg-no-repeat" :style="{ 'backgroundImage': 'url(paper-plane.webp)', 'backgroundSize': '27%', 'opacity': '.008' }">
        </div>
      </section>
    </main>
    <footer class="border-t border-white border-opacity-10 py-7 md:py-5">
      <div class="container">
        <span class="leading-none flex items-center justify-center text-center gap-1 text-dark-75">
          <CopyrightIcon class="w-3.5 h-3.5 md:w-3 md:h-3" />
          <span class="font-extralight text-sm md:text-xs md:text-center">{{ new Date().getFullYear() }} Othmane Gourirran is Powered by <a href="https://www.upwork.com/freelancers/~01aebf796030857cd1" target="_blank" class="text-primary underline hover:brightness-105">Othmane</a></span>
        </span>
      </div>
    </footer>
  </div>
</template>