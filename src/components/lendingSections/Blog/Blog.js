import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../../Container"
import Headline from "../../Headline"
import PostsList from "../../PostsList"
import PostCard from "../../PostCard/PostCard"

const Blog = props => {
  return (
    <section className={styles.Blog}>
      <Outer>
        <Headline>Блог</Headline>
      </Outer>
      <PostsList>
        <PostCard title="1" />
        <PostCard title="2" />
        <PostCard title="3" />
        <PostCard title="4" />
        <PostCard title="5" />
        <PostCard title="6" />
      </PostsList>
    </section>
  )
}

export default Blog
