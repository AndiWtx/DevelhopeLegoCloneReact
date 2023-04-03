import React from 'react';
import { useEffect } from 'react'
import './carousel2.css'

export function CarouselTop() {
  useEffect(() => {
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
        let firstImgWidth = width + 25;
        let firstSlideWidth = width;
        // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        // carousel.scrollLeft += icon.id == "left" ? -slidePace * firstImgWidth; runnerPace = runnerPace - 1 : slidePace * firstImgWidth;
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
            runnerBar.style.transform = `translateX(${carousel.scrollLeft * 100 / (carousel.clientWidth + 18.75)}%)`;
          }
        }
        console.log("starting counterR", counterR);


        let toUse = carousel.scrollLeft === 0 ? firstImgWidth : carousel.scrollLeft;
        console.log("toUse", toUse);
        runnerBar.style.transform = `translateX(${Number(toUse - toUse * 0.2) * (runnerBarContainer.clientWidth) / 3040}px)`;
        runnerBar.style.transform = `translateX(${Number(firstImgWidth) * runnerPace * (runnerBarContainer.clientWidth) / 3120}px)`;
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
      runnerBar.style.transform = `translateX(${Number(carousel.scrollLeft) * (runnerBarContainer.clientWidth) / 3120}px)`;
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

    runnerBarContainer.addEventListener("mousedown", DragStart);
    runnerBarContainer.addEventListener("touchstart", DragStart);

    document.addEventListener("mousemove", Dragging);
    runnerBarContainer.addEventListener("touchmove", Dragging);

    document.addEventListener("mouseup", DragStop);
    runnerBarContainer.addEventListener("touchend", DragStop);



    width = slides[0].clientWidth;
    slides.forEach((slide) => {
      slide.style.minWidth = `${width}px`;
    });

    width = slides[0].clientWidth;

    transparentClass.forEach((element) => {
      element.style.minHeight = `${width}px`;
    })
  });

  return (
    <div className="ml-[7vw] font-[Cerapro,sans-serif] mt-[70px]">

      <label for="featured-sets-wholebody-container" class="featured-sets">Recommended For You</label>
      <div class="wrapper">
        <div class="featured-sets-wholebody-container carousel" aria-labelledby="featured-sets" >
          <i id="left" class="fa-solid fa-angle-left"><svg
            width="18"
            height="28"
            viewBox="0 0 18 28"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180 h-[20px] ml-[10px] mt-[11px]"
          >
            <path
              d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
              fill="currentColor"
            ></path>
          </svg></i>
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
                <img src="./images/carousel21-Andi.webp" alt="ghfd" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Christmas Wreath 2-in-1</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"> <span id="discounted-price">$39.99</span></div>
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
                <img src="./images/carousel22-Andi.webp" alt="khjf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Exclusive</div>
              </div>
            </div>

            <div class="product-name">Christmas Tree</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$44.99</span></div>
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
                <img src="./images/carousel23-Andi.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
              </div>
            </div>

            <div class="product-name">Santa's Sleigh</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$39.99</span></div>
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
                <img src="./images/carousel24-Andi.webp" alt="fghd" class="smallImageDisplay" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Money Tree</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$174.99</span></div>
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
                <img src="./images/carousel25-Andi.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Monkey Kid's Team Van</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$129.99</span></div>
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
                <img src="./images/carousel26-Andi.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">Exclusive</div>
              </div>
            </div>

            <div class="product-name">Lego® Iconic Chess Set</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$64.99</span></div>

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
                <img src="./images/carousel27-Andi.webp" alt="dfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Disney Celebration Train</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$39.99</span></div>
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
                <img src="./images/carousel28-Andi.webp" alt="dfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">THE LORD OF THE RINGS: RIVENDELL</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$499.99</span></div>
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
                <img src="./images/carousel29-Andi.webp" alt="dfghsdf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">BTS Dynamite</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$99.99</span></div>
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
                <img src="./images/carousel210-Andi.webp" alt="sfghsdfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Adorable Dogs</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$29.99</span></div>
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
                <img src="./images/carousel211-Andi.webp" alt="dfghsgf" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Magical Unicorn</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$9.99</span></div>
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
                <img src="./images/carousel212-Andi.webp" alt="adfgs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Exotic Parrot</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$19.99</span></div>
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
                <img src="./images/carousel213-Andi.webp" alt="dfghsadfg" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">Spider Tank</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$49.99</span></div>
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
                <img src="./images/carousel214-Andi.webp" alt="dafgs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">2022 Gord GT</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$119.99</span></div>
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
                <img src="./images/carousel215-Andi.webp" alt="adfgfgh" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">The Mandalorian N-1 Starfighter™ Microfighter</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/halfrating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$15.99</span></div>
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
                <img src="./images/carousel216-Andi.webp" alt="adfhs" />
              </div>
              <div class="product-predetails">
                <div class="lateness">New</div>
              </div>
            </div>

            <div class="product-name">McLaren Solus GT & McLaren F1 LM</div>
            <div class="product-rating">
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/fullrating.svg" alt="stars" width="15" height="15" />
              <img src="./images/zerorating.svg" alt="stars" width="15" height="15" />
            </div>
            <div class="product-price"><span id="discounted-price">$34.99</span></div>
            <button id="add-to-bag-button">Add to Bag</button>
          </section>

          <i id="right" class="fa-solid fa-angle-right" ><svg
            width="18"
            height="28"
            viewBox="0 0 18 28"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className=" h-[20px] ml-[14px] mt-[11px]"
          >
            <path
              d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
              fill="currentColor"
            ></path>
          </svg></i>
        </div>
      </div>

      <div id="runnerBarCont">
        <div id="runnerBar"></div>
      </div>

    </div>
  )
}