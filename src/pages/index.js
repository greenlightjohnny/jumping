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
            <Img fluid={props.data.front1a.childImageSharp.fluid} />
            <Img fluid={props.data.front2a.childImageSharp.fluid} />
            <Img fluid={props.data.front23.childImageSharp.fluid} />
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
            </div>
          </div>
        </div>

        <div className={Styles.splitscroller}>
          <div>
            {" "}
            <Img fluid={props.data.front6.childImageSharp.fluid} />
            <Img fluid={props.data.front7.childImageSharp.fluid} />
            <Img fluid={props.data.front24.childImageSharp.fluid} />
            <Img fluid={props.data.front8.childImageSharp.fluid} />
            <Img fluid={props.data.front18.childImageSharp.fluid} />
            <Img fluid={props.data.front19.childImageSharp.fluid} />
            <Img fluid={props.data.front25.childImageSharp.fluid} />
            <Img fluid={props.data.front20.childImageSharp.fluid} />
            <Img fluid={props.data.front21.childImageSharp.fluid} />
            <Img fluid={props.data.front22.childImageSharp.fluid} />
          </div>

          <div>
            <div>
              <h2>Europe BASE</h2>
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
              <p>
                One of my Australian friends bought a super ugly old Renault
                station and we spent the summer driving around Europe camping
                out of it. It had no air conditioning, and the drivers side
                window would not roll down. We always thought for sure it would
                break down at any moment, but it did. Driving from Switzerland
                to Norway we stopped in Germany and stocked up on food since we
                did not have enough money to eat out and Norway was extremely
                expensive. We did not buy much alcohol because we all planned to
                be up early each day hiking and jumping, and did not want to be
                hungover. Well, we ran out of alcohol within the first week.
                Turned out the weather in Norway was not known sunshine. It was
                a big problem for us, because we were jumping off some very high
                mountains and they were completely covered in clouds. Jumping
                when you can't see what is below you is a death sentence.
                Instead we spent the majority of our month there huddled inside
                our tents while it poured rain on us, eating corn flakes for
                dinner because we had not place to set up the camp stove in the
                rain.
              </p>
              <p>
                I did many more trips to Europe, but that first season will
                always be the best. I met a ton of amazing people that year, it
                seems like each year the number of them still alive goes down.
                Even losing contact and not talking for years, I have random
                memories of moments we had and suddenly feel sad remembering
                that they are not around anymore. At the time lots of us were
                parting hard, and doing lots of risky jumps. The philosophy
                seemed to be "No one gets off this rock alive, let's have some
                fun!".{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.splitscroller}>
          <div>
            {" "}
            <Img fluid={props.data.front26.childImageSharp.fluid} />
            <Img fluid={props.data.front27.childImageSharp.fluid} />
            <Img fluid={props.data.front28.childImageSharp.fluid} />
            <Img fluid={props.data.front29.childImageSharp.fluid} />
            <Img fluid={props.data.front25.childImageSharp.fluid} />
            <Img fluid={props.data.front20.childImageSharp.fluid} />
            <Img fluid={props.data.front21.childImageSharp.fluid} />
            <Img fluid={props.data.front22.childImageSharp.fluid} />
          </div>

          <div>
            <div>
              <h2>Tandems</h2>
              <p>
                Getting my skydiving instructor rating to take passengers for
                skydives with me was honestly terrifying. It was totally
                different when you had someone else strapped to your front. It
                was a different kind of terrifying than when you were learning
                how to jump alone, this time you were not scared for yourself,
                you were stressed because you had the responsibility for another
                persons life. Tandem skydiving equipment was much more
                complicated, and had entirely different emergency procedures.
              </p>
              <p>
                Right after passing my instructor exam I started looking for
                work. At the same time, an acquaintance of mine and her
                passenger died in Mexico after getting stuck on the landing
                strut while trying to exit. Hanging below the airplane the pilot
                was unable to land, and there was no way to climb back inside
                with the weight of two people and the gear. I got a call about a
                job in the East Coast, and they wanted me there as soon as
                possible. After working there for awhile I found out that the
                instructor who had died in Mexico was supposed to work there,
                and I was the replacement.{" "}
              </p>

              <p>
                Tandems had a way of slowly lulling you into a sense of boredom,
                and suddenly you would get a passenger who would ignore all your
                training and attempt to unknowingly kill you both. To be fair,
                it is pretty scary your first time and it is super easy to
                forget all instructions.{" "}
              </p>
              <p>
                I found it was super easy to travel while doing tandems, just
                chase the summer around the world and you could always find some
                work
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

            {/* 
            <Img fluid={props.data.front19.childImageSharp.fluid} />
            <Img fluid={props.data.front22.childImageSharp.fluid} />
            <Img fluid={props.data.front23.childImageSharp.fluid} />
            <Img fluid={props.data.front24.childImageSharp.fluid} />
            <Img fluid={props.data.front25.childImageSharp.fluid} />
            <Img fluid={props.data.front26.childImageSharp.fluid} />
            <Img fluid={props.data.front27.childImageSharp.fluid} /> */}
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
    front1a: file(relativePath: { eq: "au.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front2a: file(relativePath: { eq: "au2.jpg" }) {
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
    front18: file(relativePath: { eq: "swiss1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front19: file(relativePath: { eq: "swiss2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front20: file(relativePath: { eq: "norway.png" }) {
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
    front23: file(relativePath: { eq: "landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front24: file(relativePath: { eq: "camping.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front25: file(relativePath: { eq: "full.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front26: file(relativePath: { eq: "out.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front27: file(relativePath: { eq: "Tandem1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    front28: file(relativePath: { eq: "tandem4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Home

// front18: file(relativePath: { eq: "swiss2.png }) {
//   childImageSharp {
//     fluid(maxWidth: 1900) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// front19: file(relativePath: { eq: "swiss1.png" }) {
//   childImageSharp {
//     fluid(maxWidth: 1900) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// front20: file(relativePath: { eq: "swiss3.png" }) {
//   childImageSharp {
//     fluid(maxWidth: 1900) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// front21: file(relativePath: { eq: "swiss4.png" }) {
//   childImageSharp {
//     fluid(maxWidth: 1900) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
