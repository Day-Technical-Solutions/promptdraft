/** @format */

import CTA from "@components/CTA";
import { Image } from "next/dist/client/image-component";
import FeedDemo from "@components/FeedDemo";
import Contact from "@components/Contact";

export default function Home() {
  const siteName = "Prompt Draft";

  return (
    <section className="w-full flex-center flex-col">
      <div className="w-screen md:w-full gap-0 p-0 m-0 static">
        <Image
          src="/assets/images/title_banner.jpg"
          width={5769}
          height={2784}
          alt="banner"
          className="object-fill pointer-events-none -z-10"
          priority
        />
      </div>
      <div id="title-wrapper" className="flex-col items-center justify-center ">
        <h1 className="head_text text-center">
          {siteName}
          <br className="gap-3" />
          <span className="blue_gradient">The Ultimate Prompt Generator</span>
        </h1>
        <p className="font-satoshi w-full p-5 text-center md:text-2xl sm:text-lg text-gray-600">
          High Quality Prompts Made Easy
        </p>
      </div>
      <CTA />
      <div className="flex-center w-screen">
        <div className="gap-5 grid items-center grid-cols-1 md:grid-cols-2 p-20 max-w-5xl">
          <p className="desc ">
            Welcome to {siteName}, your go-to platform for crafting imaginative
            prompts that fuel generative artificial intelligence. Unlock the
            potential of your creativity with diverse and inspiring suggestions
            tailored for every project.
          </p>
          <div className="flex justify-center items-center rounded-lg">
            <Image
              src="/assets/images/hook_image_students.jpg"
              width={2048}
              height={2048}
              alt="picture"
              className="object-fill m-5 rounded-xl drop-shadow-md pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="flex-center background_blue_gradient w-screen">
        <div className="gap-5 grid items-center grid-cols-1 md:grid-cols-2 p-20 max-w-5xl">
          <div className="flex justify-center items-center rounded-lg">
            <Image
              src="/assets/images/hook_image_tech.jpg"
              width={2048}
              height={2048}
              alt="picture"
              className="object-fill m-5 rounded-xl drop-shadow-md md:row-start-1 pointer-events-none"
            />
          </div>
          <p className="font-satoshi text-xl text-right text-white">
            Whether you're seeking vivid conversational starters or stimulating
            visuals, {siteName} is your gateway to an expansive realm of
            innovative possibilities. Elevate your content creation, scripting,
            and data manipulation experience with precision, speed, and creative
            exploration.
          </p>
        </div>
      </div>
      <FeedDemo />
      <Contact />
    </section>
  );
}
