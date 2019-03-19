/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [

            //quadrado base
            0.5, 0.5, -0.5,	//0
            0.5, -0.5, -0.5,	//1
            -0.5, -0.5, -0.5,	//2
            -0.5, 0.5, -0.5,	//3

            //quadrado topo
            0.5, 0.5, 0.5,	//4
            0.5, -0.5, 0.5,	//5
            -0.5, -0.5, 0.5,	//6
            -0.5, 0.5, 0.5		//7


        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //quadrado eixo azul parte negativa
            0, 1, 2,
            2, 3, 0,

            //quadrado eixo azul parte positiva
            6, 5, 4,
            4, 7, 6,

            //quadrado eixo vermelho positivo
            5, 1, 0,
            0, 4,5,

            //quadrado eixo vermelho negativo
            3, 2, 6,
            6, 7, 3,

            //quadrado eixo verde positivo
            4, 0, 3,
            3, 7, 4, 

            //quadrado eixo verde negativo
            2, 1, 5,
            5, 6, 2
            
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

