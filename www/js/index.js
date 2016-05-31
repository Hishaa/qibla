/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
		
		//app.orintation();
		//app.geodirection();

	    app.orintation2();		
    },
	
	 changeAngle:function  () {
    var canvas = document.getElementById('logobg2');
	//var ang = document.getElementById('angle');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    var ang = document.getElementById('angle').value; //angle
    var fps = 1000 / 25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
       
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * ang); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height /2); //draw the image ;)
            ctx.restore(); //restore the state of canvas
      
    };

    img.src = 'icon.png'; //img
} ,
	
		 changeAngle2:function  (angle) {
    var canvas = document.getElementById('logobg2');
	//var ang = document.getElementById('angle');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    var ang = angle; //angle
    var fps = 1000 / 25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
       
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * ang); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height /2); //draw the image ;)
            ctx.restore(); //restore the state of canvas
      
    };

    img.src = 'icon.png'; //img
} ,
	
	orintation2:function ()
	{
		
		function onSuccess(heading) {
    var element = document.getElementById('heading');
     element.innerHTML = 'Heading: ' + heading.magneticHeading;
	 app.changeAngle2( heading.magneticHeading);
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 1000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

	},
		orintation:function (){
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
};

function onError(error) {
    alert('CompassError: ' + error.code);
};

navigator.compass.getCurrentHeading(onSuccess, onError);
	},
	
	
		geodirection:function (){
			alert("Welcome");
	
	// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
