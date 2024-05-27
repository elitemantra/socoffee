"use client";
import { useEffect, useState } from "react";
import { getLongArticleList } from "../../../sanity/services/longArticles";
import { XEmbed } from "react-social-media-embed";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import HoverAnnotation from "@/components/hoverAnnotations/HoverAnnotation2";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

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
            cursor:'pointer'
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
      <div className="home-page-container">

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
        <PortableText
          value={data?.body}
          components={myPortableTextComponents}
        />
  
      </div>
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

      {/* {sections?.length > 0 &&
          sections.map((section) => (
            getComponent(section)
          ))} */}

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