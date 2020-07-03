import React from "react"
import Styles from "./main.module.scss"
import Img from "gatsby-image"
const Home = props => {
  return (
    <div>
      <div className={Styles.landing}>
        {/* <Img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
          fluid={props.data.front1.childImageSharp.fluid}
        /> */}
        <div className={Styles.title}>
          <h1>Five Years of Falling</h1>
          <p>
            {" "}
            Random stories and images from my time as a tandem skydiving
            instructor
          </p>
        </div>
      </div>{" "}
      <section className={Styles.two}>
        <div className={Styles.splitscroller}>
          <div>
            <Img fluid={props.data.front3.childImageSharp.fluid} />
            <Img fluid={props.data.front4.childImageSharp.fluid} />
            <Img fluid={props.data.front5.childImageSharp.fluid} />
          </div>

          <div>
            <div>
              <h1>The Beginning</h1>

              <h2>How the heck did I get here?</h2>
              <p>
                Most days as a skydiving instructor were great. On the other
                had, sometimes I found myself pondering where it had all gone
                wrong. Opening the the door of our Kodiak jump plane at 7.5k
                feet AGL and feeling the rain pelt my legs as I sat one the edge
                with a terrified passenger strapped to me was one of those
                times.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
            </div>
          </div>
        </div>

        <h2>Many Images, Not Much Text</h2>

        <div className={Styles.splitscroller}>
          <div>
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
          </div>

          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                condimentum augue sit amet ligula euismod consectetur. Praesent
                in ultricies erat. Sed et auctor odio, at volutpat nisi. Ut
                iaculis tincidunt ornare. Suspendisse metus erat, bibendum eu
                tristique sit amet, efficitur a justo. Maecenas pharetra dolor
                non dui euismod tincidunt. Morbi hendrerit faucibus turpis, quis
                auctor elit. Integer at tortor at tellus fermentum faucibus nec
                non turpis. Aliquam varius, lacus et euismod iaculis, erat erat
                suscipit libero, vitae semper risus velit tincidunt nunc. Cras
                varius sit amet turpis vel molestie. Curabitur a magna vitae ex
                rhoncus suscipit dictum eu nisl. Donec mauris tellus, euismod
                nec posuere hendrerit, pulvinar sed nunc. Sed id pulvinar quam,
                ut posuere leo. Integer fermentum augue vel ex congue, pulvinar
                ullamcorper enim bibendum.
              </p>
            </div>
          </div>
        </div>

        <h2>Many Images, Lots of Text</h2>

        <div className={Styles.splitscroller}>
          <div>
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
            <img src="//placehold.it/800x600" />
          </div>

          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                condimentum augue sit amet ligula euismod consectetur. Praesent
                in ultricies erat. Sed et auctor odio, at volutpat nisi. Ut
                iaculis tincidunt ornare. Suspendisse metus erat, bibendum eu
                tristique sit amet, efficitur a justo. Maecenas pharetra dolor
                non dui euismod tincidunt. Morbi hendrerit faucibus turpis, quis
                auctor elit. Integer at tortor at tellus fermentum faucibus nec
                non turpis. Aliquam varius, lacus et euismod iaculis, erat erat
                suscipit libero, vitae semper risus velit tincidunt nunc. Cras
                varius sit amet turpis vel molestie. Curabitur a magna vitae ex
                rhoncus suscipit dictum eu nisl. Donec mauris tellus, euismod
                nec posuere hendrerit, pulvinar sed nunc. Sed id pulvinar quam,
                ut posuere leo. Integer fermentum augue vel ex congue, pulvinar
                ullamcorper enim bibendum.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
              <p>
                Mauris in consequat enim. Sed vitae nisi risus. Donec at odio
                mauris. Nulla lorem libero, interdum ut tristique sit amet,
                congue ac risus. Fusce id eros at dui egestas blandit nec at
                turpis. Aenean dignissim est non erat condimentum ornare. Sed
                accumsan nunc nisi, in facilisis est cursus ac. Nulla pharetra
                lorem libero, a scelerisque nisl sagittis non. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec consequat ipsum vel tellus finibus lacinia.
                Aliquam eu neque diam. Nam volutpat finibus urna, non porttitor
                nulla. Donec ac pellentesque nibh. Suspendisse egestas, eros sit
                amet convallis aliquam, magna ligula pulvinar neque, eget
                ultrices purus felis ac massa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query {
    front1: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front2: file(relativePath: { eq: "out.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front3: file(relativePath: { eq: "gem.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front4: file(relativePath: { eq: "ws.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front5: file(relativePath: { eq: "track.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Home
