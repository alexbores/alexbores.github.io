

var ship;
var jet;
Ship = function(size,scene) {
    // BABYLON.Mesh.call(this, "ship", scene);
    // var vd = BABYLON.VertexData.CreateBox(size);

    
    // vd.applyToMesh(this, false);
    // var blankmesh = new BABYLON.Mesh("blank", scene);
    // blankmesh.position = BABYLON.Vector3.Zero();

    var positions = [

        -0.5, 0, 0,      // 0   think Vector3(-2, 8, -5) position
        0.5, 0, 0,       // 1

        1, -0.6, 0,       // 2
        -1, -0.6, 0,      // 3

        -0.5, -0.2, 2,       // 4
        0.5, -0.2, 2,        // 5

        
        

    ];


    // connect the triangle dots ... counter clockwise
    var indices = [];

    indices.push(0, 1, 4); 
    indices.push(1, 5, 4); 

    indices.push(0, 4, 3); 

    indices.push(2, 5, 1); 

    indices.push(1, 0, 3); 
    indices.push(3, 2, 1); 

    indices.push(3, 5, 2); 
    indices.push(4, 5, 3);



    // light bounce directions
    var normals = [
        0, 0, 0,        // 0
        0, 0, 0,        // 1
        1, 0, 0,        // 2
        1, 0, 0,        // 3
        0, 1, 1,        // 4
        0, 1, 1,        // 5
        0, 1, 1,        // 6
    ];

    // colors per vertex
    var colors = [
        0, 0, 1,        // 0
        0, 0, 1,        // 1
        0, 0, 0,        // 2
        0, 0, 0,        // 3
        0, 0, 0,        // 4
        0, 0, 0,        // 5
        0, 0, 0,        // 6
        0, 0, 0,        // 7
    ];

    

    // Make a mesh shaper device.
    var vertexData = new BABYLON.VertexData();

    // stuff its buffers with your stuff
    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    // vertexData.colors = colors;

    ship = new BABYLON.Mesh("blank", scene);
    // BABYLON.Mesh.call(this, "ship", scene);
    vertexData.applyToMesh(ship, false);
    
    // var material = new BABYLON.StandardMaterial("", scene);
    // ship.material = material;
    // ship.material.emissiveColor = new BABYLON.Color3(0, 5, 5);



    ship.killed = false;
    ship.ammo = 3;
    ship.position.x = 0;
    ship.position.z = 0;
    ship.position.y = 1.5;


    // Movement attributes
    ship.speed = 4;

    //this._initMovement();

    


    // this._initLabelUpdate();


     // Create a particle system
    jet = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    jet.particleTexture = new BABYLON.Texture("assets/flare.png", scene);

    // Where the particles come from
    jet.emitter = ship; // the starting object, the emitter
    jet.minEmitBox = new BABYLON.Vector3(-0.1, -0.3, 0); // Starting all from
    jet.maxEmitBox = new BABYLON.Vector3(0.1, -0.35, 0); // To...

    // Colors of all particles
    jet.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    jet.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    jet.colorDead = new BABYLON.Color4(0.5, 0, 0, 0.0);

    // Size of each particle (random between...
    jet.minSize = 0.1;
    jet.maxSize = 0.5;

    // Life time of each particle (random between...
    jet.minLifeTime = 0;
    jet.maxLifeTime = 0.005;

    // Emission rate
    jet.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    // jet.blendMode = BABYLON.jet.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    jet.gravity = new BABYLON.Vector3(0, 0, -10);

    // Direction of each particle after it has been emitted
    jet.direction1 = new BABYLON.Vector3(-7, 8, 3);
    jet.direction2 = new BABYLON.Vector3(7, 8, -3);

    // Angular speed, in radians
    jet.minAngularSpeed = 0;
    jet.maxAngularSpeed = Math.PI;

    // Speed
    jet.minEmitPower = 0;
    jet.maxEmitPower = 1;
    jet.updateSpeed = 0.005;

    // Start the particle system
    jet.start();

};




