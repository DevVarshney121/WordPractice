(()=>{'use strict';
const path=location.pathname.split('/').pop()||'index.html';
const pages=[
 {file:'index.html',label:'Panel',icon:'▦',title:'YOUR PANEL'},
 {file:'about.html',label:'Hindi Mean',icon:'अ',title:'HINDI MEAN'},
 {file:'contact.html',label:'Synonym',icon:'≋',title:'SYNONYM PRACTICE'},
 {file:'user-select-word.html',label:'User Define',icon:'✎',title:'USER DEFINE'}
];
const current=pages.find(p=>p.file===path)||({file:path,label:path==='manage-words.html'?'Manage Words':path==='extra.html'?'Dhappa':'Practice',icon:path==='manage-words.html'?'⚙':'✦',title:path==='manage-words.html'?'WORD MANAGER':path==='extra.html'?'DHAPPA PRACTICE':'WORD PRACTICE'});
const home=path==='index.html';
const header=document.createElement('header');header.className='app-topbar';
header.innerHTML=`<a class="app-back" href="index.html" aria-label="${home?'Open panel':'Back to panel'}">${home?'▦':'‹'}</a><div class="app-brand"><strong>WORD PRACTICE</strong><span>${current.title}</span></div><span class="app-status"><span aria-hidden="true">●</span> READY</span>`;
document.body.insertBefore(header,document.body.firstChild);
const navItems=pages;
const nav=document.createElement('nav');nav.className='app-bottom-nav';nav.setAttribute('aria-label','Main navigation');
nav.innerHTML=navItems.map(p=>`<a href="${p.file}" class="${path===p.file?'active':''}" ${path===p.file?'aria-current="page"':''}><span class="app-icon" aria-hidden="true">${p.icon}</span><span>${p.label}</span></a>`).join('');
document.body.appendChild(nav);
// A real app-like install experience where supported (served over HTTPS, such as Vercel).
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
})();
