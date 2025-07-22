// Thay 'trang-canh-bao.html' bằng URL bạn muốn chuyển hướng đến.
const REDIRECT_URL = 'baovetrang.html';

(function() {
    'use strict';

    // --- PHẦN 1: Ngăn người dùng quay lại trang trước ---
    // Ghi đè lịch sử duyệt web để nút back sẽ không quay lại trang này
    try {
        window.history.replaceState({}, document.title, window.location.pathname);
        window.addEventListener('popstate', function() {
            // Khi người dùng cố gắng quay lại, chuyển họ đến Google
            window.location.replace('https://www.google.com/');
        });
    } catch (e) {
        console.error("Không thể thay đổi lịch sử duyệt web:", e);
    }

    // --- PHẦN 2: Bảo vệ trang khỏi DevTools chỉ trên PC ---

    // Hàm kiểm tra thiết bị di động
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Nếu là mobile, không thực hiện bất kỳ hành động bảo vệ nào
    if (isMobile) {
        return;
    }

    const devtools = {
        isOpen: false,
        orientation: null
    };

    const threshold = 160; // Ngưỡng phát hiện độ rộng/cao của DevTools

    // Hàm thực hiện chuyển hướng
    const redirectToWarning = () => {
        // Sử dụng top.location để thoát khỏi mọi iframe có thể có
        top.location.replace(REDIRECT_URL);
    };

    // Vòng lặp kiểm tra liên tục
    const checkDevTools = () => {
        // Kiểm tra 1: Dựa vào kích thước cửa sổ (hiệu quả khi DevTools được dock)
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            redirectToWarning();
            return;
        }

        // Kiểm tra 2: Dựa vào bẫy debugger (hiệu quả nhất, hoạt động cả khi undock)
        // Khi DevTools mở, câu lệnh 'debugger' sẽ làm chậm quá trình thực thi.
        const startTime = new Date().getTime();
        debugger;
        const endTime = new Date().getTime();

        if (endTime - startTime > 100) { // Nếu thời gian thực thi > 100ms, DevTools đang mở
            redirectToWarning();
            return;
        }
    };

    // Chạy kiểm tra liên tục mỗi 500ms
    setInterval(checkDevTools, 500);

    // Chặn các phím tắt phổ biến để mở DevTools hoặc xem nguồn trang
    document.addEventListener('keydown', function(e) {
        if (isMobile()) return;
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
          e.preventDefault();
          alert('Tính năng này đã bị vô hiệu hóa!');
        }
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
          (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
          (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j'))
        ) {
          window.location.replace('baovetrang.html');
        }
      });

    // Chặn menu chuột phải
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

})();