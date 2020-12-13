import React from "react"
import Slider from "~components/Slider"
import { Inner } from "~components/Container"
import TeamCarouselItem from "./TeamCarouselItem"

import styles from "./styles.module.css"

const TeamCarousel = ({ team = [] }) => {
  return (
    <div className="team-carousel">
      <Inner className={styles.container}>
        <Slider id="team-slider" perView={1} focusAt={0}>
          {team.map(member => (
            <div key={member.id}>
              <TeamCarouselItem
                photo={member.photo}
                name={member.name}
                position={member.meta.position}
                details={member.details}
              />
            </div>
          ))}
        </Slider>
      </Inner>
    </div>
  )
}

export default TeamCarousel
