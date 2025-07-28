// Wait for DOM to be fully loaded
$(document).ready(function() {
    
    // Initialize Owl Carousel for Hero Slider
    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        },
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ]
    });

    // Lấy giờ Hà Nội (GMT+7)
    function getVietnamTime() {
        const now = new Date();
        // Giờ UTC + 7 tiếng
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        return new Date(utc + 7 * 60 * 60 * 1000);
    }

    // Countdown Timer chuẩn giờ Hà Nội
    function updateCountdown() {
        // Lấy giờ Hà Nội
        const now = getVietnamTime();

        // Đặt giờ flash sale (ví dụ 18:00 hôm nay theo giờ Hà Nội)
        const target = new Date(now);
        target.setHours(18, 0, 0, 0);

        // Nếu đã qua 18h, đặt target là 18h ngày mai
        if (now > target) {
            target.setDate(target.getDate() + 1);
        }

        const difference = target - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#days').text(days.toString().padStart(2, '0'));
            $('#hours').text(hours.toString().padStart(2, '0'));
            $('#minutes').text(minutes.toString().padStart(2, '0'));
            $('#seconds').text(seconds.toString().padStart(2, '0'));
        } else {
            $('#days').text('00');
            $('#hours').text('00');
            $('#minutes').text('00');
            $('#seconds').text('00');
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Tab Switching for Flash Sale
    $('.tab-btn').on('click', function() {
        const tabId = $(this).data('tab');
        
        // Remove active class from all tabs
        $('.tab-btn').removeClass('active');
        $('.tab-pane').removeClass('active');
        
        // Add active class to clicked tab
        $(this).addClass('active');
        $('#' + tabId).addClass('active');
    });

    // Search Functionality
    $('#search-input').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        if (searchTerm.length > 2) {
            // Add search functionality here
            console.log('Searching for:', searchTerm);
        }
    });

    // Product Card Hover Effects
    $('.product-card').on('mouseenter', function() {
        $(this).addClass('hover');
    }).on('mouseleave', function() {
        $(this).removeClass('hover');
    });

    // Buy Button Click Handler
    $('.btn-buy').on('click', function(e) {
        e.preventDefault();
        
        const productName = $(this).closest('.product-card').find('h3').text();
        const productPrice = $(this).closest('.product-card').find('.new-price').text();
        
        // Show purchase modal or redirect to purchase page
        showPurchaseModal(productName, productPrice);
    });

    // Purchase Modal Function
    function showPurchaseModal(productName, price) {
        const modal = `
            <div class="purchase-modal" id="purchaseModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Xác nhận mua hàng</h3>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Sản phẩm:</strong> ${productName}</p>
                        <p><strong>Giá:</strong> ${price}</p>
                        <div class="payment-methods">
                            <h4>Chọn phương thức thanh toán:</h4>
                            <div class="payment-options">
                                <label>
                                    <input type="radio" name="payment" value="momo" checked>
                                    <span>MoMo</span>
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="banking">
                                    <span>Chuyển khoản ngân hàng</span>
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="card">
                                    <span>Thẻ cào</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-cancel">Hủy</button>
                        <button class="btn-confirm">Xác nhận mua</button>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(modal);
        
        // Close modal handlers
        $('.close-modal, .btn-cancel').on('click', function() {
            $('#purchaseModal').remove();
        });
        
        // Confirm purchase
        $('.btn-confirm').on('click', function() {
            const paymentMethod = $('input[name="payment"]:checked').val();
            processPurchase(productName, price, paymentMethod);
        });
    }

    // Process Purchase
    function processPurchase(productName, price, paymentMethod) {
        // Show loading state
        $('.btn-confirm').text('Đang xử lý...').prop('disabled', true);
        
        // Simulate payment processing
        setTimeout(() => {
            $('#purchaseModal').remove();
            showSuccessMessage(`Đã mua thành công ${productName}!`);
        }, 2000);
    }

    // Success Message
    function showSuccessMessage(message) {
        const successMsg = `
            <div class="success-message" id="successMessage">
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <p>${message}</p>
                </div>
            </div>
        `;
        
        $('body').append(successMsg);
        
        setTimeout(() => {
            $('#successMessage').fadeOut(() => {
                $('#successMessage').remove();
            });
        }, 3000);
    }

    // Mobile Menu Toggle
    $('.menu-toggle').on('click', function() {
        $('.nav-menu').toggleClass('active');
    });

    // Search Toggle for Mobile
    $('.search-toggle').on('click', function() {
        $('.search-box').toggleClass('active');
    });

    // Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Notification Click Handler
    $('.notification').on('click', function() {
        showNotifications();
    });

    // Show Notifications
    function showNotifications() {
        const notifications = [
            { title: 'Flash Sale', message: 'Flash sale mới đã bắt đầu!', time: '2 phút trước' },
            { title: 'Khuyến mãi', message: 'Giảm giá 50% cho tất cả acc VIP', time: '1 giờ trước' },
            { title: 'Hệ thống', message: 'Bảo trì hệ thống vào 2h sáng', time: '3 giờ trước' }
        ];
        
        const notificationModal = `
            <div class="notification-modal" id="notificationModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Thông báo</h3>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${notifications.map(notif => `
                            <div class="notification-item">
                                <div class="notification-header">
                                    <h4>${notif.title}</h4>
                                    <span class="notification-time">${notif.time}</span>
                                </div>
                                <p>${notif.message}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(notificationModal);
        
        $('.close-modal').on('click', function() {
            $('#notificationModal').remove();
        });
    }

    // User Menu Click Handler
    $('.user-menu').on('click', function() {
        showLoginModal();
    });

    // Show Login Modal
    function showLoginModal() {
        const loginModal = `
            <div class="login-modal" id="loginModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Đăng nhập</h3>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="loginForm">
                            <div class="form-group">
                                <label>Tài khoản</label>
                                <input type="text" name="username" required>
                            </div>
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" name="password" required>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn-login">Đăng nhập</button>
                                <a href="#" class="btn-register">Đăng ký</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(loginModal);
        
        $('.close-modal').on('click', function() {
            $('#loginModal').remove();
        });
        
        $('#loginForm').on('submit', function(e) {
            e.preventDefault();
            // Handle login logic here
            console.log('Login attempt');
        });
    }

    // Support Button Click
    $('.support-link').on('click', function(e) {
        e.preventDefault();
        // Open support chat or redirect to support page
        window.open('https://www.facebook.com/messages/t/your-page-id', '_blank');
    });

    // Add to Cart Animation
    function addToCartAnimation(element) {
        const cart = $('.user-menu');
        const elementOffset = element.offset();
        const cartOffset = cart.offset();
        
        const flyingElement = element.clone();
        flyingElement.css({
            position: 'absolute',
            top: elementOffset.top,
            left: elementOffset.left,
            width: element.width(),
            height: element.height(),
            zIndex: 9999,
            transition: 'all 0.8s ease'
        });
        
        $('body').append(flyingElement);
        
        setTimeout(() => {
            flyingElement.css({
                top: cartOffset.top,
                left: cartOffset.left,
                transform: 'scale(0.1)',
                opacity: 0
            });
        }, 100);
        
        setTimeout(() => {
            flyingElement.remove();
            cart.addClass('bounce');
            setTimeout(() => cart.removeClass('bounce'), 300);
        }, 800);
    }

    // Parallax Effect for Hero Section
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const parallax = $('.hero-slider');
        const speed = scrolled * 0.5;
        
        parallax.css('transform', `translateY(${speed}px)`);
    });

    // Lazy Loading for Images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize lazy loading
    lazyLoadImages();

    // Auto-scroll Success List
    function autoScrollSuccessList() {
        const successList = $('.success-list marquee');
        if (successList.length) {
            successList.attr('scrollamount', '2');
        }
    }

    autoScrollSuccessList();

    // Product Filter
    function filterProducts(category) {
        $('.product-card').hide();
        $(`.product-card[data-category="${category}"]`).show();
    }

    // Add filter buttons if needed
    $('.filter-btn').on('click', function() {
        const category = $(this).data('category');
        filterProducts(category);
        
        // Update active filter button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Price Range Slider
    function initPriceSlider() {
        const priceSlider = $('<div class="price-slider"></div>');
        const minPrice = 0;
        const maxPrice = 1000000;
        
        // Add price slider functionality here
        console.log('Price slider initialized');
    }

    // Initialize price slider
    initPriceSlider();

    // Wishlist Functionality
    $('.wishlist-btn').on('click', function(e) {
        e.preventDefault();
        const productCard = $(this).closest('.product-card');
        const productId = productCard.data('id');
        
        // Toggle wishlist state
        $(this).toggleClass('active');
        
        if ($(this).hasClass('active')) {
            addToWishlist(productId);
        } else {
            removeFromWishlist(productId);
        }
    });

    function addToWishlist(productId) {
        // Add to wishlist logic
        console.log('Added to wishlist:', productId);
    }

    function removeFromWishlist(productId) {
        // Remove from wishlist logic
        console.log('Removed from wishlist:', productId);
    }

    // Share Product
    $('.share-btn').on('click', function(e) {
        e.preventDefault();
        const productName = $(this).closest('.product-card').find('h3').text();
        const productUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: productName,
                url: productUrl
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            copyToClipboard(productUrl);
            showSuccessMessage('Đã sao chép link sản phẩm!');
        }
    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Keyboard Shortcuts
    $(document).on('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            $('#search-input').focus();
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            $('.purchase-modal, .login-modal, .notification-modal').remove();
        }
    });

    // Performance Optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimized scroll handler
    const optimizedScrollHandler = debounce(function() {
        // Handle scroll events here
    }, 16);

    $(window).on('scroll', optimizedScrollHandler);

    // Initialize tooltips
    $('[data-tooltip]').on('mouseenter', function() {
        const tooltip = $(this).attr('data-tooltip');
        const tooltipElement = $(`<div class="tooltip">${tooltip}</div>`);
        
        $('body').append(tooltipElement);
        
        const elementOffset = $(this).offset();
        tooltipElement.css({
            position: 'absolute',
            top: elementOffset.top - 40,
            left: elementOffset.left + ($(this).width() / 2) - (tooltipElement.width() / 2),
            zIndex: 10000
        });
    }).on('mouseleave', function() {
        $('.tooltip').remove();
    });

    // Console welcome message
    console.log(`
    🎮 Welcome to Shop Bán Acc HOÀNG NAM! 🎮
    
    🚀 Features:
    - Flash Sale Countdown Timer
    - Interactive Product Cards
    - Mobile Responsive Design
    - Smooth Animations
    - Search Functionality
    - Purchase Modal System
    
    💡 Tips:
    - Press Ctrl/Cmd + K to search
    - Press Escape to close modals
    - Hover over products for details
    
    🎯 Happy Gaming! 🎯
    `);

    // Random Success List (Danh sách mua thành công)
    function randomSuccessList() {
        // Danh sách mẫu (bạn có thể thêm/bớt tuỳ ý)
        const data = [
            { email: 'tuyen....@gmail.com', id: '43543MSCC' },
            { email: 'tdsf....@gmail.com', id: '435đfC' },
            { email: 'nam....@gmail.com', id: 'FFX12345' },
            { email: 'hoang....@gmail.com', id: 'ID9988' },
            { email: 'minh....@gmail.com', id: 'ACCFF001' },
            { email: 'khanh....@gmail.com', id: 'VIPFF2024' },
            { email: 'linh....@gmail.com', id: 'LQVIP999' },
            { email: 'bao....@gmail.com', id: 'RANDOM77' },
            { email: 'hieu....@gmail.com', id: 'SALE2024' },
            { email: 'quang....@gmail.com', id: 'IDFF888' }
        ];
        // Số lượng muốn hiển thị (2-4)
        const count = Math.floor(Math.random() * 3) + 2; // 2, 3 hoặc 4
        // Copy mảng và random
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);
        // Tạo chuỗi hiển thị
        const text = 'Danh sách mua thành công: ' + selected.map(item => `${item.email} ID:${item.id}`).join(' | ');
        // Gán vào marquee
        $('.success-list marquee span').text(text);
    }

    // Gọi hàm khi trang tải
    randomSuccessList();

});

// Additional CSS for modals and animations
const additionalCSS = `
<style>
/* Modal Styles */
.purchase-modal,
.login-modal,
.notification-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    color: white;
    animation: slideIn 0.3s ease;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
}

