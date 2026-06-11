/* ==========================================
   INTRO + MUSICA
========================================== */

const introScreen =
document.getElementById(
    "introScreen"
);
for(let i=0;i<30;i++){

    const sparkle =
    document.createElement("div");

    sparkle.classList.add(
        "gold-particle"
    );

    sparkle.style.left =
    Math.random()*100 + "%";

    sparkle.style.top =
    Math.random()*100 + "%";

    sparkle.style.animationDelay =
    Math.random()*10 + "s";

    document.body.appendChild(
        sparkle
    );

}
const startBtn =
document.getElementById(
    "startExperience"
);

const bgMusic =
document.getElementById(
    "bgMusic"
);

if(startBtn){

    startBtn.addEventListener(
        "click",
        () => {

            if(bgMusic){

                bgMusic.volume = 0.4;

                bgMusic.play()
                .catch(error => {

                    console.log(
                        "Audio bloqueado:",
                        error
                    );

                });

            }

            introScreen.style.opacity =
            "0";

            setTimeout(() => {

                introScreen.style.display =
                "none";

            },1500);

        }
    );

}

/* ==========================================
   REVEAL AL HACER SCROLL
========================================== */

const reveals =
document.querySelectorAll(
    ".reveal"
);

function revealOnScroll(){

    const trigger =
    window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add(
                "active"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================================
   CORAZONES FLOTANTES
========================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add(
        "heart"
    );

    const hearts = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "💞"

    ];

    heart.innerHTML =

    hearts[
        Math.floor(
            Math.random() *
            hearts.length
        )
    ];

    heart.style.left =
    Math.random() * 100 +
    "vw";

    heart.style.bottom =
    "-40px";

    heart.style.fontSize =

    (20 + Math.random() * 25)
    + "px";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(
    createHeart,
    1200
);

/* ==========================================
   PETALOS FLOTANTES
========================================== */

const petalsContainer =
document.querySelector(
    ".petals"
);

function createPetal(){

    if(!petalsContainer)
    return;

    const petal =
    document.createElement(
        "span"
    );

    petal.innerHTML = "🌸";

    petal.style.position =
    "absolute";

    petal.style.left =
    Math.random() * 100 + "%";

    petal.style.top =
    "-50px";

    petal.style.fontSize =

    (15 + Math.random() * 20)
    + "px";

    petal.style.opacity =

    0.3 + Math.random() * 0.5;

    petalsContainer.appendChild(
        petal
    );

    let y = -50;

    let x =
    Math.random() * 60;

    const speed =

    1 + Math.random() * 2;

    const interval =

    setInterval(() => {

        y += speed;

        x +=
        Math.sin(y / 50) * 0.8;

        petal.style.transform =

        `translate(${x}px, ${y}px)
        rotate(${y}deg)`;

        if(

            y >

            window.innerHeight + 200

        ){

            clearInterval(
                interval
            );

            petal.remove();

        }

    },20);

}

setInterval(
    createPetal,
    700
);

/* ==========================================
   DESTELLOS DORADOS
========================================== */

function createSparkle(){

    const sparkle =
    document.createElement(
        "div"
    );

    sparkle.style.position =
    "fixed";

    sparkle.style.width =
    "4px";

    sparkle.style.height =
    "4px";

    sparkle.style.borderRadius =
    "50%";

    sparkle.style.background =
    "#d9b99b";

    sparkle.style.left =
    Math.random() * 100 +
    "vw";

    sparkle.style.top =
    Math.random() * 100 +
    "vh";

    sparkle.style.opacity =
    Math.random();

    sparkle.style.pointerEvents =
    "none";

    sparkle.style.zIndex =
    "1";

    document.body.appendChild(
        sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    },2500);

}

setInterval(
    createSparkle,
    400
);

/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener(
    "scroll",
    () => {

        const heroImage =

        document.querySelector(
            ".hero-image"
        );

        if(!heroImage)
        return;

        const offset =

        window.pageYOffset;

        heroImage.style.transform =

        `translateY(${offset * 0.15}px)
         scale(1.08)`;

    }
);

/* ==========================================
   SCROLL SUAVE BOTONES
========================================== */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =

            document.querySelector(

                this.getAttribute(
                    "href"
                )

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});

/* ==========================================
   MENSAJE CONSOLA
========================================== */

console.log(

"❤️ Feliz Cumpleaños Anel ❤️"

);
const familyPhotos = [

    {
        image:"img/familia1.jpg",
        text:"❤️ una flapytula"
    },

    {
        image:"img/familia2.jpg",
        text:"👶 Momentos inolvidables"
    },

    {
        image:"img/familia3.jpg",
        text:"👨‍👩‍👧‍👦 un Cacahuate"
    },

    {
        image:"img/familia4.jpg",
        text:"✨ cacahuate aventurero"
    },

    {
        image:"img/familia5.jpeg",
        text:"❤️ Nuestro mayor tesoro"
    }

];

let currentSlide = 0;

const familyImage =
document.getElementById(
    "familyImage"
);

const familyCaption =
document.getElementById(
    "familyCaption"
);

function updateFamily(){

    familyImage.style.opacity = 0;

    setTimeout(()=>{

        familyImage.src =
        familyPhotos[currentSlide].image;

        familyCaption.textContent =
        familyPhotos[currentSlide].text;

        familyImage.style.opacity = 1;

    },300);

}

document
.querySelector(".next")
.addEventListener(
"click",
()=>{

    currentSlide++;

    if(
        currentSlide >=
        familyPhotos.length
    ){

        currentSlide = 0;

    }

    updateFamily();

});

