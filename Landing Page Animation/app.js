const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('#hamburger');
const headline = document.querySelector('.headline');
const auth = document.querySelector('.auth');
const heart = document.querySelector('#heart');
const social = document.querySelector('.social');


const tl = new TimelineMax();

tl.fromTo(hero, 1.5,
 { height: "0%" },
 { height: "85%", ease: Power2.easeInOut })

.fromTo(hero, 1.5,
 { width: "100%" },
 { width: "85%", ease: Power2.easeInOut })

.fromTo(slider, 2,
 { x: "-100%" },
 { x: "0%", ease: Power2.easeInOut })

.fromTo(logo, 0.7,
 { opacity: 0, x: -40 },
 { opacity: 1, x: 0, })

.fromTo(hamburger, 0.7,
 { opacity: 0, x: 30 },
 { opacity: 1, x: 0 })

.fromTo(headline, 1,
 { opacity: 0, y: -30 },
 { opacity: 1, y: 0 })

.fromTo(auth, 1,
 { opacity: 0 },
 { opacity: 1 }, "+=1")

.fromTo(auth, 1,
 { opacity: 0, x: 0 }, 
 { opacity: 1, x: -300}, "+=1.5")

.fromTo(social, 1,
 { opacity: 0, y: 20 }, 
 { opacity: 1, y: 0, ease: Power2.easeInOut,});
