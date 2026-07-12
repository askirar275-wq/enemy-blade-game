// ===== Enemy System =====

const enemies = [];

for(let i=0;i<5;i++){

    enemies.push({

        x:Math.random()*world.width,
        y:Math.random()*world.height,

        radius:20,

        color:`hsl(${Math.random()*360},80%,55%)`,

        speed:2,

        angle:Math.random()*Math.PI*2,

        blades:[]

    });

}

// Enemy Move
function updateEnemies(){

    enemies.forEach(e=>{

        if(Math.random()<0.02){
            e.angle=Math.random()*Math.PI*2;
        }

        e.x+=Math.cos(e.angle)*e.speed;
        e.y+=Math.sin(e.angle)*e.speed;

        if(e.x<20)e.x=20;
        if(e.y<20)e.y=20;
        if(e.x>world.width-20)e.x=world.width-20;
        if(e.y>world.height-20)e.y=world.height-20;

    });

}

// Draw Enemy
function drawEnemies(){

    enemies.forEach(e=>{

        ctx.beginPath();

        ctx.fillStyle=e.color;

        ctx.arc(
            e.x-camera.x,
            e.y-camera.y,
            e.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

    });

}
