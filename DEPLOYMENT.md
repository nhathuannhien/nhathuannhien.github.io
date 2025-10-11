# Hướng dẫn Deploy Website lên GitHub Pages

## Bước 1: Chuẩn bị

### Kiểm tra các file đã tạo

```bash
ls -la
```

Bạn nên thấy các file sau:

- index.html
- about.html
- programs.html
- admission.html
- contact.html
- events.html
- blog.html
- resources.html
- faq.html
- careers.html
- privacy.html
- terms.html
- css/style.css
- js/main.js

## Bước 2: Cập nhật thông tin

### 1. Cập nhật thông tin liên hệ

Tìm và thay thế các placeholder sau trong tất cả các file HTML:

- `[Địa chỉ trường]` → Địa chỉ thực tế của trường
- `[Số điện thoại]` → Số điện thoại thực tế
- `[Tọa độ Google Maps]` → Tọa độ GPS thực tế

### 2. Thêm hình ảnh

Upload các hình ảnh vào thư mục `images/`:

- `waldorf-education.jpg` - Hình giáo dục Waldorf
- `school-history.jpg` - Lịch sử trường
- `teacher-1.jpg`, `teacher-2.jpg`, `teacher-3.jpg` - Ảnh giáo viên
- `kindergarten.jpg`, `primary.jpg`, `secondary.jpg` - Ảnh các cấp học
- `event-1.jpg`, `news-1.jpg`, `blog-1.jpg` - Ảnh tin tức

## Bước 3: Commit và Push

### 1. Kiểm tra trạng thái git

```bash
git status
```

### 2. Add tất cả các file

```bash
git add .
```

### 3. Commit

```bash
git commit -m "Initial website setup for Nha Thuan Nhien Waldorf School"
```

### 4. Push lên GitHub

```bash
git push origin main
```

## Bước 4: Cấu hình GitHub Pages

1. Truy cập repository trên GitHub: `https://github.com/nhathuannhien/nhathuannhien.github.io`

2. Vào **Settings** > **Pages**

3. Trong phần **Source**:
   - Chọn branch: `main`
   - Chọn folder: `/ (root)`

4. Click **Save**

5. Website sẽ được deploy tự động sau vài phút

6. URL website: `https://nhathuannhien.github.io`

## Bước 5: Kiểm tra Website

1. Đợi 2-5 phút để GitHub Pages build website

2. Truy cập `https://nhathuannhien.github.io`

3. Kiểm tra:
   - ✓ Tất cả các trang hoạt động
   - ✓ CSS được load đúng
   - ✓ JavaScript hoạt động
   - ✓ Navigation menu hoạt động trên mobile
   - ✓ Form validation hoạt động

## Bước 6: Cập nhật nội dung (sau này)

### Để cập nhật nội dung

1. Chỉnh sửa file HTML cần thiết

2. Commit và push:

```bash
git add .
git commit -m "Update content"
git push origin main
```

3. Website sẽ tự động cập nhật sau vài phút

## Lưu ý quan trọng

### 1. Cập nhật Google Maps

Trong file `contact.html`, tìm và thay thế URL Google Maps với tọa độ thực tế của trường:

```html
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6!3d10.8..."
    ...>
</iframe>
```

### 2. Thêm Google Analytics (tùy chọn)

Thêm vào trước thẻ `</head>` trong tất cả các file HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Tối ưu hình ảnh

- Nén hình ảnh trước khi upload
- Kích thước khuyến nghị:
  - Hero images: 1920x600px
  - Card images: 800x500px
  - Thumbnails: 400x300px
- Format khuyến nghị: JPG (photos), PNG (graphics), WebP (modern browsers)

### 4. SEO

Đã có sẵn meta tags cơ bản. Để tối ưu thêm:

- Cập nhật meta description cho mỗi trang
- Thêm meta keywords
- Tạo file `sitemap.xml`
- Tạo file `robots.txt`

### 5. Custom Domain (tùy chọn)

Nếu muốn sử dụng domain riêng (ví dụ: <www.nhathuannhien.edu.vn>):

1. Mua domain
2. Thêm file `CNAME` vào root với nội dung là domain của bạn
3. Cấu hình DNS records tại nhà cung cấp domain
4. Vào GitHub Settings > Pages > Custom domain và nhập domain

## Troubleshooting

### Vấn đề: Website không hiển thị

- Kiểm tra Settings > Pages đã enable chưa
- Đợi 5-10 phút và refresh lại

### Vấn đề: CSS không load

- Kiểm tra đường dẫn relative trong HTML
- Clear browser cache

### Vấn đề: 404 Error

- Kiểm tra tên file viết đúng chính tả
- Đảm bảo file extension là `.html`

## Hỗ trợ

Nếu gặp vấn đề, tham khảo:

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)

---

**Chúc mừng! Website của bạn đã sẵn sàng! 🎉**
