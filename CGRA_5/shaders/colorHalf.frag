#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

void main() {
	if (coords.y > 0.5)
		gl_FragColor = vec4(247.0/255.0, 238.0/255.0, 71.0/255.0, 1.0);
	else
    {
		gl_FragColor = vec4(198.0/255.0, 211.0/255.0, 1.0, 1.0);
	}
}