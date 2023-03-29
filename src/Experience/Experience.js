import * as THREE from 'three';

export default class Experience {
    static instance;
    constructor(canvas) {
        if(Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;

        
        /**
         * Create the Scene
         * Add Thre renderer
         * Camera
         */
        this.scene = new THREE.Scene();
    }


}