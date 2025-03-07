import Image from "next/image";
import Link from "next/link";
import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
 
export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="text-5xl leading-tight font-boohong">Hey! It&apos;s me, Odelia G Huang.</h1>
        <h2 className="text-2xl">My pronouns are they/them.</h2>


        <div className="flex flex-row gap-6 text-lg">
          <Link 
            href="https://linkedin.com/in/odelia-huang" 
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
          <LiaLinkedin></LiaLinkedin>
          </Link>
          <Link 
            href="https://instagram.com/_xoxo_od_" 
            target="_blank"
            className="hover:text-pink-600 transition-colors"
          >
            <LiaInstagram></LiaInstagram>
          </Link>
          <Link 
            href="https://github.com/odelz" 
            target="_blank"
            className="hover:text-orange-600 transition-colors"
          >
            <LiaGithub></LiaGithub>
          </Link>
        </div>

        {/* First section: Image with text to the right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-5">
          <div className="w-full md:w-1/4">
            <Image
              src="/me.jpg"
              alt="Image of Odelia"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <h2 className="text-3xl mb-4">Basically...</h2>
            <p className="text-xl font-nunito leading-relaxed">
              I&apos;m a software engineer and I love to create things, both physical and metaphysical. I&apos;m currently working as a consultant.
              
              Last spring I finished writing my master&apos;s thesis on bias mitigation within Automatic Speech
              Recognition models and datasets.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Second section: Image with text to the left */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 my-5">
          <div className="w-full md:w-1/4">
            <Image
              src="/IMG_0490.png"
              alt="Second image"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <h2 className="text-3xl mb-4">A Little About Me</h2>
            <p className="text-xl font-nunito leading-relaxed">
              I am a Chinese-American living in the city of Copenhagen, Denmark. I love to boulder, be creative and go to flea markets. 
              I spend a lot of time with my friends, from making cute dinners to knitting and building to discussing what we think the future will look like.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}