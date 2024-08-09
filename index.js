function action1()
{
  //alert("hi pepol1");

  let element1 = document.getElementById("page1");
  let element2 = document.getElementById("page2");
  let element3 = document.getElementById("page3");
  element1.removeAttribute("hidden");
  element2.setAttribute("hidden", "hidden");
  element3.setAttribute("hidden", "hidden");

  //window.open("https://www.youtube.com/watch?v=hcyIbsyB5zw&list=PL2KzaiRLzqq6x-87WHW77-pjLTssobTPB&index=5");
}
let createOnce = 0;


function action3()
{
  let element1 = document.getElementById("page1");
  let element2 = document.getElementById("page2");
  let element3 = document.getElementById("page3");
  element1.setAttribute("hidden", "hidden");
  element2.setAttribute("hidden", "hidden");
  element3.removeAttribute("hidden");

  if(createOnce == 0){


    createEvent("Sessão Itinerante da Câmara","No dia, eles fizeram uma reunião no colégio para mostrar como ocorre as sessões na câmara municipal.","09/11/2023","noimg.png",false);

    //createEvent("Visita à UEL","O dia que nossos alunos visitaram a UEL","29/08/2023","0fb8a585-38e2-4ab7-890e-b4f7162306b0-transformed.jpeg");


  createEvent("Palestra sobre Suicídio","Representando o Setembro amarelo, foi palestrado por Lucas Delatre sobre a prevenção do suicídio.","19/09/2023","noimg.png",false);


  createEvent("Festa Junina","Esta foi uma festa feita no colégio José Ferreira de Mello para comemorar a festa junina.","06/07/2023","noimg.png",false);
  createEvent("Premiação Agrinho 2023","O dia que o aluno Matheus e professora Jéssika do Colégio José Ferreira de Mello Foram à Curitíba para receber seus prêmios.","30/10/2023","noimg.png",false);
  createOnce += 1;
  }
}


let createOnceworker = 0;
function action2()
{
  let element1 = document.getElementById("page1");
  let element2 = document.getElementById("page2");
  let element3 = document.getElementById("page3");
  element1.setAttribute("hidden", "hidden");
  element2.removeAttribute("hidden");
  element3.setAttribute("hidden", "hidden");

  if(createOnceworker == 0){
    createWorker("Vanderlan Gobbo","Diretor","Diretor do colégio José Ferreira de Mello.","pessoas/vanderlan.jpeg");
    createWorker("Célia Regina","Pedagoga","Uma das Pedagogas do colégio.","pessoas/célia.jpeg");
    createWorker("Mônica Misue","Pedagoga","Outra Pedagoga do colégio.","pessoa.svg");
    createWorker("Jéssika Vidotti","Professora","Professora de Programação.","pessoas/jessika.jpeg");
    createWorker("Clodoaldo Chaves","Professor","Professor de Química.","pessoa.svg");
    createWorker("Inês Soáres","Professora","Professora de História.","pessoas/ines.jpeg");
    createWorker("Ana Paula","Professora","Professora de Biologia e Robótica.","pessoas/ana.jpeg");
    createWorker("Andreia Faustino","Professora","Professora de Sociologia.","pessoas/andreia.jpeg");
    createWorker("Alfredo Bernardo","Professor","Professor de Educação Financeira.","pessoa.svg");
    createWorker("Eliane Soares","Professora","Professora de Biotecnologia, ela também é conhecida por 'Patinha'. ","pessoas/eliane.jpeg");
    createWorker("Wellington André","Professor","Professor de Matemática.","pessoas/wellington.jpeg");
    createWorker("Fabiane de Oliveira","Professora","Professora de Empreendedorismo.","pessoas/fabiane.jpeg");
    createWorker("Jacir","Professor","Professor de Geografia.","pessoas/jacir.jpeg");
    createWorker("Edimarães Silvestre","Professor","Professor de Língua Portuguesa.","pessoas/edimaraes.jpeg");
    createWorker("Júlio Cesar","Professor","Professor de Projeto de Vida.","pessoas/julio.jpeg");
    createWorker("Rosa Maria","Professora","Professora de Inglês.","pessoa.svg");
    createOnceworker +=1;
  }
}

