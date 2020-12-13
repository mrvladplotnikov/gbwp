import React from "react"
import PropTypes from "prop-types"
import Slider from "~components/Slider"

import ReviewCarouselItem from "./ReviewCarouselItem"

const ReviewCarousel = ({
  id,
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
    <Slider
      id={id ? id : "review-slider"}
      perView={1}
      gap={10}
      focusAt={0}
      breakpoints={responsive}
    >
      {reviews.map(review => (
        <div key={review.id}>
          <ReviewCarouselItem
            thumbnail={review.featured_media}
            name={review.title}
            position={review.meta.position}
            company={review.meta.company}
            review={review.content}
            link={review.meta.link}
            classes={classes}
          />
        </div>
      ))}
    </Slider>
  </div>
)

ReviewCarousel.propTypes = {
  id: PropTypes.string,
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
