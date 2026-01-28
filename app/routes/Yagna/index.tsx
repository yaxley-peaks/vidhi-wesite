import Hero from "./hero.png";
import type { Route } from "../../../.react-router/types/app/+types/root";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Putresi from "./yagna-img/putresi.png";
import Maruti from "./yagna-img/maruti.png";
import Baglamukhi from "./yagna-img/baglamukhi.png";
import Laghu from "./yagna-img/laghu.png";
import Lakshmi from "./yagna-img/lakshmi.png";
import Shiv from "./yagna-img/shiv.png";
import Vishnu from "./yagna-img/vishnu.png";
import Chandi from "./yagna-img/chandi.png";
import Surya from "./yagna-img/surya.png";
import Vastu from "./yagna-img/vastu.png";
import Ganesh from "./yagna-img/ganesh.png";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Yagna" }, { name: "description", content: "Yagna" }];
}

interface YagnaSchema {
  name: string;
  to?: string;
  image: string;
}

const yagnas: YagnaSchema[] = [
  {
    name: "Putresti yagna",
    image: Putresi,
  },
  {
    name: "Maruti yagna",
    image: Maruti,
  },
  {
    name: "Baglamukhi yagna",
    image: Baglamukhi,
  },
  {
    name: "Laghu rudra yagna",
    image: Laghu,
  },
  {
    name: "Lakshmi yagna",
    image: Lakshmi,
  },
  {
    name: "Shiv yagna / Rudhar yagna",
    image: Shiv,
  },
  {
    name: "Vishnu yagna",
    image: Vishnu,
  },
  {
    name: "Chandi yagna",
    image: Chandi,
  },
  {
    name: "Surya yagna",
    image: Surya,
  },
  {
    name: "Vastu yagna",
    image: Vastu,
  },
  {
    name: "Ganesh yagna",
    image: Ganesh,
  },
];
export default function ({}) {
  return (
    <>
      <div className="h-10 spacing-div"></div>
      <div className="px-12">
        <div className="flex flex-row gap-35 justify-center items-center">
          <div className="shrink-0">
            <img
              className="rounded-2xl w-156.25 h-156.25 shrink-0"
              src={Hero}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1>Vastu yagna</h1>
            <p>
              A vastu yagna is a sacred fire ritual performed to purify a new or
              existing building, aligning its energy with the vastu purusha to
              ensure peace, prosperity , and harmony. It removes negative
              energies caused by structural faults(Vastu dosha).
            </p>
            <div className="w-auto">
              <Link
                className="text-bg-2 bg-bg-3 px-6 py-3 rounded-full w-auto"
                to={""}
              >
                <span>Book now</span>
                <span className="w-2 inline-block" />
                {/*<FontAwesomeIcon icon={faArrowRight} />*/}
              </Link>
            </div>
          </div>
        </div>
        <div className="spacing-div h-20" />
        <div className="flex flex-col gap-5">
          <h1>Related Yagna</h1>
          <div className="grid grid-cols-3 gap-8">
            {yagnas.map((yagna) => {
              return (
                <>
                  <div className="flex flex-col gap-6 text-fg-2 font-semibold text-[24px]">
                    <div>
                      <img
                        className="rounded-3xl w-full h-full"
                        src={yagna.image}
                        alt={""}
                      />
                    </div>
                    <div>{yagna.name}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
