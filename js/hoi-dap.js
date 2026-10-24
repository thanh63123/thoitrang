const cacCauHoi = document.querySelectorAll(".faq-cau-hoi");
const nutMoHet = document.getElementById("nut-mo-het");
const nutDongHet = document.getElementById("nut-dong-het");

function moCauHoi(nut) {
  const traLoi = document.getElementById(nut.getAttribute("aria-controls"));
  traLoi.classList.remove("an");
  nut.classList.add("dang-mo");
  nut.setAttribute("aria-expanded", "true");
}

function dongCauHoi(nut) {
  const traLoi = document.getElementById(nut.getAttribute("aria-controls"));
  traLoi.classList.add("an");
  nut.classList.remove("dang-mo");
  nut.setAttribute("aria-expanded", "false");
}

cacCauHoi.forEach(function (nut) {
  nut.addEventListener("click", function () {
    const dangMo = nut.getAttribute("aria-expanded") === "true";
    if (dangMo) {
      dongCauHoi(nut);
    } else {
      moCauHoi(nut);
    }
  });
});

nutMoHet.addEventListener("click", function () {
  cacCauHoi.forEach(function (nut) {
    moCauHoi(nut);
  });
});

nutDongHet.addEventListener("click", function () {
  cacCauHoi.forEach(function (nut) {
    dongCauHoi(nut);
  });
});

