var stage0 = 0;

var pg = 0;
function Proceed()
{
    pg += 1;
}
function fade()
{
    if(pg == 1){
        let element1 = document.getElementById((pg-1).toString());
        var a = 0.0 + parseFloat(element1.style.opacity.replace("%"));
        a = lerp(a,0,0.07);
        element1.style.opacity = a + "";

        let element2 = document.getElementById(pg.toString());
        element2.style.setProperty("visibility", "visible");
        element2.style.opacity = ((a*-1)+1) + "";
    }
}
function lerp(start, end, t) {
    return start + (end - start) * t;
}
function start()
{
    setInterval(clouLoop,60);
    setInterval(fade,20);
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