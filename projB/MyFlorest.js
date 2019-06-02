/**
* MyFlorest
* @constructor
*/

class MyFlorest extends CGFobject {
    constructor(scene) {

        super(scene);
        this.initBuffers();

    }

    initBuffers() {


        this.lPlants = [];

        this.translZ = [];

        for (var i = 0; i < 5; i++) {
            this.lPlants[i] = new MyLPlant(this.scene);

            this.axiom = "X";
            this.angleTree = 25.0;
            this.iterationsTree = 5;
            this.scaleFactorTree = 0.7;

            /* Remember we need to escape de '\'*/
            this.doGenerate = function () {
                this.lPlants[i].generate(
                    this.axiom,
                    {
                        "F": ["FF"],
                        "X": ["F[-X][X]F[-X]+FX", "F[-X][X]+X", "F[+X]-X",
                            "F[/X][X]F[\\\\X]+X", "F[\\X][X]/X", "F[/X]\\X",
                            "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
                    },
                    this.angleTree,
                    this.iterationsTree,
                    this.scaleFactorTree
                );

            }

            this.doGenerate();


            this.translZ.push(Math.floor(Math.random()*(3.5+1)+1));

            console.log(this.translZ[i])
        }
    }

    display() {


        for (var i = 0; i < 5; i++) {

            this.scene.pushMatrix();

            this.scene.translate(i*3 + this.translZ[i]*0.5, 0, this.translZ[i]);
            this.lPlants[i].display();


            this.scene.popMatrix();
        }

    }
}
