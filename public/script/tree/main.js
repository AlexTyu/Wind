if (hasWebGLSupportWithExtensions(['OES_texture_float'])) {
    var flow = new Flow(document.getElementById('render'));

    flow.setHue(0.58);
    flow.setTimeScale(INITIAL_SPEED);
    flow.setPersistence(INITIAL_TURBULENCE);

}