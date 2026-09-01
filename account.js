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

/* ===== قسم توثيق الهوية (verifyOverlay) — CSS معزول بالكامل تحت #verifyOverlay ===== */
#verifyOverlay{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#f4f3fb;z-index:9999;overflow-y:auto;direction:rtl;font-family:'Segoe UI',Tahoma,sans-serif}
#verifyOverlay *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',Tahoma,sans-serif;-webkit-tap-highlight-color:transparent;user-select:none}
#verifyOverlay input{user-select:text}
#verifyOverlay .hd{position:relative;background:linear-gradient(135deg,#6c6cf0,#8b5cf6);color:#fff;text-align:center;padding:20px 0 22px;font-size:20px;font-weight:800;overflow:hidden}
#verifyOverlay .hd .bg{position:absolute;inset:0;background:url('https://i.ibb.co/hRm446rn/IMG.png') center/cover;opacity:.5}
#verifyOverlay .hd .t{position:relative}
#verifyOverlay .hd .bk{position:absolute;left:14px;top:20px;cursor:pointer}
#verifyOverlay .sb{padding:12px;text-align:center;font-size:14px;font-weight:700;color:#fff;background:#e53935;display:none}
#verifyOverlay .sb.on{display:block}
#verifyOverlay .sb.ok{background:#2e7d32}
#verifyOverlay svg{display:block}
#verifyOverlay .card{background:#fff;border-radius:14px;margin:16px;padding:10px 20px;box-shadow:0 2px 10px rgba(0,0,0,.05)}
#verifyOverlay .row{display:flex;flex-direction:row-reverse;align-items:center;gap:16px;padding:20px 0;border-bottom:1.5px solid #eee;cursor:pointer}
#verifyOverlay .row:last-child{border:0}
#verifyOverlay .row .ic{width:26px;height:26px;color:#4a4a55;flex-shrink:0}
#verifyOverlay .row .lb{flex:1;color:#888;font-size:15px;font-weight:600}
#verifyOverlay .row .vl{flex:1;color:#1c1c22;font-size:15px;font-weight:700}
#verifyOverlay .row .ar{color:#999}
#verifyOverlay .row input{flex:1;border:0;outline:0;font-size:15px;font-weight:600;color:#1c1c22;background:none;font-family:inherit;text-align:right}
#verifyOverlay .row input::placeholder{color:#a3a3ad;font-weight:500}
#verifyOverlay .row input:disabled{color:#666}
#verifyOverlay .sec{margin:20px 18px 10px;font-size:17px;font-weight:800;color:#1c1c22}
#verifyOverlay .up{background:#efeafd;border-radius:14px;margin:0 16px 16px;padding:36px 18px 16px;text-align:center;cursor:pointer;display:block}
#verifyOverlay .up.dis{opacity:.7;pointer-events:none}
#verifyOverlay .up .fr{position:relative;background:#d9cffb;border-radius:10px;padding:28px 14px}
#verifyOverlay .c{position:absolute;width:28px;height:28px;border:5px solid #b39df0}
#verifyOverlay .c1{top:8px;left:8px;border-right:0;border-bottom:0;border-radius:9px 0 0 0}
#verifyOverlay .c2{top:8px;right:8px;border-left:0;border-bottom:0;border-radius:0 9px 0 0}
#verifyOverlay .c3{bottom:8px;left:8px;border-right:0;border-top:0;border-radius:0 0 0 9px}
#verifyOverlay .c4{bottom:8px;right:8px;border-left:0;border-top:0;border-radius:0 0 9px 0}
#verifyOverlay .up img{max-width:155px;display:block;margin:auto}
#verifyOverlay .up p{color:#7d77a0;font-size:13px;font-weight:600;margin-top:16px}
#verifyOverlay .up input[type=file]{display:none}
#verifyOverlay .btn{display:block;width:calc(100% - 32px);margin:12px 16px 32px;padding:16px;border:0;border-radius:12px;background:#2f6bff;color:#fff;font-size:18px;font-weight:800;cursor:pointer;font-family:inherit}
#verifyOverlay .btn:disabled{background:#9bb0e0;cursor:not-allowed}
#verifyOverlay .ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10}
#verifyOverlay .ov.on{display:flex;align-items:flex-end;justify-content:center}
#verifyOverlay .sh{width:100%;max-width:480px;background:#fff;border-radius:18px 18px 0 0;padding:22px 20px 32px;max-height:70vh;overflow-y:auto}
#verifyOverlay .sh .hd2{display:flex;justify-content:space-between;align-items:center;font-size:18px;font-weight:800;margin-bottom:12px;position:sticky;top:0;background:#fff;padding-bottom:8px}
#verifyOverlay .sh .x{cursor:pointer;color:#999}
#verifyOverlay .opt{display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;padding:19px 4px;border-bottom:1.5px solid #f0f0f0;font-size:15px;font-weight:700;color:#2a2a32;cursor:pointer}
#verifyOverlay .opt:last-child{border:0}
#verifyOverlay .opt.sel{color:#7c5cf0}
#verifyOverlay .opt .ck{color:#7c5cf0}
#verifyOverlay .sr{width:100%;padding:10px;border:1.5px solid #eee;border-radius:8px;font-size:14px;margin-bottom:10px;font-family:inherit;text-align:right;box-sizing:border-box}
#verifyOverlay .lg{position:fixed;inset:0;background:#fff;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:30vh}
#verifyOverlay .lg img{width:80px;height:80px}
#verifyOverlay .au{position:fixed;inset:0;background:#f4f3fb;z-index:50;display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px}
#verifyOverlay .au.on{display:flex}
#verifyOverlay .au .box{width:100%;max-width:360px;background:#fff;padding:30px 22px;border-radius:14px;box-shadow:0 2px 10px rgba(0,0,0,.08)}
#verifyOverlay .au h2{text-align:center;margin-bottom:20px;color:#1c1c22;font-size:20px}
#verifyOverlay .au input{width:100%;padding:13px;border:1.5px solid #ddd;border-radius:8px;margin-bottom:12px;font-size:15px;font-family:inherit;text-align:right;box-sizing:border-box}
#verifyOverlay .au button{width:100%;padding:14px;border:0;border-radius:8px;background:#2f6bff;color:#fff;font-weight:800;font-size:16px;cursor:pointer;margin-bottom:10px;font-family:inherit}
#verifyOverlay .au .sw{text-align:center;color:#2f6bff;cursor:pointer;font-size:14px;font-weight:600}
#verifyOverlay .au .er{color:#e53935;font-size:13px;text-align:center;margin-bottom:10px;min-height:18px}
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

