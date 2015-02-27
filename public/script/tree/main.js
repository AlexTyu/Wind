if (hasWebGLSupportWithExtensions(['OES_texture_float'])) {
    var flow = new Flow(document.getElementById('render'));

    flow.setHue(0.54);
    flow.setTimeScale(INITIAL_SPEED);
    flow.setPersistence(INITIAL_TURBULENCE);
    gl.clearColor(0.2, 0.5, 0.7, 0.0);

}