let numero = 1;



setInterval(update,1);

function update()
{
    var id = document.getElementById("n");
    id.textContent = id.textContent + "aaaaa";
    if(id.textContent.length % 30)
        {
            id.textContent += '\n';
        }
}