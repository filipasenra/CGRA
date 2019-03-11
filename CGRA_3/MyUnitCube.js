/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
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
            -0.5, 0.5, 0.5,		//7
            
            // 3 plano
            0.5, 0.5, -0.5,	//0
            0.5, -0.5, -0.5,	//1
            0.5, 0.5, 0.5,	//4
            0.5, -0.5, 0.5,	//5

            //4 plano
            -0.5, 0.5, -0.5,	//3
            -0.5, -0.5, -0.5,	//2
            -0.5, -0.5, 0.5,	//6
            -0.5, 0.5, 0.5,		//7

            //5 plano
            0.5, 0.5, 0.5,	//4
            0.5, 0.5, -0.5,	//0
            -0.5, 0.5, -0.5,	//3
            -0.5, 0.5, 0.5,		//7

            //6 plano
            0.5, -0.5, -0.5,	//1
            -0.5, -0.5, -0.5,	//2
            0.5, -0.5, 0.5,	//5
            -0.5, -0.5, 0.5,	//6
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
            11, 9, 8,
            8, 10,11,

            //quadrado eixo vermelho negativo
            12, 13, 14,
            14, 15, 12,

            //quadrado eixo verde positivo
            16, 17, 18,
            18, 19, 16, 

            //quadrado eixo verde negativo
            21, 20, 22,
            22, 23, 21
            
        ];

        //vetores normais
        this.normals = [];

        //1 plano
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);
        
        //2 plano
        this.normals.push(0, 0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);

        //3 plano
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);

        //4 plano
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);

        //5 plano
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);

        //6 plano
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