document
.querySelector(".prev")
.addEventListener(
"click",
()=>{

    currentSlide--;

    if(
        currentSlide < 0
    ){

        currentSlide =
        familyPhotos.length - 1;

    }

    updateFamily();

});
function memoryHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML="💖";

    heart.classList.add(
        "memory-heart"
    );

    document
    .querySelector(
        ".memory-frame"
    )
    .appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },4000);

}
function memoryHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML="💖";

    heart.classList.add(
        "memory-heart"
    );

    document
    .querySelector(
        ".memory-frame"
    )
    .appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },4000);

}
/* ==========================================
   ALBUM DE RECUERDOS
========================================== */

const albumPages = [

{
    image:"img/recuerdos1.jpg",
    title:"❤️ Por nuestros tesoros mas valiosos",
    text:"por lo que construimos nuestra vida juntos."
},

{
    image:"img/recuerdos2.jpeg",
    title:"✨ Momentos inolvidables",
    text:"Cada recuerdo contigo se convirtió en un tesoro."
},

{
    image:"img/recuerdos3.jpeg",
    title:"👨‍👩‍👧‍👦 Nuestra familia",
    text:"El amor creció y se convirtió en nuestra mayor bendición."
},

{
    image:"img/recuerdos4.jpg",
    title:"💖 Nuestro presente",
    text:"Hoy seguimos escribiendo juntos la historia más bonita."
},

{
    image:"img/recuerdos5.jpeg",
    title:"🌹 Nuestra aventura",
    text:"Cada paso contigo ha valido la pena."
},

{
    image:"img/recuerdos6.jpeg",
    title:"💕 Nuestro amor",
    text:"Un amor que sigue creciendo cada día."
},

{
    image:"img/recuerdos7.jpg",
    title:"✨ Momentos mágicos",
    text:"Pequeños instantes que se volvieron eternos."
},

{
    image:"img/recuerdos8.jpg",
    title:"❤️ Siempre juntos",
    text:"Porque contigo cualquier lugar es hogar."
},

{
    image:"img/recuerdos9.jpeg",
    title:"💖 Nuestro futuro",
    text:"Lo mejor de nuestra historia aún está por escribirse."
}

];
let currentPage = 0;

const albumImage =
document.getElementById(
    "albumImage"
);

const albumTitle =
document.getElementById(
    "albumTitle"
);

const albumDescription =
document.getElementById(
    "albumDescription"
);

const albumBook =
document.querySelector(
    ".album-page"
);

function updateAlbum(){

    albumBook.classList.add(
        "page-turn"
    );

    setTimeout(()=>{

        albumImage.src =
        albumPages[currentPage].image;

        albumTitle.textContent =
        albumPages[currentPage].title;

        albumDescription.textContent =
        albumPages[currentPage].text;

    },350);

    setTimeout(()=>{

        albumBook.classList.remove(
            "page-turn"
        );

    },800);

}

document
.getElementById(
    "nextPage"
)
.addEventListener(
"click",
()=>{

    currentPage++;

    if(
        currentPage >=
        albumPages.length
    ){

        currentPage = 0;

    }

    updateAlbum();

});

document
.getElementById(
    "prevPage"
)
.addEventListener(
"click",
()=>{

    currentPage--;

    if(
        currentPage < 0
    ){

        currentPage =
        albumPages.length - 1;

    }

    updateAlbum();

});

/* Corazones sobre el album */

function albumHeart(){

    const container =
    document.querySelector(
        ".album-image-container"
    );

    if(!container) return;

    const heart =
    document.createElement(
        "div"
    );

    heart.classList.add(
        "memory-heart"
    );

    heart.innerHTML =

    ["❤️","💖","💕","💗"][
        Math.floor(
            Math.random()*4
        )
    ];

    heart.style.left =
    Math.random()*80 + "%";

    container.appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },4000);

}

setInterval(
    albumHeart,
    1800
);
/* ==========================================
   MOSAICO FINAL
========================================== */
/* ==========================================
   MOSAICO FINAL
========================================== */

const finalSection =
document.querySelector(".final-section");

let heartStarted = false;

function startHeartMosaic(){

    const heartContainer =
    document.getElementById(
        "heartMosaic"
    );

    if(!heartContainer) return;

    const photos = [];

    for(let i=1;i<=23;i++){

        photos.push(
            `img/final${i}.jpeg`
        );

    }

    const positions = [

        [42,8],
        [58,8],

        [30,18],
        [42,18],
        [58,18],
        [70,18],

        [22,32],
        [35,32],
        [50,32],
        [65,32],
        [78,32],

        [26,48],
        [40,48],
        [50,48],
        [60,48],
        [74,48],

        [33,64],
        [45,64],
        [55,64],
        [67,64],

        [40,80],
        [50,80],
        [60,80]

    ];

    photos.forEach((photo,index)=>{

        const img =
        document.createElement("img");

        img.src = photo;

        img.classList.add(
            "mosaic-photo"
        );

        heartContainer.appendChild(
            img
        );

        /* FOTO GRANDE AL CENTRO */

        setTimeout(()=>{

            img.style.opacity = "1";

        }, index * 2500);

        /* VUELA A SU POSICION */

        setTimeout(()=>{

            img.classList.add(
                "fly"
            );

            img.style.left =
            positions[index][0] + "%";

            img.style.top =
            positions[index][1] + "%";

            img.style.transform =
            "translate(-50%,-50%)";

        },

        (index * 2500) + 1800);

    });

}

if(finalSection){

    const observer =
    new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(

                    entry.isIntersecting &&
                    !heartStarted

                ){

                    heartStarted = true;

                    startHeartMosaic();

                }

            });

        },

        {
            threshold:0.4
        }

    );

    observer.observe(
        finalSection
    );

}