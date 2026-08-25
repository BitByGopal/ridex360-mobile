/* RideX360 — mobile-first prototype logic
   Vanilla JS, no build step required. Static data models a live backend. */

const TERMS = {
  school:{icon:'🏫',org:'School',use:'Student transportation',role:'Parent',roleTag:'PARENT',
    person:'Child',personPlural:'Students',vehicle:'Bus',vehicleName:'Bus 12',greet:'Good morning',
    headline:'Track your bus',boarded:'Child boarded',absentTitle:'Not travelling today?',
    absentSub:'Mark absent for today',stopRemoved:"Stop removed from today's route.",
    driverEyebrow:'Morning route',paxTitle:'Students on this route',
    routes:{morning:'Route A · Main Road Line',evening:'Route A · Return Line'},
    passengers:[{n:'Aarav Mehta',s:'Grade 4 · Stop 3'},{n:'Diya Sharma',s:'Grade 2 · Stop 3'},{n:'Kabir Rao',s:'Grade 5 · Stop 4'},{n:'Ishaan Verma',s:'Grade 3 · Stop 4'},{n:'Myra Nair',s:'Grade 1 · Stop 5'}],
    trips:[['Morning pickup','Today · 7:42 AM','done','Bus 12 · Route A · 5 stops · on time'],
           ['Afternoon return','Yesterday · 3:58 PM','done','Bus 12 · Route A · 5 stops · on time'],
           ['Morning pickup','Yesterday · 7:39 AM','done','Bus 12 · Route A · 5 stops · 2 min early'],
           ['Morning pickup','Tue · absent','skip','Marked absent — stop removed automatically']]},
  college:{icon:'🎓',org:'College',use:'Campus transportation',role:'Student',roleTag:'STUDENT',
    person:'Student',personPlural:'Students',vehicle:'Shuttle',vehicleName:'Shuttle 4',greet:'Hey there',
    headline:'Track your shuttle',boarded:'Student boarded',absentTitle:'Not riding today?',
    absentSub:"Skip today's shuttle",stopRemoved:"Stop removed from today's shuttle run.",
    driverEyebrow:'Campus route',paxTitle:'Students on this route',
    routes:{morning:'Route C · Hostel Line',evening:'Route C · Evening Line'},
    passengers:[{n:'Rhea Kapoor',s:'Hostel B · Stop 1'},{n:'Yash Malhotra',s:'Hostel B · Stop 1'},{n:'Sana Iyer',s:'Hostel D · Stop 2'},{n:'Devansh Rao',s:'Hostel D · Stop 2'},{n:'Priya Nambiar',s:'Hostel A · Stop 3'}],
    trips:[['Campus shuttle','Today · 8:05 AM','done','Shuttle 4 · Route C · 4 stops · on time'],
           ['Evening return','Yesterday · 6:20 PM','done','Shuttle 4 · Route C · 4 stops · on time'],
           ['Campus shuttle','Yesterday · 8:02 AM','done','Shuttle 4 · Route C · 4 stops · on time'],
           ['Campus shuttle','Tue · skipped','skip','Marked not travelling — stop removed automatically']]},
  company:{icon:'🏢',org:'Company',use:'Employee transportation',role:'Employee',roleTag:'EMPLOYEE',
    person:'Employee',personPlural:'Employees',vehicle:'Shuttle',vehicleName:'Shuttle 7',greet:'Good morning',
    headline:'Track your shuttle',boarded:'Employee boarded',absentTitle:'Not using transport today?',
    absentSub:"Skip today's shuttle",stopRemoved:"Stop removed from today's shuttle route.",
    driverEyebrow:'Employee route',paxTitle:'Employees on this route',
    routes:{morning:'Route E · Office Line',evening:'Route E · Return Line'},
    passengers:[{n:'Ananya Bose',s:'Sector 4 · Stop 2'},{n:'Rohit Sinha',s:'Sector 4 · Stop 2'},{n:'Karan Mehra',s:'Sector 6 · Stop 3'},{n:'Neha Joshi',s:'Sector 6 · Stop 3'},{n:'Vivek Menon',s:'Sector 9 · Stop 5'}],
    trips:[['Office pickup','Today · 8:50 AM','done','Shuttle 7 · Route E · 5 stops · on time'],
           ['Evening drop','Yesterday · 6:40 PM','done','Shuttle 7 · Route E · 5 stops · on time'],
           ['Office pickup','Yesterday · 8:47 AM','done','Shuttle 7 · Route E · 5 stops · on time'],
           ['Office pickup','Tue · skipped','skip','Marked not travelling — stop removed automatically']]},
  hospital:{icon:'🏥',org:'Hospital',use:'Staff transportation',role:'Staff',roleTag:'STAFF',
    person:'Staff member',personPlural:'Staff',vehicle:'Shuttle',vehicleName:'Shuttle 2',greet:'Good evening',
    headline:'Track your shuttle',boarded:'Staff boarded',absentTitle:'Cancel transport today?',
    absentSub:'Cancel for this shift',stopRemoved:"Stop removed from tonight's shuttle route.",
    driverEyebrow:'Night shift route',paxTitle:'Staff on this route',
    routes:{morning:'Route N · Night Shift Line',evening:'Route D · Day Shift Line'},
    passengers:[{n:'Dr. Alia Khan',s:'Night shift · Stop 1'},{n:'Nurse Priya Das',s:'Night shift · Stop 1'},{n:'Dr. Sameer Vora',s:'Night shift · Stop 2'},{n:'Nurse Tara Iqbal',s:'Night shift · Stop 2'},{n:'Dr. Farhan Ali',s:'Night shift · Stop 3'}],
    trips:[['Night shift pickup','Today · 11:40 PM','done','Shuttle 2 · Route N · 3 stops · on time'],
           ['Morning drop','Yesterday · 8:10 AM','done','Shuttle 2 · Route D · 3 stops · on time'],
           ['Night shift pickup','Yesterday · 11:38 PM','done','Shuttle 2 · Route N · 3 stops · on time'],
           ['Night shift pickup','Tue · skipped','skip','Marked cancelled — stop removed automatically']]},
  factory:{icon:'🏭',org:'Factory',use:'Worker transportation',role:'Worker',roleTag:'WORKER',
    person:'Worker',personPlural:'Workers',vehicle:'Bus',vehicleName:'Bus 9',greet:'Shift starting soon',
    headline:'Track your transport',boarded:'Worker boarded',absentTitle:'Skip this shift?',
    absentSub:'Not travelling this shift',stopRemoved:"Stop removed from this shift's route.",
    driverEyebrow:'Shift A route',paxTitle:'Workers on this route',
    routes:{morning:'Route F1 · Shift A Line',evening:'Route F2 · Shift B Line'},
    passengers:[{n:'Ramesh Yadav',s:'Shift A · Stop 1'},{n:'Suresh Pillai',s:'Shift A · Stop 1'},{n:'Manoj Tiwari',s:'Shift A · Stop 2'},{n:'Deepak Naik',s:'Shift A · Stop 2'},{n:'Anil Kumar',s:'Shift A · Stop 3'}],
    trips:[['Shift A pickup','Today · 6:10 AM','done','Bus 9 · Route F1 · 3 stops · on time'],
           ['Shift A return','Yesterday · 2:40 PM','done','Bus 9 · Route F1 · 3 stops · on time'],
           ['Shift A pickup','Yesterday · 6:08 AM','done','Bus 9 · Route F1 · 3 stops · on time'],
           ['Shift A pickup','Tue · skipped','skip','Marked not travelling — stop removed automatically']]},
  hotel:{icon:'🏨',org:'Hotel',use:'Employee transportation',role:'Employee',roleTag:'EMPLOYEE',
    person:'Employee',personPlural:'Employees',vehicle:'Shuttle',vehicleName:'Shuttle 1',greet:'Good evening',
    headline:'Track your shuttle',boarded:'Employee boarded',absentTitle:'Not using transport today?',
    absentSub:"Skip today's shuttle",stopRemoved:"Stop removed from today's shuttle route.",
    driverEyebrow:'Evening shift route',paxTitle:'Employees on this route',
    routes:{morning:'Route H1 · Morning Line',evening:'Route H2 · Evening Line'},
    passengers:[{n:'Meera Chawla',s:'Evening shift · Stop 1'},{n:'Arjun Bhatt',s:'Evening shift · Stop 1'},{n:'Fatima Sheikh',s:'Evening shift · Stop 2'},{n:'Rajat Oberoi',s:'Evening shift · Stop 2'},{n:'Simran Kaur',s:'Night shift · Stop 3'}],
    trips:[['Evening pickup','Today · 5:30 PM','done','Shuttle 1 · Route H2 · 3 stops · on time'],
           ['Night drop','Yesterday · 11:50 PM','done','Shuttle 1 · Route H2 · 3 stops · on time'],
           ['Evening pickup','Yesterday · 5:28 PM','done','Shuttle 1 · Route H2 · 3 stops · on time'],
           ['Evening pickup','Tue · skipped','skip','Marked not travelling — stop removed automatically']]},
  industrial:{icon:'🏗️',org:'Industrial Campus',use:'Workforce transportation',role:'Worker',roleTag:'WORKER',
    person:'Worker',personPlural:'Workers',vehicle:'Shuttle',vehicleName:'Shuttle 5',greet:'Shift starting soon',
    headline:'Track your shuttle',boarded:'Worker boarded',absentTitle:'Skip this shift?',
    absentSub:'Not travelling this shift',stopRemoved:"Stop removed from this shift's route.",
    driverEyebrow:'Zone A route',paxTitle:'Workers on this route',
    routes:{morning:'Route Z1 · Zone A Line',evening:'Route Z2 · Zone B Line'},
    passengers:[{n:'Vikram Solanki',s:'Zone A · Stop 1'},{n:'Harish Reddy',s:'Zone A · Stop 1'},{n:'Nikhil Bansal',s:'Zone B · Stop 2'},{n:'Pooja Rana',s:'Zone B · Stop 2'},{n:'Rakesh Dubey',s:'Zone C · Stop 3'}],
    trips:[['Zone A pickup','Today · 6:20 AM','done','Shuttle 5 · Route Z1 · 3 stops · on time'],
           ['Zone A return','Yesterday · 3:10 PM','done','Shuttle 5 · Route Z1 · 3 stops · on time'],
           ['Zone A pickup','Yesterday · 6:18 AM','done','Shuttle 5 · Route Z1 · 3 stops · on time'],
           ['Zone A pickup','Tue · skipped','skip','Marked not travelling — stop removed automatically']]}
};
const ORG_ORDER = ['school','college','company','hospital','factory','hotel','industrial'];

