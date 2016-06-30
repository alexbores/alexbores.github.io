



////////////////////////////////////////////////////////////////////////////////////////////////////////scene supports//////////////////////////////////////////////////////
var skybox;
function skycreation(){
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
    scene.fogDensity = 0.005;

            /** SKYBOX **/
    BABYLON.Engine.ShadersRepository = "shaders/";
        
    skybox = BABYLON.Mesh.CreateSphere("skyBox", 10, 2500, scene);

    var shader = new BABYLON.ShaderMaterial("gradient", scene, "gradient", {});
    shader.setFloat("offset", 0);
    shader.setFloat("exponent", 0.6);
    shader.setColor3("topColor", BABYLON.Color3.FromInts(0,119,255));
    shader.setColor3("bottomColor", BABYLON.Color3.FromInts(240,240, 255));
    shader.backFaceCulling = false;
    skybox.material = shader;

    return 0;
}

function collisions(){
    scene.collisionsEnabled = true;
    /////////////////////////////////collisionables
    ship.checkCollisions = true;
    return 0;
}


function lights(){
        // // Hemispheric light to enlight the scene
    var h = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 10, 0), scene);
     // h.specular = new BABYLON.Color3(0,0,0); //o
     // h.diffuse = new BABYLON.Color3(1,1,1); //( )
     h.intensity = 0.6;
    // var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,0,0), scene);
    // light0.diffuse = new BABYLON.Color3(1,1,1); //( )
    // light0.specular = new BABYLON.Color3(1,1,1); //o
    // A directional light to add some colors
    var d = new BABYLON.DirectionalLight("dir", new BABYLON.Vector3(0,-0.5,0.5), scene);
    d.position = new BABYLON.Vector3(0.1,100,-100);
    d.specular = new BABYLON.Color3(0,0,0); //o
    d.intensity = 0.4;
    // Purple haze, all around !
    d.diffuse = BABYLON.Color3.FromInts(255,0,0);

    return 0;
}


 







