// JavaScript source code
/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTreeBranch extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);

    }
    init(scene) {

        this.cylinder = new MyCylinderWBottow(scene);

        this.x = 0;
        this.y = 1;
        this.z = 0;

        this.rotation = 0;

        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        this.appearance.loadTexture('texturas/tronco.jpg');

    }

    display(){

        this.appearance.apply();

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.scene.rotate(this.rotation + Math.PI/2, 0, 1, 0);
        this.scene.scale(0.3,0.3,0.3);
        this.scene.scale(0.2, 0.2, 4);

        this.cylinder.display();

        this.scene.popMatrix();
    }

    setCoordinates(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getZ(){
        return this.z;
    }

    setRotation(rotation){
        this.rotation = rotation;
    }
}