// ============================================================
// قسم توثيق الهوية: حقن ديناميكي مدمج (بديل stocks.js بنفس النظام)
// أول ضغطة تبني الـ verifyOverlay، وأي ضغطة بعدها تعرضه فقط
// ============================================================

// زرار الرجوع في صفحة التوثيق: يقفل الـ Overlay ويرجع للبروفايل
window.closeVerify=function(){var vo=document.getElementById('verifyOverlay');if(vo)vo.style.display='none';};

var verifyHtml=`
<div class="lg" id="lg"><img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif"></div>
<div class="au" id="au"><div class="box"><h2 id="aT">تسجيل الدخول</h2><div class="er" id="aE"></div><input type="email" id="aEm" placeholder="البريد الإلكتروني"><input type="password" id="aPw" placeholder="كلمة السر"><button onclick="doAuth()" id="aB">دخول</button><div class="sw" onclick="tog()" id="aS">ليس لديك حساب؟ إنشاء حساب</div></div></div>
<div class="hd"><span class="bk" onclick="closeVerify()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></span><div class="bg"></div><div class="t">توثيق الهوية</div></div>
<div class="sb" id="sb"></div>
<div class="card">
<div class="row" onclick="openSh('cOv')" id="rC"><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/></svg></span><span class="vl" id="cVal">United States</span><span class="ar"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></span></div>
<div class="row"><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg></span><input id="nm" placeholder="يرجى إدخال الاسم"></div>
<div class="row" onclick="openSh('dOv')" id="rD"><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16.5c.8-1.5 1.8-2.2 3-2.2s2.2.7 3 2.2M14 9h5M14 12.5h5M14 16h3"/></svg></span><span class="lb" id="dVal">يرجى اختيار نوع الوثيقة</span><span class="ar"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></span></div>
<div class="row"><span class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg></span><input id="idn" placeholder="يرجى إدخال رقم بطاقة الهوية"></div>
</div>
<div class="sec">صورة بطاقة الهوية</div>
<label class="up" id="uF"><input type="file" accept="image/*" onchange="prev(this,'fImg')"><div class="fr"><span class="c c1"></span><span class="c c2"></span><span class="c c3"></span><span class="c c4"></span><img id="fImg" src="https://gulfxdl.com/assets/idImg1-light-BjGturpJ.png"></div><p>يرجى رفع صورة بطاقة الهوية من الوجه الأمامي</p></label>
<label class="up" id="uB"><input type="file" accept="image/*" onchange="prev(this,'bImg')"><div class="fr"><span class="c c1"></span><span class="c c2"></span><span class="c c3"></span><span class="c c4"></span><img id="bImg" src="https://gulfxdl.com/assets/idImg2-light-D2XNgiST.png"></div><p>يرجى رفع صورة بطاقة الهوية من الوجه الخلفي</p></label>
<button class="btn" id="sB" onclick="sub()">إرسال</button>
<div class="ov" id="cOv" onclick="closeSh('cOv')"><div class="sh" onclick="event.stopPropagation()"><div class="hd2"><span>يرجى اختيار الجنسية</span><span class="x" onclick="closeSh('cOv')"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></span></div><input class="sr" id="cSr" placeholder="بحث..." oninput="render()"><div id="cList"></div></div></div>
<div class="ov" id="dOv" onclick="closeSh('dOv')"><div class="sh" onclick="event.stopPropagation()"><div class="hd2"><span>يرجى اختيار نوع الوثيقة</span><span class="x" onclick="closeSh('dOv')"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></span></div><div id="dList"></div></div></div>
`;

