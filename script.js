var stage0 = 0;

function Proceed()
{
    let element1 = document.getElementById("0");
    element1.style.animationName = "page_flip";
    element1.style.animationDuration = "3s";
    element1.style.animationPlayState = "initial";
    //element1.setAttribute("hidden", "hidden");
    //element3.removeAttribute("hidden");
}
function start()
{
    setInterval(clouLoop,60);
}
let additiveCloudX = 0.0;
let additiveCloudY = 0.0;
function clouLoop()
{
    let cloud = document.getElementById("cloud");
    additiveCloudX+= 0.1;
    let additiveX = (Math.sin(additiveCloudX)+10);
    cloud.style.top = additiveX + "%";


    additiveCloudY+= 0.01;
    let additiveY = (Math.sin(additiveCloudY)+90);
    cloud.style.left = additiveY + "%";
}