let additiveY1 = 55;
let PSX1 = 10;
let PSY1 = 70;
function createWorker(workerName,role, description,imgLink)
{
  const para1 = document.createElement("h1");
  para1.style.position = "absolute";
  para1.style.top = (PSY1 + 1) + "%";
  para1.style.left = PSX1 + "%";
  para1.style.fontSize = (222 - (workerName.length * 8)) + "%";
  para1.style.fontFamily = "Raleway";
  para1.style.textAlign = "start";
  const node1 = document.createTextNode(workerName);
  para1.appendChild(node1);


  const desc = document.createElement("h1");
  desc.style.position = "absolute";
  desc.style.top = (PSY1 + 31) + "%";
  desc.style.left = PSX1 + "%";
  desc.style.fontSize = (80) + "%";
  desc.style.fontFamily = "RalewayThin";
  desc.style.maxWidth = "9%";
  desc.style.textAlign = "start";
  const nodesc = document.createTextNode(description);
  desc.appendChild(nodesc);



  const para2 = document.createElement("h1");
  para2.style.position = "absolute";
  para2.style.top = (PSY1 - 1) + "%";
  para2.style.left = (PSX1 ) + "%";
  para2.style.fontSize = (140 - (role.length * 4)) + "%";
  para2.style.fontFamily = "Raleway";
  para2.style.textAlign = "start";
  const node2 = document.createTextNode(role);
  para2.appendChild(node2);



  const block = document.createElement("h1");
  block.style.position = "absolute";
  block.style.top = (PSY1 - 1.5) + "%";
  block.style.left = (PSX1 + 12) + "%";
  block.style.backgroundColor = "#555";
  block.style.height = (additiveY1 - (additiveY1 / 6)) + "%";
  block.style.width = 11 + "%";
  block.style.top = (PSY1 - 4.6) + "%";
  block.style.left = (PSX1 - 1) + "%";


  const para5 = document.createElement("img");
  para5.style.position = "absolute";
  para5.setAttribute("src",imgLink);
  para5.style.backgroundColor = "#555";
  para5.style.height = 260 - (additiveY1 - (additiveY1 / 8)) + "px";
  para5.style.width = 9 + "%";
  para5.style.top = (PSY1 + 8) + "%";
  para5.style.left = (PSX1 + 0) + "%";


  let elementHold = document.getElementById("placehold1");
  elementHold.appendChild(block);
  elementHold.appendChild(para1);
  elementHold.appendChild(para2);
  elementHold.appendChild(para5);
  elementHold.appendChild(desc);

  PSX1 += (additiveY1 / 4);
  if(PSX1 > 90)
    {
      PSY1 += (additiveY1 - (additiveY1 / 8));
      PSX1 = 10;
    }
}


function distance(x1, y1, x2, y2) 
{
  return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
}




function lerp(start, end, speed) { 
  return start + (end - start) * speed; 
} 

function playSound(audioString)
{
  var audio = new Audio(audioString);
  audio.play();
}


