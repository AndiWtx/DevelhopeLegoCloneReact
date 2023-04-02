import React from "react";

export function MainBar() {

  return (
    <div >
      <div className="flex px-0 py-3 max-w-[100vw] bg-[rgb(255,207,0)]">
        <div className="flex items-center h-16.5 mx-0 my-auto w-full max-w-[100%] pl-[2vw] ">
          <div className="flex h-[100%] items-center px-0 py-auto mx-0 my-auto ">
            <nav className="flex h-[100%] items-center px-0 py-auto mx-0 my-auto ">
              <a href="asdadsf" className="mr-16 no-underline bg-transparent ">
                <img
                  src="./images/lego-logo.svg"
                  alt="Lego"
                  width="50px"
                  className="w-14 h-14 inline-block align-middle max-w-[100%] object-cover border-none"
                />
              </a>
            </nav>
          </div>

          <ul className="flex h-14 items-center m-0 p-0  ">
            <li className="flex items-center whitespace-nowrap mr-12 list-none">
              <button className="uppercase hover:underline font-medium text-base leading-4 p-0 shadow-none cursor-pointer overflow-visible m-0 ">
                Shop
              </button>
            </li>
            <li className="flex items-center whitespace-nowrap mr-12 list-none">
              <button className="uppercase hover:underline font-medium text-base leading-4 p-0 shadow-none cursor-pointer overflow-visible m-0 ">
                Discover
              </button>
            </li>
            <li className="flex items-center whitespace-nowrap mr-0 list-none">
              <button className="uppercase hover:underline font-medium text-base leading-4 p-0 shadow-none cursor-pointer overflow-visible m-0 ">
                Help
              </button>
            </li>
          </ul>
          <div className="flex items-center pr-[2vw] ml-auto">
            <div className="flex items-center ml-au">
              <div className="flex items-end mr-7">
                <button className="flex cursor-pointer w-10 h-10 bg-white items-center justify-center rounded-[50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="leading-[0]  overflow-hidden"
                  >
                    <path
                      d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="h-px overflow-hidden absolute whitespace-nowrap w-px cursor-pointer normal-case -m-px p-0 border-0 clear: rect(0px, 0px, 0px, 0px)">
                    Open search field
                  </span>
                </button>
              </div>
            </div>

            <button className="flex flex-col justify-center items-center h-[100%] mr-5 text-xs leading-5 border-none cursor-pointer overflow-visible p-0   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                aria-hidden="true"
                className="leading-[0] h-[18px] w-5 overflow-hidden"
              >
                <path
                  d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="asdfgadsf"
              className=" inline-flex items-center text-[black] text-xs leading-[1.1875rem] cursor-pointer no-underline bg-transparent mr-5 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="leading-[0] h-5 w-4 text-[black] text-xs cursor-pointer mr-[0.3125rem]"
              >
                <g fill="currentColor" fill-rule="evenodd">
                  <path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path>
                  <path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path>
                </g>
              </svg>
              (0)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

