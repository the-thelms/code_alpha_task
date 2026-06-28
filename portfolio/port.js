const roles = [
    "Computer Science Student",
    "Web Developer",
    "Java Programmer",
    "Problem Solver",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingElement.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(typingElement.textContent.length > 0){

        typingElement.textContent =
        typingElement.textContent.slice(0,-1);

        setTimeout(eraseEffect,50);
    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeEffect,500);
    }
}

typeEffect();

document.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );
});