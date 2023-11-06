import { products } from "../constants"
import PopularProductsCard  from "../components/PopularProductsCard"
function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12" >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red"> Popular </span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"> The Best Products and top notch experience you will get</p>

    
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"> 
      {products.map((products) =>(
         <PopularProductsCard key = {products.name} {...products}/>
      ))}

      </div>


    </section>
  )
}

export default PopularProducts
