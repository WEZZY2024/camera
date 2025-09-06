// Opening Camera using javascript

const CameraFeed = document.getElementById("CameraFeed");
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    CameraFeed.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error failed to open camera:" + error);
  });
