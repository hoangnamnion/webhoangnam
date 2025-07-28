# 🎮 Shop Bán Acc HOÀNG NAM - Website Bán Nick Game

## 📋 Mô tả
Website bán tài khoản game với thiết kế hiện đại, responsive và đầy đủ tính năng. Được xây dựng với HTML5, CSS3 và JavaScript thuần.

## ✨ Tính năng chính

### 🎯 Giao diện người dùng
- **Thiết kế hiện đại**: Giao diện đẹp mắt với gradient và hiệu ứng glassmorphism
- **Responsive**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Dark theme**: Giao diện tối với màu sắc gaming
- **Smooth animations**: Hiệu ứng mượt mà và chuyên nghiệp

### 🛍️ Tính năng mua sắm
- **Flash Sale**: Hệ thống flash sale với countdown timer
- **Product Grid**: Hiển thị sản phẩm dạng lưới với hover effects
- **Search**: Tìm kiếm sản phẩm nhanh chóng
- **Purchase Modal**: Modal xác nhận mua hàng với nhiều phương thức thanh toán
- **Wishlist**: Thêm sản phẩm vào danh sách yêu thích

### 🎮 Mini Games
- **Vòng quay may mắn**: Các loại vòng quay khác nhau
- **BINGO**: Game BINGO với phần thưởng hấp dẫn
- **Săn kho báu**: Game tìm kiếm kho báu
- **Máy xèng**: Slot machine với kim cương

### 📱 Tính năng bổ sung
- **Notification System**: Hệ thống thông báo real-time
- **User Authentication**: Đăng nhập/đăng ký tài khoản
- **Support Chat**: Chat hỗ trợ khách hàng
- **Social Media Integration**: Tích hợp mạng xã hội

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Web browser hiện đại (Chrome, Firefox, Safari, Edge)
- Local web server (khuyến nghị)

### Cách cài đặt

1. **Clone hoặc download project**
```bash
git clone [repository-url]
cd shopacc
```

2. **Chạy local server**
```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server

# Hoặc sử dụng PHP
php -S localhost:8000
```

3. **Truy cập website**
```
http://localhost:8000
```

## 📁 Cấu trúc thư mục

```
shopacc/
├── index.html          # Trang chủ
├── style.css           # File CSS chính
├── script.js           # File JavaScript chính
├── README.md           # Hướng dẫn sử dụng
├── images/             # Thư mục hình ảnh
│   ├── logoo.png       # Logo chính
│   ├── paner1.png      # Banner 1
│   ├── paner2.png      # Banner 2
│   ├── paner3.png      # Banner 3
│   └── background.jpg  # Hình nền
└── assets/             # Thư mục tài nguyên
    └── images/         # Hình ảnh bổ sung
```

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa biến CSS trong file `style.css`:
```css
:root {
    --primary-color: #f473b9;      /* Màu chính */
    --primary-sub: #ffa6d2;        /* Màu phụ */
    --text-color: #1c1c1c;         /* Màu chữ */
    --text-white: #ffffff;         /* Màu chữ trắng */
    --bg-dark: #1c1b1b;            /* Màu nền tối */
}
```

### Thêm sản phẩm mới
1. Thêm HTML cho sản phẩm trong `index.html`
2. Thêm hình ảnh vào thư mục `images/`
3. Cập nhật thông tin sản phẩm

### Tùy chỉnh Flash Sale
Chỉnh sửa thời gian trong `script.js`:
```javascript
const target = new Date();
target.setHours(18, 0, 0, 0); // Thay đổi giờ flash sale
```

## 🔧 Tính năng kỹ thuật

### JavaScript Features
- **Countdown Timer**: Đếm ngược thời gian flash sale
- **Owl Carousel**: Slider banner tự động
- **Modal System**: Hệ thống popup linh hoạt
- **Search Functionality**: Tìm kiếm sản phẩm
- **Responsive Navigation**: Menu responsive cho mobile
- **Lazy Loading**: Tải hình ảnh theo nhu cầu
- **Keyboard Shortcuts**: Phím tắt (Ctrl+K để search)

### CSS Features
- **CSS Grid & Flexbox**: Layout hiện đại
- **CSS Variables**: Quản lý màu sắc dễ dàng
- **Backdrop Filter**: Hiệu ứng glassmorphism
- **CSS Animations**: Hiệu ứng mượt mà
- **Media Queries**: Responsive design
- **Custom Scrollbar**: Thanh cuộn tùy chỉnh

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 SEO Optimization

- Meta tags đầy đủ
- Semantic HTML
- Alt text cho hình ảnh
- Structured data
- Fast loading
- Mobile-friendly

## 🔒 Bảo mật

- Input validation
- XSS protection
- CSRF protection (khi có backend)
- Secure payment integration
- Data encryption

## 📈 Performance

- Lazy loading images
- Minified CSS/JS
- Optimized images
- CDN integration
- Caching strategies

## 🛠️ Development

### Công nghệ sử dụng
- **HTML5**: Semantic markup
- **CSS3**: Modern styling
- **JavaScript (ES6+)**: Interactive features
- **jQuery**: DOM manipulation
- **Owl Carousel**: Slider functionality
- **Font Awesome**: Icons

### Best Practices
- Clean code structure
- Responsive design
- Accessibility compliance
- Performance optimization
- Cross-browser compatibility

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:

1. **Email**: support@hoangnam.com
2. **Facebook**: [Fanpage HOÀNG NAM](https://facebook.com/hoangnam)
3. **Hotline**: 1900-xxxx-xxxx

## 📄 License

© 2025 Shop Bán Acc HOÀNG NAM. All rights reserved.

## 🎮 Happy Gaming! 🎮

Website được thiết kế với tình yêu dành cho cộng đồng game thủ Việt Nam. Chúc bạn có những trải nghiệm tuyệt vời!

---

**Made with ❤️ by HOÀNG NAM Team** 