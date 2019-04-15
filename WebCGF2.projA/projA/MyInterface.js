/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //CheckBox Display Textures
        this.gui.add(this.scene, 'enableTexturesBool').name("Enable Textures");
        this.gui.add(this.scene, 'scaleFactor', 0.5, 4.0).name('Scale');

        //Dropdown menu
        this.gui.add(this.scene, 'enableLights', this.scene.objectIDs).name('Day');

        return true;
    }
}