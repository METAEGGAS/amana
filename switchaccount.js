/* ============================================================
   switchaccount.js  —  صفحة "سجل تغييرات الحساب"
   تُحقن عبر injectJS('switchaccount.js') من زر "تغير الحساب"
   تعرض طلبات الإيداع الخاصة بالمستخدم من Firebase
   (نفس إعدادات ونظام recharge.js)
   ============================================================ */
(function(){

  /* ---------- 0) إعدادات Firebase (نفس recharge.js حرفياً) ---------- */
  var FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};

  /* أيقونات العملات — نفس recharge.js حرفياً */
  var CUR_ICONS={
    USDT:'https://g01-img.s3.eu-west-3.amazonaws.com/stock/174468982517353645886180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png',
    USDC:'https://cdn-icons-png.flaticon.com/128/14446/14446284.png',
    BTC:'https://cdn-icons-png.flaticon.com/128/9729/9729388.png',
    ETH:'https://cdn-icons-png.flaticon.com/128/14446/14446160.png'
  };

  /* ---------- 1) حقن الستايل مرة واحدة ---------- */
  if(!document.getElementById('__swacc_style')){
    var st=document.createElement('style');
    st.id='__swacc_style';
    st.textContent=[
      '#swAccRoot{position:fixed;inset:0;width:100%;max-width:100%;margin:0;z-index:400;background:#F3F4FB;display:flex;flex-direction:column;direction:rtl;font-family:"Noto Sans Arabic",-apple-system,"Segoe UI",Tahoma,Arial,sans-serif;opacity:0;transition:opacity .3s ease}',
      '#swAccRoot.open{opacity:1}',
      '#swAccRoot .sw-h{height:50px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}',
      '#swAccRoot .sw-ttl{color:#fff;font-size:15px;font-weight:700}',
      '#swAccRoot .sw-back{position:absolute;left:14px;top:0;height:50px;display:flex;align-items:center;justify-content:center;cursor:pointer}',
      '#swAccRoot .sw-back svg{width:19px;height:19px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}',
      '#swAccRoot .sw-body{flex:1;overflow-y:auto;padding:14px 14px 24px;display:flex;flex-direction:column;position:relative}',
      /* مربع التحميل الأسود الشفاف في نص الصفحة */
      '#swAccRoot .sw-loading{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.55);border-radius:14px;padding:18px 26px;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:500;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}',
      '#swAccRoot .sw-loading img{width:56px;height:56px;display:block;object-fit:contain}',
      '#swAccRoot .sw-loading span{margin-top:10px;color:#fff;font-size:13px;font-weight:600}',
      /* حالة "لا يوجد محتوى" — مخفية لحد ما التحميل يخلص */
      '#swAccRoot .sw-empty{flex:1;display:none;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:90px}',
      '#swAccRoot .sw-empty.show{display:flex}',
      '#swAccRoot .sw-empty img{width:110px;height:110px;display:block;object-fit:contain}',
      '#swAccRoot .sw-empty p{margin-top:12px;color:#9BA0AA;font-size:13px}',
      /* قائمة طلبات الإيداع */
      '#swAccRoot .sw-list{display:none;flex-direction:column;gap:10px}',
      '#swAccRoot .sw-list.show{display:flex}',
      '#swAccRoot .sw-item{background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(30,30,60,.06);padding:13px 12px;display:flex;align-items:center;gap:10px}',
      '#swAccRoot .sw-item .sw-ic{width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0;background:#F4F4F8}',
      '#swAccRoot .sw-item .sw-mid{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}',
      '#swAccRoot .sw-item .sw-amt{font-size:14.5px;font-weight:800;color:#1A1A2E;direction:ltr;text-align:right}',
      '#swAccRoot .sw-item .sw-sub{font-size:11px;color:#9BA0AA;display:flex;align-items:center;gap:6px;flex-wrap:wrap}',
      '#swAccRoot .sw-item .sw-net{font-size:10px;font-weight:700;color:#7C83F6;background:#F0EFFE;padding:2px 7px;border-radius:6px;direction:ltr}',
      '#swAccRoot .sw-item .sw-date{font-size:11px;color:#9BA0AA;direction:ltr}',
      '#swAccRoot .sw-item .sw-addr{font-size:10px;color:#B9BBC4;font-family:monospace;direction:ltr;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px}',
      /* شارات الحالة */
      '#swAccRoot .sw-st{font-size:10.5px;font-weight:800;padding:5px 10px;border-radius:8px;flex-shrink:0;white-space:nowrap}',
      '#swAccRoot .sw-st.pending{color:#B8860B;background:#FFF4D6}',
      '#swAccRoot .sw-st.success{color:#1B9E57;background:#E2F7EB}',
      '#swAccRoot .sw-st.rejected{color:#D64545;background:#FDE8E8}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* ---------- 2) إزالة أي نسخة قديمة ثم بناء الصفحة ---------- */
  var old=document.getElementById('swAccRoot');
  if(old&&old.parentNode)old.parentNode.removeChild(old);

  var root=document.createElement('div');
  root.id='swAccRoot';
  root.setAttribute('data-inj-root','switchaccount');
  root.innerHTML=
    '<div class="sw-h">'+
      '<span class="sw-back" id="swBack"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></span>'+
      '<span class="sw-ttl">سجل تغييرات الحساب</span>'+
    '</div>'+
    '<div class="sw-body">'+
      '<div class="sw-loading" id="swLoading">'+
        '<img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif" alt="تحميل">'+
        '<span>جارٍ التحميل...</span>'+
      '</div>'+
      '<div class="sw-empty" id="swEmpty">'+
        '<img src="https://gulfxdl.com/assets/empty-light-B1A8k_0V.png" alt="لا يوجد محتوى">'+
        '<p>لا يوجد محتوى</p>'+
      '</div>'+
      '<div class="sw-list" id="swList"></div>'+
    '</div>';
  document.body.appendChild(root);

  /* ---------- 3) إظهار الصفحة بأنيميشن ---------- */
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('open')})});

  /* ---------- 4) تحميل Firebase (نفس نظام recharge.js) ---------- */
  window._swFB=window._swFB||{ready:false,db:null,user:null,fns:null,queue:[],loading:false};
  function loadFB(cb){
    if(window._swFB.ready){cb();return}
    window._swFB.queue.push(cb);
    if(window._swFB.loading)return;
    window._swFB.loading=true;
    var s=document.createElement('script');
    s.type='module';
    s.textContent='import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";'+
      'import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";'+
      'import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";'+
      'const cfg='+JSON.stringify(FB_CFG)+';'+
      'const app=getApps().length?getApp():initializeApp(cfg);'+
      'const db=getFirestore(app);const auth=getAuth(app);'+
      'window._swFB.db=db;'+
      'window._swFB.fns={collection:collection,query:query,where:where,getDocs:getDocs};'+
      'onAuthStateChanged(auth,function(u){'+
        'window._swFB.user=u;'+
        'window._swFB.ready=true;'+
        '(window._swFB.queue||[]).forEach(function(f){try{f()}catch(e){}});'+
        'window._swFB.queue=[];'+
      '});';
    document.head.appendChild(s);
  }

  /* ---------- 5) تنسيق التاريخ ---------- */
  function fmtDate(d){
    try{
      var dt;
      if(!d)return '';
      if(typeof d==='string'){dt=new Date(d)}
      else if(d&&d.seconds){dt=new Date(d.seconds*1000)}
      else if(d&&d.toDate){dt=d.toDate()}
      else{dt=new Date(d)}
      if(isNaN(dt.getTime()))return '';
      var p=function(n){return (n<10?'0':'')+n};
      return dt.getFullYear()+'-'+p(dt.getMonth()+1)+'-'+p(dt.getDate())+' '+p(dt.getHours())+':'+p(dt.getMinutes());
    }catch(e){return ''}
  }

  /* ---------- 6) نص وشكل الحالة ---------- */
  function statusInfo(s){
    var v=(s||'pending').toString().toLowerCase();
    if(v==='success'||v==='approved'||v==='completed'||v==='complete'||v==='done')return {cls:'success',tx:'مكتمل'};
    if(v==='rejected'||v==='failed'||v==='cancelled'||v==='canceled')return {cls:'rejected',tx:'مرفوض'};
    return {cls:'pending',tx:'قيد المراجعة'};
  }

  /* ---------- 7) عرض عنصر واحد ---------- */
  function renderItem(it){
    var cur=(it.currency||'USDT').toString().toUpperCase();
    var icon=CUR_ICONS[cur]||CUR_ICONS.USDT;
    var amt=(it.amount!==undefined&&it.amount!==null)?it.amount:(it.amountCoin!==undefined?it.amountCoin:it.amountUSD);
    var net=it.networkType||it.network||'';
    var dt=fmtDate(it.createdAt||it.date);
    var st=statusInfo(it.status);
    var addr=it.address||'';
    var el=document.createElement('div');
    el.className='sw-item';
    el.innerHTML=
      '<img class="sw-ic" src="'+icon+'" alt="">'+
      '<div class="sw-mid">'+
        '<div class="sw-amt">+'+amt+' '+cur+'</div>'+
        '<div class="sw-sub">'+
          (net?'<span class="sw-net">'+net+'</span>':'')+
          (dt?'<span class="sw-date">'+dt+'</span>':'')+
        '</div>'+
        (addr?'<div class="sw-addr">'+addr+'</div>':'')+
      '</div>'+
      '<span class="sw-st '+st.cls+'">'+st.tx+'</span>';
    return el;
  }

  /* ---------- 8) جلب طلبات الإيداع الخاصة بالمستخدم ---------- */
  var fetchDone=false,items=[],closed=false;

  function fetchRecharges(){
    loadFB(function(){
      try{
        var fb=window._swFB;
        var user=fb.user;
        if(!user||!user.uid){finishFetch([]);return}
        var uid=user.uid;
        var db=fb.db,f=fb.fns;
        var results=[],seen={};

        function pushDocs(snap){
          snap.forEach(function(dc){
            if(seen[dc.id])return;
            seen[dc.id]=true;
            var d=dc.data()||{};
            d.__id=dc.id;
            results.push(d);
          });
        }

        /* 1) المجموعة الفرعية users/{uid}/recharges */
        var p1=f.getDocs(f.collection(db,'users/'+uid+'/recharges')).then(function(s){pushDocs(s)}).catch(function(){});
        /* 2) المجموعة الرئيسية recharge_requests حيث uid = المستخدم */
        var p2=f.getDocs(f.query(f.collection(db,'recharge_requests'),f.where('uid','==',uid))).then(function(s){pushDocs(s)}).catch(function(){});

        Promise.all([p1,p2]).then(function(){
          /* ترتيب من الأحدث للأقدم */
          results.sort(function(a,b){
            var ta=(a.createdAt&&a.createdAt.seconds)?a.createdAt.seconds*1000:(a.date?new Date(a.date).getTime():0);
            var tb=(b.createdAt&&b.createdAt.seconds)?b.createdAt.seconds*1000:(b.date?new Date(b.date).getTime():0);
            return tb-ta;
          });
          finishFetch(results);
        }).catch(function(){finishFetch([])});
      }catch(e){finishFetch([])}
    });
  }

  function finishFetch(list){
    if(closed)return;
    fetchDone=true;
    items=list||[];
    tryShow();
  }

  /* ---------- 9) التحميل 4 ثواني + عرض النتيجة ---------- */
  var minTimePassed=false;
  var loadTimer=setTimeout(function(){
    minTimePassed=true;
    tryShow();
  },4000);

  var shown=false;
  function tryShow(){
    if(closed||shown)return;
    if(!minTimePassed||!fetchDone)return;
    shown=true;
    var ld=document.getElementById('swLoading');
    if(ld&&ld.parentNode)ld.parentNode.removeChild(ld);
    if(items.length){
      var lst=document.getElementById('swList');
      items.forEach(function(it){lst.appendChild(renderItem(it))});
      lst.classList.add('show');
    }else{
      var em=document.getElementById('swEmpty');
      if(em)em.classList.add('show');
    }
  }

  /* لو Firebase اتأخر أكتر من 12 ثانية نوقف التحميل ونعرض الفارغ */
  var guardTimer=setTimeout(function(){
    if(!fetchDone){finishFetch([])}
  },12000);

  fetchRecharges();

  /* ---------- 10) زر الرجوع: يقفل الصفحة ويرجع للرئيسية ---------- */
  function cleanup(){
    closed=true;
    if(loadTimer){clearTimeout(loadTimer);loadTimer=null}
    if(guardTimer){clearTimeout(guardTimer);guardTimer=null}
  }
  function closePage(){
    cleanup();
    root.classList.remove('open');
    setTimeout(function(){
      if(root.parentNode)root.parentNode.removeChild(root);
      var st=document.getElementById('__swacc_style');
      if(st&&st.parentNode)st.parentNode.removeChild(st);
      document.querySelectorAll('script[data-inj]').forEach(function(s){if(s.parentNode)s.parentNode.removeChild(s)});
      window.__pageCleanup=null;
    },280);
  }
  document.getElementById('swBack').addEventListener('click',closePage);

  /* ---------- 11) تسجيل التنظيف في نظام الحقن ---------- */
  if(window.__regCleanup){
    window.__regCleanup(function(){
      cleanup();
      if(root.parentNode)root.parentNode.removeChild(root);
      var st=document.getElementById('__swacc_style');
      if(st&&st.parentNode)st.parentNode.removeChild(st);
    });
  }
})();
