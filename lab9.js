"use strict";

      var canvas, renderer, scene, camera; // Standard three.js requirements.

      var controls;  // An OrbitControls object that is used to implement
                     // rotation of the scene using the mouse.  (It actually rotates
                     // the camera around the scene.)

      var animating = false;  // Set to true when an animation is in progress.
      var frameNumber = 0;  // Frame number is advanced by 1 for each frame while animating.



/*
      var floor;
      var column1, column2, column3, column4, column5, column6;
      var horse1, horse2, horse3, horse4, horse5, horse6;
      var roofcone, roofedge;
      var horses;
      var columns;
      var planetearth;
      var earthselforbit;
*/
      /**
       *  The render function draws the scene.
       */
      function render() {
         renderer.render(scene, camera);
      }


      /**
       * This function is called by the init() method to create the world.
       */
      function createWorld() {

         renderer.setClearColor("white"); // Background color for scene.
         scene = new THREE.Scene();

         // ------------------- Make a camera with viewpoint light ----------------------

         camera = new THREE.PerspectiveCamera(30, canvas.width/canvas.height, 0.1, 100);
         camera.position.z = 60;
         var light;  // A light shining from the direction of the camera; moves with the camera.
         light = new THREE.DirectionalLight(0x404040,3);
         light.position.set(5,5,5);
         camera.add(light);
         scene.add(camera);

         //------------------- Create the scene's visible objects ----------------------

         var base1;
         base1 = new THREE.Mesh(
                    new THREE.CylinderGeometry(7,7,2,128,1),
                    new THREE.MeshPhongMaterial(
                    {
                        color:0x000000,
                        specular: 0xFFFFFF,
                        shininess: 16,
                        shading: THREE.FlatShading
                    }));

         base1.position.x=0;
         base1.position.z=0;
         base1.position.y=-10;
         scene.add(base1);

         var base2;
         base2 = new THREE.Mesh(
                    new THREE.CylinderGeometry(7.3,7.2,1,128,1),
                    new THREE.MeshPhongMaterial(
                    {
                        color:0x000000,
                        specular: 0xFFFFFF,
                        shininess: 16,
                        shading: THREE.FlatShading
                    }));

         base2.position.x=0;
         base2.position.z=0;
         base2.position.y=-11;
         scene.add(base2);

         var collar;
         collar = new THREE.Mesh(
                   new THREE.CylinderGeometry(4,4,1,128,1),
                   new THREE.MeshPhongMaterial(
                   {
                       color:0x000000,
                       specular: 0xFFFFFF,
                       shininess: 16,
                       shading: THREE.FlatShading
                   }));

        collar.position.x=0;
        collar.position.z=0;
        collar.position.y=3;
        scene.add(collar);


        var collar1;
                 collar1 = new THREE.Mesh(
                           new THREE.CylinderGeometry(3,3,1,128,1),
                           new THREE.MeshPhongMaterial(
                           {
                               color:0x000000,
                               specular: 0xFFFFFF,
                               shininess: 16,
                               shading: THREE.FlatShading
                           }));

                collar1.position.x=0;
                collar1.position.z=0;
                collar1.position.y=4;
                scene.add(collar1);



                var head1;
                 head1= new THREE.Mesh(
                           new THREE.CylinderGeometry(4,2,2.5,100),
                           new THREE.MeshPhongMaterial(
                           {
                               color:0x000000,
                               specular: 0xFFFFFF,
                               shininess: 16,
                               shading: THREE.FlatShading
                           }));

                head1.position.x=0;
                head1.position.z=0;
                head1.position.y=6.7;
                scene.add(head1);


            var head2;
                 head2 = new THREE.Mesh(
                           new THREE.CylinderGeometry(0.1,4,2,100),
                           new THREE.MeshPhongMaterial(
                           {
                               color:0x000000,
                               specular: 0xFFFFFF,
                               shininess: 16,
                               shading: THREE.FlatShading
                           }));

                head2.position.x=0;
                head2.position.z=0;
                head2.position.y=8.95;
                scene.add(head2);


         //------------------------------------
         var height=0.18;
         var step=1;
         var tempCore;
         var i;
         var prevRadius=7;
         for(i=1;i<=100;i++)
         {

           tempCore = new THREE.Mesh(
                      new THREE.CylinderGeometry(prevRadius-(step/(i)),prevRadius,height,128,1),
                      new THREE.MeshPhongMaterial(
                      {
                          color:0x000000,
                          specular: 0xFFFFFF,
                          shininess: 16,
                          shading: THREE.FlatShading
                      }));

           tempCore.position.x=0;
           tempCore.position.z=0;
           tempCore.position.y=-9+(i-1)*(height);
           scene.add(tempCore);
           prevRadius= prevRadius-(step/i);
         }
         var cross1;
         cross1 = new THREE.Mesh(
         new THREE.BoxGeometry(1, 6, 1),
         new THREE.MeshPhongMaterial(
          {
             color:0x000000,
             specular: 0x000000,
             shininess: 16,
             shading: THREE.FlatShading
          }));
         cross1.position.x=0;
         cross1.position.y=11;
         scene.add(cross1);


        var cross2;
         cross2 = new THREE.Mesh(
        new THREE.BoxGeometry(4, 1, 1),
        new THREE.MeshPhongMaterial(
        {
            color:0x000000,
            specular: 0x000000,
            shininess: 16,
            shading: THREE.FlatShading
        }));

         cross2.position.x=0;
         cross2.position.y=12;
         scene.add(cross2);



      } // end function createWorld()

      /**
       *  This function is called once for each frame of the animation, before
       *  the render() function is called for that frame.  It updates any
       *  animated properties.  The value of the global variable frameNumber
       *  is incrementd 1 before this function is called.
       */
       function forFrame() {
        group = new THREE.Group();
                    group.add(base1);
                    group.add(base2);
                    group.add(collar);
                    group.add(collar1);
                    group.add(head1);
                    group.add(head2);
                    group.add(tempCore);
                    group.add(cross1);
                    group.add(cross2);
                    scene.add(group);
                    group.rotation.y =-frameNumber*0.01;

        }

      function updateForFrame() {
        animGroup = new THREE.Group();
        animGroup.add(horse1);
        animGroup.add(horse2);
        animGroup.add(horse3);
        animGroup.add(horse4);
        animGroup.add(horse5);
        animGroup.add(horse6);
        animGroup.add(horse7);
        animGroup.add(horse8);
        animGroup.add(col1);
        animGroup.add(col2);
        animGroup.add(col3);
        animGroup.add(col4);
        animGroup.add(col5);
        animGroup.add(col6);
        animGroup.add(col7);
        animGroup.add(col8);
        animGroup.add(earth);
        scene.add(animGroup);
        animGroup.rotation.y=-frameNumber*0.01;
      }


      /* ---------------------------- MOUSE AND ANIMATION SUPPORT ------------------

      /**
       *  This page uses THREE.OrbitControls to let the user use the mouse to rotate
       *  the view.  OrbitControls are designed to be used during an animation, where
       *  the rotation is updated as part of preparing for the next frame.  The scene
       *  is not automatically updated just because the user drags the mouse.  To get
       *  the rotation to work without animation, I add another mouse listener to the
       *  canvas, just to call the render() function when the user drags the mouse.
       *  The same thing holds for touch events -- I call render for any mouse move
       *  event with one touch.
       */
      function installOrbitControls() {
         controls = new THREE.OrbitControls(camera,canvas);
         controls.noPan = true;
         controls.noZoom = true;
         controls.staticMoving = true;
         function move() {
            controls.update();
            if (! animating) {
               render();
            }
         }
         function down() {
            document.addEventListener("mousemove", move, false);
         }
         function up() {
            document.removeEventListener("mousemove", move, false);
         }
         function touch(event) {
            if (event.touches.length == 1) {
               move();
            }
         }
         canvas.addEventListener("mousedown", down, false);
         canvas.addEventListener("touchmove", touch, false);
      }

      /*  Called when user changes setting of the Animate checkbox. */
      function doAnimateCheckbox() {
         var run = document.getElementById("animateCheckbox").checked;
         if (run != animating) {
            animating = run;
            if (animating) {
               requestAnimationFrame(doFrame);
            }
         }
      }

      /*  Drives the animation, called by system through requestAnimationFrame() */
      function doFrame() {
         if (animating) {
            frameNumber++;
            updateForFrame();
            render();
            requestAnimationFrame(doFrame);
         }
      }

      /*----------------------------- INITIALIZATION ----------------------------------------

      /**
       *  This function is called by the onload event so it will run after the
       *  page has loaded.  It creates the renderer, canvas, and scene objects,
       *  calls createWorld() to add objects to the scene, and renders the
       *  initial view of the scene.  If an error occurs, it is reported.
       */
      function init() {
         try {
            canvas = document.getElementById("glcanvas");
            renderer = new THREE.WebGLRenderer({
               canvas: canvas,
               antialias: true,
               alpha: false
            });
         }
         catch (e) {
            document.getElementById("message").innerHTML="<b>Sorry, an error occurred:<br>" +
                    e + "</b>";
            return;
         }
         document.getElementById("animateCheckbox").checked = false;
         document.getElementById("animateCheckbox").onchange = doAnimateCheckbox;
         createWorld();
         installOrbitControls();
         render();
      }
