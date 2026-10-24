const formTuVan = document.getElementById("form-tu-van");
const hopTomTat = document.getElementById("tom-tat");
const danhSachTomTat = document.getElementById("danh-sach-tom-tat");

const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function baoLoi(idO, noiDung) {
  const o = document.getElementById(idO);
  const dongLoi = document.getElementById("loi-" + idO);
  dongLoi.textContent = noiDung;
  if (noiDung === "") {
    o.classList.remove("loi");
    o.setAttribute("aria-invalid", "false");
  } else {
    o.classList.add("loi");
    o.setAttribute("aria-invalid", "true");
  }
}

function themDongTomTat(tenTruong, giaTri) {
  const dong = document.createElement("li");
  const chuDam = document.createElement("strong");
  chuDam.textContent = tenTruong + ": ";
  dong.appendChild(chuDam);
  dong.appendChild(document.createTextNode(giaTri));
  danhSachTomTat.appendChild(dong);
}

formTuVan.addEventListener("submit", function (suKien) {
  suKien.preventDefault();

  const hoTen = document.getElementById("ho-ten").value.trim();
  const email = document.getElementById("email").value.trim();
  const mucDich = document.querySelector('input[name="muc-dich"]:checked');
  const chonMau = document.getElementById("mau-quan-tam");
  const chieuCao = document.getElementById("chieu-cao").value;
  const loiNhan = document.getElementById("loi-nhan").value.trim();

  const cacOLoi = [];

  if (hoTen === "") {
    baoLoi("ho-ten", "Bạn chưa nhập họ tên (chỉ nhập dấu cách cũng không được).");
    cacOLoi.push("ho-ten");
  } else if (hoTen.length < 2) {
    baoLoi("ho-ten", "Họ tên cần ít nhất 2 ký tự.");
    cacOLoi.push("ho-ten");
  } else {
    baoLoi("ho-ten", "");
  }

  if (email === "") {
    baoLoi("email", "Bạn chưa nhập email.");
    cacOLoi.push("email");
  } else if (mauEmail.test(email) === false) {
    baoLoi("email", "Email chưa đúng dạng, ví dụ: ten@gmail.com");
    cacOLoi.push("email");
  } else {
    baoLoi("email", "");
  }

  const dongLoiMucDich = document.getElementById("loi-muc-dich");
  if (mucDich === null) {
    dongLoiMucDich.textContent = "Bạn hãy chọn một mục ở phần \"Bạn cần gì?\".";
    cacOLoi.push("muc-dich-1");
  } else {
    dongLoiMucDich.textContent = "";
  }

  if (chonMau.value === "") {
    baoLoi("mau-quan-tam", "Bạn hãy chọn một mẫu (hoặc chọn \"Chưa biết, cần gợi ý\").");
    cacOLoi.push("mau-quan-tam");
  } else {
    baoLoi("mau-quan-tam", "");
  }

  if (chieuCao !== "" && (Number(chieuCao) < 140 || Number(chieuCao) > 200)) {
    baoLoi("chieu-cao", "Chiều cao cần nằm trong khoảng 140 đến 200 cm, hoặc để trống.");
    cacOLoi.push("chieu-cao");
  } else {
    baoLoi("chieu-cao", "");
  }

  if (loiNhan === "") {
    baoLoi("loi-nhan", "Bạn chưa nhập lời nhắn.");
    cacOLoi.push("loi-nhan");
  } else if (loiNhan.length < 10) {
    baoLoi("loi-nhan", "Lời nhắn cần ít nhất 10 ký tự để nhóm hiểu bạn cần gì.");
    cacOLoi.push("loi-nhan");
  } else {
    baoLoi("loi-nhan", "");
  }

  if (cacOLoi.length > 0) {
    hopTomTat.classList.add("an");
    document.getElementById(cacOLoi[0]).focus();
    return;
  }

  const nhanMucDich = document.querySelector('label[for="' + mucDich.id + '"]').textContent;
  const tenMau = chonMau.options[chonMau.selectedIndex].text;

  danhSachTomTat.textContent = "";
  themDongTomTat("Họ tên", hoTen);
  themDongTomTat("Email", email);
  themDongTomTat("Bạn cần", nhanMucDich);
  themDongTomTat("Mẫu quan tâm", tenMau);
  if (chieuCao !== "") {
    themDongTomTat("Chiều cao", chieuCao + " cm");
  }
  themDongTomTat("Lời nhắn", loiNhan);

  hopTomTat.classList.remove("an");
});

formTuVan.addEventListener("input", function (suKien) {
  const o = suKien.target;
  if (o.type === "radio") {
    document.getElementById("loi-muc-dich").textContent = "";
  } else {
    baoLoi(o.id, "");
  }
});

