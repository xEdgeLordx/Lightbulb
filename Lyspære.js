let lightOn = false;
updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*html*/`
    <div class = "light" style = "background-color: ${lightOn ? "yellow" : "gray"};"><div>
        <div class = "buttContainer"><button onclick = "lightswitch()">${lightOn ? "Skru Av" : "Skru På"}</button></div>
    `;
}
function lightswitch(){
    lightOn = !lightOn;
    updateView()
}