/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react'
import cover from '../assets/images/cover.jpg'

const Home = () => (
  <Fragment>
    <section className="section">
      <div className="container">
      </div>
      <figure className="center">
        <img src={cover} className=""/>
        <figcaption>
          <h1 className="title">
            Rattlesnake Renegades
          </h1>
          <p className="subTitle">Welcome to the best (fiction) rock band's website.</p>
          <p>As you can see, we are work in progress, soon you'l be able to read the whole comicbook here!</p>
        </figcaption>
      </figure>
    </section>
  </Fragment>
)

export default Home
