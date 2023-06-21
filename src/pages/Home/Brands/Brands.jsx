import Marquee from "react-fast-marquee";
import lego from '../../../assets/lego.png'
import mettel from '../../../assets/mattel.png'
import barbie from '../../../assets/barbie.png'
import fisher from '../../../assets/Fisher-Price_logo.png'
import hasbro from '../../../assets/Hasbro.png'
import wheel from '../../../assets/Hot-Wheels-logo.png'
import mega from '../../../assets//mega.png'

const Brands = () => {
  return (
    <div className="py-10 pb-20">
        <h2 className=" text-center md:p-10 p-5 lg:text-5xl text-3xl font-semibold">Our Brands</h2>
      <Marquee>
        <img src={lego} className="h-32 mx-5" />
        <img src={barbie} className="h-32 mx-5" />
        <img src={hasbro} className="h-32 mx-5" />
        <img src={fisher} className="h-32 mx-5" />
        <img src={wheel} className="h-32 mx-5" />
        <img src={mega} className="h-32 mx-5" />
        <img src={mettel} className="h-32 mx-5" />
      </Marquee>
    </div>
  );
};

export default Brands;
