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

function SportsBack()
{
    location.href = "Audzeknu_ikdiena.html";
}

function SportsForward()
{
    location.href = "Sports2.html"
}

function Sports2Back()
{
    location.href = "Sports.html";
}

function Sports2Forward()
{
    location.href = "Sports3.html"
}

function Sports3Back()
{
    location.href = "Sports2.html";
}

function Sports3Forward()
{
    location.href = "Sports3.html"
}

function PirmsvestureBack()
{
    location.href = "Vesture.html"
}

function PirmsvestureForward()
{
    location.href = "Pirmsvesture_izvelne.html"
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
