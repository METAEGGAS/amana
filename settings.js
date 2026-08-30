(function(){
var css="#setPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:110;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#EEF1F8;direction:ltr}"+
"#setPage.open{opacity:1;pointer-events:auto}"+
"#setPage .sph{height:54px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#setPage .sph .ttl{color:#fff;font-size:14px;font-weight:700}"+
"#setPage .spb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#setPage .spb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#setPage .spcard{margin:14px 18px 0;background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,.04);overflow:hidden}"+
"#setPage .srow{display:flex;align-items:center;justify-content:space-between;min-height:56px;padding:0 18px;cursor:pointer}"+
"#setPage .srow:not(:last-child){border-bottom:1px solid #F2F3F8}"+
"#setPage .slbl{font-size:13.5px;color:#2A2A2A;font-weight:500}"+
"#setPage .sr{display:flex;align-items:center;gap:10px}"+
"#setPage .sval{direction:ltr;font-size:12.5px;color:#9AA0AE}"+
"#setPage .srow svg{width:15px;height:15px;stroke:#C2C7D4;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}";
var st=document.createElement('style');st.setAttribute('data-inj-root','');st.textContent=css;document.head.appendChild(st);
var ch='<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';
var pg=document.createElement('div');pg.id='setPage';pg.setAttribute('data-inj-root','');
pg.innerHTML='<div class="sph"><span class="spb" id="setBack"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></span><span class="ttl">الإعدادات</span></div>'+
'<div class="spcard">'+
'<div class="srow"><span class="slbl">تعديل كلمة مرور الدخول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow"><span class="slbl">تعديل كلمة مرور التداول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow"><span class="slbl">تم ربط رقم الهاتف المحمول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow"><span class="slbl">تم ربط البريد الإلكتروني</span><span class="sr"><span class="sval">'+(window.__userEmail||'')+'</span></span></div>'+
'<div class="srow"><span class="slbl">ربط عنوان السحب</span><span class="sr">'+ch+'</span></div>'+
'</div>';
document.body.appendChild(pg);
requestAnimationFrame(function(){requestAnimationFrame(function(){pg.classList.add('open')})});
document.getElementById('setBack').addEventListener('click',function(){pg.classList.remove('open')});
if(window.__regCleanup)window.__regCleanup(function(){});
})();
