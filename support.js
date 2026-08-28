(function(){
if(document.getElementById('supPage'))return;

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
#supPage .fic .fbtn svg{width:28px;height:28px}
#supPage .fic .fbtn.rec-on svg circle{fill:#E82127}
#supPage .fin{display:flex;align-items:flex-end;gap:10px}
#supPage .fin input{flex:1;border:none;outline:none;font-size:14px;padding:8px 0;color:#333;background:transparent;font-family:inherit}
#supPage .fin input::placeholder{color:#B5B5B5}
#supPage .snd{background:#1877F2;color:#fff;border:none;padding:9px 22px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}`;

var st=document.createElement('style');
st.id='supPageCss';
st.textContent=css;
document.head.appendChild(st);

var mic='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="%23546E7A"/><path d="M6 11a6 6 0 0 0 12 0" stroke="%23546E7A" stroke-width="2" fill="none" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="%23546E7A" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="21" x2="16" y2="21" stroke="%23546E7A" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="8" r="0" fill="%23546E7A"/></svg>';

var pic='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="%23B0BEC5"/><circle cx="8" cy="9.5" r="1.6" fill="%23fff"/><path d="M4 18l5-5 4 4 3-3 4 4v1H4z" fill="%23fff"/></svg>';

var op='https://www.zgulfx.com/css/images/logo.png';

var html=`<div id="supPage">
<div class="sh">
<button class="bk" id="supBk">&#10094;</button>
<div class="tt">Online Service</div>
<div class="op"><img src="${op}" alt=""></div>
</div>
<div class="body"></div>
<div class="foot">
<div class="fic">
<button class="fbtn" id="supMic" type="button" title="Record voice">${mic}</button>
<button class="fbtn" id="supPic" type="button" title="Upload image">${pic}</button>
<input type="file" id="supFile" accept="image/*" style="display:none">
</div>
<div class="fin">
<input type="text" id="supInput" placeholder="Please Enter Your Question">
<button class="snd" id="supSend">Send</button>
</div>
</div>
</div>`;

var w=document.createElement('div');
w.innerHTML=html;
document.body.appendChild(w.firstChild);

function nowStr(){
var d=new Date();
function p(n){return (n<10?'0':'')+n}
return d.getFullYear()+'/'+p(d.getMonth()+1)+'/'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds());
}

function addMsg(inner,isOp){
var b=document.querySelector('#supPage .body');
var m=document.createElement('div');
m.className='msg '+(isOp?'op-msg':'me');
var tm=document.createElement('div');
tm.className='tm';
if(isOp){tm.style.textAlign='right';tm.textContent='GulfX customer service '+nowStr();}else{tm.textContent=nowStr();}
var bub=document.createElement('div');
bub.className='bub';
if(typeof inner==='string'){bub.textContent=inner;}else{bub.appendChild(inner);}
if(isOp){m.appendChild(bub);}else{
var row=document.createElement('div');
row.className='row';
row.innerHTML='<span class="rd"><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg></span>';
row.appendChild(bub);
m.appendChild(tm);
m.appendChild(row);
}
if(isOp){m.insertBefore(tm,m.firstChild);}
b.appendChild(m);
b.scrollTop=b.scrollHeight;
}

document.getElementById('supBk').addEventListener('click',function(){
var p=document.getElementById('supPage'),c=document.getElementById('supPageCss');
if(p)p.remove();
if(c)c.remove();
});

document.getElementById('supSend').addEventListener('click',function(){
var inp=document.getElementById('supInput');
var v=inp.value.trim();
if(!v)return;
addMsg(v,false);
inp.value='';
});

document.getElementById('supInput').addEventListener('keydown',function(e){
if(e.key==='Enter'){document.getElementById('supSend').click();}
});

document.getElementById('supPic').addEventListener('click',function(){
document.getElementById('supFile').click();
});

document.getElementById('supFile').addEventListener('change',function(){
var f=this.files&&this.files[0];
if(!f)return;
var r=new FileReader();
r.onload=function(ev){
var img=document.createElement('img');
img.className='att';
img.src=ev.target.result;
addMsg(img,false);
};
r.readAsDataURL(f);
this.value='';
});

var mediaRec=null,recChunks=[];
document.getElementById('supMic').addEventListener('click',function(){
var btn=this;
if(mediaRec&&mediaRec.state==='recording'){
mediaRec.stop();
btn.classList.remove('rec-on');
return;
}
if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
alert('Voice recording is not supported in this browser');
return;
}
navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
recChunks=[];
mediaRec=new MediaRecorder(stream);
mediaRec.ondataavailable=function(e){if(e.data.size>0)recChunks.push(e.data);};
mediaRec.onstop=function(){
stream.getTracks().forEach(function(t){t.stop();});
var blob=new Blob(recChunks,{type:mediaRec.mimeType||'audio/webm'});
var url=URL.createObjectURL(blob);
var au=document.createElement('audio');
au.className='att';
au.controls=true;
au.src=url;
addMsg(au,false);
btn.classList.remove('rec-on');
};
mediaRec.start();
btn.classList.add('rec-on');
}).catch(function(){
alert('Microphone permission denied');
});
});

var b=document.querySelector('#supPage .body');
if(b)b.scrollTop=b.scrollHeight;
})();
