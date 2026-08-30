(function(){
var css="#setPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:110;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#EEF1F8;direction:ltr}"+
"#setPage.open{opacity:1;pointer-events:auto}"+
"#setPage .sph{height:54px;background:url('https://i.ibb.co/hRm446rn/IMG.png') center center/cover no-repeat;display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#setPage .sph .ttl{color:#fff;font-size:14px;font-weight:700}"+
"#setPage .spb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#setPage .spb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#setPage .spcard{margin:14px 18px 0;background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,.04);overflow:hidden}"+
"#setPage .srow{display:flex;align-items:center;justify-content:space-between;min-height:56px;padding:0 18px;cursor:pointer}"+
"#setPage .srow:not(:last-child){border-bottom:1px solid #F2F3F8}"+
"#setPage .slbl{font-size:13.5px;color:#2A2A2A;font-weight:500}"+
"#setPage .sr{display:flex;align-items:center;gap:10px}"+
"#setPage .sval{direction:ltr;font-size:12.5px;color:#9AA0AE}"+
"#setPage .srow svg{width:15px;height:15px;stroke:#C2C7D4;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:120;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#fff;direction:ltr}"+
"#tpPage.open{opacity:1;pointer-events:auto}"+
"#tpPage .tph{height:54px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#tpPage .tph .ttl{color:#fff;font-size:14px;font-weight:700}"+
"#tpPage .tpb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#tpPage .tpb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage .tpf{padding:26px 22px 0}"+
"#tpPage .trow{display:flex;align-items:center;gap:12px;height:54px;border-bottom:1px solid #ECEDF2}"+
"#tpPage .trow .lk{width:17px;height:17px;stroke:#B9BEC9;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}"+
"#tpPage .trow input{flex:1;border:none;outline:none;background:transparent;font-size:13px;color:#2A2A2A;text-align:right;font-family:inherit}"+
"#tpPage .trow input::placeholder{color:#B7BCC7}"+
"#tpPage .trow .eye{width:19px;height:19px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}"+
"#tpPage .trow .eye svg{width:19px;height:19px;stroke:#C2C7D4;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage .tpbtn{margin:36px 22px 0;height:50px;border-radius:8px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;cursor:pointer}";
var st=document.createElement('style');st.setAttribute('data-inj-root','');st.textContent=css;document.head.appendChild(st);
var ch='<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';
var back='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
var lock='<svg class="lk" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';
var eyeOff='<svg viewBox="0 0 24 24"><path d="M3 3l18 18"/><path d="M10.6 5.2A9.9 9.9 0 0 1 12 5c7 0 10 7 10 7a17.3 17.3 0 0 1-2.9 3.9M6.6 6.6A16.9 16.9 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
var eyeOn='<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>';
var pg=document.createElement('div');pg.id='setPage';pg.setAttribute('data-inj-root','');
pg.innerHTML='<div class="sph"><span class="spb" id="setBack">'+back+'</span><span class="ttl">الإعدادات</span></div>'+
'<div class="spcard">'+
'<div class="srow"><span class="slbl">تعديل كلمة مرور الدخول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow" id="rowTradePwd"><span class="slbl">تعديل كلمة مرور التداول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow"><span class="slbl">تم ربط البريد الإلكتروني</span><span class="sr"><span class="sval">'+(window.__userEmail||'')+'</span></span></div>'+
'<div class="srow"><span class="slbl">ربط عنوان السحب</span><span class="sr">'+ch+'</span></div>'+
'</div>';
document.body.appendChild(pg);
var tp=document.createElement('div');tp.id='tpPage';tp.setAttribute('data-inj-root','');
tp.innerHTML='<div class="tph"><span class="tpb" id="tpBack">'+back+'</span><span class="ttl">تعديل كلمة مرور التداول</span></div>'+
'<div class="tpf">'+
'<div class="trow">'+lock+'<input type="password" id="tpOld" placeholder="يرجى إدخال كلمة المرور القديمة"><span class="eye">'+eyeOff+'</span></div>'+
'<div class="trow">'+lock+'<input type="password" id="tpNew" placeholder="يرجى إدخال كلمة المرور الجديدة"><span class="eye">'+eyeOff+'</span></div>'+
'<div class="trow">'+lock+'<input type="password" id="tpNew2" placeholder="أعد إدخال كلمة المرور الجديدة"><span class="eye">'+eyeOff+'</span></div>'+
'</div>'+
'<div class="tpbtn" id="tpConfirm">تأكيد التعديل</div>';
document.body.appendChild(tp);
requestAnimationFrame(function(){requestAnimationFrame(function(){pg.classList.add('open')})});
document.getElementById('setBack').addEventListener('click',function(){pg.classList.remove('open')});
document.getElementById('rowTradePwd').addEventListener('click',function(){tp.classList.add('open')});
document.getElementById('tpBack').addEventListener('click',function(){tp.classList.remove('open')});
Array.prototype.forEach.call(tp.querySelectorAll('.eye'),function(e){
e.addEventListener('click',function(){
var inp=e.parentNode.querySelector('input');
if(inp.type==='password'){inp.type='text';e.innerHTML=eyeOn}else{inp.type='password';e.innerHTML=eyeOff}
});
});
document.getElementById('tpConfirm').addEventListener('click',function(){
var o=document.getElementById('tpOld'),n=document.getElementById('tpNew'),n2=document.getElementById('tpNew2');
if(!o.value){alert('يرجى إدخال كلمة المرور القديمة');return}
if(!n.value){alert('يرجى إدخال كلمة المرور الجديدة');return}
if(n.value!==n2.value){alert('كلمتا المرور الجديدتان غير متطابقتين');return}
tp.classList.remove('open');
});
if(window.__regCleanup)window.__regCleanup(function(){});
})();