const state = {
  org:'school', mode:'passenger', screen:'home', route:'morning',
  busProgress:32, eta:7, distance:1.2,
  passengers:[], replacementMode:false, trafficMode:false, altSelected:false
};
function initPassengers(){ state.passengers = TERMS[state.org].passengers.map((p,i)=>({...p, absent:false, boarded:i<2})); }
initPassengers();

/* ---------- Org sheet ---------- */
const orgOptions = document.getElementById('orgOptions');
ORG_ORDER.forEach(id=>{
  const t = TERMS[id];
  const opt = document.createElement('button');
  opt.className = 'org-opt' + (id===state.org?' selected':'');
  opt.dataset.org = id;
  opt.innerHTML = `<div class="oi">${t.icon}</div><div class="ot"><div class="n">${t.org}</div><div class="u">${t.use}</div></div>`;
  opt.addEventListener('click', ()=>{ selectOrg(id); closeSheet('sheetBackdrop'); });
  orgOptions.appendChild(opt);
});
function openSheet(id){ document.getElementById(id).classList.add('open'); }
function closeSheet(id){ document.getElementById(id).classList.remove('open'); }
document.getElementById('sheetBackdrop').addEventListener('click', e=>{ if(e.target.id==='sheetBackdrop') closeSheet('sheetBackdrop'); });
document.getElementById('tripSheetBackdrop').addEventListener('click', e=>{ if(e.target.id==='tripSheetBackdrop') closeSheet('tripSheetBackdrop'); });
document.getElementById('orgChipBtn').addEventListener('click', ()=>openSheet('sheetBackdrop'));
document.getElementById('qaOrgSwitch').addEventListener('click', ()=>openSheet('sheetBackdrop'));
document.getElementById('profileOrgBtn').addEventListener('click', ()=>openSheet('sheetBackdrop'));

