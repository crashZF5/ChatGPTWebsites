const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&button.dataset.filter!==card.dataset.category;});}));
const content={
 reel:['THE MOVING IMAGE','The showreel','A place for Adeel’s official showreel. The approved video hasn’t been provided yet; this preview does not contain a playable reel.'],
 film:['SELECTED WORK / FILM','On the big screen.','This collection will hold approved film credits, production stills, role details, and trailers. Project information is awaiting client curation.'],
 television:['SELECTED WORK / TELEVISION','A story, unfolding.','This collection will hold approved television credits, character details, and selected scenes. Project information is awaiting client curation.'],
 conversations:['SELECTED WORK / CONVERSATIONS','Beyond the script.','A space for interviews and conversations about acting, writing, and the creative process. Approved interview links will be added here.'],
 essays:['THE WRITING ROOM','Essays & notes.','Personal essays and observations will appear here once Adeel provides the writing he wants to share. No sample text is presented as his own.'],
 stories:['THE WRITING ROOM','Stories & scripts.','A space for selected fiction, excerpts, and writing projects. Publication details and approved excerpts are still to be supplied.'],
 contact:['WORK & COLLABORATIONS','A conversation starts here.','Contact and representation details are awaiting confirmation. This preview does not submit inquiries. Once the client supplies an approved address, this will connect directly to the right person.']
};
const dialog=document.querySelector('dialog');
document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>{const [label,title,body]=content[button.dataset.dialog];document.querySelector('#dialog-label').textContent=label;document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-body').textContent=body;dialog.showModal();}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
