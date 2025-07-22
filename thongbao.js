window.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('welcomePopup');
  if (!popup) return;
  // Nội dung thông báo, có thể chỉnh sửa tại đây
  popup.innerHTML = `
    <div style="background:#fff;border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,0.13);padding:1.2rem 2.2rem;min-width:260px;max-width:90vw;text-align:center;font-size:1.15rem;font-weight:600;color:#2563eb;position:relative;">
      <img src="https://webhoangnam.id.vn/images/logooo.png" alt="logo" style="width:300px;height:150px;object-fit:contain;">
      <h5>Chào mừng bạn đến với <br> <b>SHOP HOÀNG NAM</b>!</h5>
      <button onclick=\"document.getElementById('welcomePopup').style.display='none'\" style=\"margin-top:10px;background:#2563eb;color:#fff;border:none;border-radius:6px;padding:6px 18px;font-weight:500;cursor:pointer;\">Đóng</button>   
    </div>
  `;
  popup.style.display = 'flex';
  setTimeout(() => { popup.style.display = 'none'; }, 3000);
}); 