function selectOrg(id){
  state.org = id; initPassengers();
  state.trafficMode=false; state.altSelected=false; state.replacementMode=false;
  document.querySelectorAll('.org-opt').forEach(o=>o.classList.toggle('selected', o.dataset.org===id));
  renderAll();
}

/* ---------- Bottom nav ---------- */
function showScreen(name){
  state.screen = name;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('.bottom-nav button[data-screen]').forEach(b=>b.classList.toggle('active', b.dataset.screen===name));
}
document.getElementById('navPassenger').addEventListener('click', e=>{
  const b = e.target.closest('button[data-screen]'); if(b) showScreen(b.dataset.screen);
});
document.getElementById('navDriver').addEventListener('click', e=>{
  const b = e.target.closest('button[data-screen]'); if(b) showScreen(b.dataset.screen);
});
document.getElementById('goTrackBtn').addEventListener('click', ()=>showScreen('track'));
document.getElementById('qaTrackNav').addEventListener('click', ()=>showScreen('track'));
document.getElementById('qaTripsNav').addEventListener('click', ()=>showScreen('trips'));

/* ---------- Route toggle ---------- */
document.getElementById('routeToggle').addEventListener('click', e=>{
  const b = e.target.closest('button[data-route]'); if(!b) return;
  state.route = b.dataset.route;
  document.querySelectorAll('#routeToggle button').forEach(x=>x.classList.toggle('active', x===b));
  renderTrack();
});

