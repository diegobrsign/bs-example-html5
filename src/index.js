const DeviceInfo = require('@brightsign/deviceinfo');
const os = require('os');

window.main = () => {
  console.log('main() - Remote liftoff!');

  displayCurrentNetwork();
  displayDeviceInfo();
};

function displayCurrentNetwork() {
  const networkInterfaces = os.networkInterfaces() || {};
  let ipAddress = '';

  Object.keys(networkInterfaces).forEach((interfaceName) => {
    networkInterfaces[interfaceName].forEach((interfaceInfo) => {
      if (interfaceInfo.family === 'IPv4') {
        ipAddress += `${interfaceName}: ${interfaceInfo.address} `;
        console.log(
          `Network Interface - ${interfaceName}: ${interfaceInfo.address}`
        );
      }
    });
  });

  document.querySelector('#ipAddress .value').textContent = ipAddress;
}

function displayDeviceInfo() {
  const deviceInfo = new DeviceInfo();
  const { model, osVersion, serialNumber } = deviceInfo;

  document.querySelector('#model .value').textContent = model;
  document.querySelector('#osVersion .value').textContent = osVersion;
  document.querySelector('#serialNumber .value').textContent = serialNumber;

  console.log(
    `DeviceInfo - Model: ${model}, OS Version: ${osVersion}, Serial Number: ${serialNumber}`
  );
}
