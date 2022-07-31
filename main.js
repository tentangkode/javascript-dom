// single element
// const kegiatan = document.getElementById("kegiatan")
// console.log(kegiatan)
// const judul = document.querySelector("h2");
// console.log(judul)
// const input = document.querySelector("input[name=kegiatan]");
// console.log(input);
// const item = document.querySelector(".item:nth-child(3)");
// console.log(item);

// multiple element
// const items = document.getElementsByClassName("item");
// console.log(items); // mengembalikan dalam bentuk html collection

// const classItem = document.querySelectorAll('.item');
// console.log(classItem) // mengambalikan dalam bentuk nodelist

// const li = document.getElementsByTagName("li");
// console.log(li)

// const kegiatan = document.getElementsByName("kegiatan[]");
// console.log(kegiatan)

// mengambil item ganjil
// const ganjil = document.querySelectorAll(".item:nth-child(odd)");
// console.log(ganjil)

// mengambil item genap
// const genap = document.querySelectorAll(".item:nth-child(even)");
// console.log(genap)

// Mengubah styling element
// const judul = document.getElementById("judul");
// judul.style.color = "#000"
// judul.style.fontSize = "60px"
// judul.style.fontStyle = "italic"

// const btnSimpan = document.getElementById("btn-simpan");
// btnSimpan.style.background = "red";
// btnSimpan.style.color = "white";

// const items = document.querySelectorAll(".item");
// items[1].style.color = "red";
// items.forEach(item => item.style.color = "red");

// const itemsNotCompleted = document.querySelectorAll(".item:not(.completed)");
// itemsNotCompleted.forEach(item => item.style.color = "red");

// membuat element
// var divBaru = document.createElement("div");
// // menambah class ke element
// divBaru.className = "tentangkode";
// // menambah id
// divBaru.id = "new-id";
// // menamba text node
// divBaru.appendChild(document.createTextNode("Hello my bro"));

// divBaru.setAttribute("title", "hello my bro")

// var header = document.querySelector(".header");
// var judul = document.getElementById("judul");
// header.insertBefore(divBaru, judul);

// const listKegiatan = document.getElementById("list-kegiatan");
// const itemBaru = document.createElement("li");
// itemBaru.appendChild(document.createTextNode("Belajar python"));
// itemBaru.className = "item completed";
// listKegiatan.appendChild(itemBaru);
//listKegiatan.prepend(itemBaru);
//listKegiatan.append(itemBaru);

// menghapus element

// const listKegiatan = document.getElementById("list-kegiatan");

//const item = document.querySelector(".item:nth-child(2)");
//item.remove();
//listKegiatan.removeChild(item);

// const items = document.querySelectorAll(".completed");
// items.forEach(item => listKegiatan.removeChild(item));


// modifikasi atribute
// const item = document.querySelector(".item");
// //item.id = "judul";
// item.setAttribute("id", "judul");
// setTimeout(() => item.removeAttribute("id"), 2000);

// const kegiatan = document.getElementById("kegiatan");
// kegiatan.setAttribute("placeholder", "Isikan kegiatan disini...");
// kegiatan.removeAttribute("placeholder");

// if (item.classList.contains("completed") == false) {
//     item.classList.add("completed");
// }

// meofifikasi value /ambil input value
// const kegiatanInput = document.getElementById("kegiatan");
// kegiatanInput.value = "Pergi ke pasar";
// kegiatanInput.value = ""

// traversing DOM 

// Parent Node
// const item = document.querySelector(".item");
// console.log(item.parentNode.parentNode);
// item.parentNode.style.width = "100px"

// const input = document.getElementById("kegiatan");
// console.log(input.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
// console.log(input.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
// console.log(input.closest("body"));

// Child Node 
// const listKegiatan = document.getElementById("list-kegiatan");
// console.log(listKegiatan.childNodes);
// console.log(listKegiatan.children);

// console.log(listKegiatan.firstChild);
// console.log(listKegiatan.firstElementChild);

// console.log(listKegiatan.lastChild);
// console.log(listKegiatan.lastElementChild);

// listKegiatan.firstElementChild.style.color = "red";
// listKegiatan.lastElementChild.style.color = "black";