/* ---------- Mode switch ---------- */
function setMode(mode){
  state.mode = mode;
  document.getElementById('navPassenger').style.display = mode==='passenger' ? 'flex':'none';
  document.getElementById('navDriver').style.display = mode==='driver' ? 'flex':'none';
  document.getElementById('modeBtnPassenger').classList.toggle('active', mode==='passenger');
  document.getElementById('modeBtnDriver').classList.toggle('active', mode==='driver');
  showScreen(mode==='passenger' ? 'home' : 'route');
  renderAll();
}
document.getElementById('modeBtnPassenger').addEventListener('click', ()=>setMode('passenger'));
document.getElementById('modeBtnDriver').addEventListener('click', ()=>setMode('driver'));

/* ---------- Absence toggle ---------- */
function toggleAbsence(){
  state.passengers[0].absent = !state.passengers[0].absent;
  document.getElementById('absenceToggle').setAttribute('aria-checked', String(state.passengers[0].absent));
  renderAll();
}
document.getElementById('absenceToggle').addEventListener('click', toggleAbsence);
document.getElementById('qaAbsence').addEventListener('click', ()=>{ toggleAbsence(); showScreen('trips'); });

/* ---------- Driver toggles ---------- */
document.getElementById('navReplToggle').addEventListener('click', ()=>{ state.replacementMode=!state.replacementMode; showScreen('route'); renderDriver(); });
document.getElementById('navTrafficToggle').addEventListener('click', ()=>{ state.trafficMode=!state.trafficMode; if(!state.trafficMode) state.altSelected=false; showScreen('route'); renderDriver(); renderHome(); });

