(function(){
if(document.getElementById('accountOverlay')){document.getElementById('accountOverlay').style.display='block';return;}

var GH='https://raw.githubusercontent.com/METAEGGAS/amana/main/';

var css=`
#accountOverlay{position:fixed;top:0;left:0;right:0;bottom:60px;max-width:480px;margin:0 auto;background:#F5F6FA;z-index:9998;overflow-y:auto;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:rtl}
#accountOverlay .ac-header{background:linear-gradient(180deg,#8B7FE8 0%,#9B8FF0 50%,#A99EF5 100%);padding:14px 16px 90px;position:relative;overflow:hidden}
#accountOverlay .ac-header::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.08);top:-100px;right:-80px}
#accountOverlay .ac-header::after{content:'';position:absolute;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.06);bottom:-50px;left:-60px}
/* الشريط العلوي: هلال + كرة أرضية يسار | إعدادات يمين (مطابق للمرجع) */
#accountOverlay .ac-top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;margin-bottom:22px;direction:ltr}
#accountOverlay .ac-top-icons{display:flex;gap:16px;align-items:center}
#accountOverlay .ac-top-icons svg{width:22px;height:22px;fill:#fff;cursor:pointer}
#accountOverlay .ac-top-icons img{width:22px;height:22px;cursor:pointer;object-fit:contain}
#accountOverlay .ac-settings{background:rgba(255,255,255,.2);width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer}
#accountOverlay .ac-settings img{width:20px;height:20px;object-fit:contain}
#accountOverlay .ac-profile{text-align:center;position:relative;z-index:2}
#accountOverlay .ac-avatar-wrap{position:relative;width:88px;height:88px;margin:0 auto 14px}
#accountOverlay .ac-avatar-wrap img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,.4)}
#accountOverlay .ac-cam{position:absolute;bottom:0;right:50%;transform:translateX(50%);background:rgba(0,0,0,.5);width:100%;height:26px;border-radius:0 0 50% 50%;display:flex;align-items:flex-start;justify-content:center;padding-top:2px;overflow:hidden}
#accountOverlay .ac-cam svg{width:16px;height:16px;fill:#fff}
/* الإيميل + VIP 0 على نفس السطر، VIP أصفر على يمين الإيميل */
#accountOverlay .ac-email{color:#fff;font-size:17px;font-weight:700;display:inline-flex;align-items:center;gap:8px;direction:ltr}
#accountOverlay .ac-vip{background:transparent;color:#FFD84D;font-size:14px;font-weight:800;letter-spacing:.5px}
#accountOverlay .ac-card{background:#fff;border-radius:14px;margin:-70px 16px 0;padding:18px;position:relative;z-index:3;box-shadow:0 4px 16px rgba(0,0,0,.06)}
/* صف واحد: UID يسار | رمز الدعوة يمين */
#accountOverlay .ac-ids-row{display:flex;justify-content:space-between;align-items:center;direction:ltr}
#accountOverlay .ac-id-group{display:flex;align-items:center;gap:6px}
#accountOverlay .ac-id-group.rtl{direction:rtl}
#accountOverlay .ac-row-label{color:#8A8F9C;font-size:13px}
#accountOverlay .ac-row-val{color:#1A1A1A;font-size:14px;font-weight:700}
#accountOverlay .ac-copy{width:14px;height:14px;cursor:pointer;opacity:.5}
#accountOverlay .ac-divider{height:1px;background:#ECEEF4;margin:14px 0}
/* إجمالي الأصول + العين يسار | معلومات الأصول + سهم يسار في اليمين */
#accountOverlay .ac-assets-row{display:flex;justify-content:space-between;align-items:center;direction:ltr}
#accountOverlay .ac-assets-label{display:flex;align-items:center;gap:6px;color:#8A8F9C;font-size:13px}
#accountOverlay .ac-assets-label svg{width:16px;height:16px;stroke:#8A8F9C;fill:none;stroke-width:1.6;cursor:pointer}
#accountOverlay .ac-assets-info{color:#8A8F9C;font-size:13px;display:flex;align-items:center;gap:4px;cursor:pointer}
#accountOverlay .ac-assets-info svg{width:14px;height:14px;fill:none;stroke:#8A8F9C;stroke-width:2}
/* الرصيد محاذاة لليسار */
#accountOverlay .ac-balance{color:#7B6FE0;font-size:32px;font-weight:800;margin-top:6px;letter-spacing:.5px;text-align:left}
/* شبكة الأيقونات: الترتيب البصري من اليسار لليمين مطابق للمرجع */
#accountOverlay .ac-actions{background:#fff;border-radius:14px;margin:14px 16px 0;padding:18px 10px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;box-shadow:0 2px 10px rgba(0,0,0,.04);direction:ltr}
#accountOverlay .ac-action{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;padding:6px 0}
#accountOverlay .ac-action-ic{width:50px;height:50px;background:#EEE9FB;border-radius:12px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
#accountOverlay .ac-action-ic img{width:100%;height:100%;object-fit:contain}
#accountOverlay .ac-action-tx{font-size:11.5px;color:#1A1A1A;font-weight:600;text-align:center;line-height:1.3}
#accountOverlay .ac-menu{background:#fff;border-radius:14px;margin:14px 16px 20px;padding:4px 0;box-shadow:0 2px 10px rgba(0,0,0,.04)}
/* عناصر القائمة: أيقونة يسار | نص | سهم > يمين */
#accountOverlay .ac-item{display:flex;align-items:center;padding:16px 18px;cursor:pointer;border-bottom:1px solid #F0F2F7;direction:ltr}
#accountOverlay .ac-item:last-child{border-bottom:none}
#accountOverlay .ac-item-ic{width:26px;height:26px;display:flex;align-items:center;justify-content:center;margin-right:14px}
#accountOverlay .ac-item-ic img{width:22px;height:22px;object-fit:contain}
#accountOverlay .ac-item-tx{flex:1;font-size:14px;color:#1A1A1A;font-weight:600;text-align:left}
#accountOverlay .ac-item-arr{width:16px;height:16px;fill:none;stroke:#C4C8D1;stroke-width:2;transform:rotate(180deg)}
`;
var st=document.createElement('style');st.id='accountOverlayStyle';st.textContent=css;document.head.appendChild(st);

var html=`
<div class="ac-header">
  <div class="ac-top">
    <div class="ac-top-icons">
      <svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
      <img src="https://gulfxdl.com/assets/language-Bymc3Lbd.png" alt="language">
    </div>
    <div class="ac-settings" id="acSettings">
      <img src="https://gulfxdl.com/assets/setting-DQ3FSC7i.png" alt="settings">
    </div>
  </div>
  <div class="ac-profile">
    <div class="ac-avatar-wrap">
      <img src="`+GH+`avatar-CZjm-vGp.png" alt="avatar">
      <div class="ac-cam"><svg viewBox="0 0 24 24"><path d="M9 3L7.2 5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.2L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z"/></svg></div>
    </div>
    <div class="ac-email">ttwt09191@gmail.com <span class="ac-vip">VIP 0</span></div>
  </div>
</div>

<div class="ac-card">
  <div class="ac-ids-row">
    <div class="ac-id-group">
      <span class="ac-row-label">UID</span>
      <span class="ac-row-val">10321280</span>
      <svg class="ac-copy" viewBox="0 0 24 24" fill="#8A8F9C"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    </div>
    <div class="ac-id-group rtl">
      <span class="ac-row-label">رمز الدعوة</span>
      <span class="ac-row-val">F34NTY</span>
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
      <svg viewBox="0 0 24 24"><path d="M14 6l-6 6 6 6"/></svg>
    </div>
  </div>
  <div class="ac-balance" id="acBal">$0.00</div>
</div>

<div class="ac-actions">
  <div class="ac-action">
    <div class="ac-action-ic"><img src="`+GH+`Shajjs.png" alt="سجل تغييرات الحساب"></div>
    <div class="ac-action-tx">سجل تغييرات الحساب</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic"><img src="`+GH+`Ozbsjjz.png" alt="اتفاقية الاستثمار التلقائي"></div>
    <div class="ac-action-tx">اتفاقية الاستثمار التلقائي</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic"><img src="https://gulfxdl.com/assets/draw-light-Ddf7eLEI.png" alt="عجلة الحظ"></div>
    <div class="ac-action-tx">عجلة الحظ</div>
  </div>
  <div class="ac-action">
    <div class="ac-action-ic"><img src="`+GH+`Isbshsh.png" alt="دعوة الأصدقاء"></div>
    <div class="ac-action-tx">دعوة الأصدقاء</div>
  </div>
</div>

<div class="ac-menu">
  <div class="ac-item" id="acVerify">
    <div class="ac-item-ic"><img src="`+GH+`Nzosknznz.png" alt="توثيق الهوية"></div>
    <div class="ac-item-tx">توثيق الهوية</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Kzkzjjz.png" alt="قسيمة"></div>
    <div class="ac-item-tx">قسيمة</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Zjisjzhbz.png" alt="مستواي"></div>
    <div class="ac-item-tx">مستواي</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`ZnjJajaj.png" alt="إحصائيات النشاط"></div>
    <div class="ac-item-tx">إحصائيات النشاط</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Zbjakskjz.png" alt="مركز خدمة العملاء"></div>
    <div class="ac-item-tx">مركز خدمة العملاء</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Jzjzjfhhh.png" alt="تحميل التطبيق"></div>
    <div class="ac-item-tx">تحميل التطبيق</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Jzjsijs.png" alt="حول"></div>
    <div class="ac-item-tx">حول</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item">
    <div class="ac-item-ic"><img src="`+GH+`Nzjsiskjs.png" alt="تسجيل الخروج"></div>
    <div class="ac-item-tx">تسجيل الخروج</div>
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

// Identity verification: dynamic injection of stocks.js
var acVerifyScriptLoaded=false;
document.getElementById('acVerify').addEventListener('click',function(){
  if(document.getElementById('verifyOverlay')){document.getElementById('verifyOverlay').style.display='block';return;}
  if(acVerifyScriptLoaded){return;}
  acVerifyScriptLoaded=true;
  var s=document.createElement('script');
  s.src=GH+'stocks.js';
  s.onerror=function(){acVerifyScriptLoaded=false;};
  document.body.appendChild(s);
});

// Settings click
document.getElementById('acSettings').addEventListener('click',function(){
  this.style.transform='scale(.9)';setTimeout(function(){document.getElementById('acSettings').style.transform='';},150);
});

})();