// const container = document.querySelector(".container");
// console.log(container.querySelectorAll(".item"));
// console.log(container.querySelectorAll(".item.completed"));
// console.log(container.querySelectorAll(".item:not(.completed)"));

// Siblings Node
//const listKegiatan = document.getElementById("list-kegiatan");
// console.log(listKegiatan.previousSibling);
// console.log(listKegiatan.previousElementSibling);

//console.log(listKegiatan.nextSibling);
//console.log(listKegiatan.nextElementSibling);

// event listener

// const btnSimpan = document.getElementById("btn-simpan");

// btnSimpan.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("belajar javascript DOM");
// });

// event parameter
// const btnSimpan = document.getElementById("btn-simpan");

// btnSimpan.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.classList);

    //console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    //console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey);
    // console.log(e.metaKey);
//});

// Mouse events
// const btnSimpan = document.getElementById("btn-simpan");

// //btnSimpan.addEventListener("click", jalankanEvent)
// // btnSimpan.addEventListener("dblclick", jalankanEvent)

// const box = document.getElementById("box");
// //box.addEventListener('mouseenter', jalankanEvent);
// box.addEventListener('mouseleave', jalankanEvent);
// //box.addEventListener('mouseover', jalankanEvent);
// box.addEventListener('mouseout', jalankanEvent);

// keyboard dan input events

const input = document.getElementById("kegiatan");
//input.addEventListener("keydown", jalankanEvent);
//input.addEventListener("keyup", jalankanEvent);
// input.addEventListener("keypress", jalankanEvent);

//input.addEventListener("focus", jalankanEvent);
//input.addEventListener("blur", jalankanEvent);

// input.addEventListener("cut", jalankanEvent);
// input.addEventListener("copy", jalankanEvent);
// input.addEventListener("paste", jalankanEvent);

// input.addEventListener("input", jalankanEvent);

// const select = document.getElementById("mySelect");
// select.addEventListener("change", jalankanEvent);

// function jalankanEvent(e) {
//     console.log("Tipe event: " + e.type);

//     console.log(e.target.value)
//     console.log(e.target.options[e.target.selectedIndex].text)
// }

// const form = document.getElementById("form-kegiatan");
// form.addEventListener("submit", jalankanEvent)

// function jalankanEvent(e) {
//     e.preventDefault();
//     console.log("Tipe event: " + e.type);
// }


const listKegiatan = document.getElementById("list-kegiatan");
const formKegiatan = document.getElementById("form-kegiatan");

formKegiatan.addEventListener("submit", function(e){
    e.preventDefault();

    // mengambil inputan kegiatan
    const inputKegiatan = document.getElementById("kegiatan");
    if (inputKegiatan.value == "") {
        alert("silahkan masukkan kegiatan...");
        return;
    }

    // membuat element li
    const kegiatanBaru = document.createElement("li")
    // menambahkan class ke tag li kegiatanBaru
    kegiatanBaru.className = "item"
    // menambahkan text inputan ke li
    kegiatanBaru.appendChild(document.createTextNode(inputKegiatan.value));

    const btnHapus = document.createElement("button");
    // menambahkan class ke element button
    btnHapus.className = "hapus";
    // memambahkan text kedalam btn hapus
    btnHapus.appendChild(document.createTextNode("X"));
    // menambahkan btn hapus kedalam tag li kegiatan baru
    kegiatanBaru.appendChild(btnHapus);
    // menambahkan item baru kedalam list kegiatan
    listKegiatan.appendChild(kegiatanBaru);

    inputKegiatan.value = "";
});

listKegiatan.addEventListener("click", function(e){
    if (e.target.classList.contains("hapus") == true) {
        const li = e.target.parentElement;
        listKegiatan.removeChild(li);
    } else {
        // membuat kegiatan menjadi completed / tidak complete
        if (e.target.classList.contains("completed")) {
            e.target.classList.remove("completed");
        } else {
            e.target.classList.add("completed");
        }
    }
});

const inputPencarian = document.getElementById("pencarian");
inputPencarian.addEventListener("keyup", function(e){

    const itemKegiatan = document.querySelectorAll(".item");
    const textPencarian = e.target.value.toLowerCase();

    itemKegiatan.forEach(function(item) {
        const nama = item.firstChild.textContent;
        if (nama.toLowerCase().indexOf(textPencarian) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });

});