/* ---------- Settings toggles ---------- */
['notifToggle','shareToggle'].forEach(id=>{
  const el = document.getElementById(id);
  el.addEventListener('click', ()=>{
    el.classList.toggle('on');
    el.setAttribute('aria-checked', String(el.classList.contains('on')));
  });
});

/* ---------- Trip detail sheet ---------- */
function openTripDetail(title, sub, status, detail){
  document.getElementById('tripSheetTitle').textContent = title;
  document.getElementById('tripSheetBody').innerHTML = `
    <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:12px;">${sub}</p>
    <div class="card" style="margin-bottom:10px;">
      <div class="info-t">${status==='done' ? 'Trip completed' : 'Trip skipped'}</div>
      <div class="info-s">${detail}</div>
    </div>`;
  openSheet('tripSheetBackdrop');
}

/* ---------- Render: Home ---------- */
function renderHome(){
  const t = TERMS[state.org];
  document.getElementById('homeEyebrow').textContent = t.greet;
  document.getElementById('homeGreet').textContent = t.headline;
  document.getElementById('orgChipLabel').textContent = t.org;
  document.getElementById('roleChip').textContent = t.role;
  document.getElementById('vhName').textContent = t.vehicleName;
  document.getElementById('vhRoute').textContent = t.routes[state.route];
  document.getElementById('vhEta').textContent = state.eta;
  document.getElementById('vhDist').textContent = state.distance.toFixed(1);
  const active = state.passengers.filter(p=>!p.absent);
  document.getElementById('vhCountLabel').textContent = active.length + ' on board';
  document.getElementById('routeStatusValue').textContent = state.passengers[0].absent ? 'Recalculated' : 'Confirmed';
  document.getElementById('safetyStatusValue').textContent = state.busProgress>35 ? 'Boarding verified' : 'Awaiting boarding';
  document.getElementById('qaAbsenceTitle').textContent = state.passengers[0].absent ? 'Undo absence' : 'Mark absent';
  document.getElementById('homeAlertBanner').innerHTML = state.trafficMode
    ? `<div class="banner warn">⚠️ <div><b>Heavy traffic detected</b>${state.altSelected? 'Driver switched to the alternative route — ETA updated.' : 'Your driver may take an alternative route.'}</div></div>` : '';
}

/* ---------- Render: Track ---------- */
function renderTrack(){
  const t = TERMS[state.org];
  document.getElementById('trackVehicle').textContent = t.vehicleName;
  document.getElementById('routeFill').style.width = state.busProgress+'%';
  document.getElementById('vehMarker').style.left = state.busProgress+'%';
  document.getElementById('tDist').textContent = state.distance.toFixed(1);
  document.getElementById('tEta').textContent = state.eta;
  document.getElementById('tVeh').textContent = t.vehicleName.split(' ')[1]||'—';
  document.getElementById('tVehLabel').textContent = t.vehicle.toUpperCase();
  const steps = [
    {label:t.vehicle+' started', done:true},
    {label:'Approaching pickup point', done:state.busProgress>10},
    {label:t.boarded, done:state.busProgress>35},
    {label:'Travelling', done:state.busProgress>35, active:state.busProgress>35 && state.busProgress<95},
    {label:'Destination reached', done:state.busProgress>=95}
  ];
  document.getElementById('trackTimeline').innerHTML = steps.map(s=>`
    <div class="tl-item ${s.done?'done':(s.active?'active':'')}">
      <div class="tl-dot">${s.done?'✓':(s.active?'●':'○')}</div>
      <div class="tl-text"><div class="t">${s.label}</div></div>
    </div>`).join('');
}

