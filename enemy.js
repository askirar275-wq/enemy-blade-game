// =========================
// Enemy System V2
// =========================

const enemies=[];

// Enemy Spawn
for(let i=0;i<5;i++){

    enemies.push({

        x:Math.random()*WORLD.width,
        y:Math.random()*WORLD.height,

        radius:20,

        speed:2,

        angle:Math.random()*Math.PI*2,

        color:`hsl(${Math.random()*360},80%,55%)`,

        blades:[]

    });

}

// =========================
// Update Enemy
// =========================

function updateEnemies(){

    enemies.forEach(enemy=>{

        // Random Direction
        if(Math.random()<0.02){

            enemy.angle=Math.random()*Math.PI*2;

        }

        enemy.x+=Math.cos(enemy.angle)*enemy.speed;
        enemy.y+=Math.sin(enemy.angle)*enemy.speed;

        // Border

        enemy.x=Math.max(enemy.radius,
        Math.min(WORLD.width-enemy.radius,enemy.x));

        enemy.y=Math.max(enemy.radius,
        Math.min(WORLD.height-enemy.radius,enemy.y));

        // Blade Collect

        groundBlades.forEach(blade=>{

            if(blade.taken)return;

            const dx=enemy.x-blade.x;
            const dy=enemy.y-blade.y;

            if(Math.hypot(dx,dy)<35){

                blade.taken=true;

                enemy.blades.push({

                    angle:0

                });

            }

        });

    });

}

// =========================
// Draw Enemy
// =========================

function drawEnemies(){

    enemies.forEach(enemy=>{

        // Body

        ctx.beginPath();

        ctx.fillStyle=enemy.color;

        ctx.arc(

            enemy.x-camera.x,

            enemy.y-camera.y,

            enemy.radius,

            0,

            Math.PI*2

        );

        ctx.fill();

        // Orbit Blades

        enemy.blades.forEach((blade,index)=>{

            blade.angle+=0.03;

            const total=enemy.blades.length;

            const angle=(Math.PI*2/Math.max(total,1))*index+blade.angle;

            const r=50;

            const bx=enemy.x+Math.cos(angle)*r;
            const by=enemy.y+Math.sin(angle)*r;

            ctx.save();

            ctx.translate(

                bx-camera.x,

                by-camera.y

            );

            ctx.rotate(angle);

            ctx.fillStyle="white";

            ctx.fillRect(-2,-15,4,30);

            ctx.fillStyle="#8b5a2b";

            ctx.fillRect(-6,8,12,4);

            ctx.restore();

        });

    });

}
