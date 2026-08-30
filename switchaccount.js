/* ============================================================
   switchaccount.js  —  صفحة "سجل تغييرات الحساب"
   تُحقن عبر injectJS('switchaccount.js') من زر "تغير الحساب"
   نفس نظام الحقن المستخدم في support.js / account.js / recharge.js / withdraw.js
   ============================================================ */
(function(){
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
      '#swAccRoot .sw-loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.55);border-radius:14px;padding:18px 26px;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}',
      '#swAccRoot .sw-loading img{width:56px;height:56px;display:block;object-fit:contain}',
      '#swAccRoot .sw-loading span{margin-top:10px;color:#fff;font-size:13px;font-weight:600}',
      /* حالة "لا يوجد محتوى" — مخفية لحد ما التحميل يخلص */
      '#swAccRoot .sw-empty{flex:1;display:none;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:90px}',
      '#swAccRoot .sw-empty.show{display:flex}',
      '#swAccRoot .sw-empty img{width:110px;height:110px;display:block;object-fit:contain}',
      '#swAccRoot .sw-empty p{margin-top:12px;color:#9BA0AA;font-size:13px}'
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
      /* مربع التحميل: يظهر أول ما الصفحة تفتح */
      '<div class="sw-loading" id="swLoading">'+
        '<img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif" alt="تحميل">'+
        '<span>جارٍ التحميل...</span>'+
      '</div>'+
      /* أيقونة "لا يوجد محتوى": تظهر بعد اختفاء التحميل */
      '<div class="sw-empty" id="swEmpty">'+
        '<img src="https://gulfxdl.com/assets/empty-light-B1A8k_0V.png" alt="لا يوجد محتوى">'+
        '<p>لا يوجد محتوى</p>'+
      '</div>'+
    '</div>';
  document.body.appendChild(root);

  /* ---------- 3) إظهار الصفحة بأنيميشن ---------- */
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('open')})});

  /* ---------- 4) التحميل 4 ثواني ثم إظهار "لا يوجد محتوى" ---------- */
  var loadTimer=setTimeout(function(){
    var ld=document.getElementById('swLoading');
    if(ld&&ld.parentNode)ld.parentNode.removeChild(ld);
    var em=document.getElementById('swEmpty');
    if(em)em.classList.add('show');
  },4000);

  /* ---------- 5) زر الرجوع: يقفل الصفحة ويرجع للرئيسية ---------- */
  function closePage(){
    if(loadTimer){clearTimeout(loadTimer);loadTimer=null;}
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

  /* ---------- 6) تسجيل التنظيف في نظام الحقن ---------- */
  if(window.__regCleanup){
    window.__regCleanup(function(){
      if(loadTimer){clearTimeout(loadTimer);loadTimer=null;}
      if(root.parentNode)root.parentNode.removeChild(root);
      var st=document.getElementById('__swacc_style');
      if(st&&st.parentNode)st.parentNode.removeChild(st);
    });
  }
})();
