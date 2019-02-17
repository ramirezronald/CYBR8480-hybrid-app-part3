import Component from '@ember/component';

export default Component.extend(
    {
actions:{
  deviceInfo() {
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
