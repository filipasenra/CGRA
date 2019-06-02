/**
* MyLightning
* @constructor
*/
class MyLightning extends MyLSystem {

    constructor(scene) {
        super(scene);

        this.white = new CGFappearance(scene);
        this.white.setAmbient(1, 1, 1, 1.0);
        this.white.setDiffuse(1, 1, 1, 1.0);
        this.white.setSpecular(1, 1, 1, 1.0);
        this.white.setShininess(10.0);
    }

    initGrammar() {
        this.grammar = {
            "F": new MyModifiedQuad(this.scene),
            "X": new MyModifiedQuad(this.scene)
        };
        this.depth = 0;
        this.length = 3;
        this.animationStart = 0;

        this.isDisplaying = false;
    };

    update(t) {

        if (!this.isDisplaying) {
            return;
        }

        if (t - this.animationStart > 60 * 10) {
            this.isDisplaying = false;
            return;
        }

        this.depth = this.axiom.length * (t - this.animationStart) / (60 * 10); //nr de coisas a dividir pelo tempo
    };

    startAnimation(t) {
        this.isDisplaying = true;
        this.length = this.scene.axiom.length;
        this.animationStart = t;
        this.scene.doGenerateLighting();
    };

    display() {

        if (!this.isDisplaying)
            return;

        this.scene.pushMatrix();
        this.white.apply();
        this.scene.scale(this.scale*3, this.scale*3, this.scale*3);


        if (this.depth < 0)
            return;

        var i;

        // percorre a cadeia de caracteres
        for (i = 0; i < this.depth && i < this.axiom.length; ++i) {

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                /* Remember we need to escape de '\'*/
                case "\\":
                    // roda no sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    // roda no sentido negativo sobre o eixo dos XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    // roda no sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // roda no sentido negativo sobre o eixo dos YY
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (primitive) {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }

        }

        this.scene.popMatrix();
    }
}