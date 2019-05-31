// JavaScript source code
/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */

 const NEST_X = 2;
 const NEST_Y = 2;

class MyNest extends CGFobject {

    constructor(scene) {
        super(scene);
        this.init(scene);

    }
    init(scene) {

        this.partOfNest = new MyBunchOfTwigs(scene);
        this.branchs = [];

        this.x = 6;
        this.y = 0;
        this.z = 0;

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

        if(object.getY() < 1)
            return true;

        return false;

    }
}