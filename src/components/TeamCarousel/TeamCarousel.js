import React from "react"
import ReactAliceCarousel from "react-alice-carousel"
import TeamCarouselItem from "./TeamCarouselItem"
import "./team-carousel.css"

const TeamCarousel = ({ team = [] }) => (
  <div className="team-carousel">
    <ReactAliceCarousel
      mouseDragEnabled
      buttonsDisabled
      fadeOutAnimation
      infinite={false}
      responsive={{
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1023: {
          items: 1,
        },
      }}
    >
      {team.map(member => (
        <TeamCarouselItem
          key={member.id}
          photo={member.photo}
          name={member.name}
          position={member.meta.position}
          details={member.details}
        />
      ))}
    </ReactAliceCarousel>
  </div>
)

export default TeamCarousel
