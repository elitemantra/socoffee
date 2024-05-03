// import {
//   getSectionsList
// } from "../../../sanity/services/sectionsServices"
// import {
//   getFeaturedPosts
// } from "../../../sanity/services/postServices"
// import { HeroSection } from "../components/heroSection/heroSection"
// import { FeaturedByTag } from "../components/featuredByTag/featuredByTag"

export default async function Home() {
  // const sections = await getSectionsList();
  // const featuredPosts = await getFeaturedPosts()

  // const getComponent = (section) => {
  //   switch (section.section) {
  //     case "hero":
  //       return <HeroSection stories={featuredPosts} />;
  //     case "featuredByTag":
  //       return <FeaturedByTag />;
  //     default:
  //       return null;
  //   }
  // }

  return (

    <>
      <div className="home-page-container">
        hii
        {/* {sections?.length > 0 &&
          sections.map((section) => (
            getComponent(section)
          ))} */}
      </div>
    </>
  );
}