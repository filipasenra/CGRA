#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler3;
uniform sampler2D uSampler4;

uniform float timeFactor;

void main() {

	//it is not working with vec2(timeFactor*0.02, timeFactor*0.02) (texture is not represented correctly)
	vec4 color = texture2D(uSampler3, vec2(timeFactor*0.02, timeFactor*0.02) + vTextureCoord);
	vec4 filter = texture2D(uSampler4, vec2(timeFactor*0.02, timeFactor*0.02)+ vTextureCoord);

	//darking with height
	color.rgb -= vec3(0.2,0.2,0.2)*filter.b;
	
	gl_FragColor = color;
}