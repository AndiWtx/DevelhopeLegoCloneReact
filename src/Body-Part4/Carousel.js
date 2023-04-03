import React from 'react';
import './carousel.css'

export function CarouselFeaturedSets() {

  const carousel = document.querySelector('.carousel');
  let slides = carousel.querySelectorAll(".product-container");
  let transparentClass = document.querySelectorAll(".transparent-container");
  let firstImg = carousel.querySelectorAll(".product-container")[0];
  let arrowIcons = document.querySelectorAll(".wrapper i");
  let runnerBar = document.querySelector("#runnerBar");
  let runnerBarContainer = document.querySelector("#runnerBarCont");
  let width = slides[0].clientWidth;
  slides.forEach((slide) => {
    slide.style.minWidth = `${width - 18.75}px`;
  });

  let thePrev = 0;
  let slidePace = 4;
  let runnerPace = 0;
  let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

  let IsDragStart = false, IsDragging = false, PrevPageX, PrevScrollLeft, PositionDiff;

  let counterR = 0;

  const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
  }

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      width = slides[0].clientWidth;
      // let firstImgWidth = width + 25;
      let firstSlideWidth = width;
      // getting first img width & adding 14 margin value
      // if clicked icon is left, reduce width value from the carousel scroll left else add to it
      // carousel.scrollLeft += icon.id == "left" ? -slidePace*firstImgWidth; runnerPace = runnerPace-1 : slidePace*firstImgWidth;
      if (icon.id === "left") {
        if (counterR === -1) { return }
        carousel.scrollLeft += -slidePace * firstSlideWidth - 25 * (slidePace);
        counterR = counterR - 1;
        console.log("in left", counterR);
        runnerBar.style.transform = `translateX(${(slidePace * firstSlideWidth + 75) * (counterR) * 100 / (carousel.clientWidth + 18.75)}%)`;
      } else {
        carousel.scrollLeft += slidePace * firstSlideWidth + 25 * (slidePace);
        if (counterR === 1) {
          runnerBar.style.transform = `translateX(${(slidePace * firstSlideWidth + 75) * (counterR + 1) * 100 / (carousel.clientWidth + 18.75)}%)`;
          counterR = counterR + 1;
        }
        else if (carousel.scrollLeft === 0 || counterR === 0) {
          runnerBar.style.transform = `translateX(${(slidePace * firstSlideWidth + 75) * (counterR + 1) * 100 / (carousel.clientWidth + 18.75)}%)`;
          counterR = counterR + 1;
        } else if (counterR === 2) {
          runnerBar.style.transform = `translateX(${(slidePace * firstSlideWidth + 75) * (counterR + 1) * 100 / (carousel.clientWidth)}%)`;
          counterR = counterR + 1;
          // runnerBar.style.transform = `translateX(${carousel.scrollLeft*100/(carousel.clientWidth + 18.75)}%)`;
        }
      }
      console.log("starting counterR", counterR);


      // let toUse = carousel.scrollLeft == 0 ? firstImgWidth : carousel.scrollLeft;
      // console.log("toUse", toUse);
      // runnerBar.style.transform = `translateX(${Number(toUse-toUse*0.2)*(runnerBarContainer.clientWidth)/3040}px)`;
      // runnerBar.style.transform = `translateX(${Number(firstImgWidth)*runnerPace*(runnerBarContainer.clientWidth)/3120}px)`;
      thePrev = carousel.scrollLeft;
      setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
  });

  const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 25;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
      return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }

  const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  }

  const DragStart = (e) => {
    // updatating global variables value on mouse down event
    IsDragStart = true;
    PrevPageX = e.pageX || e.touches[0].pageX;
    PrevScrollLeft = runnerBarContainer.scrollLeft;
  }

  const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    // console.log("e", e);
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    // runnerBar.style.transform = `translateX(${Number(carousel.scrollLeft)*(runnerBarContainer.clientWidth)/3120}px)`;
    runnerBar.style.transform = `translateX(${carousel.scrollLeft * 100 / (carousel.clientWidth + 18.75)}%)`;
    // console.log("carousel scrollleft", carousel.scrollLeft,"gap", runnerBar.clientWidth, "carosel width", carousel.clientWidth);
    showHideIcons();
  }
  const Dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!IsDragStart) return;
    e.preventDefault();
    console.log("e", e);
    IsDragging = true;
    runnerBarContainer.classList.add("dragging");
    PositionDiff = (e.pageX || e.touches[0].pageX) - PrevPageX;
    runnerBarContainer.scrollLeft = PrevScrollLeft - PositionDiff;
    runnerBar.scrollLeft(100);

    // console.log("runnerBar scrollleft", runnerBarContainer.scrollLeft, "runnerbar self", runnerBar.scrollWidth);
    showHideIcons();
  }

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    // autoSlide();
    showHideIcons();
  }
  const DragStop = () => {
    IsDragStart = false;
    runnerBarContainer.classList.remove("dragging");

    if (!IsDragging) return;
    IsDragging = false;
    autoSlide();
    showHideIcons();
  }

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);

  // runnerBarContainer.addEventListener("mousedown", DragStart);
  // runnerBarContainer.addEventListener("touchstart", DragStart);

  // document.addEventListener("mousemove", Dragging);
  // runnerBarContainer.addEventListener("touchmove", Dragging);

  // document.addEventListener("mouseup", DragStop);
  // runnerBarContainer.addEventListener("touchend", DragStop);



  width = slides[0].clientWidth;
  slides.forEach((slide) => {
    slide.style.minWidth = `${width}px`;
  });

  width = slides[0].clientWidth;

  transparentClass.forEach((element) => {
    element.style.minHeight = `${width}px`;
  })

  // window.addEventListener("resize", calculatedValues);
  // window.addEventListener("resize", newFunc);

  return (
    <>
      <label for="the-latest" id="newfeaturedSets">The latest</label>
      <section class="the-latest" aria-labelledby="newfeaturedSets">
        <div class="latest-img-container" id="firstLatestImgCont">
          <img src="./assets/images/mainpart2/latest-section-images/the-latest-ninjago.webp" alt="img" />
          <h3 class="absolutePosition">Build an action-packed battle mech</h3>
          <p class="absolutePosition">Get ready for epic battles with the new LEGO® NINJAGO® sets.</p>
          <a class="absolutePosition imgHoverA" href="asdf" id="mustHover1">Shop now <span> </span> <span id="forward-arrow">
            <svg width="8" height="12" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill='black'></path>
            </svg>
          </span>
          </a>
          <img src="./assets/images/mainpart2/latest-section-images/ninjago_white_desktop_center_logo.png" alt="logo" id="assLogo1" />
        </div>
        <div class="latest-img-container" id="secondLatestImgCont">
          <img src="./assets/images/mainpart2/latest-section-images/the-latest-avatar.webp" alt="img" />
          <h3 class="absolutePosition">Dive deep with the RDA Mako Sub</h3>
          <p class="absolutePosition">Immersive underwater adventures with the new LEGO® Avatar sets.</p>
          <a class="absolutePosition imgHoverA" href="sdfa" id="mustHover2">Shop now <span> </span> <span id="forward-arrow">
            <svg width="8" height="12" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill='white'></path>
            </svg>
          </span>
          </a>
          <img src="./assets/images/mainpart2/latest-section-images/avatar-logo-600w.png" alt="logo" id="assLogo2" />
        </div>
      </section>
      <label for="featured-sets-wholebody-container" class="featured-sets">Featured sets</label>
      <div class="wrapper">
        <div class="featured-sets-wholebody-container carousel" aria-labelledby="featured-sets">
          <i id="left" class="fa-solid fa-angle-left"></i>
          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/first-image.webp" alt="ghfd" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container" aria-labelledby="featured-sets">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/second-image.webp" alt="khjf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>


          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/third-image.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/fourth-image.webp" alt="fghd" class="smallImageDisplay" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/fifth-image.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Exclusives</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>


          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/sixth-image.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Exclusives</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/seventh-image.webp" alt="dfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>


          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/eight-image.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/nineth-image.webp" alt="dfghsdf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/tenth-image.webp" alt="sfghsdfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/eleventh-image.webp" alt="dfghsgf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/twelveth-image.webp" alt="adfgs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/thirteenth-image.webp" alt="dfghsadfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/fourteenth-image.webp" alt="dafgs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/fifteen-image.webp" alt="adfgfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Hard to find</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <section class="product-container">
            <div class="transparent-container">
              <div class="add-wish-list">
                <div class="svg-container">
                  <svg width="30" height="30" viewBox="0 0 40 40" alt="" class="WishlistButtonstyles__StyledWishlistIcon-sc-1iowmvt-1 biMOpX">
                    <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                    <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                  </svg>
                </div>
                <div class="add-to-wish-list-text">
                  Add to wish list
                </div>
              </div>
              <div class="image-container">
                <img src="./assets/images/mainpart2/featured-set-images/sixteenth-image.webp" alt="adfhs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Exclusives</div>
                <div class="price-discount">30% OFF</div>
              </div>
            </div>

            <div class="product-name">Table Football</div>
            <div class="product-rating">
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./assets/images/mainpart2/rating-image/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="product-original-price">$249.99</span> <span id="discounted-price">$174.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <i id="right" class="fa-solid fa-angle-right" />
        </div>
      </div>

      <div id="runnerBarCont">
        <div id="runnerBar"></div>
      </div>

    </>
  )
}