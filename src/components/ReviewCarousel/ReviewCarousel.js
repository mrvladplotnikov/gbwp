import React from "react"
import ReactAliceCarousel from "react-alice-carousel"
import ReviewCarouselItem from "./ReviewCarouselItem"
import "./review-carousel.css"

const ReviewCarousel = ({ reviews = [] }) => (
  <div className="review-carousel">
    <ReactAliceCarousel
      mouseDragEnabled
      buttonsDisabled
      fadeOutAnimation
      infinite={false}
    >
      {reviews.map(review => (
        <ReviewCarouselItem
          key={review.id}
          thumbnail={review.featured_media}
          name={review.title}
          position={review.meta.position}
          company={review.meta.company}
          review={review.content}
        />
      ))}
    </ReactAliceCarousel>
  </div>
)

export default ReviewCarousel
