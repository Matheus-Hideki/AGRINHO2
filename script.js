var stage0 = 0;

var pg = 0;
function Proceed()
{
    pg += 1;
}
let alpha1 = 1.0;
let alpha2 = 0.0;
let alpha3 = 0.0;
function fade()
{
    let element1 = document.getElementById((0).toString());
    var a = 0.0 + parseFloat(element1.style.opacity.replace("%"));
    a = lerp(a,alpha1,0.07);
    element1.style.opacity = a + "";


    let element2 = document.getElementById((1).toString());
    var ab = 0.0 + parseFloat(element2.style.opacity.replace("%"));
    ab = lerp(ab,alpha2,0.07);
    element2.style.opacity = ab + "";

    let element3 = document.getElementById((2).toString());
    var ab3 = 0.0 + parseFloat(element3.style.opacity.replace("%"));
    ab3 = lerp(ab3,alpha3,0.07);
    element3.style.opacity = ab3 + "";

    if(pg == 0){
        alpha1 = 1;
        alpha2 = 0;
        alpha3 = 0;
    }
    if(pg == 1){
        alpha1 = 0;
        alpha2 = 1;
        alpha3 = 0;


        element2.style.setProperty("visibility", "visible");
    }
    if(pg == 2){
        alpha1 = 0;
        alpha2 = 0;
        alpha3 = 1;


        element3.style.setProperty("visibility", "visible");
    }
    if(pg>2)pg=0;
}
function lerp(start, end, t) {
    return start + (end - start) * t;
}
function start()
{
    setInterval(fade,20);
    setInterval(mouseCalculate,40);
}
let additiveCloudX = 0.0;
let additiveCloudY = 0.0;
let mSx;
let mSy;
let isNear;
function mouseCalculate()
{

    let ref = document.getElementById("proceedMouseRef");
    let prcd = document.getElementById("proceedScript");
    let additiveXPRCD = (Math.sin(additiveCloudX)+87);
    let additiveYPRCD = (Math.sin((additiveCloudX)/3)+110);
    prcd.style.left = lerp(parseFloat(prcd.style.left.replace("vw")), additiveXPRCD,0.1) + "vw";
    prcd.style.top = lerp(parseFloat(prcd.style.top.replace("vw")), additiveYPRCD,0.1) + "vh";
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const mouseXvw = (mouseX / window.innerWidth) * 100;
        const mouseYvh = (mouseY / window.innerHeight) * 100;

        mSx =  mouseXvw;
        mSy = mouseYvh;
        const rect = ref.getBoundingClientRect();
        const elemX = rect.left + rect.width / 2;
        const elemY = rect.top + rect.height / 2;
        const distanceX = mouseX - elemX;
        const distanceY = mouseY - elemY;
        
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        //com essa conta, eu calculo qual a distancia do meu elemento para o meu mouse
        if(distance < 160)
        {
            isNear = true;
        } else {
            isNear = false;
        }
    });
    if(isNear)
    {
            const imageWidth = prcd.offsetWidth;
            const imageHeight = prcd.offsetHeight;
            prcd.style.left = lerp(parseFloat(prcd.style.left.replace("vw")),mSx,0.1) + "vw";
            prcd.style.top = lerp(parseFloat(prcd.style.top.replace("vh")),mSy + (imageHeight / 4),0.1) + "vh";
    }
}