let additiveY = 55;
let PSX = 10;
let PSY = 70;
function createEvent(eventName,eventInfo, date, imgLink, isLandspace)
{
  const para1 = document.createElement("h1");
  para1.style.position = "absolute";
  para1.style.top = (PSY + 1) + "%";
  para1.style.left = PSX + "%";
  para1.style.fontSize = (222 - (eventName.length * 4)) + "%";
  para1.style.fontFamily = "Courier New";
  para1.style.textAlign = "start";
  const node1 = document.createTextNode(eventName);

  para1.appendChild(node1);
  const para2 = document.createElement("h1");
  para2.style.position = "absolute";
  para2.style.top = (PSY +31) + "%";
  para2.style.left = PSX + "%";
  para2.style.fontFamily = "Courier New";
  para2.style.fontSize = "90%";
  para2.style.maxWidth = "16%";
  const node2 = document.createTextNode(eventInfo);
  para2.appendChild(node2);
  para2.style.textAlign = "start";


  const para3 = document.createElement("h1");
  para3.style.position = "absolute";
  para3.style.top = (PSY - 1.5) + "%";
  para3.style.left = (PSX + 11) + "%";
  para3.style.fontFamily = "Courier New";
  para3.style.fontSize = "110%";
  para3.style.maxWidth = "80%";
  para3.style.textAlign = "left";
  const node3 = document.createTextNode(date);
  para3.appendChild(node3);


  const para4 = document.createElement("h1");
  para4.style.position = "absolute";
  para4.style.top = (PSY - 1.5) + "%";
  para4.style.left = (PSX + 12) + "%";
  para4.style.backgroundColor = "#555";
  para4.style.height = (additiveY - (additiveY / 6)) + "%";
  para4.style.width = 18 + "%";
  para4.style.top = (PSY - 4.6) + "%";
  para4.style.left = (PSX - 1) + "%";

  
  let elementHold = document.getElementById("placehold");
  elementHold.appendChild(para4);
  elementHold.appendChild(para1);
  elementHold.appendChild(para2);
  elementHold.appendChild(para3);

  if(!imgLink.includes("mp4")){
      if(!isLandspace){
      const para5 = document.createElement("img");
      para5.style.position = "absolute";
      para5.setAttribute("src",imgLink);
      para5.style.backgroundColor = "#555";
      para5.style.height = 250 - (additiveY - (additiveY / 8)) + "px";
      para5.style.width = 16 + "%";
      para5.style.top = (PSY + 8) + "%";
      para5.style.left = (PSX) + "%";
      elementHold.appendChild(para5);
      } else {
        const para5 = document.createElement("img");
        para5.style.position = "absolute";
        para5.setAttribute("src",imgLink);
        para5.style.backgroundColor = "#555";
        para5.style.height = 250 - (additiveY - (additiveY / 8)) + "px";
        para5.style.width = 9 + "%";
        para5.style.top = (PSY + 8) + "%";
        para5.style.left = (PSX + 3.25) + "%";
        elementHold.appendChild(para5);
      }
  } else {
      const para5 = document.createElement("video");
      para5.style.position = "absolute";
      para5.setAttribute("src",imgLink);
      para5.setAttribute("type", "video/mp4");
      para5.setAttribute("controls", "controls");
      para5.style.backgroundColor = "#555";
      para5.style.height = 250 - (additiveY - (additiveY / 8)) + "px";
      para5.style.width = 16 + "%";
      para5.style.top = (PSY + 8) + "%";
      para5.style.left = (PSX) + "%";
      elementHold.appendChild(para5);
  }
  PSX += (additiveY / 2.6);
  if(PSX > 90)
    {
      PSY += (additiveY - (additiveY / 8));
      PSX = 10;
    }
}




let posY = 50;
let posX = 40;
let multiplier = 5;
let angle = 0;

let mouseX = 0;
let mouseY = 0;
function start()
{
  var audio2 = new Audio('elevator.mp3');
  audio2.play();
}

  function execute()
  {
    setInterval(animation, 10); //a função está em milisegundos, 1000 milisegundos é 1 minuto
    var audio = new Audio('AAAAUGH.mp3');
    audio.play();
  }


  function animation()
    {

      if(posY < 900)
      {
      const elem = document.getElementById("myDiv");
      multiplier -= 0.2
      angle -= 0.69;
      posY+= -1 * multiplier;
      posX += 1;
      elem.style.top = posY + 'px';
      elem.style.left= posX + 'px';
      //console.log(elem.style.top);
      //console.log(posY);
      elem.style.transform = 'rotate(' + angle + '90deg)';


      } else {
        const elem = document.getElementById("myDiv");
        elem.style.opacity = 0;
      }
    }
