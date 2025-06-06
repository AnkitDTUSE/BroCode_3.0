let t1 = performance.now();
var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
let circle = document.querySelector(".loader");
let splitter = (div) => {
  let text = "";
  let splitText = document.querySelector(`.${div} >p`).textContent.split("");
  splitText.forEach((ele) => {
    2;
    text += `<span class="a">${ele}</span>`;
  });
  return text;
};
var text1 = splitter("circle");
document.querySelector(".circle>p").innerHTML = text1;
tl2
  .from("#nav", {
    y: 30,
    opacity: 0,
    ease: "expo.out",
    duration: 0.7,
    // stagger:0.1
  })
  .from("#toGetHer", {
    opacity: 0,
    y: -100,
  });
tl2.pause();

tl1
  .from(".circle", {
    scale: 0,
    opacity: 0,
    borderRadius: "0%",
    rotate: 360,
    ease: "back.out(1.7)",
    duration: 2,
    delay: 1,
    stagger: 0.1,
  })
  .from(".circle span", {
    opacity: 0,
    y: 40,
    stagger: {
      each: 0.1,
    },
    duration: 0.6,
  })
  .to(".circle", {
    color: "#5085A5",
    scale: 0.2,
    duration: 0.4,
  })
  .to(".circle", {
    y: -500,
    duration: 0.9,
  })
  .to(".loader", {
    y: -1000,
    duration: 1.2,
    ease: "power3.Out",
    backgroundColor: "black",
    onComplete: () => {
      gsap.set(".loader", { display: "none" });
      gsap.set(".content", { display: "block" });
      tl2.play();
    },
  });

window.addEventListener("mousemove", (event) => {
  gsap.to(".customCursor", {
    x: event.x,
    y: event.y,
    ease: "back.out",
  });
});

let button = document.querySelector("#butt");
button.addEventListener("click", () => {
  let tl3 = gsap.timeline();
  tl3
    .to(".menu", {
      right: 0,
      duration: 0.4,
      ease: "power3.out",
    })
    .from(".menu a", {
      opacity: 0,
      x: 100,
      duration: 0.8,
      stagger: 0.1,
    });
});
document.querySelector(".close").addEventListener("click", () => {
  gsap.to(".menu", {
    right: "-20%",
  });
});

let type = new Typed("#autoTyped", {
  strings: ["Grow Together", "Learn Together", "Chill Together"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

var splitText = document.querySelector("#toGetHer>p").textContent.split("");

var text2 = "";
splitText.forEach((ele) => {
  text2 += `<span> ${ele} </span>`;
});

document.querySelector("#toGetHer>p").innerHTML = text2;
let cCursor = document.querySelector(".customCursor");
document.querySelector("#toGetHer").addEventListener("mouseenter", () => {
  cCursor.textContent = "Grow";
  document.querySelector("#toGetHer").style.cursor = "none";
  gsap.to(".customCursor", {
    scale: 7,
    opacity: 0.8,
    duration: 0.4,
  });
});
document.querySelector("#toGetHer").addEventListener("mouseleave", () => {
  cCursor.textContent = "";
  gsap.to(".customCursor", {
    scale: 1,
    opacity: 1,
    ease: "power4.out",
    duration: 0.4,
  });
});

let tags = document.querySelectorAll("#toGetHer>p>span");

tags.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    gsap.to(ele, {
      scaleY: 2.5,
      scaleX: 0.8,
      opacity: 0.8,
      duration: 0.4,
      ease: "power3.out",
    });
  });
  ele.addEventListener("mouseleave", () => {
    console.log(ele);
    gsap.to(ele, {
      scaleY: 1,
      scaleX: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  });
});
let flag = 0;
let index = document.querySelector("#index");
index.addEventListener("mouseenter", () => {
  gsap.to(".customCursor", {
    scale: 0.3,
    duration: 0.1,
  });
});
index.addEventListener("click", () => {
  flag++;
  if (flag > 0 && flag % 2 !== 0) {
    gsap.to(".b2 p", {
      opacity: 1,
      y: 4,
      duration: 0.5,
    });
  } else {
    gsap.to(".b2 p", {
      opacity: 0,
      y: -100,
      duration: 0.5,
    });
  }
});
index.addEventListener("mouseleave", () => {
  gsap.to(".customCursor", {
    scale: 1,
    delay: 0.1,
    duration: 0.1,
  });
});
let flag2 = 0;
let about = document.querySelector(".t3");
about.addEventListener("click", () => {
  flag2++;
  about.style.cssText = "color: white;transform: scale(1);border-radius: 10px;";
  gsap.to(".t1", {
    x: 0,
    duration: 1.5,
    ease: "back.out",
  });
  gsap.to(".t2", {
    y: 0,
    duration: 1.5,
    ease: "back.out",
  });
  gsap.to(".t4", {
    y: 0,
    duration: 1.5,
    ease: "back.out",
  });
  gsap.to(".t5", {
    x: 0,
    duration: 1.5,
    ease: "back.out",
  });
});
let arr = document.querySelectorAll(".text");
arr.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    gsap.to(".customCursor", {
      scale: 0.3,
    });
  });
  ele.addEventListener("mouseleave", () => {
    gsap.to(".customCursor", {
      scale: 1,
    });
  });
});
about.addEventListener("mouseenter", () => {
  if (flag2 === 0) {
    cCursor.innerHTML = "Click";
  }
  gsap.to(".customCursor", {
    scale: 7,
    opacity: 0.7,
  });
});
about.addEventListener("mouseleave", () => {
  cCursor.innerHTML = "";
  gsap.to(".customCursor", {
    scale: 1,
    opacity: 1,
  });
});

let initialPath=`M 0 100 Q 500 100 1200 100`;
let finalPath=`M 0 100 Q 500 100 1200 100`;

let mainDiv=document.querySelector('.string');

mainDiv.addEventListener("mousemove",(event)=>{
  let y=(event.y>300)?300:event.y;
    finalPath=`M 0 100 Q ${event.x} ${y} 1200 100`;
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.1,
        ease:"power3.out",
    })

})

mainDiv.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
let t2 = performance.now();
console.log(t2 - t1);
