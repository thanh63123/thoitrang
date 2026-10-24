# Sợi Trẻ – Website thời trang do sinh viên thiết kế

## Cách mở và triển khai website

### 1. Mở trên máy cá nhân (Local bằng Five Server)
1. Mở thư mục `Website` trong **VS Code** và cài đặt tiện ích **Five Server** (từ tab Extensions).
2. Nhấn chuột phải vào tệp `index.html` → chọn **Open with Five Server** (hoặc bấm nút **Go Live** ở góc dưới bên phải VS Code) để tự động chạy và mở website trên trình duyệt.
*(Ngoài ra có thể mở trực tiếp tệp `index.html` bằng trình duyệt Chrome, Edge, Firefox mà không cần cài đặt máy chủ).*

### 2. Triển khai và mở trên GitHub Pages (GitHub Web)
- **Bước 1 – Tạo repository trên GitHub:**
  Đăng nhập vào GitHub, bấm **New repository**, đặt tên repository (ví dụ: `soi-tre-web`), chọn chế độ **Public** và bấm **Create repository**.
- **Bước 2 – Đưa mã nguồn lên GitHub:**
  - *Cách A (Tải tệp trực tiếp trên giao diện web GitHub):* Trong trang repository vừa tạo, chọn **uploading an existing file** (hoặc **Add file** → **Upload files**), kéo thả toàn bộ tệp và thư mục con bên trong thư mục `Website` (`index.html`, các tệp `.html`, thư mục `css/`, `js/`, `images/`) vào rồi bấm **Commit changes**.
  - *Cách B (Đẩy mã nguồn bằng Git từ máy cá nhân):* Mở terminal tại thư mục `Website` và chạy lần lượt các lệnh:
    ```bash
    git init
    git add .
    git commit -m "Deploy website Soi Tre"
    git branch -M main
    git remote add origin https://github.com/<ten-tai-khoan>/<ten-repo>.git
    git push -u origin main
    ```
- **Bước 3 – Bật GitHub Pages:**
  1. Trên trang repository GitHub, vào tab **Settings** → chọn mục **Pages** ở thanh menu bên trái.
  2. Tại phần **Build and deployment**, mục **Source** chọn **Deploy from a branch**.
  3. Tại mục **Branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó bấm **Save**.
- **Bước 4 – Truy cập website trực tuyến:**
  Đợi khoảng 1–2 phút để GitHub hoàn tất triển khai, tải lại trang **Settings → Pages** để lấy đường dẫn truy cập:
  - Nếu đẩy trực tiếp nội dung bên trong thư mục `Website` lên gốc repository: `https://<ten-tai-khoan>.github.io/<ten-repo>/`
  - Nếu đẩy cả thư mục cha chứa thư mục `Website`: `https://<ten-tai-khoan>.github.io/<ten-repo>/Website/`

## Cấu trúc thư mục
- `index.html` – Trang chủ (banner, mẫu nổi bật, poster sự kiện)
- `gioi-thieu.html` – Giới thiệu dự án, đội ngũ, hướng dẫn sử dụng và tham gia
- `phong-cach.html` – Chuyên đề 1: khách hàng mục tiêu và phong cách
- `bo-suu-tap.html` – Danh mục 6 mẫu, có chức năng lọc theo bộ sưu tập
- `chi-tiet-mua-bui.html` – Chi tiết mẫu và câu chuyện thiết kế 1
- `chi-tiet-chieu-ho-tay.html` – Chi tiết mẫu và câu chuyện thiết kế 2
- `chat-lieu.html` – Chuyên đề 2: bộ sưu tập và chất liệu
- `kich-thuoc.html` – Chuyên đề 3: bảng size, infographic, bảo quản
- `thu-vien.html` – Thư viện 12 ảnh, bấm để xem ảnh lớn
- `hoi-dap.html` – 8 câu hỏi thường gặp, đóng/mở
- `lien-he.html` – Form gửi yêu cầu tư vấn mẫu và kích thước
- `css/style.css` – CSS dùng chung
- `js/loc-mau.js` – Lọc mẫu theo bộ sưu tập và loại trang phục
- `js/form-tu-van.js` – Kiểm tra form và hiện tóm tắt mô phỏng
- `js/hoi-dap.js` – Đóng/mở câu hỏi thường gặp
- `js/thu-vien.js` – Xem ảnh lớn trong thư viện
- `images/` – Ảnh sản phẩm (JPG) và banner, poster, infographic (SVG)

## Công cụ
HTML, CSS, JavaScript thuần. Không dùng thư viện ngoài, không dùng CDN.

## Nội dung cần Internet
Chỉ các liên kết nguồn tham khảo (Wikipedia) ở trang Chất liệu. Toàn bộ chức năng chính chạy được khi không có mạng.

## Ghi chú
Tên thương hiệu, giá, đội ngũ, sự kiện, liên hệ là giả định. Ảnh sản phẩm, phác thảo và phòng may là ảnh minh họa tạo bằng AI.

