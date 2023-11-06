import React from "react"
import { offer } from "../assets/images"
import Button from "../components/button"
import { arrowRight } from "../assets/icons"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src= {offer}  width={773} height={687} className="object-contain w-full"/>
      </div>


      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We make You an offer
          <span className='text-coral-red'> that you can't </span>
          <span className='text-coral-red'> refuse </span>   
        </h2>
      <p className="mt-4 lg:max-w-info-text:"> Introducing our extraordinary special offer on shoes, an offer you can't refuse. These shoes, like a cherished family recipe, are carefully crafted to perfection. With every step, you'll experience the legacy of quality and style passed down through generations. Just as loyalty is paramount in the world of the Godfather, our commitment to providing you with the finest footwear is unwavering. Don't miss this opportunity to step into greatness and seize the offer of a lifetime, because when it comes to shoes, we make you an offer you won't resist. </p>
      <p className="mt-4 lg:max-w-lg-info-text">"Step into a world of quality and style, where every pair of shoes is an offer you can't refuse, just like in The Godfather." </p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label="Shop Now" iconURL={arrowRight}/>
      <Button label="learn more" backGroundColor="bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
      </div>
     </div>
     
    </section>
  )
}

export default SpecialOffer
