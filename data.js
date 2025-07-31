const defaultPayment = {
  bankName: 'Techcombank',
  bankNumber: '838699200555',
  bankOwner: 'CAO VAN NAM',
  zalo: '0378787154',
  note: 'Sau khi thanh toán, liên hệ Zalo để nhận tài khoản.'
};

const products = [
    // Sản phẩm 1
      {
    "name": "LOCKET GOLD ios & Android",
    "price": 100000,
    "image": "https://webhoangnam.id.vn/images/locket.png",
    "desc": "",
    "features": [
      "Quay video 5s",
      "Đăng ảnh từ Ablum",
      "Đổi icon",
      "Thêm Bạn Bè Không Giới Hạn"
    ],
    "variants": [],
    "id": 1753114021062,
    "createdAt": "2025-07-21T16:07:01.062Z",
    "stock": 342
  },
  {
    "name": "CAPCUT PRO",
    "price": 80000,
    "image": "https://webhoangnam.id.vn/images/capcut.png",
    "desc": "",
    "features": [
      "Xóa logo (CAPCUT) khi xuất video.",
      "Kho hiệu ứng và bộ lọc cao cấp mở khóa hoàn toàn.",
      "Tách nền và chỉnh sửa bằng AI dễ dàng.",
      "Chèn phụ đề tự động bằng AI chính xác.",
      "Xuất video chất lượng cao (Full HD, 4K)."
    ],
    "variants": [
      {
        "price": 80000,
        "months": 1
      },
      {
        "price": 799000,
        "months": 12
      }
    ],
    "stock": 204,
    "id": 1753114126637,
    "createdAt": "2025-07-21T16:08:46.637Z"
  },
  {
    "name": "NETFLIX Utra 4K HD",
    "price": 80000,
    "image": "https://webhoangnam.id.vn/images/netflix.png",
    "desc": "",
    "features": [
      "Xem phim trên Netflix 4K HD",
      "Tải phim về xem offline",
      "Không quảng cáo, không giới hạn thiết bị",
      "Hỗ trợ phụ đề tiếng Việt và nhiều ngôn ngữ",
      "Chia sẻ tài khoản cho nhiều người dùng",
    ],
    "variants": [
      {
        "price": 80000,
        "months": 1
      },
      {
        "price": 799000,
        "months": 12
      }
    ],
    "stock": 204,
    "id": 12,
    "createdAt": "2025-07-21T16:08:46.637Z"
  },
  {
    "name": "Chat GPT",
    "price": 150000,
    "image": "https://webhoangnam.id.vn/images/chatgpt.png",
    "desc": "",
    "features": [
      "Trả lời câu hỏi và giải thích kiến thức từ cơ bản đến nâng cao.",
      "Hỗ trợ viết nội dung như email, bài luận, quảng cáo, mô tả sản phẩm...",
      "Lập trình và gỡ lỗi mã code nhiều ngôn ngữ (Python, JavaScript, C++, v.v.).",
      "Dịch thuật và cải thiện ngôn ngữ chính xác, tự nhiên.",
      "Tạo ý tưởng sáng tạo như kịch bản, truyện ngắn, kế hoạch kinh doanh..."
    ],
    "variants": [
      {
        "price": 150000,
        "months": 1
      },
      {
        "price": 400000,
        "months": 12
      }
    ],
    "stock": 295,
    "id": 1753114362148,
    "createdAt": "2025-07-21T16:12:42.148Z"
  },
  {
    "name": "CANVA PRO",
    "price": 150000,
    "image": "https://webhoangnam.id.vn/images/canva.png",
    "desc": "",
    "features": [
      "Thiết kế đồ họa kéo thả dễ dàng, không cần kỹ năng chuyên môn.",
      "Kho mẫu thiết kế sẵn đa dạng: poster, CV, bài đăng mạng xã hội...",
      "Chỉnh sửa ảnh nâng cao với bộ lọc, hiệu ứng và công cụ xóa nền.",
      "Tạo video và trình chiếu với chuyển động, âm nhạc và văn bản động.",
      "Làm việc nhóm và chia sẻ thiết kế trực tuyến theo thời gian thực."
    ],
    "variants": [],
    "stock": 565,
    "id": 1753114641137,
    "createdAt": "2025-07-21T16:17:21.137Z"
  },
  {
    "name": "GEMINI PRO",
    "image": "https://webhoangnam.id.vn/images/gemini.png",
    "desc": "",
    "features": [],
    "variants": [
      {
        "price": 30000,
        "months": 1
      },
      {
        "price": 50000,
        "months": 2
      },
      {
        "price": 80000,
        "months": 3
      }
    ],
    "stock": 895,
    "id": 1753114811509,
    "createdAt": "2025-07-21T16:20:11.509Z"
  },
  {
    "name": "Spotify IOS",
    "price": 150000,
    "image": "https://webhoangnam.id.vn/images/spoyify.png",
    "desc": "",
    "features": [
      "Widget nhạc trên màn hình khóa.",
      "Mua audiobook trực tiếp.",
      "Giao diện hàng chờ mới.",
      "Ẩn/tạm ẩn bài hát.",
      "DJ AI cá nhân hóa."
    ],
    "variants": [],
    "stock": 295,
    "id": 1753114913485,
    "createdAt": "2025-07-21T16:21:53.485Z"
  },
    {
    "name": "Key WIN 10/11 Pro",
    "price": 150000,
    "image": "https://webhoangnam.id.vn/images/win.jpg",
    "desc": "",
    "features": [
    ],
    "variants": [],
    "stock": 295,
    "id": 13485,
    "createdAt": "2025-07-29T16:21:53.485Z"
  }
]; 
