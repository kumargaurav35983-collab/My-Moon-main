myMoon=document.querySelector("#myMoon");
image=document.querySelector("#image");
moonText=document.querySelector("#moonText");


myMoon.addEventListener("change", ()=>{
    switch (myMoon.value) {
        case "144p":
            image.src="./static/144p.png";
            console.log("144p");
            moonText.innerText="144p Moon";
            break;
        case "480p":
            image.src="./static/480p.png";
            moonText.innerText="480p Moon";
            break;
        case "720p":
            image.src="./static/720p.png";
            moonText.innerText="720p Moon";
            break;
        case "1080p":
            image.src="./static/1080p2.png";
            moonText.innerText="It Really You";
            break;
        default:
            break;
    }
});