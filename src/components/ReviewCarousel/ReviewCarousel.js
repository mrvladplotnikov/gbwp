import React from "react"
import PropTypes from "prop-types"
import ReactAliceCarousel from "react-alice-carousel"
import ReviewCarouselItem from "./ReviewCarouselItem"
import "./review-carousel.css"

const ReviewCarousel = ({
  reviews = [],
  responsive = { 0: { items: 1 } },
  classes = {
    review: "",
    meta: "",
    thumbnail: "",
    name: "",
    company: "",
    content: "",
  },
}) => (
  <div className="review-carousel">
    <ReactAliceCarousel
      mouseDragEnabled
      buttonsDisabled
      fadeOutAnimation
      infinite={false}
      responsive={responsive}
    >
      {reviews.map(review => (
        <ReviewCarouselItem
          key={review.id}
          thumbnail={review.featured_media}
          name={review.title}
          position={review.meta.position}
          company={review.meta.company}
          review={review.content}
          link={review.meta.link}
          classes={classes}
        />
      ))}
    </ReactAliceCarousel>
  </div>
)

ReviewCarousel.propTypes = {
  reviews: PropTypes.array,
  responsive: PropTypes.object,
  classes: PropTypes.shape({
    review: PropTypes.string,
    meta: PropTypes.string,
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    content: PropTypes.string,
  }),
}

export default ReviewCarousel
