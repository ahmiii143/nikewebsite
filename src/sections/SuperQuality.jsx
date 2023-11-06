import Button from "../components/button"
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
     <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
      <p className="mt-4 lg:max-w-info-text:"> Nike Air Jordan shoes are renowned for their exceptional quality. Crafted with precision and using premium materials, these iconic sneakers offer unbeatable comfort, durability, and style. Whether you're hitting the courts or making a fashion statement, Air Jordans consistently deliver top-notch quality, making them a timeless choice for sneaker enthusiasts worldwide. </p>
      <p className="mt-4 lg:max-w-lg-info-text">Hamare yaha har kaam tasali bakash kia jata ha </p>
      <div className="mt-11">
      <Button label="View Details"/>
      </div>
     </div>
     <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />
     </div>
    </section>
  )
}

export default SuperQuality
