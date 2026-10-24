const hopAnhLon = document.getElementById("hop-anh-lon");
const anhLon = document.getElementById("anh-lon");
const chuThichLon = document.getElementById("chu-thich-lon");
const nutDong = document.getElementById("nut-dong");
const cacAnhNho = document.querySelectorAll(".anh-nho");

let nutVuaBam = null;

function moAnhLon(nut) {
  const anh = nut.querySelector("img");
  const chuThich = nut.parentElement.querySelector("figcaption");

  anhLon.src = anh.getAttribute("src");
  anhLon.alt = anh.alt;
  chuThichLon.textContent = chuThich.textContent;

  hopAnhLon.classList.remove("an");
  nutVuaBam = nut;
  nutDong.focus();
}

function dongAnhLon() {
  hopAnhLon.classList.add("an");
  if (nutVuaBam !== null) {
    nutVuaBam.focus();
  }
}

cacAnhNho.forEach(function (nut) {
  nut.addEventListener("click", function () {
    moAnhLon(nut);
  });
});

nutDong.addEventListener("click", dongAnhLon);

hopAnhLon.addEventListener("click", function (suKien) {
  if (suKien.target === hopAnhLon) {
    dongAnhLon();
  }
});

document.addEventListener("keydown", function (suKien) {
  const dangMo = !hopAnhLon.classList.contains("an");
  if (suKien.key === "Escape" && dangMo) {
    dongAnhLon();
  }
});

