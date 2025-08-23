// Dữ liệu cho trang Locket Gold
const LOCKET_DATA = {
    // Thông tin profile
    profile: {
        name: "Cao Văn Nam",
        bio: "Sống tại Thanh Hóa (Hoằng Hóa) · Hà Nội",
        avatar: "https://i.pinimg.com/736x/18/6b/0e/186b0ef18116c2f917f99b6301bf002a.jpg",
        verified: "https://lennguyenmedia.com/wp-content/uploads/2021/11/image-18.png",
        stats: [
            {
                icon: "fas fa-user-graduate",
                text: "ĐH Công Nghệ GTVT"
            },
            {
                icon: "fas fa-birthday-cake", 
                text: "Ngày sinh 26/04/2005"
            }
        ]
    },

    // Thông tin cá nhân
    personalInfo: {
        locket: "locket.camera/links/namber005",
        bank: "Techcombank",
        accountNumber: "2005838699",
        accountName: "CAO VAN NAM",
        qrCodes: [
            {
                url: "https://bom.so/hoangnamdxz",
                alt: "QR Code 1"
            },
            {
                url: "https://webhoangnam.id.vn/images/locket.png", 
                alt: "QR Code 2"
            }
        ]
    },

    // Thông tin tài khoản AppStore
    accountInfo: {
        username: 'hoangnamnion@gmail.com',
        password: 'Caovannam2005@'
    },

    // Thông tin app Shadowrocket
    shadowrocket: {
        name: "Shadowrocket",
        description: "Tài khoản AppStore",
        icon: "https://cdn6.aptoide.com/imgs/0/c/9/0c98ead948282258946d3c71b2a94c14_icon.png",
        downloadUrl: "https://apps.apple.com/vn/app/shadowrocket/id932747118?l=vi"
    },

    // Các lệnh cấu hình
    commands: [
        {
            name: "Lệnh 1",
            icon: "fas fa-download",
            url: "shadowrocket://install?module=https://raw.githubusercontent.com/caovannam2ka5/LocketGoldd/refs/heads/main/locketGoldmodule",
            type: "primary"
        },
        {
            name: "Lệnh 2", 
            icon: "fas fa-cog",
            url: "shadowrocket://config/add/https://raw.githubusercontent.com/caovannam2ka5/LocketGoldd/refs/heads/main/LocketGold_HoangNam",
            type: "primary"
        },
        {
            name: "Lệnh 3",
            icon: "fas fa-mobile-alt", 
            url: "https://dl.dropboxusercontent.com/scl/fi/8r9awfrmrtj07g33brc1s/LocketGold_Ho-ng_Nam_i-2.crt?rlkey=0pg68szlycjiu97itrzhyoc44&amp;st=u4c4wmyl&amp;dl=1",
            type: "success"
        },
                {
            name: "install",
            icon: "fas fa-mobile-alt", 
            url: "https://loadly.io/o8WOPC7O",
            type: "success"
        }
    ],

    // API endpoints
    api: {
        goldCode: "https://webhoangnamadmin.onrender.com/api/codelink"
    },

    // Cấu hình UI
    ui: {
        title: "Locket Gold Hoàng Nam 💛",
        sectionTitles: {
            personal: "Thông tin cá nhân",
            gold: "Locket Gold Hoàng Nam 💛"
        },
        buttons: {
            copyAccount: "Sao chép tài khoản",
            copyPassword: "Sao chép mật khẩu", 
            downloadApp: "Tải app",
            confirm: "Xác nhận"
        },
        placeholders: {
            goldCode: "Nhập mã truy cập"
        },
        messages: {
            wrongCode: "Sai mã hoặc mã đã hết hạn!",
            copySuccess: "✅ Đã sao chép",
            copyManual: "📋 Đã sao chép",
            copyError: "Lỗi sao chép:"
        }
    },

    // Meta tags configuration
    meta: {
        title: "Cao Văn Nam | Facebook",
        description: "Chuyên Cung Cấp Tài Khoản Pro - Cao Văn Nam",
        keywords: "webhoangnam,locket gold hoàng nam,web hoàng nam,mxh hoàng nam,mạng xã hội hoàng nam,cao văn nam,facebook",
        author: "Cao Văn Nam",
        generator: "Web Hoàng Nam",
        url: "https://webhoangnam.id.vn/locket.html",
        image: "https://webhoangnam.id.vn/images/logooo.png",
        locale: "vi_VN",
        siteName: "Cao Văn Nam | Facebook",
        updatedTime: "1754631419"
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOCKET_DATA;
} 


