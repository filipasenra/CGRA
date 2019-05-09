/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, levels) {

		super(scene);
        this.init(scene);
        this.scene = scene;
        this.levels = levels;
        
	}
	init(scene) {

		this.cube = new MyUnitCubeQuad(scene);
	}

	display() {

        this.scene.pushMatrix();

        this.scene.translate(0, 0.5, -0.5);

		for (var l= 0; l< this.levels; l++) {

            var nCubes = 1 + (this.levels - l- 1) * 2;
            
			for (var i = 0; i < nCubes; i++) {

				for (var j = 0; j < nCubes; j++) {

                    this.scene.pushMatrix();
                    
					this.scene.translate(nCubes / 2 - 0.5 - i, l, nCubes / 2 - 0.5 - j);
                    this.cube.display();
                    
					this.scene.popMatrix();
				}
			}
        }
        
        this.scene.popMatrix();

	}
}

