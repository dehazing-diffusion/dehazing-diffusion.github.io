const gammaSlider = document.getElementById('gammaSlider');
const gammaImage1 = document.getElementById('gammaImage1');
const gammaImage2 = document.getElementById('gammaImage2');
const gammaImage3 = document.getElementById('gammaImage3');

const sliderValues = document.querySelector('.slider-values');
const minValue = document.querySelector('.min-value');
const currentValue = document.querySelector('.current-value');
const maxValue = document.querySelector('.max-value');

gammaSlider.addEventListener('input', function() {
  const gammaValue = parseFloat(this.value).toFixed(1);
  const imagePath1 = `./image_assets/ultrasound/varying_gamma/gamma_0_${gammaValue}.png`;
  const imagePath2 = `./image_assets/ultrasound/varying_gamma/gamma_1_${gammaValue}.png`;
  const imagePath3 = `./image_assets/ultrasound/varying_gamma/gamma_2_${gammaValue}.png`;
  gammaImage1.src = imagePath1;
  gammaImage2.src = imagePath2;
  gammaImage3.src = imagePath3;

  minValue.innerHTML = `<b>Min ${this.min}</b>`;
  currentValue.innerHTML = `<b>γ=${gammaValue}</b>`;
  maxValue.innerHTML = `<b>Max ${this.max}</b>`;
});