
function testGS(){

url = "https://script.google.com/macros/s/AKfycbwr2jyzWd0tKFufD9tWyiyWrRSd_8rAuxYoAAQA-9JpaXWU_G_hU92t1-_sfbLyEJed/exec"


fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });

}


function addGS(){

    url = "https://script.google.com/macros/s/AKfycbwr2jyzWd0tKFufD9tWyiyWrRSd_8rAuxYoAAQA-9JpaXWU_G_hU92t1-_sfbLyEJed/exec"
    
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'

        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({name:"Olivia"}) // body data type must match "Content-Type" header
      });

    
    }
    
document.getElementById("btn2").addEventListener("click",addGS);

document.getElementById("btn").addEventListener("click",testGS);
