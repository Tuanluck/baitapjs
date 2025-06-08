document.getElementById("btnBai1").onclick = function () {
  let diemChuan = +document.getElementById("diemChuan").value;
  let mon1 = +document.getElementById("mon1").value;
  let mon2 = +document.getElementById("mon2").value;
  let mon3 = +document.getElementById("mon3").value;
  let khuVuc = +document.getElementById("khuVuc").value;
  let doiTuong = +document.getElementById("doiTuong").value;

  let tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;

  const ketQua = document.getElementById("ketQua");
  const ketQuaText = document.getElementById("ketQuaText");
  const ketQuaChiTiet = document.getElementById("ketQuaChiTiet");
  const ketQuaIcon = document.getElementById("ketQuaIcon");

  ketQua.classList.remove("opacity-0", "h-0");
  ketQua.classList.add("opacity-100", "h-auto");

  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    ketQuaText.innerText = "Bạn đã rớt vì có môn 0 điểm.";
    ketQuaIcon.innerText = "❌";
    ketQuaChiTiet.innerText = `Tổng điểm: ${tongDiem} (chưa đạt chuẩn ${diemChuan})`;
    return;
  }

  if (tongDiem >= diemChuan) {
    ketQuaText.innerText = "Chúc mừng! Bạn đã đậu 🎉";
    ketQuaIcon.innerText = "✅";
  } else {
    ketQuaText.innerText = "Rất tiếc! Bạn đã rớt 😢";
    ketQuaIcon.innerText = "❌";
  }

  ketQuaChiTiet.innerText = `Tổng điểm: ${tongDiem} (Điểm chuẩn: ${diemChuan})`;
};
//bai2:
let tinhTienDien = function (soDien) {
  let tienDien;
  if (soDien <= 50) {
    tienDien = soDien * 500;
  } else if (soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else if (soDien > 350) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  } else {
    tienDien = "yêu cầu nhập số điện lớn hơn 0 ";
  }
  return tienDien;
};

document.getElementById("btnBai2").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soDien = +document.getElementById("soDien").value;

  let tienDien = tinhTienDien(soDien);
  ketQua2.classList.remove("opacity-0", "h-0");
  ketQua2.classList.add("opacity-100", "h-auto");

  document.getElementById("noiDungKetQua2").innerHTML =
    "Họ và tên: " + hoTen + " || Tiền điện của bạn là: " + tienDien + " VND";
};
let tinhThue = function (thuNhap, soNguoiPhuThuoc) {
  let thuNhapChiuThue = thuNhap - 4 - soNguoiPhuThuoc * 1.6;
  let tienThue;

  if (thuNhapChiuThue <= 0) {
    return "bạn không phải chịu thuế! ";
  }
  if (thuNhapChiuThue <= 60) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }
  return tienThue;
};
document.getElementById("btnBai3").onclick = function () {
  let hoTen = document.getElementById("hoVaTen").value;
  let thuNhap = +document.getElementById("thuNhap").value;
  let soNguoi = +document.getElementById("soNguoi").value;

  ketQua3.classList.remove("opacity-0", "h-0");
  ketQua3.classList.add("opacity-100", "h-auto");

  let tienThue = tinhThue(thuNhap, soNguoi);
  let hienThiTienThue =
    typeof tienThue === "number"
      ? tienThue.toLocaleString("vi-VN", { maximumFractionDigits: 2 }) +
        " triệu VND"
      : tienThue;

  document.getElementById("noiDungKetQua3").innerHTML =
    "Họ và tên: " + hoTen + " || tiền thuế của bạn là: " + hienThiTienThue;
};
//bai4:
document
  .getElementById("loaiKhachHang")
  .addEventListener("change", function () {
    let loai = this.value;
    let soKetNoiDiv = document.getElementById("soKetNoi");

    if (loai === "doanhNghiep") {
      soKetNoiDiv.innerHTML = `
      <label class="block text-gray-700 font-medium mb-1">Số kết nối:</label>
      <input id="soKetNoiInput" type="number" placeholder="Nhập số kết nối..."
          class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-blue-300">
    `;
    } else {
      soKetNoiDiv.innerHTML = "";
    }
  });
document.getElementById("btnBai4").onclick = function () {
  let chonLoai = document.getElementById("loaiKhachHang").value;
  let soKetNoi = +document.getElementById("soKetNoiInput").value;
  let maKhachHang = document.getElementById("maKhachHang").value;
  let soKenh = +document.getElementById("soKenh").value;

  let tienCap;
  ketQua4.classList.remove("opacity-0", "h-0");
  ketQua4.classList.add("opacity-100", "h-auto");

  if (chonLoai === "doanhNghiep") {
    if(soKetNoi<=10){
      tienCap = soKenh*50+75+15;
    }
    else{
      tienCap = soKenh*50+75+15+((soKetNoi-10)*5);
    }
  }
  else{
    tienCap = soKenh*7.5+20.5+4.5;
  }

  document.getElementById('noiDungKetQua4').innerHTML = "Mã khách hàng: "+ maKhachHang + " || Tiền cáp của bạn là: " + tienCap +" $";

};
