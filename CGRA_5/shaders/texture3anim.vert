
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	
	vec3 offset=vec3(0.0,0.0,0.0);

	//offset with sin function
	vec3 offset_two=vec3(sin(timeFactor),0.0,0.0);

	//offset with normScale of Interface
	offset_two *= vec3(normScale, normScale, normScale);
	
	vTextureCoord = aTextureCoord;

	if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
		offset=aVertexNormal*normScale*0.1*sin(timeFactor);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset + offset_two, 1.0);
}

