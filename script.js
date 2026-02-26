const text = "Full Stack Developer | Problem Solver | Builder";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,50);
}
}
type();


document.getElementById("themeToggle")
.onclick = ()=>{
document.body.classList.toggle("light");
};
