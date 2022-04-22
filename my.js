
function testGS(){

url = "https://script.google.com/macros/s/AKfycby6vy247EG7dtErP-U__9Yt7wweNbCWNWo7j8-tZTHqo_LMo3OEg3dvOfDljss_z0Y/exec"


fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });

}


function addGS(){

    url = "https://script.google.com/macros/s/AKfycby6vy247EG7dtErP-U__9Yt7wweNbCWNWo7j8-tZTHqo_LMo3OEg3dvOfDljss_z0Y/exec"
    
    
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
