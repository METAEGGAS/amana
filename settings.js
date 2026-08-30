(function(){
/* ========== بوابة التحقق من الجلسة: بريد + كلمة سر فقط ========== */
/* لا Anonymous — لا Popup — أي مستخدم بدون جلسة بريد صالحة يُحوَّل إلى register.html */
var __REDIRECT_PAGE='register.html';
var __authGateStarted=false;

/* نفس إعدادات مشروع Firebase المستخدمة في الصفحة الرئيسية */
var firebaseConfig={
  apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
  authDomain:"hhhxh-5ebe4.firebaseapp.com",
  projectId:"hhhxh-5ebe4",
  storageBucket:"hhhxh-5ebe4.firebasestorage.app",
  messagingSenderId:"79243000696",
  appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",
  measurementId:"G-08BR6LN6PT"
};

var FB=null; /* سيحمل مراجع Modular SDK: auth + firestore */

/* تحميل نفس إصدار Modular SDK v12 المستخدم في الصفحة الرئيسية */
function initFirebase(){
  return Promise.all([
    import("https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js"),
    import("https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js")
  ]).then(function(m){
    var appMod=m[0], authMod=m[1], fsMod=m[2];
    var app;
    try{
      /* لو الصفحة الرئيسية مهيّأة بالفعل نستخدم نفس التطبيق، وإلا نهيئ واحداً */
      app=appMod.getApps().length?appMod.getApp():appMod.initializeApp(firebaseConfig);
    }catch(e){
      app=appMod.getApp();
    }
    FB={
      app:app,
      auth:authMod.getAuth(app),
      db:fsMod.getFirestore(app),
      onAuthStateChanged:authMod.onAuthStateChanged,
      signOut:authMod.signOut,
      EmailAuthProvider:authMod.EmailAuthProvider,
      reauthenticateWithCredential:authMod.reauthenticateWithCredential,
      updatePassword:authMod.updatePassword,
      doc:fsMod.doc,
      getDoc:fsMod.getDoc,
      setDoc:fsMod.setDoc,
      runTransaction:fsMod.runTransaction
    };
    return FB;
  });
}

function authGate(){
  if(__authGateStarted)return;
  __authGateStarted=true;
  try{
    FB.onAuthStateChanged(FB.auth,function(u){
      /* مرفوض تمامًا: لا مستخدم، أو مستخدم مجهول، أو مستخدم بدون بريد إلكتروني */
      if(!u||u.isAnonymous||!u.email){
        try{FB.signOut(FB.auth)}catch(e){}
        if(!/register\.html$/i.test(location.pathname)){
          window.location.replace(__REDIRECT_PAGE);
        }
        return;
      }
      /* جلسة بريد + كلمة سر صالحة: تحميل بيانات المستخدم في الخلفية */
      window.__userEmail=u.email||window.__userEmail||'';
      try{
        if(typeof loadAddr==='function')loadAddr();
      }catch(e){}
    });
  }catch(e){
    setTimeout(function(){window.location.replace(__REDIRECT_PAGE);},800);
  }
}

/* بدء التهيئة ثم تشغيل البوابة */
initFirebase().then(function(){
  authGate();
}).catch(function(){
  setTimeout(function(){window.location.replace(__REDIRECT_PAGE);},800);
});

/* ========== حماية: منع النسخ والتحديد والتكبير ========== */
var protCss="html,body{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important;touch-action:manipulation!important;overscroll-behavior:none!important}"+
"input,textarea{-webkit-user-select:text!important;user-select:text!important}"+
"*{-webkit-tap-highlight-color:transparent!important}";
var pst=document.createElement('style');pst.setAttribute('data-inj-prot','');pst.textContent=protCss;document.head.appendChild(pst);
var vp=document.querySelector('meta[name="viewport"]');
if(!vp){vp=document.createElement('meta');vp.name='viewport';document.head.appendChild(vp);}
vp.content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no';
['contextmenu','copy','cut','selectstart','dragstart'].forEach(function(ev){
  document.addEventListener(ev,function(e){
    if(e.target&&(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')){if(ev==='contextmenu')e.preventDefault();return;}
    e.preventDefault();e.stopPropagation();
  },true);
});
document.addEventListener('keydown',function(e){
  var k=(e.key||'').toLowerCase();
  if((e.ctrlKey||e.metaKey)&&['c','x','s','u','p','a'].indexOf(k)>-1){e.preventDefault();}
  if(e.key==='F12')e.preventDefault();
},true);
document.addEventListener('wheel',function(e){if(e.ctrlKey)e.preventDefault();},{passive:false});
document.addEventListener('gesturestart',function(e){e.preventDefault();});
document.addEventListener('touchmove',function(e){if(e.touches&&e.touches.length>1)e.preventDefault();},{passive:false});
var lastTap=0;
document.addEventListener('touchend',function(e){
  var now=Date.now();
  if(now-lastTap<300)e.preventDefault();
  lastTap=now;
},{passive:false});

/* ========== Firestore helpers ========== */
function fbUser(){try{return FB?FB.auth.currentUser:null}catch(e){return null}}
/* مستند المستخدم في Firestore: users/{uid} — نفس بنية الصفحة الرئيسية */
function userDocRef(uid){return FB.doc(FB.db,'users',uid)}

/* ========== CSS ========== */
var css="#setPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:110;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#EEF1F8;direction:ltr}"+
"#setPage.open{opacity:1;pointer-events:auto}"+
"#setPage .sph{height:54px;background:url('https://i.ibb.co/hRm446rn/IMG.png') center center/cover no-repeat;display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#setPage .sph .ttl{color:#fff;font-size:15px;font-weight:700}"+
"#setPage .spb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#setPage .spb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#setPage .spcard{margin:14px 18px 0;background:#fff;border-radius:12px;box-shadow:0 1px 6px rgba(0,0,0,.04);overflow:hidden}"+
"#setPage .srow{display:flex;align-items:center;justify-content:space-between;min-height:56px;padding:0 18px;cursor:pointer}"+
"#setPage .srow:not(:last-child){border-bottom:1px solid #F2F3F8}"+
"#setPage .slbl{font-size:14px;color:#1F1F1F;font-weight:600}"+
"#setPage .sr{display:flex;align-items:center;gap:10px;max-width:60%;overflow:hidden}"+
"#setPage .sval{direction:ltr;font-size:13px;color:#6B7280;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
"#setPage .srow svg{width:15px;height:15px;stroke:#9AA0AE;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:120;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#fff;direction:ltr}"+
"#tpPage.open{opacity:1;pointer-events:auto}"+
"#tpPage .tph{height:54px;background:url('https://i.ibb.co/hRm446rn/IMG.png') center center/cover no-repeat;display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#tpPage .tph .ttl{color:#fff;font-size:15px;font-weight:700}"+
"#tpPage .tpb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#tpPage .tpb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage .tpf{padding:26px 22px 0}"+
"#tpPage .trow{display:flex;align-items:center;gap:12px;height:56px;border-bottom:1px solid #ECEDF2}"+
"#tpPage .trow .lk{width:18px;height:18px;stroke:#8A90A0;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}"+
"#tpPage .trow input{flex:1;border:none;outline:none;background:transparent;font-size:14px;font-weight:500;color:#1F1F1F;text-align:right;font-family:inherit}"+
"#tpPage .trow input::placeholder{color:#9AA0AE}"+
"#tpPage .trow .eye{width:19px;height:19px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}"+
"#tpPage .trow .eye svg{width:19px;height:19px;stroke:#8A90A0;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#tpPage .tpbtn{margin:36px 22px 0;height:52px;border-radius:8px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:700;cursor:pointer}"+
"#tpPage .tpbtn.busy{opacity:.6;pointer-events:none}"+
"#wdPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:120;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;background:#fff;direction:ltr}"+
"#wdPage.open{opacity:1;pointer-events:auto}"+
"#wdPage .wdh{height:54px;background:url('https://i.ibb.co/hRm446rn/IMG.png') center center/cover no-repeat;display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}"+
"#wdPage .wdh .ttl{color:#fff;font-size:15px;font-weight:700}"+
"#wdPage .wdb{position:absolute;left:14px;top:0;height:54px;display:flex;align-items:center;justify-content:center;cursor:pointer}"+
"#wdPage .wdb svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#wdPage .wdlogo{width:76px;height:76px;border-radius:50%;background:#000;display:flex;align-items:center;justify-content:center;margin:26px auto 0;overflow:hidden}"+
"#wdPage .wdlogo img{width:44px;height:44px;object-fit:contain}"+
"#wdPage .wdcard{margin:22px 14px 0;background:#F6F4FC;border-radius:14px;padding:20px 16px 26px}"+
"#wdPage .wdlbl{font-size:14px;color:#2A2A2A;font-weight:600;margin-bottom:10px}"+
"#wdPage .wdrate{font-size:13.5px;color:#7C83F6;font-weight:700;margin:-2px 0 12px;direction:rtl}"+
"#wdPage .wdbox{background:#fff;border-radius:10px;height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;margin-bottom:18px;cursor:pointer}"+
"#wdPage .wdbox .wl{display:flex;align-items:center;gap:10px}"+
"#wdPage .wdbox .wl img{width:24px;height:24px;object-fit:contain}"+
"#wdPage .wdbox .wl span{font-size:14.5px;font-weight:700;color:#1F1F1F}"+
"#wdPage .wdbox svg{width:16px;height:16px;stroke:#6B7280;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}"+
"#wdPage .wdin{background:#fff;border-radius:10px;height:52px;display:flex;align-items:center;padding:0 16px;margin-bottom:18px}"+
"#wdPage .wdin input{flex:1;border:none;outline:none;background:transparent;font-size:14px;font-weight:500;color:#1F1F1F;text-align:left;direction:ltr;font-family:inherit}"+
"#wdPage .wdin input::placeholder{color:#9AA0AE;text-align:right;direction:rtl}"+
"#wdPage .wdin.err{box-shadow:0 0 0 1.5px #F43F5E inset}"+
"#wdPage .wdshow{background:#fff;border-radius:10px;min-height:52px;display:none;align-items:center;padding:12px 16px;margin-bottom:18px;font-size:13.5px;font-weight:600;color:#1F1F1F;direction:ltr;text-align:left;word-break:break-all;line-height:1.5}"+
"#wdPage .wdmsg{font-size:12px;color:#F43F5E;font-weight:600;direction:rtl;margin:-10px 0 12px;display:none}"+
"#wdPage .wdsend{margin:26px 14px 0;height:54px;border-radius:10px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;cursor:pointer}"+
"#wdPage .wdsend.busy{opacity:.6;pointer-events:none}"+
"#wdPage .wdsend.hide{display:none!important}";
var st=document.createElement('style');st.setAttribute('data-inj-root','');st.textContent=css;document.head.appendChild(st);

var ch='<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';
var back='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
var dn='<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
var lock='<svg class="lk" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';
var eyeOff='<svg viewBox="0 0 24 24"><path d="M3 3l18 18"/><path d="M10.6 5.2A9.9 9.9 0 0 1 12 5c7 0 10 7 10 7a17.3 17.3 0 0 1-2.9 3.9M6.6 6.6A16.9 16.9 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
var eyeOn='<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>';

/* ========== Settings Page ========== */
var pg=document.createElement('div');pg.id='setPage';pg.setAttribute('data-inj-root','');
pg.innerHTML='<div class="sph"><span class="spb" id="setBack">'+back+'</span><span class="ttl">الإعدادات</span></div>'+
'<div class="spcard">'+
'<div class="srow" id="rowLoginPwd"><span class="slbl">تعديل كلمة مرور الدخول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow" id="rowTradePwd"><span class="slbl">تعديل كلمة مرور التداول</span><span class="sr">'+ch+'</span></div>'+
'<div class="srow"><span class="slbl">تم ربط البريد الإلكتروني</span><span class="sr"><span class="sval">'+(window.__userEmail||'')+'</span></span></div>'+
'<div class="srow" id="rowWdAddr"><span class="slbl">ربط عنوان السحب</span><span class="sr"><span class="sval" id="setAddrVal"></span>'+ch+'</span></div>'+
'</div>';
document.body.appendChild(pg);

/* ========== Password Page ========== */
var tp=document.createElement('div');tp.id='tpPage';tp.setAttribute('data-inj-root','');
tp.innerHTML='<div class="tph"><span class="tpb" id="tpBack">'+back+'</span><span class="ttl" id="tpTitle">تعديل كلمة مرور التداول</span></div>'+
'<div class="tpf">'+
'<div class="trow">'+lock+'<input type="password" id="tpOld" placeholder="يرجى إدخال كلمة المرور القديمة" autocomplete="off"><span class="eye">'+eyeOff+'</span></div>'+
'<div class="trow">'+lock+'<input type="password" id="tpNew" placeholder="يرجى إدخال كلمة المرور الجديدة" autocomplete="off"><span class="eye">'+eyeOff+'</span></div>'+
'<div class="trow">'+lock+'<input type="password" id="tpNew2" placeholder="أعد إدخال كلمة المرور الجديدة" autocomplete="off"><span class="eye">'+eyeOff+'</span></div>'+
'</div>'+
'<div class="tpbtn" id="tpConfirm">تأكيد التعديل</div>';
document.body.appendChild(tp);

/* ========== Withdraw Address Page ========== */
var wd=document.createElement('div');wd.id='wdPage';wd.setAttribute('data-inj-root','');
wd.innerHTML='<div class="wdh"><span class="wdb" id="wdBack">'+back+'</span><span class="ttl">ربط عنوان السحب</span></div>'+
'<div class="wdlogo"><img src="https://gulfxdl.com/assets/withdraw-C-eESeSL.png" alt=""></div>'+
'<div class="wdcard">'+
'<div class="wdlbl">اختر نوع العملة للسحب</div>'+
'<div class="wdrate">سعر الصرف الحالي: 1 USDT = 1 USD</div>'+
'<div class="wdbox" id="wdCoin"><span class="wl"><img src="https://g01-img.s3.eu-west-3.amazonaws.com/stock/174468982517353645886180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png" alt=""><span>USDT</span></span>'+dn+'</div>'+
'<div class="wdlbl">طريقة السحب</div>'+
'<div class="wdbox" id="wdNet"><span class="wl"><span>TRC20</span></span></div>'+
'<div class="wdlbl">تعبئة العنوان</div>'+
'<div class="wdin" id="wdInWrap"><input type="text" id="wdAddr" placeholder="يرجى إدخال عنوان السحب" autocomplete="off" spellcheck="false" maxlength="34"></div>'+
'<div class="wdshow" id="wdShow"></div>'+
'<div class="wdmsg" id="wdMsg"></div>'+
'</div>'+
'<div class="wdsend" id="wdSend">إرسال</div>';
document.body.appendChild(wd);

requestAnimationFrame(function(){requestAnimationFrame(function(){pg.classList.add('open')})});
document.getElementById('setBack').addEventListener('click',function(){pg.classList.remove('open')});

/* ========== TRC20 Strict Validator ========== */
function isTRC20(a){
  if(typeof a!=='string')return false;
  a=a.trim();
  if(a.length!==34)return false;               /* الطول 34 حرف بالظبط */
  if(a.charAt(0)!=='T')return false;            /* يبدأ بـ T كبيرة */
  return /^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(a); /* Base58 بدون 0,O,I,l */
}

/* ========== حالة العنوان المحفوظ ========== */
var savedAddr=null;
function renderAddrState(){
  var inW=document.getElementById('wdInWrap'),
      show=document.getElementById('wdShow'),
      btn=document.getElementById('wdSend'),
      msg=document.getElementById('wdMsg'),
      setVal=document.getElementById('setAddrVal');
  if(savedAddr){
    inW.style.display='none';
    show.style.display='flex';
    show.textContent=savedAddr;
    btn.classList.add('hide');            /* اختفاء زر إرسال نهائيًا */
    msg.style.display='none';
    setVal.textContent=savedAddr.slice(0,8)+'...'+savedAddr.slice(-6);
  }else{
    inW.style.display='flex';
    show.style.display='none';
    btn.classList.remove('hide');
    setVal.textContent='';
  }
}

/* قراءة العنوان من Firestore: users/{uid}.addres */
function loadAddr(){
  var u=fbUser();if(!u)return;
  FB.getDoc(userDocRef(u.uid)).then(function(s){
    var d=s.exists()?s.data():{};
    var v=d.addres;
    if(v&&isTRC20(v)){savedAddr=v;}
    renderAddrState();
  }).catch(function(){});
}
loadAddr();

/* ========== تغيير كلمة المرور (فعّالة) ========== */
var pwdType='trade';
function openPwd(type){
  pwdType=type;
  document.getElementById('tpTitle').textContent=type==='login'?'تعديل كلمة مرور الدخول':'تعديل كلمة مرور التداول';
  ['tpOld','tpNew','tpNew2'].forEach(function(id){document.getElementById(id).value=''});
  tp.classList.add('open');
}
document.getElementById('rowLoginPwd').addEventListener('click',function(){openPwd('login')});
document.getElementById('rowTradePwd').addEventListener('click',function(){openPwd('trade')});
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
  if(!n.value||n.value.length<6){alert('كلمة المرور الجديدة يجب ألا تقل عن 6 أحرف');return}
  if(n.value!==n2.value){alert('كلمتا المرور الجديدتان غير متطابقتين');return}
  if(o.value===n.value){alert('كلمة المرور الجديدة مطابقة للقديمة');return}
  var u=fbUser();
  if(!u){alert('يرجى تسجيل الدخول أولاً');return}
  var btn=document.getElementById('tpConfirm');
  btn.classList.add('busy');
  if(pwdType==='login'){
    /* كلمة مرور الدخول: إعادة توثيق ثم تحديث عبر Firebase Auth (Modular) */
    var email=u.email||window.__userEmail;
    if(!email){btn.classList.remove('busy');alert('تعذر تحديد البريد الإلكتروني');return}
    var cred=FB.EmailAuthProvider.credential(email,o.value);
    FB.reauthenticateWithCredential(u,cred).then(function(){
      return FB.updatePassword(u,n.value);
    }).then(function(){
      btn.classList.remove('busy');
      tp.classList.remove('open');
      alert('تم تغيير كلمة مرور الدخول بنجاح');
    }).catch(function(err){
      btn.classList.remove('busy');
      if(err&&(err.code==='auth/wrong-password'||err.code==='auth/invalid-credential'))alert('كلمة المرور القديمة غير صحيحة');
      else if(err&&err.code==='auth/too-many-requests')alert('محاولات كثيرة، حاول لاحقًا');
      else alert('فشل تغيير كلمة المرور، حاول مرة أخرى');
    });
  }else{
    /* كلمة مرور التداول: تحقق من القديمة في Firestore ثم حفظ الجديدة */
    var ref=userDocRef(u.uid);
    FB.getDoc(ref).then(function(s){
      var d=s.exists()?s.data():{};
      var cur=d.tradePwd;
      if(cur&&cur!==o.value)throw{code:'wrong'};
      return FB.setDoc(ref,{tradePwd:n.value},{merge:true});
    }).then(function(){
      btn.classList.remove('busy');
      tp.classList.remove('open');
      alert('تم تغيير كلمة مرور التداول بنجاح');
    }).catch(function(err){
      btn.classList.remove('busy');
      if(err&&err.code==='wrong')alert('كلمة مرور التداول القديمة غير صحيحة');
      else alert('فشل تغيير كلمة المرور، حاول مرة أخرى');
    });
  }
});

/* ========== صفحة عنوان السحب ========== */
document.getElementById('rowWdAddr').addEventListener('click',function(){renderAddrState();wd.classList.add('open')});
document.getElementById('wdBack').addEventListener('click',function(){wd.classList.remove('open')});
var addrInput=document.getElementById('wdAddr');
addrInput.addEventListener('input',function(){
  document.getElementById('wdInWrap').classList.remove('err');
  document.getElementById('wdMsg').style.display='none';
});
function showAddrErr(t){
  document.getElementById('wdInWrap').classList.add('err');
  var m=document.getElementById('wdMsg');
  m.textContent=t;m.style.display='block';
}

document.getElementById('wdSend').addEventListener('click',function(){
  if(savedAddr){renderAddrState();return}          /* محفوظ مسبقًا = لا شيء */
  var a=addrInput.value.trim();
  if(!a){showAddrErr('يرجى إدخال عنوان السحب');return}
  if(a.charAt(0)!=='T'){showAddrErr('العنوان غير صالح: عنوان TRC20 يجب أن يبدأ بالحرف T');return}
  if(a.length!==34){showAddrErr('العنوان غير صالح: يجب أن يتكون من 34 حرفًا بالضبط (الحالي: '+a.length+')');return}
  if(!isTRC20(a)){showAddrErr('العنوان غير صالح: يحتوي على أحرف غير مسموحة في شبكة TRC20');return}
  var u=fbUser();
  if(!u){alert('يرجى تسجيل الدخول أولاً');return}
  var btn=document.getElementById('wdSend');
  btn.classList.add('busy');
  var ref=userDocRef(u.uid);                       /* ← مستند Firestore: users/{uid} — حقل addres */
  FB.runTransaction(FB.db,function(t){
    return t.get(ref).then(function(s){
      var d=s.exists()?s.data():{};
      if(d.addres==null){
        t.set(ref,{addres:a},{merge:true});        /* يحفظ فقط لو مفيش عنوان قبل كده */
        return null;
      }
      throw{code:'exists',value:d.addres};         /* abort: موجود بالفعل */
    });
  }).then(function(){
    btn.classList.remove('busy');
    savedAddr=a;
    renderAddrState();
    alert('تم ربط عنوان السحب بنجاح');
  }).catch(function(err){
    btn.classList.remove('busy');
    if(err&&err.code==='exists'){
      var v=err.value;
      if(v&&isTRC20(v))savedAddr=v;
      renderAddrState();
      alert('تم ربط عنوان سحب مسبقًا ولا يمكن تغييره');
      return;
    }
    alert('فشل حفظ العنوان، تحقق من الاتصال وحاول مجددًا');
  });
});

if(window.__regCleanup)window.__regCleanup(function(){});
})();
