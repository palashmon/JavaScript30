/*
GOALS:
1. Write the necessary JavaScript code to ask permission for the user's webcam
2. Display the feed from that webcam on the page
3. Allow the user to save pictures that are displayed
4. Allow the user to alter the image using the RGB sliders.
*/

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const takePhotos = document.querySelector('.takePhotos');

/**
 * This function will use the Navigator and mediaDevices web APIs to ask permission to access the user's webcam.
 * upon success, qw will set the source object of the video element as the localMediaStream.
 *
 * @param
 * @return
 */
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

/**
 * Declare two const variables.
 * Define them as the video element's width and height.
 * Update the canvas width and height to reflect those values
 *
 * @param
 * @return the interval ID of a setInterval() function call
 */
function paintToCanavas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {

  	// draw the current video element on to the canvas
    ctx.drawImage(video, 0, 0, width, height);
    
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    
    // mess with them
    //pixels = redEffect(pixels);

    //pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    //pixels = greenScreen(pixels);
    
    // put them back
    //ctx.putImageData(pixels, 0, 0);
  }, 16);
}

/**
 * Add a red effect to the canvas image
 *
 * @param
 * @return the modified pixels data array
 */
function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] += 100; // RED
    pixels.data[i + 1] -= 50; // GREEN
    pixels.data[i + 2] *= 0.5; // Blue
  }
  return pixels;
}

/**
 * Add a rgb split effect to the canvas image
 *
 * @param
 * @return the modified pixels data array
 */
function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 200] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 250] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

/**
 * Add a green screen effect to the canvas image
 *
 * @param
 * @return the modified pixels data array
 */
function greenScreen(pixels) {
  const levels = {};

  // Iterate through a NodeList of all input elements within the div with class rgb 
  // and set a key in the levels object as a given input's name property, 
  // and set the value to be the given input's value.
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // Update the values of the pixels in the image so that we remove all RGB values
  // that are within the range defined by the user using range elemets in the page 
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


/**
 * Take a photo on click of the button.
 * play the audio element on the HTML page
 *
 * @param
 * @return 
 */
function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');

  // create a link which targets a data URI representation of a still image taken from the canvas
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');

  // places that link into the front of the empty div element as an image to view
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firsChild);
}

// Call the main getVideo function on page load
getVideo();

// Attach an event listener to the video HTML element that will call the paintToCanvas function on the 'canplay' event
video.addEventListener('canplay', paintToCanavas);

// Attach an event listener to the button HTML element that will call the takePhoto function on a 'click' event.
takePhotos.addEventListener('click', takePhoto);