/**
* MyLightning
* @constructor
*/
class MyLightning extends MyLSystem {

    constructor(scene) {
        super(scene);
    }

    initGrammar() {
        this.grammar = {
            "F": new MyModifiedQuad(this.scene),
            "X": new MyModifiedQuad(this.scene)
        };
        this.depth = 0;
        this.length =0;
        this.animationStart=0;
    };

    update(){
        this.depth = this.length/this.animationStart; //nr de coisas a dividir pelo tempo
    };

    startAnimation(t){
        this.scene.lSystem.iterate();
        this.length=this.scene.axiom.length;
        this.animationStart = t;
        this.update();
    };

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale,this.scale , this.scale );

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.scene.axiom.length; ++i){

console.log(i);
            // verifica se sao caracteres especiais
            switch(this.scene.axiom[i]){
                case "+":
                        console.log("+");
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                        console.log("-");
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                /* Remember we need to escape de '\'*/
                case "\\":
                        console.log("\\");
                    // roda no sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                        console.log("//");
                    // roda no sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                        console.log("^^");
                    // roda no sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                        console.log("&");
                    // roda no sentido negativo sobre o eixo dos YY
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                case "[":
                        console.log("[");
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                        console.log("]");
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.scene.axiom[i]];
                    console.log("default");

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
            
        }
        this.scene.popMatrix();
    }
}