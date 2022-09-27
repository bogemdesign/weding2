// waktu mundur plugin
let waktuMundur= document.querySelector(".waktu-mundur ul")

// edit di date awal bulan, harus 3 huruf bhasa inggris
var deadline = new Date("feb  5, 2023 08:59:59").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// document.getElementById("countdown").innerHTML = days + " Hari "+ hours + " Jam " + minutes + "  " + seconds + "   "; 
waktuMundur.children[0].textContent = days
waktuMundur.children[1].textContent = hours
waktuMundur.children[2].textContent = minutes
waktuMundur.children[3].textContent = seconds
if (t < 0) { 
clearInterval(x); 
waktuMundur.children[0].textContent = 0
waktuMundur.children[1].textContent = 0
waktuMundur.children[2].textContent = 0
waktuMundur.children[3].textContent = 0
} 
}, 1000);

