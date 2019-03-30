/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyVoxelHill extends CGFobject {

    constructor(scene, levels) {
        super(scene);
        this.levels = levels;
        this.init(scene);
    }
    init(scene) {

        this.cubes = [];

        for (var n = 1; n <= this.levels; n++) {
            for (var i = 0; i < (this.levels + n) * (this.levels + n); i++) {
                this.cubes.push(new MyUnitCubeQuad(scene));
            }
        }

    }

    display() {

        this.scene.pushMatrix();

        var index = 0;

        for (var n = 1; n <= this.levels; n++) {

            var linhas = (2*n - 1);

            console.log(linhas);

            //linha a linha
            //1-3-5
            for(var i = 0; i < linhas; i++)
            {
                this.scene.pushMatrix();
                
                //posição da linha
                this.scene.translate(i, 0, 0);
                
                for(var j = 0; j < linhas; j++)
                {

                    this.scene.pushMatrix();

                    this.scene.translate(0, 0, j);
                    this.cubes[index].display();

                    this.scene.popMatrix();

                    index++;
                }

                this.scene.popMatrix();
            }

            this.scene.translate(-1, -1, -1);
        }

        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
        // reinitialize buffers
        this.initBuffers();
    }
}