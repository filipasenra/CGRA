/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            this.texCoords.push(0.5 + Math.cos(ang)*0.5, 0.5 - Math.sin(ang)*0.5);
            ang+=alphaAng;
        }
        
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5, 0.5);


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //Complexity varies 0-1, so slices varies 3-12

        // Reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


