// JavaScript source code
/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */

 const NEST_X = 2;
 const NEST_Y = 2;

class MyNest extends CGFobject {

    constructor(scene, x = -5, y = 0, z = 6) {
        super(scene);
        this.init(scene);


        this.x = x;
        this.y = y;
        this.z = z;

    }
    init(scene) {

        this.partOfNest = new MyBunchOfTwigs(scene);
        this.branchs = [];

    }

    display() {

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.partOfNest.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);

        this.partOfNest.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);


        this.partOfNest.display();
        this.scene.rotate(Math.PI/2, 0, 1, 0);

        this.partOfNest.display();

        this.scene.popMatrix();

        for(var i = 0; i < this.branchs.length; i++){
            this.branchs[i].display();
        }

    }

    addBranch(branch){

        this.branchs.push(branch);
    }

    checkCollision(object)  {

        if(object.getX() > (this.x + NEST_X) || object.getX() < (this.x - NEST_X))
            return false;


        if(object.getZ() > (this.z + NEST_Y) || object.getZ() < (this.z - NEST_Y))
            return false;

        if(object.y < 1.5 && object.y > 1)
            return true;

        return false;

    }
}