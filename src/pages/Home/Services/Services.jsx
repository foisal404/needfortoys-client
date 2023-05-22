import add from '../../../assets/add.png'
import seo from '../../../assets/seo.png'
import speed from '../../../assets/speed.png'
import support from '../../../assets/support.png'
const Services = () => {
  return (
    <div className="card card-side bg-base-100 shadow-2xl mx-10 md:mx-20">
      
      <div className="card-body flex  flex-col md:flex-row  justify-evenly">
        <div className='p-3'>
            <img src={speed} alt="" className='w-20 h-20 mx-auto'/>
            <h2 className='text-center'>Fast Loading</h2>
        </div>
        <div className='p-3'>
            <img src={add} alt="" className='w-20 h-20 mx-auto'/>  
            <h2 className='text-center'>40+ Sections</h2>
        </div>
        <div className='p-3'>
            <img src={seo} alt="" className='w-20 h-20 mx-auto'/>
            <h2 className='text-center'>SEO Friendly</h2>
        </div>
        <div className='p-3'>
            <img src={support} alt="" className='w-20 h-20 mx-auto'/>
            <h2 className='text-center'>Dedicated Support</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
