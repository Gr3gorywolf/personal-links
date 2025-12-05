/* eslint-disable react/no-unescaped-entities */
import { SocialLinks } from "@/data/socialLinks";
import { LinkCard } from "@/components/LinkCard";
import { Character } from "../components/Character";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gregory's links</title>
      </Head>
       <GoogleAnalytics gaId="G-02YKYQF6X2" />
      <div className="w-full ">
        <div className="fixed right-5 top-5">
          <Link href="https://gregoryc.dev/about">
            <FontAwesomeIcon icon={faInfoCircle} fontSize="35" className="px-5 text-white cursor-pointer" />
          </Link>
        </div>
        <div className="max-w-lg mt-10 mx-auto p-3">
          <div className="mx-auto size-72 floating-animation-slow">
            <Character />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-center text-white">Gregory Cabral De Los Santos</h1>
          <p className="text-lg text-white  text-center">A fullstack developer from Dominican Republic that really enjoys to create and learn new things</p>
          <div className="mt-8">
            {SocialLinks.map((link) => (
              <LinkCard className="mt-4" link={link} key={link.url} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
