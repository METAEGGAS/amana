(function(){
var CSS='#ctRoot,#ctRoot *{margin:0;padding:0;box-sizing:border-box;font-family:Tahoma,Arial,sans-serif;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}'
+'#ctRoot{position:fixed;inset:0;max-width:480px;margin:0 auto;background:#f2f3f7;z-index:9;overflow-y:auto;direction:ltr;touch-action:pan-x pan-y;padding-bottom:88px}'
+'#ctRoot .ct-card{margin:14px 14px 10px;border-radius:18px;padding:18px;color:#fff;background:url(\'https://gulfxdl.com/assets/homeBg-TGYXw5Rr.png\') center/cover;box-shadow:0 8px 20px rgba(80,60,220,.25)}'
+'#ctRoot .ct-card h2{font-size:14px;font-weight:400;opacity:.95;margin-bottom:14px}'
+'#ctRoot .ct-total{display:flex;align-items:center;gap:10px;margin-bottom:18px}'
+'#ctRoot .ct-total b{font-size:34px;font-weight:700}'
+'#ctRoot .ct-total b span{font-size:15px;font-weight:400}'
+'#ctRoot .ct-pill{background:rgba(255,255,255,.2);border-radius:20px;padding:5px 12px;font-size:12px}'
+'#ctRoot .ct-row{display:flex;justify-content:space-between;margin-bottom:14px}'
+'#ctRoot .ct-row div{font-size:12px;opacity:.9}'
+'#ctRoot .ct-row b{display:block;font-size:16px;margin-top:5px;font-weight:700}'
+'#ctRoot .ct-min{font-size:12px;opacity:.9;margin-bottom:16px}'
+'#ctRoot .ct-min b{font-size:15px;font-weight:700}'
+'#ctRoot .ct-btns{display:flex;gap:12px}'
+'#ctRoot .ct-btns button{flex:1;border:0;background:rgba(255,255,255,.22);color:#fff;font-size:14px;padding:12px 0;border-radius:12px;cursor:pointer}'
+'#ctRoot .ct-search{margin:6px 14px 14px;background:#fff;border-radius:30px;display:flex;align-items:center;padding:12px 16px;gap:8px;box-shadow:0 2px 8px rgba(0,0,0,.05)}'
+'#ctRoot .ct-search input{border:0;outline:0;flex:1;font-size:13px;color:#333;background:none;-webkit-user-select:text;user-select:text}'
+'#ctRoot .ct-search svg{flex-shrink:0}'
+'#ctRoot .ct-sec{background:#fff;margin:0 14px 20px;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.06)}'
+'#ctRoot .ct-sec .ct-head{background:#6a4df0;color:#fff;text-align:center;font-size:16px;font-weight:700;padding:13px;cursor:pointer}'
+'#ctRoot .ct-trader{padding:16px}'
+'#ctRoot .ct-ttop{display:flex;gap:12px;align-items:center}'
+'#ctRoot .ct-ttop img{width:52px;height:52px;border-radius:50%;object-fit:cover}'
+'#ctRoot .ct-tname{font-size:17px;font-weight:700}'
+'#ctRoot .ct-tjob{font-size:12px;color:#777;margin-top:3px}'
+'#ctRoot .ct-tdesc{font-size:12.5px;color:#888;line-height:1.9;margin-top:8px}'
+'#ctRoot .ct-more{color:#6a4df0;font-size:13px;margin-top:4px;cursor:pointer}'
+'#ctRoot .ct-stats{display:flex;margin-top:16px}'
+'#ctRoot .ct-stats>div{flex:1}'
+'#ctRoot .ct-pnl{font-size:19px;font-weight:800}'
+'#ctRoot .ct-lbl{font-size:12px;color:#999;margin-top:3px}'
+'#ctRoot .ct-rate{color:#12b981;font-size:17px;font-weight:800;margin-top:10px}'
+'#ctOvl{position:fixed;inset:0;background:rgba(0,0,0,.45);opacity:0;visibility:hidden;transition:.3s;z-index:9998}'
+'#ctSheet{position:fixed;left:0;right:0;bottom:0;max-width:480px;margin:auto;background:#fff;border-radius:20px 20px 0 0;padding:26px 20px 22px;z-index:9999;transform:translateY(100%);transition:transform .35s ease;box-shadow:0 -6px 24px rgba(0,0,0,.18)}'
+'#ctOvl.ct-on{opacity:1;visibility:visible}'
+'#ctSheet.ct-on{transform:translateY(0)}'
+'#ctSheet h3{text-align:center;font-size:16px;font-weight:700;margin-bottom:22px}'
+'#ctSheet .ct-lb{font-size:14px;font-weight:700;margin-bottom:10px}'
+'#ctSheet .ct-av{color:#6a4df0;font-size:22px;font-weight:800;margin-bottom:20px}'
+'#ctSheet .ct-av span{font-size:15px;font-weight:700}'
+'#ctSheet .ct-fld{background:#f2f3f7;border-radius:8px;display:flex;align-items:center;margin-bottom:22px}'
+'#ctSheet .ct-fld input{border:0;outline:0;background:none;flex:1;padding:15px 14px;font-size:13px;color:#333;-webkit-user-select:text;user-select:text}'
+'#ctSheet .ct-fld input::placeholder{color:#b5b5c3}'
+'#ctSheet .ct-mx{padding:0 18px;font-size:15px;font-weight:700;color:#1a1a1a;cursor:pointer}'
+'#ctRoot .ct-chips{display:flex;gap:8px;margin:-8px 0 22px}'
+'#ctRoot .ct-chips div{flex:1;background:#f2f3f7;border-radius:8px;text-align:center;padding:11px 0;font-size:14px;cursor:pointer;transition:.15s}'
+'#ctRoot .ct-chips div.ct-sel{background:#ece9fd;color:#6a4df0;font-weight:700}'
+'#ctRoot .ct-cpn{font-size:12.5px;color:#9c9c9c;margin-bottom:22px}'
+'#ctRoot .ct-agr{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#9c9c9c;margin-bottom:20px;cursor:pointer}'
+'#ctRoot .ct-agr .ct-cb{width:16px;height:16px;border-radius:4px;background:#6a4df0;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}'
+'#ctRoot .ct-agr.ct-off .ct-cb{background:#fff;border:2px solid #d5d5de;color:transparent}'
+'#ctRoot .ct-agr b{color:#6a4df0;font-weight:400}'
+'#ctRoot .ct-sbt{display:flex;gap:12px}'
+'#ctRoot .ct-sbt button{flex:1;border-radius:10px;padding:13px 0;font-size:14px;cursor:pointer}'
+'#ctCnl{background:#fff;border:1px solid #d8d8e0;color:#333}'
+'#ctOk{border:0;background:#6a4df0;color:#fff;font-weight:700}'
+'#ctRoot .ct-pg{position:fixed;inset:0;background:#f6f7fb;z-index:142;max-width:480px;margin:auto;transform:translateX(100%);transition:transform .35s ease;overflow-y:auto}'
+'#ctRoot .ct-pg.ct-on{transform:translateX(0)}'
+'#ctRoot .ct-pbar{height:56px;background:url(\'https://i.ibb.co/hRm446rn/IMG.png\') center/cover;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;position:relative}'
+'#ctRoot .ct-pbar .ct-bk{position:absolute;left:16px;top:50%;transform:translateY(-50%);cursor:pointer}'
+'#ctRoot .ct-tabs{display:flex;background:#fff}'
+'#ctRoot .ct-tabs div{flex:1;text-align:center;font-size:13px;color:#888;padding:15px 0 13px;position:relative;cursor:pointer;white-space:nowrap}'
+'#ctRoot .ct-tabs div.ct-on{font-weight:700;color:#1a1a1a}'
+'#ctRoot .ct-tabs div.ct-on:after{content:\'\';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:34px;height:3px;border-radius:2px;background:#6a4df0}'
+'#ctRoot .ct-empty{text-align:center;padding-top:26vh;display:none}'
+'#ctRoot .ct-empty img{width:130px}'
+'#ctRoot .ct-empty div{color:#9a9aa5;font-size:13px;margin-top:12px}'
+'#ctSpin{display:none;text-align:center;padding-top:28vh}'
+'#ctSpin img{width:64px}';
var st=document.createElement('style');
st.setAttribute('data-inj-root','copytrading');
st.textContent=CSS;
document.head.appendChild(st);
var root=document.createElement('div');
root.id='ctRoot';
root.setAttribute('data-inj-root','copytrading');
root.innerHTML=[
'<div class="ct-card">',
'<h2>إجمالي الربح والخسارة</h2>',
'<div class="ct-total"><b>0.00 <span>USD</span></b><span class="ct-pill">اليوم 0.00</span></div>',
'<div class="ct-row">',
'<div>حصة الشريك<b>+ 0.00 USD</b></div>',
'<div>الاحتفاظ بمركز أدنى<b>+ 0.00 USD</b></div>',
'</div>',
'<div class="ct-min">الحد الأدنى لرصيد المعاملة <b>0.00 USD</b></div>',
'<div class="ct-btns"><button id="ctCmy">انسخ صفقاتي</button><button id="ctPdet">تفاصيل الشريك</button></div>',
'</div>',
'<div class="ct-search">',
'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>',
'<input type="text" placeholder="أدخل اسم المحلل المالي للبحث">',
'</div>',
'<div class="ct-sec">',
'<div class="ct-head">نسخ التداول</div>',
'<div class="ct-trader">',
'<div class="ct-ttop">',
'<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Reno Austere">',
'<div><div class="ct-tname">Reno Austere</div><div class="ct-tjob">المهنة: مدير أبحاث أسهم محترف</div></div>',
'</div>',
'<div class="ct-tdesc">نبذة عن المحلل: يتمتع رينو أوستير بخبرة واسعة في وول ستريت ويركز على استراتيجيات الاستثمار...</div>',
'<div class="ct-more">عرض المزيد ▾</div>',
'<div class="ct-stats">',
'<div><div class="ct-pnl">+100,000 USD</div><div class="ct-lbl">الربح والخسارة خلال 7 أيام</div><div class="ct-rate">▲ 37%</div><div class="ct-lbl">معدل العائد خلال 7 أيام</div></div>',
'</div>',
'</div>',
'</div>',
'<div class="ct-sec">',
'<div class="ct-head">نسخ التداول</div>',
'<div class="ct-trader">',
'<div class="ct-ttop">',
'<img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Robert White">',
'<div><div class="ct-tname">Robert White</div><div class="ct-tjob">المهنة: محلل أبحاث أول</div></div>',
'</div>',
'<div class="ct-tdesc">نبذة عن المحلل: روبرت وايت محلل متمرس، معروف ببصيرته في الجمع بين التقنيات في الأسواق المالية...</div>',
'<div class="ct-more">عرض المزيد ▾</div>',
'<div class="ct-stats">',
'<div><div class="ct-pnl">+0 USD</div><div class="ct-lbl">الربح والخسارة خلال 7 أيام</div><div class="ct-rate">▲ 26%</div><div class="ct-lbl">معدل العائد خلال 7 أيام</div></div>',
'<div><div class="ct-pnl">+0 USD</div><div class="ct-lbl">الربح والخسارة ليوم واحد</div><div class="ct-rate">▲ 3.4%</div><div class="ct-lbl">معدل العائد ليوم واحد</div></div>',
'</div>',
'</div>',
'</div>',
'<div class="ct-sec">',
'<div class="ct-head">نسخ التداول</div>',
'<div class="ct-trader">',
'<div class="ct-ttop">',
'<img src="https://randomuser.me/api/portraits/men/41.jpg" alt="William Walker">',
'<div><div class="ct-tname">William Walker</div><div class="ct-tjob">المهنة: كبير استراتيجيي الاستثمار</div></div>',
'</div>',
'<div class="ct-tdesc">نبذة عن المحلل: ويليام ووكر مستشار مالي متمرس متخصص في إدارة الثروات واستراتيجيات الاستثمار...</div>',
'<div class="ct-more">عرض المزيد ▾</div>',
'<div class="ct-stats">',
'<div><div class="ct-pnl">+0 USD</div><div class="ct-lbl">الربح والخسارة خلال 7 أيام</div><div class="ct-rate">▲ 24%</div><div class="ct-lbl">معدل العائد خلال 7 أيام</div></div>',
'<div><div class="ct-pnl">+0 USD</div><div class="ct-lbl">الربح والخسارة ليوم واحد</div><div class="ct-rate">▲ 3.2%</div><div class="ct-lbl">معدل العائد ليوم واحد</div></div>',
'</div>',
'</div>',
'</div>',
'<div id="ctOvl"></div>',
'<div id="ctSheet">',
'<h3>متابعة الإشارة</h3>',
'<div class="ct-lb">المتاح</div>',
'<div class="ct-av" id="ctAvail">0 <span>USD</span></div>',
'<div class="ct-lb">رمز الإشارة</div>',
'<div class="ct-fld"><input id="ctSig" type="text" placeholder="الرجاء إدخال رمز الإشارة"></div>',
'<div class="ct-lb">مبلغ النسخ</div>',
'<div class="ct-fld"><input id="ctAmt" type="number" placeholder="الرجاء إدخال مبلغ النسخ"><span class="ct-mx" id="ctMx">الأقصى</span></div>',
'<div class="ct-chips"><div data-v="1000">1000</div><div data-v="3000">3000</div><div data-v="5000">5000</div><div data-v="10000">10000</div></div>',
'<div class="ct-lb">اختر القسيمة</div>',
'<div class="ct-cpn">لا يوجد</div>',
'<div class="ct-agr" id="ctAgr"><span class="ct-cb">✓</span>لقد قرأت وأوافق على <b>اتفاقية تتبع النسخ</b></div>',
'<div class="ct-sbt"><button id="ctCnl">إلغاء</button><button id="ctOk">إرسال طلب نسخ التداول</button></div>',
'</div>',
'<div class="ct-pg" id="ctPage">',
'<div class="ct-pbar"><svg class="ct-bk" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span>سجلات النسخ</span></div>',
'<div class="ct-tabs"><div data-i="0">قيد المراجعة</div><div data-i="1">جارٍ النسخ</div><div class="ct-on" data-i="2">مكتمل</div><div data-i="3">مرفوض</div></div>',
'<div id="ctSpin"><img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif" alt=""></div>',
'<div class="ct-empty" id="ctEmp"><img src="https://gulfxdl.com/assets/empty-light-B1A8k_0V.png" alt=""><div>لا يوجد محتوى</div></div>',
'</div>',
'<div class="ct-pg" id="ctPage2">',
'<div class="ct-pbar"><svg class="ct-bk" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg><span>متابعو التداول اليوم</span></div>',
'<div class="ct-empty" style="display:block"><img src="https://gulfxdl.com/assets/empty-light-B1A8k_0V.png" alt=""><div>لا يوجد محتوى</div></div>',
'</div>'
].join('');
document.body.appendChild(root);
/* ================= Firebase (Auth: email/password only + Realtime Database) ================= */
var FB={ready:false,user:null,db:null,auth:null,ref:null,get:null,set:null,update:null,balance:0};
var FIREBASE_CONFIG={
apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
authDomain:"hhhxh-5ebe4.firebaseapp.com",
databaseURL:"https://hhhxh-5ebe4-default-rtdb.firebaseio.com",
projectId:"hhhxh-5ebe4",
storageBucket:"hhhxh-5ebe4.firebasestorage.app",
messagingSenderId:"79243000696",
appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",
measurementId:"G-08BR6LN6PT"
};
var CT_RATE=0.016667;/* نسبة ثابتة 1.6667% من الرصيد */
var CT_DAILY_LIMIT=3;/* 3 رموز إشارة كل 24 ساعة */
var CT_DAY_MS=24*60*60*1000;
var CT_DEFAULT_CODES={ALPHA100:true,GOLD200:true,PROFIT300:true,SIGNAL400:true,TRADE500:true,WIN600:true};
function ctBlocked(){return !FB.ready||!FB.user}
function ctFmt(n){return (+n).toFixed(2)}
function ctShowBalance(){document.getElementById('ctAvail').innerHTML=ctFmt(FB.balance)+' <span>USD</span>'}
function ctLoadBalance(){
if(!FB.user)return;
FB.get(FB.ref(FB.db,'users/'+FB.user.uid+'/balance')).then(function(s){
FB.balance=parseFloat(s.val())||0;
ctShowBalance();
}).catch(function(){});
}
Promise.all([
import('https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js'),
import('https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js'),
import('https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js')
]).then(function(mods){
var appMod=mods[0],authMod=mods[1],dbMod=mods[2];
var app=appMod.initializeApp(FIREBASE_CONFIG);
try{import('https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js').then(function(an){try{an.getAnalytics(app)}catch(e){}})}catch(e){}
FB.auth=authMod.getAuth(app);
FB.db=dbMod.getDatabase(app);
FB.ref=dbMod.ref;FB.get=dbMod.get;FB.set=dbMod.set;FB.update=dbMod.update;
authMod.onAuthStateChanged(FB.auth,function(u){
var ok=!!u && !u.isAnonymous && u.providerData && u.providerData.some(function(p){return p.providerId==='password'});
if(ok){
FB.user=u;FB.ready=true;ctLoadBalance();
}else{
FB.user=null;FB.ready=false;
if(u){try{authMod.signOut(FB.auth)}catch(e){}}
alert('هذه الصفحة تتطلب تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور فقط (بدون دخول مجهول)');
if(root&&root.parentNode)root.parentNode.removeChild(root);
}
});
}).catch(function(e){console.error('Firebase init error',e)});
/* ================= /Firebase ================= */
var ovl=document.getElementById('ctOvl'),sh=document.getElementById('ctSheet'),amt=document.getElementById('ctAmt'),pg=document.getElementById('ctPage'),pg2=document.getElementById('ctPage2'),spin=document.getElementById('ctSpin'),emp=document.getElementById('ctEmp');
function openS(){if(ctBlocked()){alert('يجب تسجيل الدخول بالبريد الإلكتروني وكلمة المرور أولاً');return}ovl.classList.add('ct-on');sh.classList.add('ct-on');root.style.overflow='hidden'}
function closeS(){ovl.classList.remove('ct-on');sh.classList.remove('ct-on');root.style.overflow=''}
root.querySelectorAll('.ct-sec .ct-head').forEach(function(h){h.onclick=openS});
ovl.onclick=closeS;
document.getElementById('ctCnl').onclick=closeS;
document.getElementById('ctMx').onclick=function(){amt.value=document.getElementById('ctAvail').textContent.trim().split(' ')[0];markChip()};
root.querySelectorAll('.ct-chips div').forEach(function(c){c.onclick=function(){amt.value=c.dataset.v;markChip()}});
function markChip(){root.querySelectorAll('.ct-chips div').forEach(function(c){c.classList.toggle('ct-sel',c.dataset.v===amt.value)})}
amt.oninput=markChip;
document.getElementById('ctAgr').onclick=function(){this.classList.toggle('ct-off')};
document.getElementById('ctOk').onclick=function(){
if(ctBlocked())return alert('يجب تسجيل الدخول بالبريد الإلكتروني وكلمة المرور أولاً');
var code=document.getElementById('ctSig').value.trim();
if(!code)return alert('الرجاء إدخال رمز الإشارة');
if(!amt.value||+amt.value<=0)return alert('الرجاء إدخال مبلغ النسخ');
if(document.getElementById('ctAgr').classList.contains('ct-off'))return alert('يجب الموافقة على اتفاقية تتبع النسخ');
var okBtn=document.getElementById('ctOk');
okBtn.disabled=true;
var uid=FB.user.uid,now=Date.now();
/* 1) التحقق من وجود قاعدة codess، وإنشاؤها تلقائياً مع أكواد افتراضية إذا لم تكن موجودة */
FB.get(FB.ref(FB.db,'codess')).then(function(snap){
if(!snap.exists()){return FB.set(FB.ref(FB.db,'codess'),CT_DEFAULT_CODES)}
}).then(function(){
/* 2) التحقق من رمز الإشارة داخل codess */
return FB.get(FB.ref(FB.db,'codess/'+code));
}).then(function(cs){
if(!cs.exists()){okBtn.disabled=false;return alert('رمز الإشارة غير صحيح أو غير موجود')}
/* 3) سجل استخدام الرموز لهذا المستخدم */
return FB.get(FB.ref(FB.db,'users/'+uid+'/sigLog'));
}).then(function(logSnap){
if(!logSnap)return;
var log=logSnap.val()||{};
var keys=Object.keys(log),cnt=0,i;
for(i=0;i<keys.length;i++){if(now-(+log[keys[i]]||0)<CT_DAY_MS)cnt++}
if(log[code]){okBtn.disabled=false;return alert('لا يمكن استخدام نفس الرمز مرتين')}
if(cnt>=CT_DAILY_LIMIT){okBtn.disabled=false;return alert('لقد استخدمت الحد الأقصى: 3 رموز إشارة خلال 24 ساعة، حاول لاحقاً')}
/* 4) احتساب الربح 1.6667% من الرصيد وإضافته إلى حقل balance */
return FB.get(FB.ref(FB.db,'users/'+uid+'/balance')).then(function(bs){
var bal=parseFloat(bs.val())||0;
var profit=bal*CT_RATE;
var nb=+(bal+profit).toFixed(2);
var upd={};
upd['users/'+uid+'/balance']=nb;
upd['users/'+uid+'/sigLog/'+code]=now;
return FB.update(FB.ref(FB.db),upd).then(function(){
FB.balance=nb;ctShowBalance();
okBtn.disabled=false;
alert('تم إرسال طلب نسخ التداول بنجاح\nتمت إضافة ربح '+ctFmt(profit)+' USD (1.6667%) إلى رصيدك\nرصيدك الجديد: '+ctFmt(nb)+' USD');
closeS();
});
});
}).catch(function(e){okBtn.disabled=false;console.error(e);alert('حدث خطأ أثناء معالجة الطلب، حاول مرة أخرى')});
};
function loadC(){emp.style.display='none';spin.style.display='block';setTimeout(function(){spin.style.display='none';emp.style.display='block'},1200)}
document.getElementById('ctCmy').onclick=function(){pg.classList.add('ct-on');loadC()};
document.getElementById('ctPdet').onclick=function(){pg2.classList.add('ct-on')};
root.querySelectorAll('.ct-bk').forEach(function(b){b.onclick=function(){b.closest('.ct-pg').classList.remove('ct-on')}});
root.querySelectorAll('.ct-tabs div').forEach(function(t){t.onclick=function(){if(t.classList.contains('ct-on'))return;root.querySelectorAll('.ct-tabs div').forEach(function(x){x.classList.remove('ct-on')});t.classList.add('ct-on');loadC()}});
function pd(e){e.preventDefault()}
function kd(e){if((e.ctrlKey||e.metaKey)&&['c','x','u','s'].indexOf(e.key.toLowerCase())>-1)e.preventDefault();if((e.ctrlKey||e.metaKey)&&['+','-','=','0'].indexOf(e.key)>-1)e.preventDefault()}
function wh(e){if(e.ctrlKey)e.preventDefault()}
function tm(e){if(e.touches.length>1)e.preventDefault()}
var lt=0;function te(e){var n=Date.now();if(n-lt<300)e.preventDefault();lt=n}
document.addEventListener('contextmenu',pd);
document.addEventListener('copy',pd);
document.addEventListener('cut',pd);
document.addEventListener('keydown',kd);
document.addEventListener('wheel',wh,{passive:false});
document.addEventListener('touchmove',tm,{passive:false});
document.addEventListener('touchend',te,{passive:false});
document.addEventListener('gesturestart',pd);
if(window.__regCleanup)window.__regCleanup(function(){
document.removeEventListener('contextmenu',pd);
document.removeEventListener('copy',pd);
document.removeEventListener('cut',pd);
document.removeEventListener('keydown',kd);
document.removeEventListener('wheel',wh);
document.removeEventListener('touchmove',tm);
document.removeEventListener('touchend',te);
document.removeEventListener('gesturestart',pd);
});
})();
