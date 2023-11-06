import React from "react"
import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">What our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center"> "Every step in these sneakers feels like a negotiation with destiny. They've got that Corleone quality — strong, reliable, and they never betray your style. Just like the Godfather himself, these sneakers command respect. You won't find a more loyal pair in the world of footwear. These shoes? They're an offer you can't refuse."</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
      {reviews.map((review)=>(
        <ReviewCard  
        key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback ={review.feedback}
        />
      ))}
    </section>
  )
}

export default CustomerReviews
