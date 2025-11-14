
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize);
resize();
for(let i=0;i<90;i++){ particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*2.5+0.6, dx:(Math.random()-0.5)*1.4, dy:(Math.random()-0.5)*1.4 }); }
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let p of particles){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(122,0,255,0.12)';
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  }
  requestAnimationFrame(draw);
}
draw();

// copy contract address button
function copyAddress(el){
  const addr = el.dataset.addr;
  navigator.clipboard.writeText(addr).then(()=>{
    const orig = el.innerText;
    el.innerText = 'Copied ✅';
    setTimeout(()=> el.innerText = orig, 1500);
  });
}
