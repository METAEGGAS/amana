(function(){
if(document.getElementById('supPage'))return;

// ====== تحميل Firebase (compat) جوه السكربت نفسه ======
function loadScript(src){
  return new Promise(function(res,rej){
    var s=document.createElement('script');
    s.src=src;s.onload=res;s.onerror=rej;
    document.head.appendChild(s);
  });
}

var css=`#supPage{position:fixed;top:0;left:0;right:0;bottom:0;max-width:480px;margin:0 auto;background:#F2E9E8;z-index:9998;display:flex;flex-direction:column;font-family:'Noto Sans Arabic',-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;direction:rtl}
#supPage .sh{background:#1877F2;color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;direction:ltr}
#supPage .sh .bk{background:none;border:none;color:#fff;font-size:22px;cursor:pointer;padding:0;width:30px;display:flex;align-items:center;justify-content:flex-start}
#supPage .sh .tt{flex:1;text-align:center;font-size:19px;font-weight:600;letter-spacing:.3px}
#supPage .sh .op{position:relative;width:38px;height:38px;flex-shrink:0}
#supPage .sh .op img{width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid #fff;background:#fff}
#supPage .sh .op::after{content:'';position:absolute;bottom:0;right:0;width:10px;height:10px;background:#E82127;border-radius:50%;border:2px solid #fff}
#supPage .body{flex:1;overflow-y:auto;padding:14px 12px;display:flex;flex-direction:column;gap:14px}
#supPage .msg{max-width:78%;display:flex;flex-direction:column;gap:4px}
#supPage .msg.op-msg{align-self:flex-start}
#supPage .msg.me{align-self:flex-end;align-items:flex-end}
#supPage .tm{font-size:12px;color:#7a7a7a;direction:ltr;padding:0 4px}
#supPage .bub{background:#fff;padding:11px 14px;border-radius:6px;font-size:14.5px;line-height:1.7;color:#1a1a1a;word-wrap:break-word;box-shadow:0 1px 1px rgba(0,0,0,.04)}
#supPage .me .bub{background:#7FD858;color:#000;font-family:monospace;font-size:14px;display:flex;align-items:center;gap:6px}
#supPage .me .row{display:flex;align-items:center;gap:6px;flex-direction:row-reverse}
#supPage .rd{width:20px;height:20px;border-radius:50%;border:1.5px solid #B5B5C3;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background:#fff}
#supPage .rd svg{width:12px;height:12px;fill:none;stroke:#B5B5C3;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
#supPage .bub img.att{max-width:200px;max-height:200px;border-radius:6px;display:block}
#supPage .bub audio.att{max-width:220px;display:block}
#supPage .foot{background:#fff;border-top:1px solid #E5E5E5;padding:10px 14px 14px;flex-shrink:0}
#supPage .fic{display:flex;gap:14px;margin-bottom:8px}
#supPage .fic .fbtn{background:none;border:none;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center}
#supPage .fic .fbtn img{width:28px;height:28px;object-fit:contain}
#supPage .fin{display:flex;align-items:flex-end;gap:10px}
#supPage .fin input{flex:1;border:none;outline:none;font-size:14px;padding:8px 0;color:#333;background:transparent;font-family:inherit}
#supPage .fin input::placeholder{color:#B5B5B5}
#supPage .snd{background:#1877F2;color:#fff;border:none;padding:9px 22px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}
#supPage .recbar{display:none;align-items:center;gap:12px;padding:6px 0}
#supPage .recdot{width:12px;height:12px;border-radius:50%;background:#E82127;flex-shrink:0;animation:supBlink 1s infinite}
@keyframes supBlink{0%,100%{opacity:1}50%{opacity:.15}}
#supPage .wtxt{flex:1;font-size:15px;color:#1a1a1a;font-weight:600;display:flex;align-items:center;gap:1px;overflow:hidden;white-space:nowrap}
#supPage .wtxt i{font-style:normal;display:inline-block;animation:supWave 1.1s ease-in-out infinite}
@keyframes supWave{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
#supPage .rtime{font-size:13px;color:#7a7a7a;direction:ltr;font-family:monospace;flex-shrink:0}
#supPage .rbtn{border:none;cursor:pointer;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
#supPage .rstop{background:#E5E5E5}
#supPage .rstop svg{width:16px;height:16px;fill:#555}
#supPage .rsend{background:#1877F2}
#supPage .rsend svg{width:20px;height:20px;fill:#fff}`;

var st=document.createElement('style');
st.id='supPageCss';
st.textContent=css;
document.head.appendChild(st);

var micUrl='https://cdn-icons-png.flaticon.com/128/7022/7022983.png';
var picUrl='https://cdn-icons-png.flaticon.com/128/2659/2659360.png';
var op='https://www.zgulfx.com/css/images/logo.png';

var stopSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>';
var sendSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.7 21.3L23 12 2.7 2.7 2.7 10l14.6 2-14.6 2z"/></svg>';

var html=`<div id="supPage">
<div class="sh">
<button class="bk" id="supBk">&#10094;</button>
<div class="tt">Online Service</div>
<div class="op"><img src="${op}" alt=""></div>
</div>
<div class="body"></div>
<div class="foot">
<div class="fic">
<button class="fbtn" id="supMic" type="button" title="Record voice"><img src="${micUrl}" alt=""></button>
<button class="fbtn" id="supPic" type="button" title="Upload image"><img src="${picUrl}" alt=""></button>
<input type="file" id="supFile" accept="image/*" style="display:none">
</div>
<div class="fin" id="supFin">
<input type="text" id="supInput" placeholder="Please Enter Your Question">
<button class="snd" id="supSend">Send</button>
</div>
<div class="recbar" id="supRec">
<span class="recdot"></span>
<span class="wtxt" id="supWtxt"></span>
<span class="rtime" id="supRtime">00:00</span>
<button class="rbtn rstop" id="supRstop" type="button" title="Cancel">${stopSvg}</button>
<button class="rbtn rsend" id="supRsend" type="button" title="Send">${sendSvg}</button>
</div>
</div>
</div>`;

var w=document.createElement('div');
w.innerHTML=html;
document.body.appendChild(w.firstChild);

var wtxt=document.getElementById('supWtxt');
var wword='جاري التسجيل';
for(var i=0;i<wword.length;i++){
var sp=document.createElement('i');
sp.textContent=wword[i]===' '?'\u00A0':wword[i];
sp.style.animationDelay=(i*0.08)+'s';
wtxt.appendChild(sp);
}

function nowStr(){
var d=new Date();
function p(n){return (n<10?'0':'')+n}
return d.getFullYear()+'/'+p(d.getMonth()+1)+'/'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds());
}

// ====== عرض الرسالة (بدون حفظ — الحفظ بيتم عند الإرسال) ======
function renderMsg(data){
var b=document.querySelector('#supPage .body');
if(!b)return;
var m=document.createElement('div');
m.className='msg '+(data.sender==='me'?'me':'op-msg');
var tm=document.createElement('div');
tm.className='tm';
tm.textContent=data.time||nowStr();
var bub=document.createElement('div');
bub.className='bub';
if(data.type==='image'){
  var img=document.createElement('img');
  img.className='att';
  img.src=data.content;
  bub.appendChild(img);
}else if(data.type==='audio'){
  var au=document.createElement('audio');
  au.className='att';
  au.controls=true;
  au.src=data.content;
  bub.appendChild(au);
}else{
  bub.textContent=data.content;
}
m.appendChild(tm);
m.appendChild(bub);
b.appendChild(m);
b.scrollTop=b.scrollHeight;
}

// ====== Firebase ======
var db=null;
var renderedIds={}; // عشان منعرضش الرسالة مرتين

var firebaseConfig={
  apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
  authDomain:"hhhxh-5ebe4.firebaseapp.com",
  projectId:"hhhxh-5ebe4",
  storageBucket:"hhhxh-5ebe4.firebasestorage.app",
  messagingSenderId:"79243000696",
  appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",
  measurementId:"G-08BR6LN6PT"
};

Promise.all([
  loadScript('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js'),
  loadScript('https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore-compat.js')
]).then(function(){
  firebase.initializeApp(firebaseConfig);
  db=firebase.firestore();

  // استماع لحظي لكل الرسايل مرتبة بالوقت
  db.collection('messages').orderBy('ts','asc').onSnapshot(function(snap){
    snap.docChanges().forEach(function(ch){
      if(ch.type==='added'){
        var d=ch.doc.data();
        if(renderedIds[ch.doc.id])return;
        renderedIds[ch.doc.id]=true;
        renderMsg(d);
      }
    });
  });
}).catch(function(){
  console.error('Firebase failed to load');
});

// ====== إرسال رسالة لفيربيس ======
// sender: 'me' = الرسالة المُرسلة (الأخضر) | 'op' = المستلمة (الأبيض)
function sendMsg(type,content,sender){
  if(!db)return;
  db.collection('messages').add({
    type:type,           // 'text' | 'image' | 'audio'
    content:content,     // نص أو base64
    sender:sender||'me',
    time:nowStr(),
    ts:firebase.firestore.FieldValue.serverTimestamp()
  });
}

// ====== زر الرجوع ======
document.getElementById('supBk').addEventListener('click',function(){
var p=document.getElementById('supPage'),c=document.getElementById('supPageCss');
if(p)p.remove();
if(c)c.remove();
});

// ====== إرسال نص ======
document.getElementById('supSend').addEventListener('click',function(){
var inp=document.getElementById('supInput');
var v=inp.value.trim();
if(!v)return;
sendMsg('text',v,'me'); // بتظهر تلقائي من onSnapshot
inp.value='';
});

document.getElementById('supInput').addEventListener('keydown',function(e){
if(e.key==='Enter'){document.getElementById('supSend').click();}
});

// ====== رفع صورة (base64 -> Firestore) ======
document.getElementById('supPic').addEventListener('click',function(){
document.getElementById('supFile').click();
});

document.getElementById('supFile').addEventListener('change',function(){
var f=this.files&&this.files[0];
if(!f)return;
var r=new FileReader();
r.onload=function(ev){
  sendMsg('image',ev.target.result,'me'); // ev.target.result = base64
};
r.readAsDataURL(f);
this.value='';
});

// ====== تسجيل صوت (base64 -> Firestore) ======
var mediaRec=null,recChunks=[],recTimer=null,recStart=0,recSendIt=false;

function fmtT(ms){
var s=Math.floor(ms/1000);
var m=Math.floor(s/60);
s=s%60;
return (m<10?'0':'')+m+':'+(s<10?'0':'')+s;
}

function showRecUI(on){
document.getElementById('supFin').style.display=on?'none':'flex';
document.getElementById('supRec').style.display=on?'flex':'none';
document.getElementById('supMic').style.opacity=on?'0.4':'1';
document.getElementById('supPic').style.opacity=on?'0.4':'1';
}

function stopRec(){
if(recTimer){clearInterval(recTimer);recTimer=null;}
if(mediaRec&&mediaRec.state==='recording'){mediaRec.stop();}
}

document.getElementById('supMic').addEventListener('click',function(){
if(mediaRec&&mediaRec.state==='recording')return;
if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
alert('Voice recording is not supported in this browser');
return;
}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
recChunks=[];
recSendIt=false;
mediaRec=new MediaRecorder(stream);
mediaRec.ondataavailable=function(e){if(e.data.size>0)recChunks.push(e.data);};
mediaRec.onstop=function(){
stream.getTracks().forEach(function(t){t.stop();});
if(recSendIt&&recChunks.length){
  var blob=new Blob(recChunks,{type:mediaRec.mimeType||'audio/webm'});
  // تحويل المقطع الصوتي لـ base64 وحفظه في Firestore
  var fr=new FileReader();
  fr.onload=function(ev){
    sendMsg('audio',ev.target.result,'me');
  };
  fr.readAsDataURL(blob);
}
recChunks=[];
showRecUI(false);
};
mediaRec.start();
recStart=Date.now();
document.getElementById('supRtime').textContent='00:00';
recTimer=setInterval(function(){
document.getElementById('supRtime').textContent=fmtT(Date.now()-recStart);
},250);
showRecUI(true);
}).catch(function(){
alert('Microphone permission denied');
});
});

document.getElementById('supRstop').addEventListener('click',function(){
recSendIt=false;
stopRec();
});

document.getElementById('supRsend').addEventListener('click',function(){
recSendIt=true;
stopRec();
});

var b=document.querySelector('#supPage .body');
if(b)b.scrollTop=b.scrollHeight;
})();
