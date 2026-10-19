const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote').addEventListener('submit',e=>{
 e.preventDefault();const d=new FormData(e.currentTarget);
 const name=d.get('name').trim(),town=d.get('town').trim(),car=d.get('car').trim(),service=d.get('service'),notes=d.get('notes').trim();
 if(!name||!town||!car||!service){document.getElementById('error').textContent='Completa els camps obligatoris.';return;}
 const msg=`Hola JX DETAILING! Soc ${name}. M'interessa: ${service}. Municipi: ${town}. Vehicle: ${car}.${notes?' Detalls: '+notes+'.':''} Em podeu passar un pressupost, si us plau?`;
 // CONFIRMAR quin dels dos telèfons és el WhatsApp del negoci abans de publicar.
 window.open('https://wa.me/34654275583?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');
});
