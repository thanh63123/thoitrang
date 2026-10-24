const danhSachMau = [
  {
    ten: "Áo khoác dù Mưa Bụi",
    boSuuTap: "pho-mua",
    loai: "ao-khoac",
    gia: 450000,
    trangThai: "thuc-te",
    anh: "images/mau-mua-bui.jpg",
    alt: "Người mẫu nam mặc áo khoác dù Mưa Bụi màu xám có mũ khóa kéo xanh rêu",
    moTa: "Áo khoác dù tái chế có mũ, chống mưa nhẹ, gấp gọn bỏ cốp xe.",
    trangChiTiet: "chi-tiet-mua-bui.html"
  },
  {
    ten: "Quần túi hộp Ngõ Nhỏ",
    boSuuTap: "pho-mua",
    loai: "quan",
    gia: 380000,
    trangThai: "thuc-te",
    anh: "images/mau-ngo-nho.jpg",
    alt: "Người mẫu nam mặc quần túi hộp Ngõ Nhỏ màu xanh than phối áo thun trắng",
    moTa: "Quần kaki xanh than, 6 túi, ống suông dễ đạp xe.",
    trangChiTiet: ""
  },
  {
    ten: "Áo thun Vũng Nước",
    boSuuTap: "pho-mua",
    loai: "ao",
    gia: 220000,
    trangThai: "minh-hoa",
    anh: "images/mau-vung-nuoc.jpg",
    alt: "Người mẫu mặc áo thun xám Vũng Nước in hình gợn sóng trước ngực",
    moTa: "Áo thun cotton xám, in hình gợn sóng vũng nước trước ngực.",
    trangChiTiet: ""
  },
  {
    ten: "Áo dài cách tân Chiều Hồ Tây",
    boSuuTap: "gio-lua",
    loai: "ao",
    gia: 650000,
    trangThai: "thuc-te",
    anh: "images/mau-chieu-ho-tay.jpg",
    alt: "Người mẫu nữ mặc áo dài cách tân Chiều Hồ Tây màu kem thêu lá sen",
    moTa: "Áo dài ngắn bằng lụa pha màu kem, thêu tay lá sen màu hồng đất.",
    trangChiTiet: "chi-tiet-chieu-ho-tay.html"
  },
  {
    ten: "Chân váy linen Hoa Sữa",
    boSuuTap: "gio-lua",
    loai: "vay",
    gia: 360000,
    trangThai: "thiet-ke",
    anh: "images/mau-hoa-sua.jpg",
    alt: "Người mẫu nữ mặc chân váy linen Hoa Sữa chữ A màu kem thêu hoa sữa ở gấu váy",
    moTa: "Chân váy chữ A dài qua gối, thêu chùm hoa sữa nhỏ ở gấu váy.",
    trangChiTiet: ""
  },
  {
    ten: "Sơ mi lụa Gió Sớm",
    boSuuTap: "gio-lua",
    loai: "ao",
    gia: 420000,
    trangThai: "minh-hoa",
    anh: "images/mau-gio-som.jpg",
    alt: "Người mẫu nữ mặc sơ mi lụa Gió Sớm màu hồng đất phối quần linen kem",
    moTa: "Sơ mi lụa màu hồng đất, dáng rộng, tay dài có thể xắn.",
    trangChiTiet: ""
  }
];

const tenBoSuuTap = {
  "pho-mua": "Phố Mưa",
  "gio-lua": "Gió Lụa"
};

const tenTrangThai = {
  "thuc-te": "Đã may mẫu",
  "thiet-ke": "Bản thiết kế",
  "minh-hoa": "Ảnh mẫu minh họa"
};

let boSuuTapDangChon = "tat-ca";

const khungDanhSach = document.getElementById("danh-sach-mau");
const chonLoai = document.getElementById("chon-loai");
const dongTrangThai = document.getElementById("trang-thai-loc");
const hopKhongCo = document.getElementById("khong-co-ket-qua");
const nutXemTatCa = document.getElementById("nut-xem-tat-ca");
const cacNutLoc = document.querySelectorAll(".nut-loc");

function dinhDangGia(soTien) {
  return soTien.toLocaleString("vi-VN") + "đ";
}

function taoTheMau(mau) {
  const the = document.createElement("article");
  the.className = "the";

  const anh = document.createElement("img");
  anh.src = mau.anh;
  anh.alt = mau.alt;
  anh.width = 896;
  anh.height = 1200;
  the.appendChild(anh);

  const nhan = document.createElement("span");
  nhan.className = "nhan nhan-" + mau.trangThai;
  nhan.textContent = tenTrangThai[mau.trangThai];
  the.appendChild(nhan);

  const tieuDe = document.createElement("h3");
  tieuDe.textContent = mau.ten;
  the.appendChild(tieuDe);

  const boSuuTap = document.createElement("p");
  boSuuTap.textContent = "Bộ sưu tập: " + tenBoSuuTap[mau.boSuuTap];
  the.appendChild(boSuuTap);

  const moTa = document.createElement("p");
  moTa.textContent = mau.moTa;
  the.appendChild(moTa);

  const gia = document.createElement("p");
  gia.className = "gia";
  gia.textContent = "Giá dự kiến: " + dinhDangGia(mau.gia);
  the.appendChild(gia);

  if (mau.trangChiTiet !== "") {
    const lienKet = document.createElement("a");
    lienKet.href = mau.trangChiTiet;
    lienKet.textContent = "Xem câu chuyện thiết kế";
    the.appendChild(lienKet);
  }

  return the;
}

function hienThiMau() {
  const loaiDangChon = chonLoai.value;

  const ketQua = danhSachMau.filter(function (mau) {
    const dungBoSuuTap = boSuuTapDangChon === "tat-ca" || mau.boSuuTap === boSuuTapDangChon;
    const dungLoai = loaiDangChon === "tat-ca" || mau.loai === loaiDangChon;
    return dungBoSuuTap && dungLoai;
  });

  khungDanhSach.textContent = "";

  ketQua.forEach(function (mau) {
    khungDanhSach.appendChild(taoTheMau(mau));
  });

  if (ketQua.length === 0) {
    hopKhongCo.classList.remove("an");
    dongTrangThai.textContent = "Không tìm thấy mẫu nào.";
  } else {
    hopKhongCo.classList.add("an");
    let thongBao = "Đang hiển thị " + ketQua.length + " mẫu";
    if (boSuuTapDangChon !== "tat-ca") {
      thongBao = thongBao + " của bộ sưu tập " + tenBoSuuTap[boSuuTapDangChon];
    }
    dongTrangThai.textContent = thongBao + ".";
  }
}

function chonBoSuuTap(giaTri) {
  boSuuTapDangChon = giaTri;

  cacNutLoc.forEach(function (nut) {
    if (nut.dataset.boSuuTap === giaTri) {
      nut.classList.add("dang-chon");
      nut.setAttribute("aria-pressed", "true");
    } else {
      nut.classList.remove("dang-chon");
      nut.setAttribute("aria-pressed", "false");
    }
  });

  hienThiMau();
}

cacNutLoc.forEach(function (nut) {
  nut.addEventListener("click", function () {
    chonBoSuuTap(nut.dataset.boSuuTap);
  });
});

chonLoai.addEventListener("change", hienThiMau);

nutXemTatCa.addEventListener("click", function () {
  chonLoai.value = "tat-ca";
  chonBoSuuTap("tat-ca");
});

hienThiMau();

