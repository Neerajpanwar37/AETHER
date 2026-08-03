// ===========================================
// GSAP
// ===========================================

gsap.registerPlugin(ScrollTrigger);

// ===========================================
// Loader
// ===========================================

window.addEventListener("load", () => {

    const loader = document.querySelector("#loader");

    gsap.to(loader, {

        opacity:0,

        duration:0.8,

        delay:1.5,

        ease:"power2.out",

        onComplete:()=>{

            loader.style.display="none";

        }

    });

});

// ===========================================
// Hero Animation
// ===========================================

const heroTL = gsap.timeline();

heroTL

.from(".navbar",{

    y:-100,

    opacity:0,

    duration:1,

    ease:"power3.out"

})

.from(".hero-tag",{

    y:50,

    opacity:0,

    duration:.8

},"-=.4")

.from(".hero h1",{

    y:80,

    opacity:0,

    duration:1

},"-=.4")

.from(".hero p",{

    y:60,

    opacity:0,

    duration:.8

},"-=.5")

.from(".hero-buttons",{

    y:50,

    opacity:0,

    duration:.8

},"-=.5");

// ===========================================
// Scroll Reveal
// ===========================================

gsap.utils.toArray(

".feature-card,.gallery-item,.showcase-left,.showcase-right,.cinematic-content,.footer"

).forEach((item)=>{

    gsap.from(item,{

        scrollTrigger:{

            trigger:item,

            start:"top 85%"

        },

        y:80,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });

});

// ===========================================
// Hero Zoom
// ===========================================

gsap.to(".hero video",{

    scale:1.18,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

// ===========================================
// Navbar Blur
// ===========================================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>60){

        nav.style.background="rgba(10,10,10,.75)";

        nav.style.backdropFilter="blur(28px)";

        nav.style.border="1px solid rgba(255,255,255,.08)";

    }

    else{

        nav.style.background="rgba(255,255,255,.08)";

        nav.style.backdropFilter="blur(20px)";

        nav.style.border="1px solid rgba(255,255,255,.12)";

    }

});

// ===========================================
// Progress Bar
// ===========================================

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=window.scrollY;

    const height=document.documentElement.scrollHeight-window.innerHeight;

    progress.style.width=(scrollTop/height)*100+"%";

});

// ===========================================
// Cursor
// ===========================================

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

    gsap.to(cursor,{

        x:e.clientX,

        y:e.clientY,

        duration:.15,

        ease:"power2.out"

    });

});

document.querySelectorAll("button,a").forEach((el)=>{

    el.addEventListener("mouseenter",()=>{

        gsap.to(cursor,{

            width:42,

            height:42,

            duration:.25

        });

    });

    el.addEventListener("mouseleave",()=>{

        gsap.to(cursor,{

            width:18,

            height:18,

            duration:.25

        });

    });

});

// ===========================================
// Active Navbar
// ===========================================

const sections=document.querySelectorAll("section[id]");

const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-200;

        const height=section.offsetHeight;

        if(window.scrollY>=top && window.scrollY<top+height){

            current=section.id;

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===========================================
// Magnetic Buttons
// ===========================================

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn").forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(btn,{

            x:x*.25,

            y:y*.25,

            duration:.3

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            x:0,

            y:0,

            duration:.3

        });

    });

});
// ===========================================
// LENIS SMOOTH SCROLL
// ===========================================

if (typeof Lenis !== "undefined") {

    const lenis = new Lenis({

        duration: 1.2,

        smoothWheel: true,

        touchMultiplier: 2

    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

}

// ===========================================
// HERO PARALLAX
// ===========================================

const hero = document.querySelector(".hero");

const heroContent = document.querySelector(".hero-content");

const heroVideo = document.querySelector(".hero video");

if(hero){

hero.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*30;

    const y=(e.clientY/window.innerHeight-.5)*30;

    gsap.to(heroVideo,{

        x:x,

        y:y,

        duration:1,

        ease:"power3.out"

    });

    gsap.to(heroContent,{

        x:x*.25,

        y:y*.25,

        duration:1,

        ease:"power3.out"

    });

});

hero.addEventListener("mouseleave",()=>{

    gsap.to([heroVideo,heroContent],{

        x:0,

        y:0,

        duration:1

    });

});

}

// ===========================================
// FLOATING ANIMATION
// ===========================================

gsap.to(".feature-card",{

    y:-10,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut",

    stagger:.2

});

// ===========================================
// IMAGE HOVER EFFECT
// ===========================================

document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        gsap.to(img,{

            scale:1.08,

            duration:.5

        });

    });

    img.addEventListener("mouseleave",()=>{

        gsap.to(img,{

            scale:1,

            duration:.5

        });

    });

});

// ===========================================
// BUTTON RIPPLE EFFECT
// ===========================================

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        gsap.fromTo(btn,{

            scale:.92

        },{

            scale:1,

            duration:.4,

            ease:"back.out(3)"

        });

    });

});

// ===========================================
// CONSOLE MESSAGE
// ===========================================

console.log("%cVYRON Loaded Successfully 🚀",
"color:#fff;background:#111;padding:8px 15px;border-radius:20px;");