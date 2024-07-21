import Image from "next/image";
import MainImage from "@/public/mainImage.png";
import Seconde_Background from "@/public/seconde_section_bg.png";
import Names from "@/public/Tigran & Armine.png";
import Groom from "@/public/groom.png";
import bride from "@/public/bride.png";
import rings from "@/public/rings.png";
import champagne from "@/public/champagne.png";
import LastPhoto from "@/public/LastPhoto.png";
import { RadioGroups } from "./components/RadioGroups";
import { SubmitButton } from "./components/action";
export default function Home() {
  return (
    <main className="flex sm:hidden flex-col">
      {/* First section */}
      <section className="w-[100vw] h-[100vh] ">
        <div className="flex w-full h-full flex-col items-center justify-center relative">
          <Image src={MainImage} fill alt="Logo" className="object-cover" />
          <h1 className="text-white text-7xl items-center justify-center w-full flex font_Great_Vibes absolute bottom-10">
            Save the Date
          </h1>
        </div>
      </section>
      {/* Second section */}
      <section
        className="w-[100vw] h-auto bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${Seconde_Background.src})` }}
      >
        <h3 className="text-black text-lg my-5 text-center uppercase font-light font_Cormorant">
          you are invited to the wedding of
        </h3>
        <div className="flex items-center justify-center w-full h-auto">
          <Image
            src={Names}
            width={500}
            height={500}
            alt="names"
            className="object-contain w-[90%] h-auto"
          />
        </div>
        <span className="flex items-center justify-center w-full h-auto text-black text-5xl font_Cormorant my-5">
          06 | 10 | 2024
        </span>
        <div className="flex items-center justify-center w-full h-auto flex-col gap-y-10">
          <div className="flex flex-col items-center justify-center w-full h-auto mt-10">
            <Image
              alt="Groom"
              src={Groom}
              width={200}
              height={200}
              className="ojbect-cover w-[20%] h-auto"
            />
            <h3 className="text-black text-3xl mt-5 text-center uppercase font-light font_Cormorant">
              10:00
            </h3>
            <p className="text-black text-3xl  text-center  font-light font_Cormorant">
              Groom&apos;s Preparation
            </p>
            <p className="text-black text-2xl text-center  font-light font_Cormorant">
              2 Manushyan Street
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-10">
            <Image
              alt="Bride"
              src={bride}
              width={200}
              height={200}
              className="ojbect-cover w-[20%] h-auto"
            />
            <h3 className="text-black text-3xl mt-5  text-center uppercase font-light font_Cormorant">
              11:00
            </h3>
            <p className="text-black text-3xl  text-center  font-light font_Cormorant">
              Bride&apos;s Preparation
            </p>
            <p className="text-black text-2xl text-center  font-light font_Cormorant">
              64 Aram Street
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-10">
            <Image
              alt="Bride"
              src={rings}
              width={200}
              height={200}
              className="ojbect-cover w-[20%] h-auto"
            />
            <h3 className="text-black text-3xl mt-5  text-center uppercase font-light font_Cormorant">
              14:00
            </h3>

            <p className="text-black text-2xl text-center  font-light font_Cormorant">
              Saghmosavank Monastery
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-auto mt-10">
            <Image
              alt="Bride"
              src={champagne}
              width={200}
              height={200}
              className="ojbect-cover w-[20%] h-auto"
            />
            <h3 className="text-black text-3xl mt-5  text-center uppercase font-light font_Cormorant">
              17:00
            </h3>

            <p className="text-black text-2xl text-center  font-light font_Cormorant">
              Florance Restaurant
            </p>
          </div>
        </div>
        {/* Third section */}
        <div
          className="w-[100vw] h-[50vh] my-10 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${LastPhoto.src})` }}
        ></div>
        {/* Fourth section */}
        <div className="w-full h-auto flex flex-col items-center justify-center">
          <h3 className="text-black text-xl text-center font-light font_Cormorant">
            Please confirm your attendance by 20.09.2024
          </h3>
          <input
            type="text"
            name="Name"
            placeholder="Name & Surname *"
            className="w-[70%] mt-5 placeholder:font_Cormorant placeholder:text-lg bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:border-0 outline-none"
          />

          <input
            type="number"
            name="Number_of_guests"
            placeholder="Number of guests *"
            className="w-[70%] mt-5 placeholder:font_Cormorant placeholder:text-lg bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:border-0 outline-none"
          />
          <div className="flex items-center justify-center w-full h-auto mt-5">
            <RadioGroups />
          </div>
          <div className="mt-5">
            <SubmitButton text="Send" size={"lg"} variant={"default"} />
          </div>
          <span className="w-[70vw] font_Cormorant text-black text-xl text-center mt-5">
            We are looking forward to share this important and special day
          </span>
          <span className="font_Ephisis text-black text-7xl text-center mt-5">
            With You!
          </span>
        </div>
      </section>
    </main>
  );
}
