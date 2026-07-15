const MBGame={
 user:JSON.parse(localStorage.getItem('user')||'{}'),
 money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})},
 async json(url,options={}){const r=await fetch(url,{...options,headers:{'Content-Type':'application/json',...(options.headers||{})}});let d={};try{d=await r.json()}catch{}if(!r.ok)throw new Error(d.error||'Falha na operação');return d},
 require(){if(!this.user.id){location.href='/login.html';return false}return true},
 async balance(){const d=await this.json(`/api/user/${this.user.id}/balance`);const t=Number(d.balance||0)+Number(d.bonus_balance||0);document.querySelectorAll('[data-balance]').forEach(e=>e.textContent=this.money(t));this.user.balance=d.balance;this.user.bonus_balance=d.bonus_balance;localStorage.setItem('user',JSON.stringify(this.user));return t},
 setMessage(text,type=''){const e=document.querySelector('[data-message]');if(!e)return;e.textContent=text;e.className='message '+type},
 logout(){localStorage.removeItem('user');location.href='/login.html'},
 confetti(){for(let i=0;i<32;i++){const p=document.createElement('i');p.style.cssText=`position:fixed;z-index:99;width:8px;height:12px;left:${Math.random()*100}vw;top:-20px;background:hsl(${Math.random()*360} 90% 60%);transform:rotate(${Math.random()*180}deg);animation:mbfall ${1.5+Math.random()*2}s linear forwards`;document.body.appendChild(p);setTimeout(()=>p.remove(),3600)}}
};
const s=document.createElement('style');s.textContent='@keyframes mbfall{to{transform:translateY(110vh) rotate(760deg)}}';document.head.appendChild(s);
