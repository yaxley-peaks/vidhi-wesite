import type { Route } from "../../../.react-router/types/app/+types/root";

import Hero from "./hero.png";
import OurStory from "./our-story.png";
import MahaArti from "./maha-arti.png";
import Prasad from "./prasad.png";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page!" }];
}

export default function Index() {
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <div className="h-10 spacing-div"></div>
      <div className="px-12">
        <div className="w-full">
          <img className="mx-auto" src={Hero} alt={"Hero"} />
        </div>
        <div className="h-37.5 spacing-div"></div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-10">
            <h1>Our story</h1>
            <div className="flex flex-col gap-5">
              <p>
                At first, Mamadev devotees established the Gadi (spiritual seat)
                in the Ambawadi area of Ahmedabad city, in Saurashtra Society,
                where the activities were carried out.
              </p>
              <p>
                However, due to the large gathering of devoted followers and
                lack of space, on 19-06-2017, Shri Mamadev Tapobhumi Tirthdham
                Ashram was established in Bhayla village, located between Bavla
                and Bagodara.
              </p>
              <p>
                Without any expectation of offerings, fees, personal gain, or
                greed, service is rendered to the suffering and needy through
                Shri Khijadwala Mamadev.
              </p>
            </div>
            <div className="w-auto">
              <Link
                className="text-bg-2 bg-bg-3 px-6 py-3 rounded-full w-auto"
                to={"about-us"}
              >
                <span>Know more</span>
                <span className="w-2 inline-block" />
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <img
              className="border-20 border-b-fg-2 rounded-3xl w-154.75 h-176 rotate-y-180"
              src={OurStory}
              alt={""}
            />
          </div>
        </div>
        <div className="h-37.5 spacing-div"></div>
        <div className="flex flex-col gap-10 items-center">
          <h1>What to visit at temple?</h1>
          <div className="flex flex-row gap-12.5 justify-center">
            <div className="flex flex-col items-center gap-6">
              <img src={MahaArti} alt={""} />
              <h1 className="text-[30px]!">Maha arti</h1>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={Prasad} alt={""} />
              <h1 className="text-[30px]!">Prasad</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
