const conversation = document.getElementById("conversation");

function addToConvo(text){
    let li = document.createElement("li");
    li.innerText = text;
    conversation.appendChild(li);
}

async function sendtoOllama(prompt) {
    addToConvo(prompt);
    const url = "http://localhost:11434/api/generate";  
    const options = {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: "hi",
            stream: false,
            model: "phi3"
        })
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.response);
    addToConvo(data.response);

    
}
sendtoOllama();