.modal-header h3 {
    margin: 0;
    color: var(--primary-color);
}

.close-modal {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-modal:hover {
    color: var(--primary-color);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.9);
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: border-color 0.3s ease;
}

.form-group input:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.btn-login,
.btn-confirm {
    background: var(--gradient);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-login:hover,
.btn-confirm:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-cancel {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-cancel:hover {
    background: rgba(255, 255, 255, 0.2);
}

.btn-register {
    color: var(--primary-color);
    text-decoration: none;
    padding: 12px 25px;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.btn-register:hover {
    background: var(--primary-color);
    color: white;
}

/* Success Message */
.success-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2ecc71;
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    z-index: 10001;
    animation: slideInRight 0.3s ease;
}

.success-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.success-content i {
    font-size: 1.2rem;
}

/* Notification Items */
.notification-item {
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.notification-item:last-child {
    border-bottom: none;
}

.notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.notification-header h4 {
    margin: 0;
    color: var(--primary-color);
}

.notification-time {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

/* Payment Methods */
.payment-methods {
    margin-top: 20px;
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.payment-options label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: background 0.3s ease;
}

.payment-options label:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

.bounce {
    animation: bounce 0.6s ease;
}

/* Tooltip */
.tooltip {
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    pointer-events: none;
    animation: fadeIn 0.2s ease;
}

/* Loading States */
.loading-btn {
    position: relative;
    pointer-events: none;
}

.loading-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Responsive Modals */
@media (max-width: 768px) {
    .modal-content {
        margin: 20px;
        padding: 20px;
    }
    
    .form-actions {
        flex-direction: column;
    }
    
    .success-message {
        top: 10px;
        right: 10px;
        left: 10px;
    }
}
</style>
`;

// Inject additional CSS
$('head').append(additionalCSS); 