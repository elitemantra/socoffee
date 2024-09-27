"use client";
import { useEffect, useState } from "react";
import { getLongArticleList } from "../../../../sanity/services/longArticles";
import { XEmbed } from "react-social-media-embed";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import HoverAnnotation from "@/components/hoverAnnotations/HoverAnnotation2";
import { urlForImage } from "../../../../sanity/lib/image";
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
const Subtract_upper = "/Subtract-upper.png"
const Subtract_lower = "/Subtract-lower.png"
const screenshot_insta = "/Screenshot_2024-09-08_120435-removebg-preview 1.png"
const featured_stories_section_img_one = "/featured-stories-section-img-1.png"
const featured_stories_section_img_two = "/featured-stories-section-img-2.png"
const featured_stories_section_img_three = "/featured-stories-section-img-3.png"

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

      {/* articale page */}

      {/* Navbar */}
      <div className="navbar fixed-navbar">
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

      {/* section one */}
      <div className="featured-stories-new">
        <div className="heading d-flex heading-mobile">
          <div className="text-wrapper text-wrapper-phone">FEATURED STORIES</div>
          <img className="img arrow-img-phone" src={frame} alt="Frame" />
        </div>
        <div className="frame-6r">
          <p className="text-wrapper-4 article-heading">
            Sunalini Menon: Breaking stereotypes & shaping India’s coffee
            narrative for over 50 years
          </p>
        </div>

        <div className="stories_view-frame">
          <img className="stories_img" src={stories_img} alt="Arrow Icon" />
          <p>Karumbaiah Bk · <span>6 mins read </span> </p>
        </div>
      </div>

      <div className="stories_hero_section">

     


        <div className="section-6 profile-overview">
          <img className="subtract-5 p-10" src={subtract10} alt="Subtract 10" />

          <div className="text-wrapper-7 overview-heading">
            PROFILE OVERVIEW
          </div>
          <p className="text-wrapper-8 overview-text">
            Sunalini Menon, Asia's first female professional coffee taster, has
            over 50 years of experience in the Indian coffee industry. She began
            her career with the Coffee Board of India in 1971, introducing <span className="overview-text-mobile">
            coffee cupping and promoting washed robustas, boosting India's
            global coffee reputation. In 1997, she founded Coffee Lab in
            Bengaluru, focusing on quality control and training. Her efforts
            have elevated Indian coffee varieties like Monsooned Malabar and
            Kaapi Royale on the world stage, making her a respected figure in
            the global coffee community.</span>
          </p>
        </div>
      </div>

      <div className="main-content">
        <div className="article-content">
          <span className="drop-cap">I</span>n the bustling heart of Bengaluru,
          where the air is tinged with the scent of coffee, Ms. Sunalini Menon’s
          story unfolds—a narrative steeped in tradition, yet brimming with a
          spirit of rebellion and innovation. Ms. Menon, renowned as Asia’s
          first professional woman coffee taster, embarked on a journey that
          overcame societal norms and led her to champion Indian coffee over the
          last 50 plus years.
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            A foundation steeped in progressive thought
          </span>
        </div>
        <div className="article-content">
          Ms. Menon’s upbringing was framed within the conservative norms of a
          post-Independence India, where women's roles were predominantly
          domestic. However, her family life was a microcosm of tradition and
          progress. Living alongside her grandfather and his brothers, Ms. Menon
          grew up in an environment where educational and financial independence
          for women was not just encouraged but insisted upon.
        </div>
        <div className="article-content">
          Her grandfather was a school headmaster whose chance encounter with
          Annie Besant in the 1930s, a prominent British socialist, prompted a
          radical shift in his life's trajectory and led him to pursue higher
          education in London. From taking a ship to Oxford to study library
          science, to becoming a librarian at the Connemara Library and then the
          University of Madras, culminating as a Special Officer for Education
          in the then State of Madras, her grandfather’s experiences shaped his
          conviction that education was the key to breaking barriers and forging
          new paths. His education was enabled by her grandmother who sold her
          jewellery to fund his travel to London, a testament to their shared
          belief in the power of education and this became a guiding principle
          in Ms. Menon’s life.
        </div>

        <div className="article-content">
          <div className="article-img-box">
            <img class="article_img" src={article_img} alt=" " />
            <p className="article_img_pera">
              Ms Menon in her magic workshop, ready to brew some coffee back to
              life.
            </p>
          </div>
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            From Tea Gardens to Coffee Aromas
          </span>
        </div>
        <div className="article-content">
          Amidst this backdrop of progressive thought, Ms. Menon's path took an
          unexpected turn during her holidays spent in the lush tea gardens of
          her maternal uncle in the Munnar. Here, she first encountered the art
          of tea tasting. The vibrant estates, the rhythmic chatter oftea
          pickers, and the meticulous process of tea tasting left an indelible
          impression on her young mind. She watched, fascinated, as her uncle
          and other experts slurped tea noisily, evaluated its quality, and then
          spat it out—a ritual that seemed both peculiar and intriguing to her.
        </div>
        <div className="article-content">
          This experience with tea tasting lingered in her memory, a subtle yet
          significant influence that would later guide her professional choices.
          As Ms. Menon pursued her studies in Food Technology, she found herself
          at a crossroad, planning to further her education in dietetics in New
          York. However, destiny had other plans.
        </div>
        <div className="article-content">
          While preparing for her journey abroad, Ms. Menon stumbled upon an
          advertisement in the newspaper. The Coffee Board of India was seeking
          an Assistant Cup Taster. The memory of her tea-tasting adventures in
          the hills in Munnar resurfaced, drawing a parallel to coffee.
          Intrigued by this serendipitous opportunity and reminded of the joyful
          spitting competitions of her youth, she decided to apply. This
          decision was not just a leap into the unknown; it was a nod to the
          past, an acknowledgment of the subtle ways her childhood experiences
          had shaped her interests.
        </div>

        <div className="article-content">
          <div className="section-6 article-overview">
            <img
              className="subtract-5 p-10"
              src={subtract10}
              alt="Subtract 10"
            />

            <div className="article-overview-content-box">
              <div className="article-overview-content">
                <img
                  className="frame-31 article-content-icon"
                  src={frame1670}
                  alt="Frame 167"
                />
                <p className="article-overview-text">
                  “Our coffee is like a canvas painted with a multitude of
                  flavors, each region offering its unique masterpiece.”
                </p>
                <span className="article-overview-text-name">
                  -Sunalini Menon
                </span>
              </div>

              <div className="share-btn">
                <img className="frame-232" src={share_btn} alt="Frame 232" />
              </div>
            </div>
          </div>
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            The Interview: A story of Determination and Defiance
          </span>
        </div>
        <div className="article-content">
          Stepping into the interview room at the Coffee Board, in the early
          1970s, was like entering a new world. Surrounded by seasoned
          professionals, all armed with doctorates and experience, Ms. Menon
          stood as the lone woman, the least qualified, and yet the most unique
          in her perspective. Amidst the clatter of typewriters and the hum of
          deep discussions, she felt a surge of determination. The cupping test
          was a revelation of her innate talent, and she managed to clear it
          easily.
        </div>
        <div className="article-content">
          However, the true test lay in the interview and after her first round
          she was categorically told that they wouldn’t be able to hire her as
          she was a woman and there was no such precedent. Ms. Menon was very
          upset but she challenged the gender bias, asserting her right to equal
          opportunity in a field dominated by men. She questioned the bias and
          built a case to be given this opportunity.
        </div>
        <div className="article-content">
          Her bold stance and undeniable competence swayed the final panel that
          was led by the then Chairman of The Coffee Board of India, Sri H.G.V.
          Reddy, leading to a groundbreaking decision. She was asked to sign a
          bond of service, marking her entry into the world of coffee as the
          very first woman hired by the Coffee Board of India in the year 1971.
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            Charting Unfamiliar Terrains: The Early Struggles and Triumphs
          </span>
        </div>
        <div className="article-content">
          Ms. Menon's initiation into the Coffee Board marked the beginning of a
          tumultuous yet transformative journey. As the first woman in an arena
          reserved for men, she faced a maze of challenges. Navigating through
          scepticism, adapting to the intricate art of coffee cupping, and
          breaking through language and cultural barriers were just the initial
          hurdles. Despite these challenges, Ms. Menon's indomitable spirit,
          forged from the teachings of her progressive grandfather and her own
          inner resilience, shone through. She gradually carved a niche for
          herself, transforming initial resistance into respect and laying the
          foundation for a monumental journey.
        </div>
        <div className="article-content">
          Within 2 years, recognized by the Coffee Board of India for her
          exceptional potential, Ms. Menon was selected for advanced training in
          coffee cupping, a rare opportunity that propelled her onto the
          international stage. Under the guidance of a veteran coffee taster,
          who was in charge of the cupping room in Volkarts, Switzerland, Mr.
          Walter Zweifel, Ms. Menon delved into the depths of coffee cupping.
          These experiences were not just about acquiring technical skills but
          also about understanding the global language of coffee. Ms. Menon went
          on to have numerous such experiences and was eventually picked by Dr.
          Ernesto Illy, a family member of Illy Coffee, as his protégé. This
          turned out to be a cornerstone of her coffee journey.
        </div>

        <div className="article-content">
          <div className="article-img-box">
            <img className="article_img" src={awarded_img} alt=" " />
            <p className="article_img_pera">
              Ms Menon being awarded for the contributions she has made in the
              coffee space.
            </p>
          </div>
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            Playing a key role in shaping India's coffee story
          </span>
        </div>
        <div className="article-content">
          Returning to India, Ms. Menon brought with her a wealth of knowledge
          and a fresh perspective on coffee. She embarked on a mission to learn
          from every department within the Coffee Board and this hands-on
          approach demystified the workings of the industry and helped her earn
          the respect of her colleagues.
        </div>
        <div className="article-content">
          The introduction of cupping in the Indian coffee industry was a major
          turning point, as Ms. Menon recalls. This paradigm shift in the 1990s
          was more than just a new technique;it represented a fundamental change
          in how coffee was valued and traded. Ms. Menon faced initial
          skepticism, with farmers concerned about the subjectivity of this
          approach. "They thought I would rate their coffee based on my mood,"
          she reminisces. However, she tirelessly worked to educate them,
          demonstrating how cupping could ensure a fair and quality-based
          payment system. Gradually, cupping became an essential tool,
          revolutionising the industry and elevating the standards of Indian
          coffee.
        </div>
        <div className="article-content">
          Another significant milestone was the introduction of washed robustas
          in 1985. "It was a challenging but necessary move," she says. The
          introduction required significant resources, including machinery,
          water, and labor. Despite initial resistance from farmers, who were
          used to traditional methods and were skeptical of the investment, the
          quality of washed robustas eventually spoke for itself. These efforts
          paved the way for specialty coffees like Monsooned Malabar and Kaapi
          Royale, which marked India's entry into the global specialty coffee
          market.
        </div>
        <div className="article-content">
          Ms. Menon fondly remembers the excitement that these innovations
          brought. "It was as if we had unlocked a secret treasure of flavors
          that were uniquely Indian," she says. The Monsooned Malabar, with its
          distinct mellow flavor and low acidity, achieved through a process of
          exposing green coffee beans to the monsoon winds of the Malabar coast,
          became a global favourite. Similarly, Kaapi Royale, known for its bold
          and robust flavors, carved out a niche in the specialty coffee market.
        </div>
        <div className="article-content">
          Slowly but surely, India had begun taking small steps to get noticed
          on the global coffee stage.
        </div>

        <div className="article-content">
          <div className="section-6 article-overview">
            <img
              className="subtract-5 p-10"
              src={subtract53}
              alt="Subtract 10"
            />

            <div className="article-overview-content-box">
              <div className="article-overview-content">
                <img
                  className="frame-31 article-content-icon"
                  src={frame1670}
                  alt="Frame 167"
                />
                <p className="article-overview-text">
                  “The future of Indian coffee lies in <br />
                  our ability to work together, to <br /> share knowledge, and
                  collectively <br />
                  elevate our craft.”
                </p>
                <span className="article-overview-text-name">
                  -Sunalini Menon
                </span>
              </div>

              <div className="share-btn">
                <img className="frame-232" src={share_btn} alt="Frame 232" />
              </div>
            </div>
          </div>
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            The Rich Palette of Indian Coffee
          </span>
        </div>
        <div className="article-content">
          Indian coffee's strength, Ms. Menon believes, lies in its incredible
          diversity. "Our coffee is like a canvas painted with a multitude of
          flavors," she explains. Each region of India, from the Western Ghats
          to the Eastern Highlands, offers coffee beans with unique
          characteristics. Ms. Menon's role in identifying and promoting these
          diverse flavors has been crucial. She recalls her travels across
          coffee plantations, tasting and understanding the subtle differences
          in each bean – from the citrusy notes of Arabica beans in Chikmagalur
          to the spicy undertones of Robusta from Wayanad.
        </div>
        <div className="article-content">
          Ms. Menon’s approach to coffee tasting was always holistic. She didn’t
          just taste the coffee; she immersed herself in the nuances of each
          bean, understanding the soil, the climate, the people, and the
          traditions that shaped its flavor. This deep understanding allowed her
          to introduce these diverse Indian coffees to the world in a way that
          celebrated their uniqueness.
        </div>

        <div className="image-container-two">
          <div className="image-item">
            <img className="" src={ms_menon_img_one} alt="Frame 232" />
            <p className="caption article_img_pera">
              {" "}
              Ms Menon doing what she does best; sampling her coffee <br /> at a
              brewing workshop.
            </p>
          </div>
          <div className="image-item">
            <img className="" src={ms_menon_img_two} alt="Frame 232" />
            <p className="caption article_img_pera">
              Next to the coffee plant in her office at Sadashivanagar,
              <br /> Bengaluru.
            </p>
          </div>
        </div>

        <div className="article-content">
          <span className="article-content-heading">
            Her Call to action for the Indian coffee community
          </span>
        </div>
        <div className="article-content">
          As Ms. Menon looks to the future, her vision for the Indian coffee
          industry is clear: collaboration and education are key. She envisions
          a coffee community where growers, roasters, baristas, and consumers
          come together to share knowledge and experiences. "The future of
          Indian coffee lies in our ability to work together, learn from each
          other, and collectively elevate our coffee," she asserts
        </div>

        <div className="article-content">
          Ms. Menon's call to action is for a unified approach to promoting
          Indian coffee. She imagines a future where Indian coffees are not just
          known for their diversity but are also celebrated for their quality on
          the global stage. Her dream is to see Indian coffee garner the same
          reverence and respect as the world’s most renowned coffee varietals
          and origins. This, she believes, can only be achieved through a
          collective effort that brings together every stakeholder in thecoffee
          value chain.
        </div>
      </div>

      <div className="section-last">
  <div className="article-insta-section">
    <img src={Subtract_upper} alt="" />

    <div className="container">
      <div className="text-section">
        <span>So,</span>
        <span>
          Follow us on <span className="instagram">Instagram</span>
        </span>
      </div>

      <div className="instagram-card">
        <img
          src={screenshot_insta}
          alt=""
        />
      </div>
    </div>
    <img src={Subtract_lower} alt="" />
  </div>

  <div className="featured-stories-section">
    <div className="container-stories-section">
      <div style={{display:"flex", width:"100%"}}>
      <h2 className="featured-stories-section-heading">
        More from featured stories
      </h2>
      <img class="img arrow-img-phone" src="/Frame.svg" alt="Frame"></img>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={featured_stories_section_img_one} alt="Story 1" />
          <p className="card-text">
            Nestled in the hills of Kalathmad in Coorg, lies the lush green
            KarkuKaad estate.
          </p>
        </div>
        <div className="card">
          <img src={featured_stories_section_img_two} alt="Story 2" />
          <p className="card-text">
            Mithila Vazalwar: Champion of New India’s Coffee, From Aeropress to
            Corridor Seven.
          </p>
        </div>
        <div className="card">
          <img src={featured_stories_section_img_three} alt="Story 3" />
          <p className="card-text">
            Soudh Ibrahim’s Journey: From Sakleshpur’s Accidental Barista to
            enabling the coffee shops in I...
          </p>
        </div>
      </div>
    </div>
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
          <div className="featured-box-footer-mail">
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
