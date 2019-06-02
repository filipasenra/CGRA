#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D new_color;
uniform sampler2D uSampler2;

void main() {

	float height = texture2D(uSampler2, vTextureCoord).b;

	vec4 color = texture2D(new_color, vec2(1, -height));

	vec4 new_color = texture2D(uSampler, vTextureCoord);

	gl_FragColor = (color*new_color);
}
