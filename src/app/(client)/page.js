"use client";
import { useEffect, useState } from "react";
import { getLongArticleList } from "../../../../sanity/services/longArticles";
import { XEmbed } from "react-social-media-embed";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import HoverAnnotation from "@/components/hoverAnnotations/HoverAnnotation2";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

// Image import from public folder
const heroImage = "/281580ca259911f1735e89f28c0426f3.jpeg";
const vectorImage1 = "/Vector.svg";
const vectorImage2 = "/Vector1.svg";
const vectorImage3 = "/Vector2.svg";
const vectorImage4 = "/Vector3.svg";
const vectorgif = "/191e4677baa9be25f7f65de8c16c1624.gif";
const navlogo = "/Layer_1.svg";
const Subtract10 = "/Subtract10.png";
const frame = "/Frame.svg";
const mainImage1 = "/954466b55d2f348b933aa20166600087.jpeg";
const mainImage2 = "/bfebad05a1c80398f6eeba637852f69a.jpeg";
const btnarrow = "/Arrow.svg";

const subtract51 = "/Subtract(2).png";
const subtract52 = "/Subtract(2).png";
const frame1 = "/Frame(1).svg";
const arrow = "/Arrow.svg";
const rectangle1 = "/04ba2b21ac36e9781227dc9a7259588f.png";
const rectangle2 = "/6985dabe0b4f13780c261c3302f5c356.jpeg";
const rectangle3 = "/954466b55d2f348b933aa20166600087.jpeg";
const rectangle4 = "/5258a8e962f20643c2eec2f54fddd54b.jpeg";
const rectangle5 = "/47acf804c5d6023a7f472a02872ca72f.jpeg";
const rectangle6 = "/38ba6c425575bcb7e168a18a58ccb960.jpeg";

const subtract53 = "/Subtract(3).png";
const frame2 = "/Frame(2).svg";
const rectangle7 = "/c1.jpeg";
const rectangle8 = "/c2.jpeg";
const rectangle9 = "/c3.jpeg";
const arrowIcon = "/Arrow.svg";

const subtract54 = "/Subtract(4).png";
const newImage1 = "/new1.jpeg";
const newImage2 = "/new2.jpeg";
const rectangle18 = "/rectangle8.jpeg";
const rectangle19 = "/rectangle9.jpeg";
const rectangle20 = "/rectangle10.jpeg";

const subtract10 = "/Subtract10.png";
const frame167 = "/Frame167.svg";
const whatsappSymbol = "/whatsapp_symbol.svg.svg";
const arrow2 = "/Arrow2.svg";

const frame36 = "/Frameso.svg";
const mailIcon = "/mail.svg";
const copyrightIcon = "/copyright.svg";
const instagramIcon = "/instagram.svg";
const twitterIcon = "/twitter.svg";
const arrow_copy = "/Arrow_copy.svg";

const stories_img = "/source_shape.png";
const article_img = "/Rectangle-10.png";
const share_btn = "/Frame 232.png";
const frame1670 = "/Frame1670.svg";
const awarded_img = "/awarded_img.png";
const ms_menon_img_one = "/ms-menon_img_one.png";
const ms_menon_img_two = "/ms-menon-img-two.png";

const myPortableTextComponents = {
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    p: ({ children }) => <p style={{ marginBlock: "1rem" }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{ backgroundColor: "#999" }}>❝{children}❞</blockquote>
    ),
    customHeading: ({ children }) => <h2>{children}</h2>,
  },
  types: {
    tweet: ({ value }) => {
      const { url } = value;
      console.log(value);
      if (!url) return null;
      return (
        <div>
          <h2>Tweet....</h2>
          <XEmbed url={url} width={400} />
        </div>
      );
    },
    image: ({ value }) => (
      <>
        <h2>Image....</h2>
        <Image
          src={urlForImage(value?.asset?._ref)}
          height={400}
          width={400}
          priority
          alt=""
        />
      </>
    ),
    customWidget: ({ value }) => {
      const { heading, bulletPoints } = value;
      if (!heading || !bulletPoints?.length) return null;

      return (
        <div style={{ border: "1px solid" }}>
          <h3>{heading}</h3>
          <ul>
            {bulletPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      );
    },
  },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    strong: ({ children }) => <strong>{children}</strong>,
    link: ({ value, children }) => {
      const target = (value?.url || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.url}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          {children}
        </a>
      );
    },
    markWord: (props) => {
      return <HoverAnnotation props={props} />;
    },
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
    checkmarks: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
    checkmarks: ({ children }) => <li> {children}</li>,
  },
};

