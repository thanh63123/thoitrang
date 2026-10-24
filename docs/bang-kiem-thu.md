# Bảng kiểm thử Website Sợi Trẻ

## 1. Kiểm thử chung (10 trường hợp)

| Mã | Hạng mục kiểm thử | Dữ liệu / Thao tác thử | Kết quả mong đợi | Kết quả thực tế | Lỗi đã sửa |
|---|---|---|---|---|---|
| TC01 | Mở trực tiếp trang chủ | Mở `Website/index.html` bằng trình duyệt | Trang hiển thị đầy đủ banner, nội dung, ảnh, CSS và không cần máy chủ | Đạt | Không |
| TC02 | Điều hướng menu chính | Bấm lần lượt 9 mục trên menu ở đầu trang | Chuyển đúng sang từng trang tương ứng, mục đang xem được tô nổi bật | Đạt | Không |
| TC03 | Liên kết logo về trang chủ | Từ trang `lien-he.html`, bấm vào logo `SợiTrẻ` | Quay về trang `index.html` | Đạt | Không |
| TC04 | Liên kết ở chân trang (footer) | Bấm các liên kết trong cột "Khám phá" ở footer | Mở đúng các trang `bo-suu-tap.html`, `kich-thuoc.html`, `hoi-dap.html`, `lien-he.html` | Đạt | Không |
| TC05 | Hiển thị hình ảnh và thuộc tính `alt` | Kiểm tra toàn bộ ảnh JPG và SVG trên 11 trang HTML | Tất cả ảnh hiển thị đúng tỷ lệ, không méo, có `alt` mô tả rõ người mẫu và trang phục | Đạt | Đồng bộ kích thước ảnh thực tế 896×1200, 1200×896 và bổ sung `alt` chi tiết trong HTML cùng `js/loc-mau.js` |
| TC06 | Hiển thị bảng dữ liệu | Xem bảng ở `gioi-thieu.html`, `chat-lieu.html` và 2 bảng size Nữ/Nam (S – XXL) ở `kich-thuoc.html` | Bảng có `caption`, `th`, `tr`, `td` rõ ràng, số liệu khớp 100% với `infographic.svg` | Đạt | Bổ sung đủ 2 bảng 5 size S, M, L, XL, XXL cho Nữ và Nam, đồng bộ với `infographic.svg` |
| TC07 | Hiển thị ở màn hình máy tính (1366 px) | Đặt chiều rộng trình duyệt 1366 px | Lưới 3 cột / 2 cột cân đối, menu nằm ngang, không tràn ngang | Đạt | Căn thẳng hàng tiêu đề `h2` đầu cột `.luoi-2` với hình minh họa bên cạnh |
| TC08 | Hiển thị ở màn hình điện thoại (390 px) | Đặt chiều rộng trình duyệt 390 px | Lưới tự thu về 1 cột, bảng có thanh cuộn ngang `.cuon-ngang`, không tràn ngang | Đạt | Không |
| TC09 | Thao tác bằng bàn phím (Tab / Enter) | Nhấn phím `Tab` qua menu, nút lọc, câu hỏi FAQ, các ô form | Có viền vàng `outline` rõ ràng khi `:focus`, nhấn `Enter` kích hoạt được | Đạt | Không |
| TC10 | Hiển thị tiếng Việt và bố cục SVG | Kiểm tra tiêu đề `h1`, `h2`, `h3`, bảng `th` và 3 ấn phẩm `banner.svg`, `poster.svg`, `infographic.svg` | Dấu tiếng Việt hiển thị đều, chữ trong SVG nằm gọn trong khung, không chồng lấn | Đạt | Dùng font `Arial, Tahoma, sans-serif`, mã màu đặc chuẩn và căn chỉnh tọa độ trong cả 3 tệp SVG |

---

## 2. Kiểm thử chức năng JavaScript 1: Lọc mẫu theo bộ sưu tập (`js/loc-mau.js`)

| Mã | Dữ liệu / Thao tác thử | Kết quả mong đợi | Kết quả thực tế |
|---|---|---|---|
| JS1-01 | Mở trang `bo-suu-tap.html` (mặc định: "Tất cả" + "Tất cả loại") | Hiển thị đủ 6 mẫu, dòng trạng thái báo "Đang hiển thị 6 mẫu." | Đạt |
| JS1-02 | Bấm nút bộ sưu tập "Phố Mưa", giữ nguyên "Tất cả loại" | Hiển thị 3 mẫu thuộc bộ sưu tập Phố Mưa, dòng trạng thái báo "Đang hiển thị 3 mẫu của bộ sưu tập Phố Mưa." | Đạt |
| JS1-03 | Bấm nút "Gió Lụa" và chọn loại trang phục "Quần" | Không có mẫu nào khớp, hiện hộp thông báo `#khong-co-ket-qua` và nút "Xem tất cả mẫu" | Đạt |
| JS1-04 | Bấm nút "Xem tất cả mẫu" khi đang ở trạng thái không có kết quả | Đặt lại bộ lọc về "Tất cả" và hiển thị lại đủ 6 mẫu | Đạt |

---

## 3. Kiểm thử chức năng JavaScript 2: Kiểm tra biểu mẫu tư vấn (`js/form-tu-van.js`)

| Mã | Dữ liệu thử | Kết quả mong đợi | Kết quả thực tế |
|---|---|---|---|
| JS2-01 | Nhập Họ tên toàn dấu cách `"   "`, để trống các trường khác rồi bấm "Xem lại yêu cầu" | Báo lỗi cụ thể dưới từng trường bắt buộc, ẩn hộp tóm tắt, tự động `focus` vào ô lỗi đầu tiên | Đạt |
| JS2-02 | Nhập Họ tên `"Nguyễn Văn A"`, Email sai định dạng `"abc@gmail"` | Báo lỗi "Email chưa đúng dạng, ví dụ: ten@gmail.com" | Đạt |
| JS2-03 | Nhập đầy đủ hợp lệ, Lời nhắn có chứa thẻ `<b>Mình cao 160 cm</b>` | Hiện hộp `#tom-tat` với đầy đủ thông tin đã nhập; thẻ `<b>` được hiển thị như văn bản thường (nhờ dùng `textContent` / `createTextNode`), không bị chèn thành HTML | Đạt |

---

## 4. Kiểm thử chức năng JavaScript 3: Đóng/mở FAQ (`js/hoi-dap.js`) và Xem ảnh lớn (`js/thu-vien.js`)

| Mã | Dữ liệu / Thao tác thử | Kết quả mong đợi | Kết quả thực tế |
|---|---|---|---|
| JS3-01 | Bấm vào câu hỏi đầu tiên ở `hoi-dap.html`, sau đó bấm lại lần nữa | Lần 1: câu trả lời hiện ra, `aria-expanded="true"`, dấu `+` đổi thành `−`. Lần 2: câu trả lời ẩn đi, `aria-expanded="false"` | Đạt |
| JS3-02 | Bấm nút "Mở tất cả" rồi bấm "Đóng tất cả" ở `hoi-dap.html` | Tất cả 8 câu trả lời mở ra cùng lúc, sau đó đóng lại hết | Đạt |
| JS3-03 | Bấm vào một ảnh nhỏ ở `thu-vien.html`, sau đó nhấn phím `Esc` | Hộp ảnh lớn `#hop-anh-lon` hiện ra kèm chú thích; khi nhấn `Esc` hộp đóng lại và trả `focus` về ảnh vừa bấm | Đạt |
