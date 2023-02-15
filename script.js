async function dogFacts() {
    try{
        let response = await fetch("https://dog-api.kinduff.com/api/facts");
        let data = await response.json();
        let fact = data.facts[0];
        let content = document.getElementById("content");
        let para = document.createElement("p");
        para.textContent = fact;
        content.appendChild(para);
    }catch(error){
        console.error(error);
    }
}

dogFacts();