/* ---------- Render: Trips ---------- */
function renderTrips(){
  const t = TERMS[state.org];
  document.getElementById('absenceTitle').textContent = t.absentTitle;
  document.getElementById('absenceRowName').textContent = state.passengers[0].n;
  document.getElementById('absenceRowSub').textContent = t.absentSub;
  document.getElementById('absenceToggle').classList.toggle('on', state.passengers[0].absent);
  document.getElementById('absenceBanner').innerHTML = state.passengers[0].absent
    ? `<div class="banner good">✓ <div><b>${t.stopRemoved}</b>Open Driver mode to see the route recalculate.</div></div>` : '';
  const list = document.getElementById('tripHistory');
  list.innerHTML = '';
  t.trips.forEach(([title,sub,status,detail])=>{
    const item = document.createElement('button');
    item.className = 'trip-item';
    item.innerHTML = `<div class="trip-ic">${status==='done'?'✓':'—'}</div>
      <div class="trip-info"><div class="t">${title}</div><div class="s">${sub}</div></div>
      <span class="trip-status ${status}">${status==='done'?'Completed':'Skipped'}</span>`;
    item.addEventListener('click', ()=>openTripDetail(title, sub, status, detail));
    list.appendChild(item);
  });
}

/* ---------- Render: Driver / Route ---------- */
function renderDriver(){
  const t = TERMS[state.org];
  document.getElementById('driverEyebrow').textContent = state.replacementMode ? 'Replacement · '+t.driverEyebrow.toLowerCase() : t.driverEyebrow;
  document.getElementById('driverVehicle').textContent = t.vehicleName;
  document.getElementById('paxTitle').textContent = t.paxTitle;
  const active = state.passengers.filter(p=>!p.absent);
  document.getElementById('dActive').textContent = active.length;
  document.getElementById('dRemoved').textContent = state.passengers.length - active.length;
  document.getElementById('dEta').textContent = state.altSelected?16:(state.trafficMode?24:19);
  document.getElementById('dRouteFill').style.width = state.busProgress+'%';
  document.getElementById('dRouteFill').style.background = state.altSelected ? 'var(--good)' : 'var(--rose-light)';
  document.getElementById('dVehMarker').style.left = state.busProgress+'%';

  let banners = '';
  if(state.replacementMode) banners += `<div class="banner warn">🔁 <div><b>Regular driver unavailable today.</b>You're covering this route — vehicle, stops, and passenger list are pre-loaded below.</div></div>`;
  if(state.trafficMode) banners += state.altSelected
    ? `<div class="banner good">✓ <div><b>Using alternative route</b>New ETA: 16 min. Passenger app updated.</div></div>`
    : `<div class="banner alert">⚠️ <div><b>Heavy traffic detected</b>Current ETA: 24 min · Alternative: 16 min<button class="banner-btn" id="useAltBtn">Use Alternative Route</button></div></div>`;
  document.getElementById('driverBanners').innerHTML = banners;
  const useAlt = document.getElementById('useAltBtn');
  if(useAlt) useAlt.addEventListener('click', ()=>{ state.altSelected=true; renderDriver(); renderHome(); });

  document.getElementById('paxList').innerHTML = state.passengers.map(p=>`
    <div class="pax-item ${p.absent?'removed':''}">
      <div class="pax-av">${p.n.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
      <div class="pax-info"><div class="n">${p.n}</div><div class="s">${p.s}</div></div>
      ${p.absent?'':`<span class="pax-stat ${p.boarded?'board':'wait'}">${p.boarded?'Boarded':'Waiting'}</span>`}
    </div>`).join('');
}

/* ---------- Render: Profile ---------- */
function renderProfile(){
  const t = TERMS[state.org];
  document.getElementById('profileRole').textContent = t.role+' · '+t.org;
  document.getElementById('profileOrgIcon').textContent = t.icon;
  document.getElementById('profileOrgName').textContent = t.org;
}

function renderAll(){
  renderHome(); renderTrack(); renderTrips(); renderDriver(); renderProfile();
}

/* ---------- Simulated live motion ---------- */
setInterval(()=>{
  if(state.busProgress < 96){
    state.busProgress += 0.6;
    state.distance = Math.max(0.1, +(1.2 * (1 - state.busProgress/100)).toFixed(1));
    state.eta = Math.max(1, Math.round(7 * (1 - state.busProgress/100)));
    renderHome(); renderTrack(); renderDriver();
  }
}, 1200);

renderAll();