export default function Home() {
  const [data, setData] = useState({});

  // fetching required data from the sanity studio
  const fetchData = async () => {
    const test = await getLongArticleList();
    setData(test[0]);
    console.log(test);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // format the date
  function formatDate(isoString) {
    const date = new Date(isoString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      {/* Section 1 */}
      <div className="home-page-final">
        <div className="overlap-wrapper">
          <div className="overlap">
            <img className="hero-screen" src={heroImage} alt="hero" />
          </div>
          <div className="content">
            <div className="info">
              <img className="vic" src={vectorImage1} alt="" />
              <div className="groupimg d-flex">
                <img className="vic" src={vectorImage2} alt="" />
                <div className="two">
                  <img src={vectorImage4} alt="" />
                  <img className="dot" src={vectorImage3} alt="" />
                </div>
              </div>
              <div className="line"></div>
              <div className="font">
                <img src={vectorgif} alt="" />
                <h1>
                  A digital catalyst for <br />
                  <span>India's</span> coffee ecosystem
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <img className="layer" src={navlogo} alt="" />
        <div className="bar">
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <div className="nav-link">
          <div className="text-wrapper-15">About Us</div>
          <div className="text-wrapper-15">Stories</div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="Section-2">
        <img className="subtract-51" src={Subtract10} alt="Subtract 51" />
        <img className="subtract-52" src={Subtract10} alt="Subtract 52" />
        <div className="featured-stories">
          <div className="heading d-flex">
            <div className="text-wrapper">FEATURED STORIES</div>
            <img className="img" src={frame} alt="Frame" />
          </div>
          <div className="featured-box">
            <div className="frame-5">
              <img className="img-2" src={mainImage1} alt="Sunalini Menon" />
              <div className="frame-6">
                <p className="p">
                  Sunalini Menon: Breaking stereotypes &amp; shaping India’s
                  coffee narrative for over 50 years
                </p>
                <div className="text-wrapper-2">6 mins read</div>
              </div>
            </div>
            <div className="frame-5">
              <img className="img-2" src={mainImage2} alt="Mr. Purnesh" />
              <div className="frame-6">
                <div className="frame-7">
                  <p className="p">
                    Mr. Purnesh and Harley Estates: A Legacy of Innovation,
                    Scale, and International Acclaim
                  </p>
                </div>
                <div className="text-wrapper-2">6 mins read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="oldschool-button">
          <button className="button d-flex">
            <div className="sign-up">View all featured stories</div>
            <img className="arrow" src={btnarrow} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-3">
        <img className="subtract-51" src={subtract51} alt="Subtract 51" />
        <img className="subtract-52" src={subtract52} alt="Subtract 52" />

        <div className="heading d-flex">
          <div className="text-wrapper">PEOPLE BEHIND THE CUP</div>
          <img className="img" src={frame1} alt="Frame" />
        </div>

        <div className="row">
          <div className="frame-10">
            <div className="frame5">
              <img
                className="rectangle"
                src={rectangle1}
                alt="Coffeepreneurship"
              />
              <div className="frame-6">
                <div className="text-wrapper-3">COFFEEPRENEURSHIP</div>
                <p className="text-wrapper-4">
                  From London to India: How this entrepreneurial couple is
                  taking Indian Coffee to the world through South Indian Coffee
                  Company
                </p>
                <div className="text-wrapper-2">6 mins read</div>
              </div>
            </div>
            <div className="frame4">
              <img className="rectangle-2" src={rectangle2} alt="Legacy" />
              <div className="frame-6">
                <div className="frame-15">
                  <div className="text-wrapper-3">LEGACY</div>
                  <div className="frame-7">
                    <p className="text-wrapper-4">
                      How Mr. Siddhartha started and shaped India's coffee
                      revolution
                    </p>
                    <div className="text-wrapper-2">6 mins read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-10">
            <div className="frame4">
              <img className="rectangle-2" src={rectangle3} alt="Legacy" />
              <div className="frame-6">
                <div className="text-wrapper-3">LEGACY</div>
                <div className="frame-7">
                  <div className="frame-16">
                    <p className="text-wrapper-4">
                      Sunalini Menon: Breaking stereotypes &amp; shaping India’s
                      coffee narrative for over 50 years
                    </p>
                  </div>
                  <div className="text-wrapper-5">6 mins read</div>
                </div>
              </div>
            </div>
            <div className="frame5">
              <img
                className="rectangle"
                src={rectangle4}
                alt="Coffeepreneurship"
              />
              <div className="frame-6">
                <div className="text-wrapper-3">COFFEEPRENEURSHIP</div>
                <div className="frame-7">
                  <p className="text-wrapper-4">
                    Mithila Vazalwar: Champion of New India’s Coffee, From
                    Aeropress to Corridor Seven
                  </p>
                  <div className="text-wrapper-5">6 mins read</div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-10">
            <div className="frame5">
              <img
                className="rectangle"
                src={rectangle5}
                alt="Coffeepreneurship"
              />
              <div className="frame-6">
                <div className="text-wrapper-3">LEGACY</div>
                <p className="text-wrapper-4">
                  The Story of Mrs. Purnima and Harley Estates: A Legacy of
                  Innovation, Scale, and International Acclaim
                </p>
                <div className="text-wrapper-5">6 mins read</div>
              </div>
            </div>
            <div className="frame4">
              <img
                className="rectangle-2"
                src={rectangle6}
                alt="Soudh Ibrahim"
              />
              <div className="frame-6">
                <div className="text-wrapper-3">COFFEEPRENEURSHIP</div>
                <div className="frame-7">
                  <div className="frame-16">
                    <p className="text-wrapper-4">
                      Soudh Ibrahim’s Journey: From Sakleshpur’s Accidental
                      Barista to enabling the coffee shops in India
                    </p>
                  </div>
                  <div className="text-wrapper-5">6 mins read</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oldschool-button">
          <button className="button d-flex">
            <div className="sign-up">View all featured stories</div>
            <img className="arrow" src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section-4">
        <img className="subtract-51" src={subtract53} alt="Subtract 53" />
        <img className="subtract-52" src={subtract53} alt="Subtract 53" />

        <div className="heading d-flex">
          <div className="text-wrapper">FIRST PRINCIPLES OF COFFEE</div>
          <img className="img" src={frame2} alt="Frame" />
        </div>

        <div className="featured-box">
          <div className="fram400">
            <img
              className="rectangle-2"
              src={rectangle7}
              alt="Brewing Specialty Coffee"
            />
            <div className="frame-6r">
              <p className="text-wrapper-4">
                101 of brewing specialty coffee <br /> at home
              </p>
            </div>
          </div>

          <div className="frame200">
            <img
              className="rectangle-3"
              src={rectangle8}
              alt="Coffee Photography"
            />
            <div className="frame-6">
              <p className="text-wrapper-4">
                Top 10 tools to get your coffee photography right
              </p>
            </div>
          </div>

          <div className="frame200">
            <img
              className="rectangle-3"
              src={rectangle9}
              alt="Coffee Roasting Fundamentals"
            />
            <div className="frame-6">
              <p className="text-wrapper-4">
                Learn the fundamentals of Coffee roasting
              </p>
            </div>
          </div>
        </div>

        <div className="oldschool-button">
          <button className="button">
            <div className="sign-up">View all featured stories</div>
            <img className="arrow" src={arrowIcon} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Section 5 */}
      <div className="section-5">
        <img className="subtract-51" src={subtract54} alt="Subtract 54" />
        <img className="subtract-52" src={subtract54} alt="Subtract 54" />

        <div className="heading d-flex">
          <div className="text-wrapper">STORIES FROM ESTATES OF INDIA</div>
          <img className="img" src={frame1} alt="Frame 1" />
        </div>

        <div className="featured-box">
          <div className="frame50">
            <img
              className="ezgif-com-animated"
              src={newImage1}
              alt="Kalathmad Estate Story 1"
            />
            <div className="frame-6r">
              <p className="text-wrapper-4">
                Nestled in the hills of Kalathmad in Coorg, lies the lush green
                KarkuKaad estate
              </p>
            </div>
          </div>

          <div className="frame50">
            <img
              className="ezgif-com-animated"
              src={newImage2}
              alt="Kalathmad Estate Story 2"
            />
            <div className="frame-6r">
              <p className="text-wrapper-4">
                Nestled in the hills of Kalathmad in Coorg, lies the lush green
                KarkuKaad estate
              </p>
            </div>
          </div>
        </div>

        <div className="featured-box justify">
          <div className="frame300">
            <img className="rectangle-3" src={rectangle18} alt="Story 3" />
            <div className="frame-6">
              <p className="text-wrapper-4">
                Story title description in 2 lines Story title description
              </p>
            </div>
          </div>

          <div className="frame300">
            <img className="rectangle-3" src={rectangle19} alt="Story 4" />
            <div className="frame-6">
              <p className="text-wrapper-4">
                Story title description in 2 lines Story title description
              </p>
            </div>
          </div>

          <div className="frame300">
            <img className="rectangle-3" src={rectangle20} alt="Story 5" />
            <div className="frame-6">
              <p className="text-wrapper-4">
                Story title description in 2 lines Story title description
              </p>
            </div>
          </div>
        </div>

        <div className="oldschool-button">
          <button className="button">
            <div className="sign-up">View all stories</div>
            <img className="arrow" src={arrowIcon} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Section 6 */}
      <div className="section-6">
        <img className="subtract-5 p-10" src={subtract10} alt="Subtract 10" />

        <img className="frame-31" src={frame167} alt="Frame 167" />
        <div className="text-wrapper-7">Let’s stay connected?</div>
        <p className="text-wrapper-8">
          Join our WhatsApp community to get the latest coffee stories,
          exclusive updates, and special offers delivered straight to your
          phone. Be the first to know about new discoveries in the coffee world
          and deepen your coffee knowledge with us.
        </p>

        <div className="oldschool-button">
          <button className="button">
            <img
              className="whatsapp-symbol-svg"
              src={whatsappSymbol}
              alt="WhatsApp Symbol"
            />
            <div className="sign-up-2">Sign Up on WhatsApp</div>
            <img className="arrow" src={arrow2} alt="Arrow Icon" />
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="part-1">
          <div className="left">
            <img className="frame-36" src={frame36} alt="Frame So Coffee" />
            <div className="frame-37">
              <div className="what-is-so-coffee-wrapper">
                <p className="what-is-so-coffee">
                  <span className="span">
                    What is <br />
                  </span>
                  <span className="text-wrapper-9">So,Coffee?</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="frame-38">
              <p className="text-wrapper-10">
                SoCoffee is a digital catalyst for India’s coffee ecosystem,
                with the objective of addressing the farm-to-cup gap through a
                digital-first approach. By leveraging content and digitization,
                SoCoffee aims to connect growers, businesses, and consumers in a
                seamless, scalable way. Our platform brings inspiring stories,
                valuable information, and resources to empower every stakeholder
                in the coffee value chain.
              </p>
              <button className="button-3 d-flex">
                <div className="sign-up-3">Know more about us</div>
                <img className="arrow-2" src={arrow_copy} alt="Arrow Icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="part-2">
          <p className="text-wrapper-10">
            Let’s chat over a cup of coffee? Please write to:
          </p>
          <div className="featured-box">
            <img className="mail" src={mailIcon} alt="Mail Icon" />
            <div className="text-wrapper-10">hello@socoffee.club</div>
          </div>

          <div className="featured-box d-flex">
            <div className="left d-flex">
              <img className="copyright" src={copyrightIcon} alt="Copyright Icon" />
              <div className="text-wrapper-10">
                SoCoffee Origins Private Limited
              </div>
            </div>
            <div className="right2 d-flex g-20">
              <div className="d-flex g-10">
                <img className="img-3" src={instagramIcon} alt="Instagram Icon" />
                <div className="text-wrapper-10">Instagram</div>
              </div>
              <div className="d-flex g-10">
                <img className="img-3" src={twitterIcon} alt="Twitter Icon" />
                <div className="text-wrapper-10">X.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* <div className="home-page-container">
        <h2 style={{ textAlign: "center" }}>{data?.title}</h2>
  
        <h3>{data?.subTitle}</h3>
  
        <p>{data?.slug?.current}</p>
  
        <div>
          <h3>TAGS:</h3>
          {data?.tags?.map(({ name, _id }) => (
            <span
              key={_id}
              style={{ color: "#0d589b", fontSize: "16px", margin: "8px" }}
            >
              #{name}
            </span>
          ))}
        </div>
        <>
          {!!data?.featuredImage && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
                <h2>Featured Image</h2>
                <Image
                  src={urlForImage(data?.featuredImage?.asset?._ref)}
                  width={200}
                  height={300}
                  priority
                  alt=""
                />
                <h4 style={{ alignSelf: "flex-end" }}>
                  - {formatDate(data.publishedAt)}
                </h4>
            </div>
          )}
        </>
  
        <>
          {!!data?.thumbnail && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Thumbnail Image</h2>
              <Image
                src={urlForImage(data?.thumbnail?.asset?._ref)}
                width={200}
                height={200}
                priority
                alt=""
              />
            </div>
          )}
        </>
        
        <h2>Body...</h2>
        <PortableText value={data?.body} components={myPortableTextComponents} />
      </div> */}
    </>
  );
}

// import { HeroSection } from "@/components/heroSection/heroSection";
// import { FeaturedByTag } from "@/components/featuredByTag/featuredByTag";
// import {
//   getSectionsList
// } from "../../../sanity/services/sectionsServices"
// import {
//   getFeaturedPosts
// } from "../../../sanity/services/postServices"

{
  /* {sections?.length > 0 &&
          sections.map((section) => (
            getComponent(section)
          ))} */
}

// const sections = await getSectionsList();
// const featuredPosts = await getFeaturedPosts()

// const getComponent = (section) => {
//   switch (section.section) {
//     case "hero":
// return <HeroSection stories={featuredPosts} />;
//     case "featuredByTag":
// return <FeaturedByTag />;
//     default:
//       return null;
//   }
// }
