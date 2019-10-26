import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../../Container"
import Headline from "../../Headline"
import Carousel from "../../Carousel"
import PostCard from "../../PostCard/PostCard"
import StyledLink from "../../StyledLink"

import image1 from "../../../images/post-t.jpg"
import image2 from "../../../images/post-t-2.jpg"
import image3 from "../../../images/post-t-3.jpg"
import image4 from "../../../images/post-t-4.jpg"
import image5 from "../../../images/post-t-5.jpg"
import image6 from "../../../images/post-t-6.jpg"

const Blog = () => (
  <section className={styles.Blog}>
    <Outer>
      <Headline className={styles.title}>Блог</Headline>
    </Outer>
    <Carousel>
      <PostCard
        title="Post 1"
        thumbnail={image1}
        description="Cras dapibus. Vivamus elementum semper nisi."
      />
      <PostCard
        title="Post 2"
        thumbnail={image2}
        description="Cras dapibus. Vivamus elementum semper nisi."
        revers
      />
      <PostCard
        title="Post 3"
        thumbnail={image3}
        description="Cras dapibus. Vivamus elementum semper nisi."
      />
      <PostCard
        title="Post 4"
        thumbnail={image4}
        description="Cras dapibus. Vivamus elementum semper nisi."
        revers
      />
      <PostCard
        title="Post 5"
        thumbnail={image5}
        description="Cras dapibus. Vivamus elementum semper nisi."
      />
      <PostCard
        title="Post 6"
        thumbnail={image6}
        description="Cras dapibus. Vivamus elementum semper nisi."
        revers
      />
      <PostCard
        title="Post 7"
        thumbnail={image3}
        description="Cras dapibus. Vivamus elementum semper nisi."
      />
    </Carousel>
    <Outer>
      <div className={styles.linkWrapper}>
        <StyledLink to="/blog">Перейти в блог</StyledLink>
      </div>
    </Outer>
  </section>
)

export default Blog
