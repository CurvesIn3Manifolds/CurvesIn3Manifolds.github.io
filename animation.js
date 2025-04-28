main();

function main() {
	const canvas = document.querySelector("#gl-canvas");

	// Initialization
	const gl = canvas.getContext("webgl");

	// Only continue if WebGL is available and working
	if (gl === null) {
		document.getElementById('webgl-alert').style.display = "block";
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);


}
