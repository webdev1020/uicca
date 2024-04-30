let stateMap = {
  previousImageSet: ['image-1', 'image-2', 'image-3'],
  nextImageSet: []
};


const bindEvents = () =>  {
  // Create the drag event

  const swiper = new Swiper();

  swiper.on('slideChange', () => {
    swiper.currentSlide, swiper.netxSlide, swiper.netxNextSlide
    stateMap.nextImageSet = [swiper.currentSlide, swiper.netxSlide, swiper.netxNextSlide];
  })

}


const reRenderImages = () => {
  $('.img-1 .new-image img').attr('src', nextImageSet[0]);
  $('.img-1 .new-image').css('width', '100%')

  setTimeout(() => {
    stateMap.previousImageSet = stateMap.nextImageSet;
    stateMap.nextImageSet = [];
    $('.img-1 > img').attr('src', stateMap.previousImageSet[0]);
  }, 500)


  $('.img-2 img').attr('src', nextImageSet[1]);
  $('.img-3 img').attr('src', nextImageSet[2]);
}


.new-image {
  width: 0;
  transition: 300ms all;
}



<div class="img-1">
  <img src="previousImageSet[0]" />
  <div class="new-image">
    <img src="newImageSet[0]" />
  </div>
</div>
<div class="img-2">
<img src="previousImageSet[1]" />
</div>
<div class="img-3">
<img src="previousImageSet[2]" />
</div>