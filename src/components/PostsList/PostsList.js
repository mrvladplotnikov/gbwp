import React from "react"
import styles from "./styles.module.css"
import PostCard from "../PostCard/PostCard"
import styled from "styled-components"
import { useSwipeable } from "react-swipeable"
const NEXT = "NEXT"
const PREV = "PREV"

const CarouselContainer = styled.div`
  display: flex;
  animation: ${props =>
    props.sliding ? "none" : "fadeIn .5s ease-in-out 0s forwards"};
  overflow: hidden;
  margin: 0 0 0 15px;
  @keyframes fadeIn {
    from {
      opacity: 0.6;
      -webkit-transform: translate3d(100%, 100%, 100%, 100%);
      transform: translate3d(100%, 100%, 100%, 100%);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${props => props.order};

  @media (min-width: 992px) {
    flex: 1 0 calc(100% / 5);
    flex-basis: calc(100% / 5);
  }
`

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos
}
const initialState = { pos: 0, sliding: false, dir: NEXT }

const PostsList = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const numItems = 6
  const slide = dir => {
    dispatch({ type: dir, numItems })
    setTimeout(() => {
      dispatch({ type: "stopSliding" })
    }, 50)
  }
  const slideTo = pos => {
    if (state.pos === pos) return

    dispatch({ type: "SET", numItems: pos })
    setTimeout(() => {
      dispatch({ type: "stopSliding" })
    }, 5)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const dots = () => {
    let dotsArr = []

    for (let i = 0; i < numItems; i++) {
      dotsArr.push(<li key={i} onClick={() => slideTo(i)}></li>)
    }

    return dotsArr
  }

  return (
    <div className={styles.PostsList} {...handlers}>
      <CarouselContainer dir={state.dir} sliding={state.sliding}>
        {React.Children.map(props.children, (child, index) => (
          <CarouselSlot
            key={index}
            order={getOrder({ index: index, pos: state.pos, numItems })}
          >
            {child}
          </CarouselSlot>
        ))}
      </CarouselContainer>

      <ul>{dots()}</ul>
    </div>
  )
}

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      }
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      }
    case "SET":
      return {
        ...state,
        dir: state.pos < numItems ? NEXT : PREV,
        sliding: true,
        pos: numItems,
      }
    case "stopSliding":
      return { ...state, sliding: false }
    default:
      return state
  }
}

export default PostsList
