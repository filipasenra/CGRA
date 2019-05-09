/**
* MySphere
* @constructor
*/
class MySphere extends CGFobject {
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
        this.texCoords = [];

        // loop through stacks.
        for (var i = 0; i <= this.stacks; ++i) {

            var V = i / this.stacks;
            var phi = V * Math.PI;

            // loop through the slices.
            var j;
            for (j = 0; j <= this.slices; ++j) {

                var U = j / this.slices;
                var theta = U * Math.PI * 2;

                // use spherical coordinates to calculate the positions.
                var x = Math.cos(theta) * Math.sin(phi);
                var y = Math.cos(phi);
                var z = Math.sin(theta) * Math.sin(phi);

                console.log(theta);

                this.vertices.push(x, y, z);
                this.normals.push(x, y, z);
                //0.5 to look more natural
                this.texCoords.push(theta*0.5, phi*0.5);
            }
        }

        // Calc The Index Positions
        var i;
        for (i = 0; i < this.slices * this.stacks + this.slices; ++i) {
            this.indices.push(i);
            this.indices.push(i + this.slices + 1);
            this.indices.push(i + this.slices);

            this.indices.push(i + this.slices + 1);
            this.indices.push(i);
            this.indices.push(i + 1);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //Complexity varies 0-1, so slices varies 3-12

        // Reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


