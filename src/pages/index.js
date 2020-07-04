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
            <Img fluid={props.data.front6.childImageSharp.fluid} />
            <Img fluid={props.data.front7.childImageSharp.fluid} />
            <Img fluid={props.data.front8.childImageSharp.fluid} />
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
                I never planned on becoming a skydiving instructor. I had always
                wanted to learn to do it myself and that was it. Once I finally
                had enough money I paid for all 25 jumps up front in cash for a
                discount without ever having jumped before. No refunds, so if I
                bailed after my first jump I was out over $2,000. Lucky for me I
                loved, and ended up spending all my free time and money camped
                at the grass airstrip of the local drop zone. At $25 per jump
                for licensed skydivers with their own gear it was really easy to
                burn through your cash fast. I loved skydiving and it was my
                life at the time, so I had no problem doing just that.
              </p>
              <p>
                Skydiving was always fun and a great time, but after awhile it
                was not as exciting anymore. The adrenaline soon left, after a
                few 100 jumps your heart beat stopped going up when you started
                putting your gear on. On the airplane ride up sometimes you fell
                asleep if it was a slow climb. Climbing outside and hanging on
                miles above the earth while your friends got ready no longer
                felt like you were about to die. Skydiving was not scary
                anymore, it was just fun. That was okay, but I missed the
                adrenaline and turned to BASE jumping to get the feeling back.
              </p>
              <p>
                Going from jumping out of a plane at 14,000 feet to jumping off
                a tower at 300 feet was a big change. The margin for error was
                gone, completely. There were no mistakes, or there was no more
                you. In skydiving most people would deploy their parachute at
                around 3,000 feet above the ground. That would give them a
                little extra time to try and fix any problems with their
                parachute, and if they could not, cut it away and go to their
                reserve. In BASE jumping there were no backup parachutes, you
                were already too low and would never have enough to use one.
                From 300 feet if you jumped and instantly reached back to deploy
                your parachute and your hand missed the handle, that was
                probably the only chance you would get.
              </p>
              <p>
                After a bunch of clandestine nighttime tower and building jumps
                I wanted more. BASE jumping being illegal in US National Parks
                made it difficult for Americans to jump there without risking
                arrest and gear confiscation. Wanting to keep my squeaky clean
                criminal record, I sold my car and booked a ticket out of the
                "Land of the Free" and set off for Europe. Most countries in
                Europe, it turned out, really did not care if you jumped off
                their mountains. Sure, they thought it was stupid, but were
                happy to let you risk your life hurling yourself off the alps if
                that was made you happy.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.splitscroller}>
          <div>
            <Img fluid={props.data.front10.childImageSharp.fluid} />
            <Img fluid={props.data.front11.childImageSharp.fluid} />
            <Img fluid={props.data.front12.childImageSharp.fluid} />
            <Img fluid={props.data.front13.childImageSharp.fluid} />
            <Img fluid={props.data.front14.childImageSharp.fluid} />
            <Img fluid={props.data.front15.childImageSharp.fluid} />
            <Img fluid={props.data.front16.childImageSharp.fluid} />
            <Img fluid={props.data.front17.childImageSharp.fluid} />
          </div>

          <div>
            <div>
              <h2>Close Calls</h2>
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
            <Img fluid={props.data.front18.childImageSharp.fluid} />
            <Img fluid={props.data.front19.childImageSharp.fluid} />
            <Img fluid={props.data.front22.childImageSharp.fluid} />
            <Img fluid={props.data.front23.childImageSharp.fluid} />
            <Img fluid={props.data.front24.childImageSharp.fluid} />
            <Img fluid={props.data.front25.childImageSharp.fluid} />
            <Img fluid={props.data.front26.childImageSharp.fluid} />
            <Img fluid={props.data.front27.childImageSharp.fluid} />
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

    front5: file(relativePath: { eq: "track.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front6: file(relativePath: { eq: "base.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front7: file(relativePath: { eq: "base2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front8: file(relativePath: { eq: "base3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    front9: file(relativePath: { eq: "tandem1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front10: file(relativePath: { eq: "a1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front11: file(relativePath: { eq: "a2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front12: file(relativePath: { eq: "a3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front13: file(relativePath: { eq: "a4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front14: file(relativePath: { eq: "a5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front15: file(relativePath: { eq: "a6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front16: file(relativePath: { eq: "a7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front17: file(relativePath: { eq: "a8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front18: file(relativePath: { eq: "swiss2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front19: file(relativePath: { eq: "swiss1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front20: file(relativePath: { eq: "swiss3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front21: file(relativePath: { eq: "swiss4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front22: file(relativePath: { eq: "swiss5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front23: file(relativePath: { eq: "swiss6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front24: file(relativePath: { eq: "swiss7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Home
