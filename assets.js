/* ============================================================
   assets.js — قسم الأصول المنفصل (حقن ديناميكي)
   يتحكم في: صفحة الأصول + صفحة الإيداع في العملة
   الاسم المعتمد: assets.js
   ============================================================ */
(function () {
  if (window.AST) return;

  /* ---------- CSS الخاص بقسم الأصول + صفحة الإيداع ---------- */
  var css = ''
    /* ===== صفحة الأصول ===== */
    + '.ast{display:none;position:fixed;inset:0;z-index:100;overflow-y:auto;background:#060d1c}'
    + '.astin{max-width:520px;margin:0 auto;min-height:100vh;position:relative;padding:26px 14px 140px}'
    + '.acard{background:linear-gradient(150deg,rgba(110,175,255,.5),rgba(45,100,200,.32) 45%,rgba(25,65,150,.42));border:1.5px solid rgba(175,220,255,.6);backdrop-filter:blur(14px) saturate(1.6);-webkit-backdrop-filter:blur(14px) saturate(1.6);box-shadow:0 8px 26px rgba(0,20,60,.5),inset 0 1px 2px rgba(225,242,255,.65),inset 0 -12px 20px rgba(70,140,240,.28),inset 5px 0 12px rgba(160,205,255,.14),inset -5px 0 12px rgba(160,205,255,.14);border-radius:20px;padding:22px 20px 78px;display:flex;justify-content:space-between;align-items:flex-start}'
    + '.acard .albl{font-size:14.5px;color:#e8eef8;display:flex;align-items:center;gap:8px;font-weight:600}'
    + '.acard .albl svg{width:19px;height:19px;stroke:#dfe9f7;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;cursor:pointer}'
    + '.acard .aval{font-size:25px;font-weight:800;letter-spacing:2.5px;margin-top:16px;color:#fff}'
    + '.aday{text-align:right}'
    + '.aday .albl2{font-size:14.5px;color:#e8eef8;font-weight:600}'
    + '.aday .aval2{font-size:25px;font-weight:800;margin-top:16px;color:#fff}'
    + '.abtns{display:flex;gap:12px;margin:-56px -5px 0;background:#2c3343;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:11px;box-shadow:0 12px 24px rgba(120,128,145,.35),0 4px 10px rgba(0,0,0,.4);position:relative;z-index:2}'
    + '.abtn{flex:1;display:flex;align-items:center;justify-content:center;gap:9px;border:none;border-radius:14px;padding:15px 0;font-size:16.5px;font-weight:700;color:#fff;cursor:pointer;font-family:inherit}'
    + '.abtn img{width:24px;height:24px;object-fit:contain}'
    + '.abtn.dep{background:rgba(70,95,140,.55);box-shadow:inset 0 1px 3px rgba(200,225,255,.25),0 3px 10px rgba(0,0,0,.35)}'
    + '.abtn.wd{background:linear-gradient(140deg,#8b4df0,#6c2fe0);box-shadow:0 4px 12px rgba(110,50,220,.45)}'
    + '.atabs{display:flex;align-items:center;gap:22px;margin:22px 4px 0;padding-bottom:0}'
    + '.atab{font-size:16.5px;color:#9fb3d1;font-weight:600;cursor:pointer;padding-bottom:8px;position:relative}'
    + '.atab.on{color:#3d86f6;font-weight:700}'
    + '.atab.on::after{content:"";position:absolute;bottom:0;right:0;left:0;height:3px;border-radius:3px;background:#3d86f6}'
    + '.arec{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:14.5px;color:#3d86f6;font-weight:600;cursor:pointer;padding-bottom:8px}'
    + '.arec svg{width:21px;height:21px;stroke:#3d86f6;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
    + '.arow{display:flex;align-items:center;justify-content:space-between;background:#0b1526;border-radius:13px;padding:20px 16px;margin-top:14px;box-shadow:0 2px 8px rgba(0,0,0,.3)}'
    + '.arow span{font-size:15.5px;color:#e8eef8;font-weight:600}'
    + '.arow b{font-size:15.5px;color:#fff;font-weight:700;letter-spacing:.3px}'
    /* ===== صفحة الإيداع في العملة (مطابقة للصورة) ===== */
    + '.dep{display:none;position:fixed;inset:0;z-index:130;overflow-y:auto;font-family:"Noto Sans Arabic","Segoe UI",Tahoma,Arial,sans-serif;background:linear-gradient(180deg,#3f8bff 0%,#2f7bf6 10%,#1b5bc4 24%,#0f3a8a 42%,#0a2354 60%,#060f26 82%,#040a18 100%)}'
    + '.depin{max-width:520px;margin:0 auto;min-height:100vh;position:relative;padding:18px 18px 60px;direction:rtl}'
    + '.dtop{display:flex;align-items:center;justify-content:space-between}'
    + '.dback{width:44px;height:44px;border-radius:13px;background:rgba(150,195,245,.18);border:1px solid rgba(170,210,250,.4);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:inset 0 1px 3px rgba(200,230,255,.35),0 2px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0}'
    + '.dback svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}'
    + '.dtop h1{font-size:20px;font-weight:700;color:#fff;flex:1;text-align:center}'
    + '.dsp{width:44px;height:44px;flex-shrink:0}'
    + '.dsub{font-size:15.5px;color:#eaf1fb;font-weight:600;margin:26px 2px 12px}'
    + '.dsel{display:flex;align-items:center;justify-content:space-between;direction:ltr;background:rgba(5,13,30,.88);border:1px solid rgba(110,160,225,.16);border-radius:12px;padding:17px 16px;font-size:15.5px;font-weight:700;color:#fff;letter-spacing:.4px;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.35)}'
    + '.dsel svg{width:17px;height:17px;stroke:#c9d8ec;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}'
    + '.dqrw{display:flex;justify-content:center;margin:34px 0 30px}'
    + '.dqrb{background:#fff;border-radius:10px;padding:12px;box-shadow:0 6px 20px rgba(0,10,40,.45)}'
    + '.dqrb img{display:block;width:218px;height:218px}'
    + '.daddr{display:flex;align-items:center;justify-content:space-between;margin:0 2px 10px}'
    + '.daddr .dt{font-size:15px;color:#eaf1fb;font-weight:600}'
    + '.dcp{display:flex;align-items:center;gap:5px;font-size:14px;color:#eaf1fb;font-weight:600;cursor:pointer}'
    + '.dcp svg{width:16px;height:16px;stroke:#dfe9f7;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}'
    + '.dval{direction:ltr;text-align:center;background:rgba(5,13,30,.85);border:1px solid rgba(110,160,225,.14);border-radius:10px;padding:15px 12px;font-size:14px;font-weight:600;color:#e8eef8;letter-spacing:.4px;box-shadow:0 3px 10px rgba(0,0,0,.3);word-break:break-all}'
    + '.dnote{margin-top:44px}'
    + '.dnote b{font-size:16.5px;color:#e8eef8}'
    + '.dnote p{font-size:12.5px;color:#93a7c4;line-height:1.9;margin-top:10px;direction:ltr;text-align:left}';

  var st = document.createElement('style');
  st.id = 'ast-css';
  st.textContent = css;
  document.head.appendChild(st);

  /* ---------- HTML: صفحة الأصول ---------- */
  var astHtml = ''
    + '<div class="astin" dir="ltr">'
    + '<div class="acard"><div><div class="albl">إجمالي الأصول (USDT)<svg id="ey" onclick="AST.tgE()" viewBox="0 0 24 24"><path d="M3 3l18 18"/><path d="M10.6 5.1A9.7 9.7 0 0 1 12 5c5 0 9 4.6 10 7-.35.9-1.2 2.3-2.6 3.6M6.6 6.6C4.2 8 2.6 10.4 2 12c1 2.4 5 7 10 7 1.4 0 2.8-.35 4-.95M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg></div><div class="aval" id="av">*** ***</div></div>'
    + '<div class="aday"><div class="albl2">أرباح اليوم</div><div class="aval2">0</div></div></div>'
    + '<div class="abtns"><button class="abtn dep" onclick="AST.openDep()"><img src="https://i.ibb.co/FbbVgh74/IMG.png" alt="">الإيداع</button><button class="abtn wd" onclick="openWd()"><img src="https://i.ibb.co/DDgGy91y/IMG.png" alt="">سحب العملات</button></div>'
    + '<div class="atabs"><div class="atab on">الأصول</div><div class="atab">إجمالي الأصول</div><div class="arec"><svg viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/></svg>السجل</div></div>'
    + '<div class="arow"><span>حساب الأموال</span><b>0 USDT</b></div>'
    + '<div class="arow"><span>أرباح الفريق</span><b>0.00 USDT</b></div>'
    + '</div>';

  /* ---------- HTML: صفحة الإيداع في العملة ---------- */
  var depAddr = 'TZ76Nx4tri1Seth6TuVCknLQDU49dKYxg';
  var depHtml = ''
    + '<div class="depin">'
    + '<div class="dtop"><div class="dback" onclick="AST.closeDep()"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></div><h1>الإيداع في العملة</h1><div class="dsp"></div></div>'
    + '<div class="dsub">اختيار العملة</div>'
    + '<div class="dsel"><span>USDT-TRC20</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div>'
    + '<div class="dqrw"><div class="dqrb"><img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=' + depAddr + '" alt="QR"></div></div>'
    + '<div class="daddr"><span class="dt">عنوان الإيداع في العملة</span><span class="dcp" onclick="AST.cpDep()"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>نسخ</span></div>'
    + '<div class="dval" id="daddr">' + depAddr + '</div>'
    + '<div class="dnote"><b>ملاحظة أمنية</b><p>The minimum deposit amount is 100 USDT. Please ensure that the currency and grid information are correct to avoid financial loss. If the deposit currency is incorrect or the deposit amount is less than 100 USDT, the lost funds will be irrecoverable.</p></div>'
    + '</div>';

  /* ---------- الحقن في الصفحة ---------- */
  var astEl = document.createElement('div');
  astEl.className = 'ast';
  astEl.id = 'ast';
  astEl.innerHTML = astHtml;
  document.body.appendChild(astEl);

  var depEl = document.createElement('div');
  depEl.className = 'dep';
  depEl.id = 'dep';
  depEl.innerHTML = depHtml;
  document.body.appendChild(depEl);

  /* ---------- الوظائف ---------- */
  window.AST = {
    open: function () {
      hideAll();
      astEl.style.display = 'block';
      depEl.style.display = 'none';
      setNav(4);
      window.scrollTo(0, 0);
    },
    hide: function () {
      astEl.style.display = 'none';
      depEl.style.display = 'none';
    },
    openDep: function () {
      astEl.style.display = 'none';
      depEl.style.display = 'block';
      window.scrollTo(0, 0);
    },
    closeDep: function () {
      depEl.style.display = 'none';
      astEl.style.display = 'block';
      window.scrollTo(0, 0);
    },
    cpDep: function () {
      var t = document.getElementById('daddr').textContent;
      cpT(t);
    },
    tgE: function () {
      var e = document.getElementById('ey'), v = document.getElementById('av'), h = v.dataset.h === '1';
      v.dataset.h = h ? '0' : '1';
      v.textContent = h ? '*** ***' : '0.00.00';
      e.innerHTML = h
        ? '<path d="M3 3l18 18"/><path d="M10.6 5.1A9.7 9.7 0 0 1 12 5c5 0 9 4.6 10 7-.35.9-1.2 2.3-2.6 3.6M6.6 6.6C4.2 8 2.6 10.4 2 12c1 2.4 5 7 10 7 1.4 0 2.8-.35 4-.95M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'
        : '<path d="M2 12c1-2.4 5-7 10-7s9 4.6 10 7c-1 2.4-5 7-10 7S3 14.4 2 12z"/><circle cx="12" cy="12" r="3"/>';
    }
  };
})();
