import Image1 from "./about-us-1.png";
import Image2 from "./about-us-2.png";
import type { Route } from "../../../.react-router/types/app/+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About us" }, { name: "description", content: "About us!" }];
}
export default function ({}) {
  return (
    <>
      <div className="h-10 spacing-div"></div>
      <div className="px-12">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-6">
            <h1>About us</h1>
            <div className="flex flex-col gap-4">
              <p>
                Today, we begin this discourse by invoking Shri Veerbhadra
                Mahadev and Shri Mamadev.
              </p>
              <p>
                When Goddess Sati insisted on going to her father King Daksha’s
                yajna (sacrificial ritual) against the wishes of Lord Shiva, she
                left for the yajna. Upon reaching there, Goddess Sati saw that
                all the gods, sages, and celestial beings were present, but Lord
                Shiva had been deliberately denied a place. King Daksha openly
                spoke against Shiva and insulted Him. Witnessing this
                humiliation of her husband, Goddess Sati sacrificed her life by
                entering the sacrificial fire (havan kund).
              </p>
              <p>
                When Lord Shiva, seated on Mount Kailash, came to know of this,
                He was overwhelmed with terrible rage. From a lock of His matted
                hair, which He struck upon a rock, two divine beings
                emerged—Shri Veerbhadra Mahadev and Goddess Bhadrakali. Lord
                Shiva commanded these divine powers to go to King Daksha’s
                yajna, destroy the ritual, and separate King Daksha’s head from
                his body, offering it into the same fire. He further instructed
                Goddess Bhadrakali that if anyone obstructed Veerbhadra in
                fulfilling this vow, she should accompany him as a witness and
                ensure the complete destruction of the yajna.
              </p>
              <p>
                Obeying Shiva’s command, chaos spread among the gods. Veerbhadra
                Mahadev severed King Daksha’s head and offered it into the
                sacrificial fire. At that moment, Lord Shiva Himself arrived,
                saw Veerbhadra’s fierce and compassionate form, calmed him, and
                forgave King Daksha by reviving him with a goat’s head.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <img
              className="border-20 border-b-fg-2 rounded-3xl w-154.75 h-176"
              src={Image1}
              alt={""}
            />
          </div>
        </div>
        <div className="h-10 spacing-div"></div>
        <div className="flex flex-row-reverse gap-12">
          <div className="flex flex-col gap-4">
            <p>
              Seeing the immense suffering of Goddess Sati, Lord Shiva lifted
              her body in His arms and began to wander the universe in deep
              sorrow. Due to His unbearable grief, turmoil spread across the
              three worlds. All the gods then approached Lord Vishnu and prayed
              to Him to free Shiva from this anguish. Lord Vishnu, using His
              Sudarshan Chakra, divided Goddess Sati’s body into 51 parts, which
              fell at various places and became the 51 sacred Shakti Peethas.
            </p>
            <p>
              After this, Lord Shiva blessed Veerbhadra and said that in the age
              of Kaliyuga, every lineage would have a Kuldevi (family deity),
              and the sons of that Kuldevi would be considered the nephews
              (bhanja) of Veerbhadra. Saying this, Lord Shiva merged Veerbhadra
              Mahadev back into Himself, and a Shiva Lingam was established
              there. This Shiva Lingam is still present today at
              Rishikesh–Haridwar.
            </p>
            <p>
              Since we are the children of our Kuldevi, and Veerbhadra Mahadev
              is the brother of our Kuldevi, we recognize Veerbhadra Mahadev in
              Kaliyuga as Mamadev (maternal uncle deity). The primary role of
              Mamadev is to protect nature, uphold righteousness (dharma),
              deliver justice against injustice, stop violence against living
              beings, free people from addictions, and guide them away from
              blind faith.
            </p>
            <p>
              This sacred and truthful account of Shri Veerbhadra Mahadev and
              Shri Mamadev is what we humbly present before you all.
            </p>
          </div>
          <div className="shrink-0">
            <img
              className="border-20 border-b-fg-2 rounded-3xl w-154.75 h-176"
              src={Image2}
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
