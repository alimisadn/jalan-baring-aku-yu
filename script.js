document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("question").style.display = "none";
    document.getElementById("response").style.display = "block";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let btnNo = document.getElementById("no");
    let randomX = Math.random() * 200 - 100;
    let randomY = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
