/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;
        var division = 1.0 / this.stacks;

        //let's later understand how this works
        for (let k = 0; k <= this.stacks; k++) {
            for (let i = 0; i < this.slices; i++) {

                this.vertices.push(Math.cos(i * alphaAng),  k * division, -Math.sin(i * alphaAng));
                this.normals.push(Math.cos(i * alphaAng), 0, -Math.sin(i * alphaAng));

                if (k != 0 && i != 0) {
                    this.indices.push(this.slices * k + i - 1, this.slices * (k - 1) + i - 1, this.slices * (k - 1) + i);
                    this.indices.push(this.slices * k + i - 1, this.slices * (k - 1) + i, this.slices * k + i);

                    if (i == (this.slices - 1)) {
                        this.indices.push(this.slices * (k - 1) + i, this.slices * (k - 1), this.slices * k + i);
                        this.indices.push(this.slices * k + i, this.slices * (k - 1), this.slices * k);
                    }
                }
            }
        }


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


