(function(){
if(document.getElementById('accountOverlay')){document.getElementById('accountOverlay').style.display='block';return;}

var css=`
#accountOverlay{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#F5F6FA;z-index:9998;overflow-y:auto;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:rtl}
#accountOverlay .ac-header{background:linear-gradient(180deg,#8B7FE8 0%,#9B8FF0 50%,#A99EF5 100%);padding:50px 20px 90px;position:relative;overflow:hidden}
#accountOverlay .ac-header::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.08);top:-100px;right:-80px}
#accountOverlay .ac-header::after{content:'';position:absolute;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.06);bottom:-50px;left:-60px}
#accountOverlay .ac-top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;margin-bottom:20px}
#accountOverlay .ac-top-icons{display:flex;gap:12px;align-items:center}
#accountOverlay .ac-top-icons svg{width:22px;height:22px;fill:#fff;cursor:pointer}
#accountOverlay .ac-settings{background:rgba(255,255,255,.2);width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer}
#accountOverlay .ac-settings svg{width:20px;height:20px;fill:#fff}
#accountOverlay .ac-close{background:rgba(255,255,255,.2);width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none}
#accountOverlay .ac-close svg{width:18px;height:18px;fill:#fff}
#accountOverlay .ac-profile{text-align:center;position:relative;z-index:2}
#accountOverlay .ac-avatar-wrap{position:relative;width:88px;height:88px;margin:0 auto 14px}
#accountOverlay .ac-avatar-wrap img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,.4)}
#accountOverlay .ac-cam{position:absolute;bottom:0;right:50%;transform:translateX(50%);background:rgba(0,0,0,.5);width:100%;height:26px;border-radius:0 0 50% 50%;display:flex;align-items:flex-start;justify-content:center;padding-top:2px;overflow:hidden}
#accountOverlay .ac-cam svg{width:16px;height:16px;fill:#fff}
#accountOverlay .ac-email{color:#fff;font-size:17px;font-weight:700;display:inline-flex;align-items:center;gap:8px}
#accountOverlay .ac-vip{background:transparent;color:#FFD84D;font-size:14px;font-weight:800;letter-spacing:.5px}
#accountOverlay .ac-card{background:#fff;border-radius:14px;margin:-70px 16px 0;padding:18px;position:relative;z-index:3;box-shadow:0 4px 16px rgba(0,0,0,.06)}
#accountOverlay .ac-row{display:flex;justify-content:space-between;align-items:center;padding:4px 0}
#accountOverlay .ac-row-label{color:#8A8F9C;font-size:13px}
#accountOverlay .ac-row-val{color:#1A1A1A;font-size:14px;font-weight:700;display:flex;align-items:center;gap:6px}
#accountOverlay .ac-copy{width:14px;height:14px;cursor:pointer;opacity:.5}
#accountOverlay .ac-divider{height:1px;background:#ECEEF4;margin:14px 0}
#accountOverlay .ac-assets-row{display:flex;justify-content:space-between;align-items:center}
#accountOverlay .ac-assets-label{display:flex;align-items:center;gap:6px;color:#8A8F9C;font-size:13px}
#accountOverlay .ac-assets-label svg{width:16px;height:16px;stroke:#8A8F9C;fill:none;stroke-width:1.6;cursor:pointer}
#accountOverlay .ac-assets-info{color:#8A8F9C;font-size:13px;display:flex;align-items:center;gap:4px;cursor:pointer}
#accountOverlay .ac-assets-info svg{width:14px;height:14px;fill:#8A8F9C}
#accountOverlay .ac-balance{color:#7B6FE0;font-size:32px;font-weight:800;margin-top:6px;letter-spacing:.5px}
#accountOverlay .ac-actions{background:#fff;border-radius:14px;margin:14px 16px 0;padding:18px 10px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;box-shadow:0 2px 10px rgba(0,0,0,.04)}
#accountOverlay .ac-action{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;padding:6px 0}
#accountOverlay .ac-action-ic{width:50px;height:50px;background:#EEE9FB;border-radius:12px;display:flex;align-items:center;justify-content:center;position:relative}
#accountOverlay .ac-action-ic svg{width:28px;height:28px}
#accountOverlay .ac-action-tx{font-size:11.5px;color:#1A1A1A;font-weight:600;text-align:center;line-height:1.3}
#accountOverlay .ac-menu{background:#fff;border-radius:14px;margin:14px 16px 20px;padding:4px 0;box-shadow:0 2px 10px rgba(0,0,0,.04)}
#accountOverlay .ac-item{display:flex;align-items:center;padding:16px 18px;cursor:pointer;border-bottom:1px solid #F0F2F7}
#accountOverlay .ac-item:last-child{border-bottom:none}
#accountOverlay .ac-item-ic{width:26px;height:26px;display:flex;align-items:center;justify-content:center;margin-left:14px}
#accountOverlay .ac-item-ic svg{width:22px;height:22px;fill:none;stroke:#1A1A1A;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
#accountOverlay .ac-item-tx{flex:1;font-size:14px;color:#1A1A1A;font-weight:600}
#accountOverlay .ac-item-arr{width:16px;height:16px;fill:none;stroke:#C4C8D1;stroke-width:2;transform:rotate(180deg)}
`;
var st=document.createElement('style');st.id='accountOverlayStyle';st.textContent=css;document.head.appendChild(st);

var html=`
<div class="ac-header">
  <div class="ac-top">
    <div class="ac-top-icons">
      <svg viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
      <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm.5 3a1 1 0 011 1v5.5l3 1.8a1 1 0 01-1 1.7l-3.5-2a1 1 0 01-.5-.9V7a1 1 0 011-1z"/></svg>
    </div>
    <div class="ac-settings" id="acSettings">
      <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.03 7.03 0 00-1.62-.94l-.36-2.54A.5.5 0 0013.9 2h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.13.55-1.62.94l-2.39-.96a.5.5 0 00-.6.22L2.66 8.48a.49.49 0 00.12.61L4.81 10.7c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.14.24.43.34.68.24l2.39-.96c.5.39 1.03.7 1.62.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.55 1.62-.94l2.39.96c.25.1.54 0 .68-.24l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z"/></svg>
    </div>
  </div>
  <div class="ac-profile">
    <div class="ac-avatar-wrap">
      <img src="https://raw.githubusercontent.com/METAEGGAS/amana/main/avatar-CZjm-vGp.png" alt="avatar">
      <div class="ac-cam"><svg viewBox="0 0 24 24"><path d="M9 3L7.2 5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.2L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z"/></svg></div>
    </div>
    <div class="ac-email">ttwt09191@gmail.com <span class="ac-vip">VIP 0</span></div>
  </div>
</div>

<div class="ac-card">
  <div class="ac-row">
    <div class="ac-row-label">UID</div>
    <div class="ac-row-val" style="display:flex;align-items:center;gap:6px">
      <span>10321280</span>
      <svg class="ac-copy" viewBox="0 0 24 24" fill="#8A8F9C"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    </div>
  </div>
  <div class="ac-row" style="margin-top:10px">
    <div class="ac-row-label">رمز الدعوة</div>
    <div class="ac-row-val">
      <span>F34NTY</span>
      <svg class="ac-copy" viewBox="0 0 24 24" fill="#8A8F9C"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    </div>
  </div>
  <div class="ac-divider"></div>
  <div class="ac-assets-row">
    <div class="ac-assets-label">
      <span>إجمالي الأصول</span>
      <svg id="acEye" viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/></svg>
    </div>
    <div class="ac-assets-info">
      <span>معلومات الأصول</span>
      <svg viewBox="0 0 24 24"><path d="M10 6l6 6-6 6" fill="none" stroke="#8A8F9C" stroke-width="2"/></svg>
    </div>
  </div>
  <div class="ac-balance" id="acBal">$0.00</div>
</div>

<div class="ac-actions">
  <div class="ac-action">
    <div class="ac-action-ic">
      <svg viewBox="0 0 40 40"><rect x="6" y="12" width="28" height="20" rx="3" fill="#7B6FE0"/><rect x="6" y="12" width="28" height="6" fill="#5D51C4"/><circle cx="26" cy="24" r="4" fill="#FFD84D"/><text x="26" y="27" text-anchor="middle" font-size="7" font-weight="800" fill="#7B6FE0">$</text></svg>
    </div>
    <div class="ac-action-tx">سجل تغييرات الحساب</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic">
      <svg viewBox="0 0 40 40"><rect x="6" y="12" width="28" height="20" rx="3" fill="#7B6FE0"/><rect x="6" y="12" width="28" height="6" fill="#5D51C4"/><circle cx="28" cy="24" r="5" fill="#FF9F43"/><path d="M28 20v8M25 24l3 3 3-3" stroke="#fff" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
    </div>
    <div class="ac-action-tx">اتفاقية الاستثمار التلقائي</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic">
      <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="#7B6FE0"/><circle cx="20" cy="20" r="10" fill="#fff"/><path d="M20 10v20M10 20h20M13 13l14 14M27 13L13 27" stroke="#7B6FE0" stroke-width="2"/><circle cx="20" cy="20" r="3" fill="#FFD84D"/><text x="20" y="23" text-anchor="middle" font-size="6" font-weight="800" fill="#7B6FE0">?</text></svg>
    </div>
    <div class="ac-action-tx">عجلة الحظ</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic">
      <svg viewBox="0 0 40 40"><rect x="8" y="8" width="20" height="24" rx="2" fill="#7B6FE0"/><line x1="12" y1="14" x2="24" y2="14" stroke="#fff" stroke-width="1.5"/><line x1="12" y1="18" x2="24" y2="18" stroke="#fff" stroke-width="1.5"/><line x1="12" y1="22" x2="20" y2="22" stroke="#fff" stroke-width="1.5"/><circle cx="30" cy="28" r="6" fill="#FF6B6B"/><path d="M30 25v6M27 28h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
    </div>
    <div class="ac-action-tx">دعوة الأصدقاء</div>
  </div>
</div>

<div class="ac-menu">
  <div class="ac-item">
    <div class="ac-item-ic"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><line x1="14" y1="10" x2="18" y2="10"/><line x1="14" y1="14" x2="18" y2="14"/></svg></div>
    <div class="ac-item-tx">توثيق الهوية</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="4"/><path d="M9 13v8M6 17h6M13 15l6-6M15 7l4 4"/></svg></div>
    <div class="ac-item-tx">قسيمة</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="10" r="2.5"/><path d="M13 20c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5"/></svg></div>
    <div class="ac-item-tx">مستواي</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="8" r="2.5"/><path d="M15 20c0-2.5 1.5-4.5 4-4.5"/><path d="M19 4v6M16 7h6" stroke-width="1.5"/></svg></div>
    <div class="ac-item-tx">إحصائيات النشاط</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
</div>
`;

var overlay=document.createElement('div');
overlay.id='accountOverlay';
overlay.innerHTML=html;
document.body.appendChild(overlay);

// Eye toggle
var acEye=document.getElementById('acEye'),acBal=document.getElementById('acBal'),acHid=false,acReal=acBal.textContent;
acEye.addEventListener('click',function(){acHid=!acHid;acBal.textContent=acHid?'***':acReal;});

// Copy functionality
document.querySelectorAll('#accountOverlay .ac-copy').forEach(function(c){
  c.addEventListener('click',function(e){
    var txt=c.previousElementSibling.textContent;
    if(navigator.clipboard){navigator.clipboard.writeText(txt);}
    c.style.opacity='1';setTimeout(function(){c.style.opacity='.5';},400);
  });
});

// Action buttons feedback
document.querySelectorAll('#accountOverlay .ac-action, #accountOverlay .ac-item').forEach(function(b){
  b.addEventListener('click',function(){
    b.style.transform='scale(.97)';setTimeout(function(){b.style.transform='';},120);
  });
});

// Settings click (optional - can be extended)
document.getElementById('acSettings').addEventListener('click',function(){
  this.style.transform='scale(.9)';setTimeout(function(){document.getElementById('acSettings').style.transform='';},150);
});

})();
