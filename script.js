function BrivaisLaiksBack()
{
    location.href = "Audzeknu_ikdiena.html";
}

function BrivaisLaiksFroward()
{
    location.href = "Brivais_laiks_izvelne.html";
}

function DejasBack()
{
    location.href = "Brivais_laiks_izvelne.html";
}

function DejasForward()
{
    location.href = "Dejas2.html";
}

function Dejas2Back()
{
    location.href = "Dejas.html";
}

function Dejas2Forward()
{
    location.href = "Dejas2.html";
}

const openBtn = document.getElementById("DejasMore");
const closeBtn = document.getElementById("CloseDejasPopup");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})
