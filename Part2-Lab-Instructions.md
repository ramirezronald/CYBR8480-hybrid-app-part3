## Authors
## Ronald Ramirez

*Note*
This

Plugin Name (which plugin did you look at?)
Cordova Plugin-Device -https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/index.html

Usage

1. Install Cordova Plugin:
cordova plugin add cordova-plugin-device

2. Generate Ember Component
ember generate component device-properties

3. Edit the following files:

3a. /app/templates/application.hbs
This feature will call the device-properties component. The rest of the code will set the Text and Button properties. I have added some customization to the text colors giving a more appealing view to the app.

<p><font face="verdana" font size ='6' color="#4c84af"><b>Device Properties</b></font></p>
<div style="-moz-box-shadow: 1px 1px 3px 2px #4c84af;
  -webkit-box-shadow: 1px 1px 3px 2px #4c84af;
  box-shadow:         1px 1px 3px 2px #4c84af;">
<marquee behavior="scroll" direction="right" color="">Click below</marquee></div>
{{device-properties}}

3b. /app/templates/components/device-properties.hbs
This sets up the button display, so that once it is clicked, you will receive the alert box with the device property information. I have also added some new customization feature to the button once it is pressed; you should hear a "beep" sound once it is clicked.

<h2><button {{action "deviceInfo"}} class="button" onclick="playbeep()">Device Info</button></h2>

<html>
<head>
<style>
.button {
  background-color: #4c84af; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>
</head>
</html>

<audio id="beep" src="http://www.soundjay.com/button/beep-07.wav"></audio>
    <script>
    function playbeep() {
          var sound = document.getElementById("beep");
          sound.play();
      }
    </script>


3c. /app/component/device-properties.js
This is the .js part which works with Cordova to get the device property information as shown from the plugin documentation.

import Component from '@ember/component';

export default Component.extend(
    {
actions:{
  deviceInfo() {
      //button alert properties
alert("Cordova version: " + device.cordova + "\n" +
  "Device Model: " + device.model + "\n" +
  "Device Platform: " + device.platform + "\n" +
  "Device UUID: " + device.uuid + "\n" +
  "Device Version: " + device.version + "\n" +
  "Device Manufacturer: " + device.manufacturer + "\n" +
  "Device IsVirtual: " + device.isVirtual + "\n" +
  "Device Serial.no: " + device.serial);
    }
  }
});