function injectVerifyOverlay(){
  var vo=document.createElement('div');
  vo.id='verifyOverlay';
  vo.innerHTML=verifyHtml;
  document.body.appendChild(vo);
  initVerify();
}

async function initVerify(){
const {initializeApp}=await import("https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js");
const {getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword}=await import("https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js");
const {getFirestore,doc,setDoc,getDoc,onSnapshot}=await import("https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js");
const {getStorage,ref,uploadString,getDownloadURL}=await import("https://www.gstatic.com/firebasejs/12.18.0/firebase-storage.js");
const app=initializeApp({apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"});
const auth=getAuth(app),db=getFirestore(app),st=getStorage(app);
window.Cs=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
window.Ds=["بطاقة الهوية","جواز السفر","رخصة القيادة"];window.cSel=Cs.indexOf("United States");window.dSel=-1;window.fD="";window.bD="";window.lock=false;window.uid=null;window.subd=false;
const CK='<span class="ck"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg></span>';
window.render=function(){var q=(document.getElementById('cSr').value||'').toLowerCase(),h='';Cs.forEach(function(c,i){if(!q||c.toLowerCase().includes(q))h+='<div class="opt'+(i==cSel?' sel':'')+'" onclick="pickC('+i+')"><span>'+c+'</span>'+(i==cSel?CK:'')+'</div>'});document.getElementById('cList').innerHTML=h;
var h2='';Ds.forEach(function(d,i){h2+='<div class="opt'+(i==dSel?' sel':'')+'" onclick="pickD('+i+')"><span>'+d+'</span>'+(i==dSel?CK:'')+'</div>'});document.getElementById('dList').innerHTML=h2};
window.openSh=function(id){if(lock)return;document.getElementById(id).classList.add('on')};
window.closeSh=function(id){document.getElementById(id).classList.remove('on')};
window.pickC=function(i){cSel=i;document.getElementById('cVal').textContent=Cs[i];render();closeSh('cOv');saveDraft()};
window.pickD=function(i){dSel=i;document.getElementById('dVal').textContent=Ds[i];document.getElementById('dVal').style.color='#1c1c22';render();closeSh('dOv');saveDraft()};
window.prev=function(inp,img){if(lock){inp.value='';return}if(inp.files&&inp.files[0]){var r=new FileReader();r.onload=function(e){document.getElementById(img).src=e.target.result;if(img=='fImg')fD=e.target.result;else bD=e.target.result;saveDraft()};r.readAsDataURL(inp.files[0])}};
function showSb(msg,ok){var s=document.getElementById('sb');s.textContent=msg;s.classList.add('on');if(ok)s.classList.add('ok');else s.classList.remove('ok')}
function lockUI(v){lock=v;document.getElementById('nm').disabled=v;document.getElementById('idn').disabled=v;document.getElementById('sB').disabled=v;document.getElementById('uF').classList.toggle('dis',v);document.getElementById('uB').classList.toggle('dis',v);document.getElementById('rC').style.pointerEvents=v?'none':'';document.getElementById('rD').style.pointerEvents=v?'none':''}
function saveDraft(){if(subd||!uid)return;try{localStorage.setItem('vd_'+uid,JSON.stringify({country:Cs[cSel],name:document.getElementById('nm').value,docType:dSel>=0?Ds[dSel]:'',idNumber:document.getElementById('idn').value,fD:fD,bD:bD}))}catch(e){}}
function loadDraft(){if(!uid)return;try{var s=localStorage.getItem('vd_'+uid);if(s){var d=JSON.parse(s);fillData(d);if(d.fD){fD=d.fD;document.getElementById('fImg').src=d.fD}if(d.bD){bD=d.bD;document.getElementById('bImg').src=d.bD}}}catch(e){}}
function fillData(d){if(d.name!=null)document.getElementById('nm').value=d.name||'';if(d.idNumber!=null)document.getElementById('idn').value=d.idNumber||'';if(d.country){var i=Cs.indexOf(d.country);if(i>=0){cSel=i;document.getElementById('cVal').textContent=d.country}}if(d.docType){var j=Ds.indexOf(d.docType);if(j>=0){dSel=j;document.getElementById('dVal').textContent=d.docType;document.getElementById('dVal').style.color='#1c1c22'}}if(d.frontUrl)document.getElementById('fImg').src=d.frontUrl;if(d.backUrl)document.getElementById('bImg').src=d.backUrl}
document.addEventListener('input',function(e){if(e.target.id=='nm'||e.target.id=='idn')saveDraft()});
window.sub=async function(){if(lock)return;var n=document.getElementById('nm').value.trim(),d=document.getElementById('idn').value.trim();
if(!n)return alert('يرجى إدخال الاسم');if(dSel<0)return alert('يرجى اختيار نوع الوثيقة');if(!d)return alert('يرجى إدخال رقم بطاقة الهوية');if(!fD&&!document.getElementById('fImg').src.startsWith('http'))return alert('يرجى رفع صورة الوجه الأمامي');if(!bD&&!document.getElementById('bImg').src.startsWith('http'))return alert('يرجى رفع صورة الوجه الخلفي');
subd=true;lockUI(true);showSb('جاري تحقق من الهوية يرجي الإنتظار',false);
try{var fU='',bU='';if(fD){var fr=ref(st,'ids/'+uid+'/front.jpg');await uploadString(fr,fD,'data_url');fU=await getDownloadURL(fr)}if(bD){var br=ref(st,'ids/'+uid+'/back.jpg');await uploadString(br,bD,'data_url');bU=await getDownloadURL(br)}
await setDoc(doc(db,'verifications',uid),{uid:uid,country:Cs[cSel],name:n,docType:Ds[dSel],idNumber:d,frontUrl:fU,backUrl:bU,status:'pending',createdAt:Date.now()});
setTimeout(async function(){await setDoc(doc(db,'verifications',uid),{status:'verified',verifiedAt:Date.now()},{merge:true});showSb('نجح التحقق من حسابك',true)},5000)}catch(e){alert('خطأ: '+e.message);subd=false;lockUI(false);document.getElementById('sb').classList.remove('on','ok')}};
var isLogin=true;
window.tog=function(){isLogin=!isLogin;document.getElementById('aT').textContent=isLogin?'تسجيل الدخول':'إنشاء حساب';document.getElementById('aB').textContent=isLogin?'دخول':'إنشاء';document.getElementById('aS').textContent=isLogin?'ليس لديك حساب؟ إنشاء حساب':'لديك حساب؟ تسجيل الدخول';document.getElementById('aE').textContent=''};
window.doAuth=async function(){var e=document.getElementById('aEm').value.trim(),p=document.getElementById('aPw').value;document.getElementById('aE').textContent='';if(!e||!p){document.getElementById('aE').textContent='الرجاء إدخال البريد وكلمة السر';return}try{if(isLogin)await signInWithEmailAndPassword(auth,e,p);else await createUserWithEmailAndPassword(auth,e,p)}catch(er){document.getElementById('aE').textContent=er.message}};
onAuthStateChanged(auth,async function(u){if(u&&u.email&&!u.isAnonymous){uid=u.uid;document.getElementById('au').classList.remove('on');try{var s=await getDoc(doc(db,'verifications',uid));if(s.exists()){var dt=s.data();subd=true;fillData(dt);if(dt.status==='pending'){lockUI(true);showSb('جاري تحقق من الهوية يرجي الإنتظار',false)}else if(dt.status==='verified'){lockUI(true);showSb('نجح التحقق من حسابك',true)}}else{loadDraft()}onSnapshot(doc(db,'verifications',uid),function(s){if(s.exists()){var dt=s.data();subd=true;fillData(dt);if(dt.status==='pending'){lockUI(true);showSb('جاري تحقق من الهوية يرجي الإنتظار',false)}else if(dt.status==='verified'){lockUI(true);showSb('نجح التحقق من حسابك',true)}}})}catch(e){loadDraft()}}else{document.getElementById('au').classList.add('on')}});
render();
setTimeout(function(){document.getElementById('lg').style.display='none'},500);
}

// Identity verification: حقن قسم التوثيق عند أول ضغطة (نفس نظام الحقن الأصلي)
var acVerifyScriptLoaded=false;
document.getElementById('acVerify').addEventListener('click',function(){
  if(document.getElementById('verifyOverlay')){document.getElementById('verifyOverlay').style.display='block';return;}
  if(acVerifyScriptLoaded){return;}
  acVerifyScriptLoaded=true;
  injectVerifyOverlay();
});

// Settings click
document.getElementById('acSettings').addEventListener('click',function(){
  this.style.transform='scale(.9)';setTimeout(function(){document.getElementById('acSettings').style.transform='';},150);
});

})();
