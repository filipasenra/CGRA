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
            2, 1, 0, 
            0, 3, 2, 

            //quadrado eixo azul parte positiva
            4, 5, 6, 
            6, 7, 4, 

            //quadrado eixo vermelho positivo
            8, 9, 11,
            11, 10, 8, 

            //quadrado eixo vermelho negativo
            14, 13, 12, 
            12, 15, 14, 

            //quadrado eixo verde positivo
            18, 17, 16, 
            16, 19, 18,  

            //quadrado eixo verde negativo
            22, 20, 21, 
            21, 23, 22,
            
        ];

        //vetores normais
        this.normals = [];

        //1 plano
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        this.normals.push(0,0, 1);
        
        //2 plano
        this.normals.push(0, 0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);
        this.normals.push(0,0, -1);

        //3 plano
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);
        this.normals.push(-1, 0, 0);

        //4 plano
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);
        this.normals.push(1, 0, 0);

        //5 plano
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);
        this.normals.push(0, -1, 0);

        //6 plano
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

    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

