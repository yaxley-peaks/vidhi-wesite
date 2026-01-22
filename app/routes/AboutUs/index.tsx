import OurStory from "~/routes/Home/our-story.png";

export default function ({}) {
  return (
    <>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-6">
          <h1>About us</h1>
          <div className="flex flex-col gap-4">
            <p>
              Today, we begin this discourse by invoking Shri Veerbhadra Mahadev
              and Shri Mamadev.
            </p>
            <p>
              When Goddess Sati insisted on going to her father King Daksha’s
              yajna (sacrificial ritual) against the wishes of Lord Shiva, she
              left for the yajna. Upon reaching there, Goddess Sati saw that all
              the gods, sages, and celestial beings were present, but Lord Shiva
              had been deliberately denied a place. King Daksha openly spoke
              against Shiva and insulted Him. Witnessing this humiliation of her
              husband, Goddess Sati sacrificed her life by entering the
              sacrificial fire (havan kund).
            </p>
            <p>
              When Lord Shiva, seated on Mount Kailash, came to know of this, He
              was overwhelmed with terrible rage. From a lock of His matted
              hair, which He struck upon a rock, two divine beings emerged—Shri
              Veerbhadra Mahadev and Goddess Bhadrakali. Lord Shiva commanded
              these divine powers to go to King Daksha’s yajna, destroy the
              ritual, and separate King Daksha’s head from his body, offering it
              into the same fire. He further instructed Goddess Bhadrakali that
              if anyone obstructed Veerbhadra in fulfilling this vow, she should
              accompany him as a witness and ensure the complete destruction of
              the yajna.
            </p>
            <p>
              Obeying Shiva’s command, chaos spread among the gods. Veerbhadra
              Mahadev severed King Daksha’s head and offered it into the
              sacrificial fire. At that moment, Lord Shiva Himself arrived, saw
              Veerbhadra’s fierce and compassionate form, calmed him, and
              forgave King Daksha by reviving him with a goat’s head.
            </p>
          </div>
        </div>
        <div>
          <div className="shrink-0">
            <img
              className="border-20 border-b-fg-2 rounded-3xl w-154.75 h-176 rotate-y-180"
              src={OurStory}
              alt={""}
            />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
