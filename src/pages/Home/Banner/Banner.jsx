const Banner = () => {
  const bannerInfo = (
    <div className="absolute  flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white  ">
      <div className="md:w-5/12 space-y-5 pl-10">
        <h2 className=" lg:text-7xl text-5xl ">
          Welcome to NeedForToys! Experience the Thrill of Car Toys
        </h2>
        <p className="text-slate-400">
          Discover a World of Speed and Fun Find the Perfect Cars for Playtime
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/879/895/desktop-wallpaper-hot-wheels-unleashed-review.jpg"
            className="w-full "
          />
          {bannerInfo}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://e0.pxfuel.com/wallpapers/137/87/desktop-wallpaper-hot-wheels-background-hot-wheels-logo.jpg"
            className="w-full"
          />
          {bannerInfo}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/12/16/19/autos-2060420_960_720.jpg"
            className="w-full"
          />
          {bannerInfo}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
