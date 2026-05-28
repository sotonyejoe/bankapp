import discount from '../assets/discount.svg';
import styles from '../style';
import GetStarted from './GetStarted';
import robot from "../assets/robot.png";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-8 h-8' />
       <p className={`${styles.paragraph} ml-2`}>
         <span className="ml-2 text-white">20% </span> 
         <span>Discount for {''}  </span> 
         <span className='text-white'>1 Month Account</span>
       </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-bold ss:text-[72px] 
        text-[50px] text-white ss:leading-[100px] leading-18.75'>The Next <br className='sm:block hidden' />{" "}
        <span className='text-gradient'>Generation </span>{" "}
        </h1>

        <div className='ss:flex md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-bold ss:text-[68px] 
        text-[52px] text-white ss:leading-[100px] leading-18.75 w-full'>
          Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
      </p>
    </div> 

    <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img
      src={robot}
      alt="billing"
      className="w-[100%] h-[100%] relative z-[5]"
    />

    <div className="absolute top-0 z-0 w-[70%] h-[50%] bg-blue-gradient blur-3xl opacity-20 " />
    <div className="absolute top-0 z-0 w-[80%] h-[80%] bg-blue-200 rounded-full bottom-30 blur-3xl z-[1] opacity-20" />
    <div className="absolute top-0 z-0 w-[50%] h-[50%] right-20 bg-blue-gradient blur-3xl  opacity-20" />

    <div className={`md:hidden ${styles.flexCenter} flex-col`}>
      <GetStarted />
    </div>
    </div>

    
  </section>
);

export default Hero;


