<script>(function(){
if(document.getElementById('accountOverlay')){document.getElementById('accountOverlay').style.display='block';return;}
var R='https://raw.githubusercontent.com/METAEGGAS/amana/main/',
IC={ch:R+'Shajjs.png',au:R+'Ozbsjjz.png',wh:'https://gulfxdl.com/assets/draw-light-Ddf7eLEI.png',inv:R+'Isbshsh.png',st:'https://gulfxdl.com/assets/setting-DQ3FSC7i.png',lg:'https://gulfxdl.com/assets/language-Bymc3Lbd.png',id:R+'Nzosknznz.png',cp:R+'Kzkzjjz.png',lv:R+'Zjisjzhbz.png',ac:R+'ZnjJajaj.png',cs:R+'Zbjakskjz.png',dl:R+'Jzjzjfhhh.png',ab:R+'Jzjsijs.png',lo:R+'Nzjsiskjs.png'};
var css=`#accountOverlay{position:fixed;top:0;left:0;right:0;bottom:60px;max-width:480px;margin:0 auto;background:#F5F6FA;z-index:9998;overflow-y:auto;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:rtl}
#accountOverlay .ac-header{background:linear-gradient(180deg,#8B7FE8 0%,#9B8FF0 50%,#A99EF5 100%);padding:50px 20px 90px;position:relative;overflow:hidden}
#accountOverlay .ac-header::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.08);top:-100px;right:-80px}
#accountOverlay .ac-header::after{content:'';position:absolute;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.06);bottom:-50px;left:-60px}
#accountOverlay .ac-top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;margin-bottom:20px}
#accountOverlay .ac-top-icons{display:flex;gap:12px;align-items:center}
#accountOverlay .ac-top-icons svg{width:22px;height:22px;fill:#fff;cursor:pointer}
#accountOverlay .ac-top-icons img{width:22px;height:22px;cursor:pointer;filter:brightness(0) invert(1)}
#accountOverlay .ac-settings{background:rgba(255,255,255,.2);width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer}
#accountOverlay .ac-settings img{width:20px;height:20px;filter:brightness(0) invert(1)}
#accountOverlay .ac-profile{text-align:center;position:relative;z-index:2}
#accountOverlay .ac-avatar-wrap{position:relative;width:88px;height:88px;margin:0 auto 14px}
#accountOverlay .ac-avatar-wrap img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,.4)}
#accountOverlay .ac-cam{position:absolute;bottom:0;right:50%;transform:translateX(50%);background:rgba(0,0,0,.5);width:100%;height:26px;border-radius:0 0 50% 50%;display:flex;align-items:flex-start;justify-content:center;padding-top:2px;overflow:hidden}
#accountOverlay .ac-cam svg{width:16px;height:16px;fill:#fff}
#accountOverlay .ac-email{color:#fff;font-size:17px;font-weight:700;display:inline-flex;align-items:center;gap:8px}
#accountOverlay .ac-vip{color:#FFD84D;font-size:14px;font-weight:800;letter-spacing:.5px}
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
#accountOverlay .ac-action-ic{width:50px;height:50px;display:flex;align-items:center;justify-content:center}
#accountOverlay .ac-action-ic img{width:50px;height:50px;object-fit:contain}
#accountOverlay .ac-action-tx{font-size:11.5px;color:#1A1A1A;font-weight:600;text-align:center;line-height:1.3}
#accountOverlay .ac-menu{background:#fff;border-radius:14px;margin:14px 16px 20px;padding:4px 0;box-shadow:0 2px 10px rgba(0,0,0,.04)}
#accountOverlay .ac-item{display:flex;align-items:center;padding:14px 18px;cursor:pointer;border-bottom:1px solid #F0F2F7}
#accountOverlay .ac-item:last-child{border-bottom:none}
#accountOverlay .ac-item-ic{width:28px;height:28px;display:flex;align-items:center;justify-content:center;margin-left:14px}
#accountOverlay .ac-item-ic img{width:26px;height:26px;object-fit:contain}
#accountOverlay .ac-item-tx{flex:1;font-size:14px;color:#1A1A1A;font-weight:600}
#accountOverlay .ac-item-arr{width:16px;height:16px;fill:none;stroke:#C4C8D1;stroke-width:2}`;
var st=document.createElement('style');st.id='accountOverlayStyle';st.textContent=css;document.head.appendChild(st);
function A(t,i){return '<div class="ac-action"><div class="ac-action-ic"><img src="'+i+'" alt=""></div><div class="ac-action-tx">'+t+'</div></div>';}
function I(t,i){return '<div class="ac-item"><div class="ac-item-ic"><img src="'+i+'" alt=""></div><div class="ac-item-tx">'+t+'</div><svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg></div>';}
var html=`<div class="ac-header"><div class="ac-top"><div class="ac-top-icons"><svg viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg><img src="`+IC.lg+`" alt="lang"></div><div class="ac-settings" id="acSettings"><img src="`+IC.st+`" alt="settings"></div></div><div class="ac-profile"><div class="ac-avatar-wrap"><img src="`+R+`avatar-CZjm-vGp.png" alt="avatar"><div class="ac-cam"><svg viewBox="0 0 24 24"><path d="M9 3L7.2 5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.2L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z"/></svg></div></div><div class="ac-email">ttwt09191@gmail.com <span class="ac-vip">VIP 0</span></div></div></div>
<div class="ac-card"><div class="ac-row"><div class="ac-row-label">UID</div><div class="ac-row-val"><span>10321280</span><svg class="ac-copy" viewBox="0 0 24 24" fill="#8A8F9C"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></div></div><div class="ac-row" style="margin-top:10px"><div class="ac-row-label">رمز الدعوة</div><div class="ac-row-val"><span>F34NTY</span><svg class="ac-copy" viewBox="0 0 24 24" fill="#8A8F9C"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></div></div><div class="ac-divider"></div><div class="ac-assets-row"><div class="ac-assets-label"><span>إجمالي الأصول</span><svg id="acEye" viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/></svg></div><div class="ac-assets-info"><span>معلومات الأصول</span><svg viewBox="0 0 24 24"><path d="M10 6l6 6-6 6" fill="none" stroke="#8A8F9C" stroke-width="2"/></svg></div></div><div class="ac-balance" id="acBal">$0.00</div></div>
<div class="ac-actions">`+A('سجل تغييرات الحساب',IC.ch)+A('اتفاقية الاستثمار التلقائي',IC.au)+A('عجلة الحظ',IC.wh)+A('دعوة الأصدقاء',IC.inv)+`</div>
<div class="ac-menu">`+I('توثيق الهوية',IC.id)+I('قسيمة',IC.cp)+I('مستواي',IC.lv)+I('إحصائيات النشاط',IC.ac)+I('مركز خدمة العملاء',IC.cs)+I('تحميل التطبيق',IC.dl)+I('حول',IC.ab)+I('تسجيل الخروج',IC.lo)+`</div>`;
var o=document.createElement('div');o.id='accountOverlay';o.innerHTML=html;document.body.appendChild(o);
var e=document.getElementById('acEye'),b=document.getElementById('acBal'),h=false,rv=b.textContent;
e.addEventListener('click',function(){h=!h;b.textContent=h?'***':rv;});
document.querySelectorAll('#accountOverlay .ac-copy').forEach(function(c){c.addEventListener('click',function(){var t=c.previousElementSibling.textContent;if(navigator.clipboard)navigator.clipboard.writeText(t);c.style.opacity='1';setTimeout(function(){c.style.opacity='.5';},400);});});
document.querySelectorAll('#accountOverlay .ac-action, #accountOverlay .ac-item').forEach(function(b){b.addEventListener('click',function(){b.style.transform='scale(.97)';setTimeout(function(){b.style.transform='';},120);});});
document.getElementById('acSettings').addEventListener('click',function(){this.style.transform='scale(.9)';var s=this;setTimeout(function(){s.style.transform='';},150);});
})();</script>
