const imageSelector = document.getElementById('imageSelector');
const showButton = document.getElementById('showButton');
const sliderImage = document.getElementById('sliderImage');

showButton.addEventListener('click', () => {
  const selectedImage = imageSelector.value;
  if (selectedImage) {
    sliderImage.src = selectedImage;
    sliderImage.alt = 'Selected Image';
  } else {
    alert('Please select an image from the list.');
  }
});
