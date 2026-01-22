import type { Route } from "../../../.react-router/types/app/+types/root";

import Hero from "./hero.png";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Home page!" }];
}

export default function Index() {
  return (
    <>
      <div className="h-10 spacing-div"></div>
      <div className="px-12">
        <div>
          <img src={Hero} alt={"Hero"} />
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
          </div>
          <div>
            <img src={""} alt={""} />
          </div>
        </div>
      </div>
    </>
  );
}
