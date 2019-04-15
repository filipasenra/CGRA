/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers(scene);
    }
    initBuffers(scene) {

        this.cube = new MyUnitCube(scene);

    }

    updateBuffers(complexity) {
        // Reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    display() {
        this.scene.pushMatrix();

        //Defining if it is day or night 
        if (this.scene.enableLights==0)
            this.scene.difuseMaterial.setTexture(this.scene.dia);
        else
            this.scene.difuseMaterial.setTexture(this.scene.noite);

        this.scene.difuseMaterial.apply();

        this.scene.scale(30, 30, 30);

        this.cube.display();

        this.scene.popMatrix();

    }
}

