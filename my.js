
function testGS(){

url = "https://script.google.com/macros/s/AKfycbwr2jyzWd0tKFufD9tWyiyWrRSd_8rAuxYoAAQA-9JpaXWU_G_hU92t1-_sfbLyEJed/exec"


fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",testGS);
