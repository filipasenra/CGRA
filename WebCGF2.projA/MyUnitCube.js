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

            //Quadrado base
            0.5, 0.5, -0.5,	//0
            0.5, -0.5, -0.5,	//1
            -0.5, -0.5, -0.5,	//2
            -0.5, 0.5, -0.5,	//3

            //Quadrado topo
            0.5, 0.5, 0.5,	//4
            0.5, -0.5, 0.5,	//5
            -0.5, -0.5, 0.5,	//6
            -0.5, 0.5, 0.5,		//7
            
            //3 Plano
            0.5, 0.5, -0.5,	//0
            0.5, -0.5, -0.5,	//1
            0.5, 0.5, 0.5,	//4
            0.5, -0.5, 0.5,	//5

            //4 Plano
            -0.5, 0.5, -0.5,	//3
            -0.5, -0.5, -0.5,	//2
            -0.5, -0.5, 0.5,	//6
            -0.5, 0.5, 0.5,		//7

            //5 Plano
            0.5, 0.5, 0.5,	//4
            0.5, 0.5, -0.5,	//0
            -0.5, 0.5, -0.5,	//3
            -0.5, 0.5, 0.5,		//7

            //6 Plano
            0.5, -0.5, -0.5,	//1
            -0.5, -0.5, -0.5,	//2
            0.5, -0.5, 0.5,	//5
            -0.5, -0.5, 0.5,	//6
        ];
        
        //Counter-clockwise reference of vertices
        this.indices = [
            //Quadrado eixo azul parte negativa
            2, 1, 0, 
            0, 3, 2, 

            //Quadrado eixo azul parte positiva
            4, 5, 6, 
            6, 7, 4, 

            //Quadrado eixo vermelho positivo
            8, 9, 11,
            11, 10, 8, 

            //Quadrado eixo vermelho negativo
            14, 13, 12, 
            12, 15, 14, 

            //Quadrado eixo verde positivo
            18, 17, 16, 
            16, 19, 18,  

            //Quadrado eixo verde negativo
            22, 20, 21, 
            21, 23, 22,
            
        ];

        //Vetores normais
        this.normals = [];

        //1 Plano
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        
        //2 Plano
        this.normals.push(0, 0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);

        //3 Plano
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);

        //4 Plano
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);

        //5 Plano
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);

        //6 Plano
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);
        this.normals.push(0, 1, 0);

        this.texCoords = [
			0.25, 0.25,
            0.25, 0.5,
            0, 0.5,
			0, 0.25,
            
            0.5, 0.25,
			0.5, 0.5,
			0.75, 0.5,
            0.75, 0.25,
            
            0.25, 0.25,
            0.25, 0.5,
			0.5, 0.25,
			0.5, 0.5,
            
            1, 0.25,
			1, 0.5,
			0.75, 0.5,
            0.75, 0.25,
            
            0.25, 0,
            0.25, 0.25,
            0, 0.25,
            0, 0,
            
            0.25, 0.5,
			0, 0.5,
			0.25, 0.75,
			0, 0.75
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}

