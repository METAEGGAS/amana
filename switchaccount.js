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
      '#swAccRoot{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:400;background:#F3F4FB;display:flex;flex-direction:column;direction:rtl;font-family:"Noto Sans Arabic",-apple-system,"Segoe UI",Tahoma,Arial,sans-serif;opacity:0;transition:opacity .3s ease}',
      '#swAccRoot.open{opacity:1}',
      '#swAccRoot .sw-h{height:55px;background:linear-gradient(135deg,#7C83F6 0%,#6E72EB 100%);display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}',
      '#swAccRoot .sw-ttl{color:#fff;font-size:16px;font-weight:700}',
      '#swAccRoot .sw-back{position:absolute;left:16px;top:0;height:55px;display:flex;align-items:center;justify-content:center;cursor:pointer}',
      '#swAccRoot .sw-back svg{width:20px;height:20px;stroke:#fff;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round}',
      '#swAccRoot .sw-body{flex:1;overflow-y:auto;padding:18px 16px 30px;display:flex;flex-direction:column}',
      '#swAccRoot .sw-sel{display:flex;align-items:center;justify-content:space-between;padding:4px 2px;cursor:pointer;-webkit-user-select:none;user-select:none}',
      '#swAccRoot .sw-sel>span{font-size:14px;font-weight:800;color:#1A1A2E}',
      '#swAccRoot .sw-sel>svg{width:18px;height:18px;stroke:#7C83F6;stroke-width:2.4;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:transform .25s ease;flex-shrink:0}',
      '#swAccRoot .sw-sel.open>svg{transform:rotate(180deg)}',
      '#swAccRoot .sw-opts{display:none;background:#fff;border-radius:12px;margin-top:10px;box-shadow:0 2px 10px rgba(0,0,0,.06);overflow:hidden}',
      '#swAccRoot .sw-opts.open{display:block}',
      '#swAccRoot .sw-opt{padding:14px;font-size:13px;color:#1A1A1A;cursor:pointer;border-bottom:1px solid #F0F0F4}',
      '#swAccRoot .sw-opt:last-child{border-bottom:none}',
      '#swAccRoot .sw-opt:active{background:#F4F5FF}',
      '#swAccRoot .sw-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:95px}',
      '#swAccRoot .sw-face svg{width:96px;height:96px;display:block}',
      '#swAccRoot .sw-empty p{margin-top:14px;color:#9BA0AA;font-size:13px}'
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
      '<div class="sw-sel" id="swSel">'+
        '<span id="swSelTx">اختر نوع تغير الحساب</span>'+
        '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>'+
      '</div>'+
      '<div class="sw-opts" id="swOpts">'+
        '<div class="sw-opt" data-v="تغيير البريد الإلكتروني">تغيير البريد الإلكتروني</div>'+
        '<div class="sw-opt" data-v="تغيير كلمة المرور">تغيير كلمة المرور</div>'+
        '<div class="sw-opt" data-v="تغيير رقم الهاتف">تغيير رقم الهاتف</div>'+
        '<div class="sw-opt" data-v="تغيير كلمة مرور السحب">تغيير كلمة مرور السحب</div>'+
      '</div>'+
      '<div class="sw-empty" id="swEmpty">'+
        '<div class="sw-face">'+
          '<svg viewBox="0 0 120 120" fill="none">'+
            '<circle cx="60" cy="66" r="34" fill="#ECECF7"/>'+
            '<circle cx="50" cy="62" r="2.6" fill="#3D3D6B"/>'+
            '<circle cx="70" cy="62" r="2.6" fill="#3D3D6B"/>'+
            '<rect x="55" y="74" width="10" height="2.6" rx="1.3" fill="#3D3D6B"/>'+
            '<circle cx="28" cy="42" r="2.2" fill="#D8D9EC"/>'+
            '<circle cx="90" cy="34" r="1.8" fill="#2B2B4F"/>'+
            '<rect x="97" y="26" width="3" height="11" rx="1.5" fill="#2B2B4F" transform="rotate(12 97 26)"/>'+
            '<rect x="102" y="42" width="13" height="3" rx="1.5" fill="#2B2B4F"/>'+
          '</svg>'+
        '</div>'+
        '<p>لا يوجد محتوى</p>'+
      '</div>'+
    '</div>';
  document.body.appendChild(root);

  /* ---------- 3) إظهار الصفحة بأنيميشن ---------- */
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('open')})});

  /* ---------- 4) القائمة المنسدلة ---------- */
  var sel=document.getElementById('swSel'),
      opts=document.getElementById('swOpts'),
      selTx=document.getElementById('swSelTx');
  sel.addEventListener('click',function(){
    sel.classList.toggle('open');
    opts.classList.toggle('open');
  });
  opts.querySelectorAll('.sw-opt').forEach(function(o){
    o.addEventListener('click',function(){
      selTx.textContent=o.getAttribute('data-v');
      sel.classList.remove('open');
      opts.classList.remove('open');
      /* المحتوى يفضل "لا يوجد محتوى" زي الصورة بالظبط لحد ما تتربط بالباك إند */
    });
  });

  /* ---------- 5) زر الرجوع: يقفل الصفحة ويرجع للرئيسية ---------- */
  function closePage(){
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
      if(root.parentNode)root.parentNode.removeChild(root);
      var st=document.getElementById('__swacc_style');
      if(st&&st.parentNode)st.parentNode.removeChild(st);
    });
  }
})();
