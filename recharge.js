(function(){
if(document.getElementById('rechPage')){var p0=document.getElementById('rechPage');p0.classList.add('open','skon');clearTimeout(window.__rcT);window.__rcT=setTimeout(function(){p0.classList.remove('skon')},2000);return}

var FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};

var ADDR={USDT_TRC20:"TJuW6QiLBZBgNgPZ4W2sUkqHa3i7gfvVch",USDT_ERC20:"0x4a9b0f70aa5c0a2cf828c8fb34c17d3f92d73b4f",BTC:"15Q1pwoUtNPXxhnnNCkg6JfH4knqTbiEBM",USDC:"0x4a9b0f70aa5c0a2cf828c8fb34c17d3f92d73b4f",ETH:"0x4a9b0f70aa5c0a2cf828c8fb34c17d3f92d73b4f"};

var I18N={
Filipino:{title:"I-recharge ang Balanse",pickCur:"Pakipili ang pera ng deposito",rate:"Kasalukuyang palitan:",depAddr:"Address ng deposito",pickNet:"Piliin ang network",amt:"Halaga ng recharge",minDep:"Minimum na deposito:",phAmt:"Pakilagay ang halaga ng recharge (USD)",subBtn:"Isumite ang Recharge",warnT:"Mahalagang Paalala",w1:"Mangyaring huwag mag-deposito ng anumang asset maliban sa",w1b:", kung hindi ay hindi mababawi ang mga asset.",w2:"Sa kasalukuyan ay sumusuporta lamang sa USDT (simple send) na paraan ng deposito, hindi maitatala ang mga deposito na ginawa sa ibang paraan (send all).",w3:"Pagkatapos mag-deposito sa address sa itaas, kailangan ng kumpirmasyon mula sa buong network ng node, at itatala ang deposito pagkatapos ng 6 na kumpirmasyon ng network.",w4:"Pakisiguro ang seguridad ng iyong computer at browser upang maiwasan ang pandaraya o pagtagas ng impormasyon.",tCur:"Pumili ng Pera",tNet:"Pumili ng Network",okMsg:"Matagumpay na naisumite ang kahilingan sa recharge",errMin:"Minimum na deposito: 100 USDT ≈ 100 USD",saveErr:"Nabigong i-save ang kahilingan, subukang muli"},
Polski:{title:"Doładuj saldo",pickCur:"Wybierz walutę depozytu",rate:"Aktualny kurs wymiany:",depAddr:"Adres depozytu",pickNet:"Wybierz sieć",amt:"Kwota doładowania",minDep:"Minimalny depozyt:",phAmt:"Wprowadź kwotę doładowania (USD)",subBtn:"Prześlij doładowanie",warnT:"Ważna informacja",w1:"Prosimy nie deponować żadnych aktywów innych niż",w1b:", w przeciwnym razie aktywów nie będzie można odzyskać.",w2:"Obecnie obsługuje tylko metodę depozytu USDT (simple send), depozyty wykonane innymi metodami (send all) nie mogą być rejestrowane.",w3:"Po zdeponowaniu środków na powyższy adres wymagane jest potwierdzenie z całej sieci węzłów, a depozyt zostanie zarejestrowany po 6 potwierdzeniach sieciowych.",w4:"Prosimy o zapewnienie bezpieczeństwa komputera i przeglądarki, aby uniknąć manipulacji lub wycieku informacji.",tCur:"Wybierz walutę",tNet:"Wybierz sieć",okMsg:"Prośba o doładowanie została pomyślnie przesłana",errMin:"Minimalny depozyt: 100 USDT ≈ 100 USD",saveErr:"Nie udało się zapisać żądania, spróbuj ponownie"},
Nederlands:{title:"Saldo opwaarderen",pickCur:"Selecteer stortingsvaluta",rate:"Huidige wisselkoers:",depAddr:"Stortingsadres",pickNet:"Selecteer netwerk",amt:"Opwaarderingsbedrag",minDep:"Minimale storting:",phAmt:"Voer opwaarderingsbedrag in (USD)",subBtn:"Opwaardering indienen",warnT:"Belangrijke mededeling",w1:"Stort geen andere activa dan",w1b:", anders kunnen de activa niet worden hersteld.",w2:"Ondersteunt momenteel alleen USDT (simple send) stortingsmethode, stortingen gedaan met andere methoden (send all) kunnen niet worden geregistreerd.",w3:"Na het storten van geld naar het bovenstaande adres is bevestiging van het gehele knooppuntnetwerk vereist, en de storting wordt vastgelegd na 6 netwerkbevestigingen.",w4:"Zorg voor de veiligheid van uw computer en browser om manipulatie of informatielekken te voorkomen.",tCur:"Selecteer valuta",tNet:"Selecteer netwerk",okMsg:"Opwaarderingsverzoek succesvol ingediend",errMin:"Minimale storting: 100 USDT ≈ 100 USD",saveErr:"Kan verzoek niet opslaan, probeer opnieuw"},
Svenska:{title:"Ladda saldo",pickCur:"Välj insättningsvaluta",rate:"Aktuell växelkurs:",depAddr:"Insättningsadress",pickNet:"Välj nätverk",amt:"Laddningsbelopp",minDep:"Minsta insättning:",phAmt:"Ange laddningsbelopp (USD)",subBtn:"Skicka laddning",warnT:"Viktigt meddelande",w1:"Sätt inte in några andra tillgångar än",w1b:", annars kan tillgångarna inte återvinnas.",w2:"Stöder för närvarande endast USDT (simple send) insättningsmetod, insättningar gjorda med andra metoder (send all) kan inte registreras.",w3:"Efter att ha satt in medel till ovanstående adress krävs bekräftelse från hela nodnätverket, och insättningen registreras efter 6 nätverksbekräftelser.",w4:"Se till att din dator och webbläsare är säkra för att undvika manipulering eller informationsläckage.",tCur:"Välj valuta",tNet:"Välj nätverk",okMsg:"Laddningsbegäran har skickats",errMin:"Minsta insättning: 100 USDT ≈ 100 USD",saveErr:"Kunde inte spara begäran, försök igen"},
"Українська":{title:"Поповнити баланс",pickCur:"Виберіть валюту депозиту",rate:"Поточний обмінний курс:",depAddr:"Адреса депозиту",pickNet:"Виберіть мережу",amt:"Сума поповнення",minDep:"Мінімальний депозит:",phAmt:"Введіть суму поповнення (USD)",subBtn:"Надіслати поповнення",warnT:"Важливе повідомлення",w1:"Будь ласка, не вносьте жодних активів, крім",w1b:", інакше активи не можна буде відновити.",w2:"Наразі підтримує лише метод депозиту USDT (simple send), депозити зроблені іншими методами (send all) не можуть бути зареєстровані.",w3:"Після внесення коштів на вищевказану адресу потрібне підтвердження всієї мережі вузлів, і депозит буде зареєстровано після 6 підтверджень мережі.",w4:"Забезпечте безпеку вашого комп'ютера та браузера, щоб уникнути втручання чи витоку інформації.",tCur:"Виберіть валюту",tNet:"Виберіть мережу",okMsg:"Запит на поповнення успішно надіслано",errMin:"Мінімальний депозит: 100 USDT ≈ 100 USD",saveErr:"Не вдалося зберегти запит, спробуйте ще раз"},
"Română":{title:"Reîncarcă soldul",pickCur:"Selectați moneda de depozit",rate:"Cursul de schimb actual:",depAddr:"Adresa de depozit",pickNet:"Selectați rețeaua",amt:"Suma de reîncărcare",minDep:"Depozit minim:",phAmt:"Introduceți suma de reîncărcare (USD)",subBtn:"Trimite reîncărcarea",warnT:"Notificare importantă",w1:"Vă rugăm să nu depuneți alte active decât",w1b:", altfel activele nu pot fi recuperate.",w2:"În prezent acceptă doar metoda de depozit USDT (simple send), depozitele efectuate cu alte metode (send all) nu pot fi înregistrate.",w3:"După depunerea fondurilor la adresa de mai sus, este necesară confirmarea din partea întregii rețele de noduri, iar depozitul va fi înregistrat după 6 confirmări de rețea.",w4:"Vă rugăm să asigurați securitatea computerului și browserului dvs. pentru a evita manipularea sau scurgerea informațiilor.",tCur:"Selectați moneda",tNet:"Selectați rețeaua",okMsg:"Cererea de reîncărcare a fost trimisă cu succes",errMin:"Depozit minim: 100 USDT ≈ 100 USD",saveErr:"Salvarea cererii a eșuat, încercați din nou"},
"Ελληνικά":{title:"Επαναφόρτιση υπολοίπου",pickCur:"Επιλέξτε νόμισμα κατάθεσης",rate:"Τρέχουσα ισοτιμία:",depAddr:"Διεύθυνση κατάθεσης",pickNet:"Επιλέξτε δίκτυο",amt:"Ποσό επαναφόρτισης",minDep:"Ελάχιστη κατάθεση:",phAmt:"Εισαγάγετε ποσό επαναφόρτισης (USD)",subBtn:"Υποβολή επαναφόρτισης",warnT:"Σημαντική ειδοποίηση",w1:"Παρακαλούμε μην καταθέτετε άλλα περιουσιακά στοιχεία εκτός από",w1b:", διαφορετικά τα περιουσιακά στοιχεία δεν μπορούν να ανακτηθούν.",w2:"Επί του παρόντος υποστηρίζει μόνο τη μέθοδο κατάθεσης USDT (simple send), οι καταθέσεις με άλλες μεθόδους (send all) δεν μπορούν να καταγραφούν.",w3:"Μετά την κατάθεση κεφαλαίων στην παραπάνω διεύθυνση, απαιτείται επιβεβαίωση από ολόκληρο το δίκτυο κόμβων, και η κατάθεση θα καταγραφεί μετά από 6 επιβεβαιώσεις δικτύου.",w4:"Παρακαλούμε βεβαιωθείτε για την ασφάλεια του υπολογιστή και του προγράμματος περιήγησής σας για να αποφύγετε παραποίηση ή διαρροή πληροφοριών.",tCur:"Επιλέξτε νόμισμα",tNet:"Επιλέξτε δίκτυο",okMsg:"Το αίτημα επαναφόρτισης υποβλήθηκε με επιτυχία",errMin:"Ελάχιστη κατάθεση: 100 USDT ≈ 100 USD",saveErr:"Αποτυχία αποθήκευσης αιτήματος, δοκιμάστε ξανά"},
"Čeština":{title:"Dobít zůstatek",pickCur:"Vyberte měnu vkladu",rate:"Aktuální směnný kurz:",depAddr:"Adresa vkladu",pickNet:"Vyberte síť",amt:"Částka dobití",minDep:"Minimální vklad:",phAmt:"Zadejte částku dobití (USD)",subBtn:"Odeslat dobití",warnT:"Důležité upozornění",w1:"Prosím nevkládejte žádná jiná aktiva než",w1b:", jinak aktiva nelze obnovit.",w2:"V současné době podporuje pouze metodu vkladu USDT (simple send), vklady provedené jinými metodami (send all) nelze zaznamenat.",w3:"Po vložení prostředků na výše uvedenou adresu je vyžadováno potvrzení z celé sítě uzlů a vklad bude zaznamenán po 6 potvrzeních sítě.",w4:"Zajistěte prosím bezpečnost svého počítače a prohlížeče, aby nedošlo k manipulaci nebo úniku informací.",tCur:"Vyberte měnu",tNet:"Vyberte síť",okMsg:"Žádost o dobití byla úspěšně odeslána",errMin:"Minimální vklad: 100 USDT ≈ 100 USD",saveErr:"Uložení požadavku selhalo, zkuste to znovu"},
Magyar:{title:"Egyenleg feltöltése",pickCur:"Válassza ki a befizetési pénznemet",rate:"Jelenlegi árfolyam:",depAddr:"Befizetési cím",pickNet:"Válasszon hálózatot",amt:"Feltöltési összeg",minDep:"Minimális befizetés:",phAmt:"Adja meg a feltöltési összeget (USD)",subBtn:"Feltöltés elküldése",warnT:"Fontos értesítés",w1:"Kérjük, ne helyezzen letétbe más eszközt, mint",w1b:", különben az eszközök nem hozhatók vissza.",w2:"Jelenleg csak USDT (simple send) befizetési módot támogat, más módszerekkel (send all) végzett befizetéseket nem lehet rögzíteni.",w3:"A fenti címre történő pénzbefizetés után a teljes csomópont-hálózat megerősítése szükséges, és a befizetés 6 hálózati megerősítés után kerül rögzítésre.",w4:"Kérjük, gondoskodjon számítógépe és böngészője biztonságáról a manipuláció vagy információszivárgás elkerülése érdekében.",tCur:"Válasszon pénznemet",tNet:"Válasszon hálózatot",okMsg:"A feltöltési kérelem sikeresen elküldve",errMin:"Minimális befizetés: 100 USDT ≈ 100 USD",saveErr:"A kérés mentése sikertelen, próbálja újra"},
Kiswahili:{title:"Ongeza salio",pickCur:"Tafadhali chagua sarafu ya amana",rate:"Kiwango cha ubadilishaji cha sasa:",depAddr:"Anwani ya amana",pickNet:"Chagua mtandao",amt:"Kiasi cha kuongeza",minDep:"Amana ya chini:",phAmt:"Tafadhali ingiza kiasi cha kuongeza (USD)",subBtn:"Wasilisha malipo",warnT:"Taarifa muhimu",w1:"Tafadhali usiweke amana yoyote isipokuwa",w1b:", vinginevyo mali haziwezi kurejeshwa.",w2:"Kwa sasa inasaidia tu njia ya amana ya USDT (simple send), amana zilizofanywa kwa njia zingine (send all) haziwezi kurekodiwa.",w3:"Baada ya kuweka fedha kwa anwani hapo juu, uthibitisho kutoka kwa mtandao mzima wa nodi unahitajika, na amana itarekodiwa baada ya uthibitisho 6 wa mtandao.",w4:"Tafadhali hakikisha usalama wa kompyuta yako na kivinjari ili kuepuka udanganyifu au uvujaji wa taarifa.",tCur:"Chagua sarafu",tNet:"Chagua mtandao",okMsg:"Ombi la malipo limewasilishwa kwa mafanikio",errMin:"Amana ya chini: 100 USDT ≈ 100 USD",saveErr:"Imeshindwa kuhifadhi ombi, jaribu tena"}
};

var curLang="Filipino";
function T(k){var L=I18N[curLang]||I18N.Filipino;return L[k]||I18N.Filipino[k]||k}

// Firebase loader
window._rcFB=window._rcFB||{ready:false,app:null,db:null,auth:null,user:null,queue:[]};
function loadFB(cb){
if(window._rcFB.ready){cb();return}
window._rcFB.queue.push(cb);
if(window._rcFB.loading)return;
window._rcFB.loading=true;
var s=document.createElement('script');
s.type='module';
s.textContent='import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";'+
'import { getFirestore, collection, addDoc, doc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";'+
'import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";'+
'const cfg='+JSON.stringify(FB_CFG)+';'+
'const app=getApps().length?getApp():initializeApp(cfg);'+
'const db=getFirestore(app);const auth=getAuth(app);'+
'window._rcFB.app=app;window._rcFB.db=db;window._rcFB.auth=auth;'+
'window._rcFB.addDoc=addDoc;window._rcFB.collection=collection;window._rcFB.doc=doc;window._rcFB.getDoc=getDoc;window._rcFB.serverTimestamp=serverTimestamp;'+
'onAuthStateChanged(auth,async(u)=>{window._rcFB.user=u;if(u){try{const ref=doc(db,"users",u.uid);const snap=await getDoc(ref);if(snap.exists()){const d=snap.data();if(d&&d.Lang){window._rcFB.userLang=d.Lang;window.dispatchEvent(new CustomEvent("rcLangReady",{detail:d.Lang}))}}}catch(e){}}window._rcFB.ready=true;window.dispatchEvent(new CustomEvent("rcFBReady"));(window._rcFB.queue||[]).forEach(function(f){try{f()}catch(e){}});window._rcFB.queue=[]});';
document.head.appendChild(s);
}

if(!document.getElementById('rcTst')){var tc=document.createElement('style');tc.textContent="#rcTst{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:300;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s}#rcTst.on{opacity:1;pointer-events:auto}#rcTst .rctb{background:rgba(0,0,0,.78);color:#fff;font-size:14.5px;font-weight:700;padding:14px 22px;border-radius:12px;max-width:80%;text-align:center;line-height:1.7}";document.head.appendChild(tc);var tk=document.createElement('div');tk.id='rcTst';tk.innerHTML='<div class="rctb"></div>';document.body.appendChild(tk)}

var st=document.createElement('style');
st.textContent="#rechPage{position:fixed;inset:0;max-width:480px;margin:0 auto;z-index:101;opacity:0;pointer-events:none;transition:opacity .3s ease;display:flex;flex-direction:column;direction:ltr;background:#fff;overflow-y:auto}#rechPage.open{opacity:1;pointer-events:auto}#rechPage .rph{height:52px;background:linear-gradient(135deg,#8B80F4 0%,#7B72EE 100%);display:flex;align-items:center;justify-content:center;position:sticky;top:0;z-index:50;flex-shrink:0}#rechPage .ttl{color:#fff;font-size:16px;font-weight:700}#rechPage .rpb{position:absolute;left:14px;top:0;height:52px;display:flex;align-items:center;justify-content:center;cursor:pointer}#rechPage .rpb svg{width:22px;height:22px;stroke:#fff;stroke-width:2.6;fill:none;stroke-linecap:round;stroke-linejoin:round}#rechPage .ric{width:64px;height:64px;border-radius:50%;background:#1A1A1A;margin:26px auto 20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}#rechPage .ric img{width:100%;height:100%;object-fit:cover}#rechPage .rcard{background:#FBF7F9;border-radius:14px;margin:0 14px;padding:20px 16px 18px;border:1px solid #F0EAEF}#rechPage .rlbl{font-size:13px;color:#9A9AA3;margin-bottom:8px;text-align:left}#rechPage .rate{font-size:13.5px;font-weight:700;color:#7C6BF4;margin-bottom:12px;text-align:left}#rechPage .rate span{direction:ltr;display:inline-block}#rechPage .wcard{background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(30,30,60,.06);padding:13px 14px;margin-bottom:14px}#rechPage .urow{display:flex;align-items:center;gap:8px;cursor:pointer}#rechPage .urow img{width:22px;height:22px;border-radius:50%;object-fit:cover}#rechPage .urow b{font-size:14px;color:#1A1A1A;flex:1;font-weight:600}#rechPage .chv{width:16px;height:16px;stroke:#B9BBC4;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}#rechPage .dv{height:1px;background:#F0F0F3;margin:11px 0}#rechPage .albl{font-size:12px;color:#9A9AA3;margin-bottom:5px;text-align:left}#rechPage .arow{display:flex;align-items:center;justify-content:space-between;gap:8px}#rechPage .arow span{font-size:12.5px;color:#1A1A1A;word-break:break-all;flex:1;font-family:monospace}#rechPage .arow svg{width:18px;height:18px;stroke:#7C6BF0;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round;cursor:pointer;flex-shrink:0}#rechPage .nbox{background:#fff;border-radius:10px;height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;box-shadow:0 2px 8px rgba(30,30,60,.06);margin-bottom:14px;cursor:pointer}#rechPage .nbox b{font-size:14px;color:#1A1A1A;font-weight:500}#rechPage .qrow{display:flex;align-items:baseline;justify-content:space-between;gap:6px;margin-bottom:8px}#rechPage .qrow b{font-size:13px;color:#9A9AA3;font-weight:400}#rechPage .qrow span{font-size:12px;color:#9A9AA3;direction:ltr}#rechPage .amt{width:100%;height:48px;border:none;outline:none;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(30,30,60,.06);padding:0 14px;font-size:14px;color:#1A1A1A;font-family:inherit;-moz-appearance:textfield}#rechPage .amt::-webkit-outer-spin-button,#rechPage .amt::-webkit-inner-spin-button{-webkit-appearance:none}#rechPage .amt::placeholder{color:#B9BBC4}#rechPage .eq{font-size:12px;color:#9A9AA3;margin:8px 2px 0;direction:ltr;text-align:left}#rechPage .rbtn{display:flex;align-items:center;justify-content:center;width:calc(100% - 28px);margin:16px 14px 0;height:50px;border:none;border-radius:10px;background:#7D6BF4;color:#fff;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer}#rechPage .rbtn:disabled{opacity:.6}#rechPage .warn{margin:16px 14px 30px}#rechPage .warn h4{font-size:13px;font-weight:700;color:#1A1A1A;margin-bottom:6px}#rechPage .warn p{font-size:11.5px;color:#9A9AA3;line-height:1.9;position:relative;padding-left:10px;margin-bottom:2px}#rechPage .warn p::before{content:'';position:absolute;left:0;top:9px;width:4px;height:4px;border-radius:50%;background:#9A9AA3}.rcM{position:fixed;inset:0;max-width:480px;margin:0 auto;background:rgba(0,0,0,.45);z-index:150;opacity:0;pointer-events:none;transition:opacity .3s}.rcM.open{opacity:1;pointer-events:auto}.rcS{position:fixed;bottom:0;left:0;right:0;max-width:480px;margin:0 auto;background:#fff;border-radius:20px 20px 0 0;z-index:151;transform:translateY(105%);transition:transform .3s ease;padding:18px 14px 30px;direction:ltr}.rcS.open{transform:none}.rcS .cst{font-size:15px;font-weight:800;color:#1A1A1A;text-align:center;margin-bottom:12px}.rcS .csit{display:flex;align-items:center;gap:12px;padding:13px 10px;border-radius:12px;cursor:pointer}.rcS .csit:active{background:#F4F5FF}.rcS .csit.sel{background:#F0EFFE}.rcS .csit img{width:32px;height:32px;border-radius:50%;object-fit:cover}.rcS .csit b{font-size:15px;color:#1A1A1A;direction:ltr}#rechPage #rskl{position:absolute;top:52px;left:0;right:0;bottom:0;background:#fff;z-index:40;display:none}#rechPage.skon #rskl{display:block}#rechPage .shk{background:linear-gradient(90deg,#E9E9EE 25%,#F5F5F8 50%,#E9E9EE 75%);background-size:200% 100%;animation:rcshm 1.3s linear infinite}@keyframes rcshm{to{background-position:-200% 0}}#rechPage .skc{width:64px;height:64px;border-radius:50%;margin:26px auto 20px}#rechPage .skcd{height:260px;border-radius:14px;margin:0 14px}#rechPage .skln{height:12px;border-radius:6px;margin:16px 14px 8px;width:38%}#rechPage .skbx{height:48px;border-radius:10px;margin:0 14px 14px}#rechPage .skbt{height:50px;border-radius:10px;margin:16px 14px 0}";
document.head.appendChild(st);

var w=document.createElement('div');
w.innerHTML='<div id="rechPage"><div class="rph"><span class="rpb" id="rcBack"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></span><span class="ttl" id="rcTtl">Recharge Balance</span></div><div class="ric"><img src="https://gulfxdl.com/assets/recharge-elq7isSj.png" alt=""></div><div class="rcard"><div class="rlbl" id="lbPickCur">Please select deposit currency</div><div class="rate"><span id="lbRate">Current exchange rate:</span> <span>1 USDT = 1 USD</span></div><div class="wcard"><div class="urow" id="curPick"><img id="curImg" src="https://g01-img.s3.eu-west-3.amazonaws.com/stock/174468982517353645886180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png" alt=""><b id="curName">USDT</b><svg class="chv" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="dv"></div><div class="albl" id="lbDepAddr">Deposit address</div><div class="arow"><span id="adrV">TJuW6QiLBZBgNgPZ4W2sUkqHa3i7gfvVch</span><svg id="cpyAdr" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg></div></div><div class="rlbl" id="lbPickNet">Select network</div><div class="nbox" id="netPick"><b id="netName">TRC20</b><svg class="chv" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="qrow"><b id="lbAmt">Recharge amount</b><span>(<span id="lbMin">Minimum deposit:</span> <bdi>100 USDT ≈ 100 USD</bdi>)</span></div><input class="amt" id="amtIn" type="number" placeholder="Enter amount"><div class="eq">≈ <span id="eqV">0.00</span> USDT</div></div><button class="rbtn" id="rcSub">Submit Recharge</button><div class="warn"><h4 id="lbWarnT">Important Notice</h4><p><span id="lbW1">Please do not deposit any assets other than</span> <span id="curWarn">USDT</span><span id="lbW1b">, otherwise the assets cannot be recovered.</span></p><p id="lbW2"></p><p id="lbW3"></p><p id="lbW4"></p></div><div id="rskl"><div class="shk skc"></div><div class="shk skcd"></div><div class="shk skln"></div><div class="shk skbx"></div><div class="shk skbt"></div></div></div><div class="rcM" id="curMask"></div><div class="rcS" id="curSheet"><div class="cst" id="lbTCur">Select Currency</div><div class="csit sel" data-c="USDT"><img src="https://g01-img.s3.eu-west-3.amazonaws.com/stock/174468982517353645886180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png" alt=""><b>USDT</b></div><div class="csit" data-c="USDC"><img src="https://cdn-icons-png.flaticon.com/128/14446/14446284.png" alt=""><b>USDC</b></div><div class="csit" data-c="BTC"><img src="https://cdn-icons-png.flaticon.com/128/9729/9729388.png" alt=""><b>BTC</b></div><div class="csit" data-c="ETH"><img src="https://cdn-icons-png.flaticon.com/128/14446/14446160.png" alt=""><b>ETH</b></div></div><div class="rcM" id="netMask"></div><div class="rcS" id="netSheet"><div class="cst" id="lbTNet">Select Network</div><div class="csit sel" data-n="TRC20"><b>TRC20</b></div><div class="csit" data-n="ERC20"><b>ERC20</b></div></div>';
while(w.firstChild){document.body.appendChild(w.firstChild)}

var rcPage=document.getElementById('rechPage'),amtIn=document.getElementById('amtIn'),eqV=document.getElementById('eqV');
rcPage.classList.add('open','skon');
clearTimeout(window.__rcT);
window.__rcT=setTimeout(function(){rcPage.classList.remove('skon')},2000);

document.getElementById('rcBack').addEventListener('click',function(){rcPage.classList.remove('open')});
amtIn.addEventListener('input',function(){var v=parseFloat(amtIn.value);eqV.textContent=isNaN(v)?'0.00':v.toFixed(2)});

document.getElementById('cpyAdr').addEventListener('click',function(){var t=document.getElementById('adrV').textContent;if(navigator.clipboard){navigator.clipboard.writeText(t)}var ts=document.getElementById('rcTst');ts.querySelector('.rctb').textContent='✓';ts.classList.add('on');setTimeout(function(){ts.classList.remove('on')},900)});

var curCoin='USDT',net='TRC20';

function updAddr(){
var a='';
if(curCoin==='USDT'){a=(net==='TRC20')?ADDR.USDT_TRC20:ADDR.USDT_ERC20}
else if(curCoin==='BTC'){a=ADDR.BTC}
else if(curCoin==='USDC'){a=ADDR.USDC}
else if(curCoin==='ETH'){a=ADDR.ETH}
document.getElementById('adrV').textContent=a;
}

function applyLang(){
var L=I18N[curLang]||I18N.Filipino;
document.getElementById('rcTtl').textContent=L.title;
document.getElementById('lbPickCur').textContent=L.pickCur;
document.getElementById('lbRate').textContent=L.rate;
document.getElementById('lbDepAddr').textContent=L.depAddr;
document.getElementById('lbPickNet').textContent=L.pickNet;
document.getElementById('lbAmt').textContent=L.amt;
document.getElementById('lbMin').textContent=L.minDep;
document.getElementById('amtIn').placeholder=L.phAmt;
document.getElementById('rcSub').textContent=L.subBtn;
document.getElementById('lbWarnT').textContent=L.warnT;
document.getElementById('lbW1').textContent=L.w1;
document.getElementById('lbW1b').textContent=L.w1b;
document.getElementById('lbW2').textContent=L.w2;
document.getElementById('lbW3').textContent=L.w3;
document.getElementById('lbW4').textContent=L.w4;
document.getElementById('lbTCur').textContent=L.tCur;
document.getElementById('lbTNet').textContent=L.tNet;
}

applyLang();
updAddr();

// Load Firebase and listen for user lang
loadFB(function(){});
window.addEventListener('rcLangReady',function(e){
var lg=e.detail;
if(lg && I18N[lg]){curLang=lg;applyLang()}
});

document.getElementById('rcSub').addEventListener('click',function(){
var v=parseFloat(amtIn.value);
var L=I18N[curLang]||I18N.Filipino;
if(isNaN(v)||v<100){
var ts=document.getElementById('rcTst');
ts.querySelector('.rctb').textContent=L.errMin;
ts.classList.add('on');
setTimeout(function(){ts.classList.remove('on')},1800);
return
}
var btn=document.getElementById('rcSub');
btn.disabled=true;
var addr=document.getElementById('adrV').textContent;
var netType=(curCoin==='USDT')?net:(curCoin==='BTC'?'BTC':(curCoin==='USDC'?'ERC20':'ERC20'));

function doSave(){
try{
var fb=window._rcFB;
if(!fb||!fb.db){throw new Error('fb not ready')}
var uid=(fb.user&&fb.user.uid)?fb.user.uid:'anonymous';
var payload={
uid:uid,
date:new Date().toISOString(),
createdAt:fb.serverTimestamp(),
network:netType,
address:addr,
status:'pending',
amount:v,
amountUSD:v,
amountCoin:v,
currency:curCoin,
networkType:netType,
lang:curLang
};
fb.addDoc(fb.collection(fb.db,'recharge_requests'),payload).then(function(){
if(uid && uid!=='anonymous'){
try{fb.addDoc(fb.collection(fb.db,'users/'+uid+'/recharges'),payload)}catch(e){}
}
var ts=document.getElementById('rcTst');
ts.querySelector('.rctb').textContent=L.okMsg;
ts.classList.add('on');
setTimeout(function(){ts.classList.remove('on')},1700);
amtIn.value='';
eqV.textContent='0.00';
btn.disabled=false;
}).catch(function(err){
var ts=document.getElementById('rcTst');
ts.querySelector('.rctb').textContent=L.saveErr;
ts.classList.add('on');
setTimeout(function(){ts.classList.remove('on')},1800);
btn.disabled=false;
});
}catch(e){
var ts=document.getElementById('rcTst');
ts.querySelector('.rctb').textContent=L.saveErr;
ts.classList.add('on');
setTimeout(function(){ts.classList.remove('on')},1800);
btn.disabled=false;
}
}

if(window._rcFB && window._rcFB.ready){doSave()}
else{
loadFB(doSave);
var wait=0;
var iv=setInterval(function(){
wait++;
if(window._rcFB && window._rcFB.ready){clearInterval(iv);doSave()}
else if(wait>50){clearInterval(iv);doSave()}
},200);
}
});

var curData={
USDT:'https://g01-img.s3.eu-west-3.amazonaws.com/stock/174468982517353645886180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png',
USDC:'https://cdn-icons-png.flaticon.com/128/14446/14446284.png',
BTC:'https://cdn-icons-png.flaticon.com/128/9729/9729388.png',
ETH:'https://cdn-icons-png.flaticon.com/128/14446/14446160.png'
};

var curMask=document.getElementById('curMask'),curSheet=document.getElementById('curSheet');
function curClose(){curMask.classList.remove('open');curSheet.classList.remove('open')}
document.getElementById('curPick').addEventListener('click',function(){curMask.classList.add('open');curSheet.classList.add('open')});
curMask.addEventListener('click',curClose);

var netMask=document.getElementById('netMask'),netSheet=document.getElementById('netSheet'),netPick=document.getElementById('netPick'),netName=document.getElementById('netName');
function netClose(){netMask.classList.remove('open');netSheet.classList.remove('open')}
netPick.addEventListener('click',function(){if(curCoin!=='USDT')return;netMask.classList.add('open');netSheet.classList.add('open')});
netMask.addEventListener('click',netClose);

document.querySelectorAll('#netSheet .csit').forEach(function(it){
it.addEventListener('click',function(){
net=it.getAttribute('data-n');
netName.textContent=net;
document.querySelectorAll('#netSheet .csit').forEach(function(x){x.classList.remove('sel')});
it.classList.add('sel');
updAddr();
netClose();
});
});

document.querySelectorAll('#curSheet .csit').forEach(function(it){
it.addEventListener('click',function(){
var c=it.getAttribute('data-c');
curCoin=c;
document.getElementById('curImg').src=curData[c];
document.getElementById('curName').textContent=c;
document.getElementById('curWarn').textContent=c;
document.querySelectorAll('#curSheet .csit').forEach(function(x){x.classList.remove('sel')});
it.classList.add('sel');
if(c==='USDT'){netName.textContent=net;netPick.style.pointerEvents='auto';netPick.style.opacity='1'}
else if(c==='BTC'){netName.textContent='BTC';netPick.style.pointerEvents='none';netPick.style.opacity='.6'}
else{netName.textContent='ERC20';netPick.style.pointerEvents='none';netPick.style.opacity='.6'}
updAddr();
curClose();
});
});

})();
