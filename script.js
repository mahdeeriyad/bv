const canvas = document.getElementById('bengalCanvas');
const ctx = canvas.getContext('2d');
const progressBar = document.getElementById('progress');

let zoom = 1.0;
const scenes = [
    { title: "Earth", desc: "The starting point: Our blue marble." },
    { title: "South Asia", desc: "Focusing on the Bengal Delta." },
    { title: "Bangladesh Map", desc: "The sovereign land of rivers." },
    { title: "Padma River", desc: "Lifeblood of the nation." },
    { title: "Village Life", desc: "The heart of Bengali culture." },
    { title: "Connectivity", desc: "Digital empowerment in youth." },
    { title: "Dhaka Skyline", desc: "Urban growth and ambition." },
    { title: "Tech Ecosystem", desc: "The rising startup scene." },
    { title: "Innovation", desc: "AI and robotics frontier." },
    { title: "Future Smart City", desc: "Sustainable urban living." },
    { title: "Atmosphere", desc: "Returning to the stars." }
];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Zoom logic
    zoom += 0.005;
    if (zoom > 5) zoom = 1.0; // Loop
    
    // Update UI
    progressBar.style.width = `${(zoom - 1) / 4 * 100}%`;
    
    requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();

// Controls
document.getElementById('fullscreenBtn').onclick = () => document.documentElement.requestFullscreen();
document.getElementById('infoBtn').onclick = () => {
    document.getElementById('info-panel').classList.remove('hidden');
};
