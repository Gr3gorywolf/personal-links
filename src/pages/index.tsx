import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SocialLinks } from '@/data/socialLinks'
import { LinkCard } from '@/components/LinkCard'
import { Character } from '../components/Character'
import { InsertVisit } from '@/db/visits'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { MoreInfo } from '@/components/MoreInfo'
const inter = Inter({ subsets: ['latin'] })

export default function Home({serverTime}) {
  console.log({serverTime});
  return (
    <div className="w-full ">
      <div className="max-w-lg mt-10 mx-auto p-3">
        <div className="mx-auto size-72 floating-animation-slow">
          <Character />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Gregory Cabral De Los Santos
        </h1>
        <p className="text-lg text-white  text-center">
          A fullstack developer from Dominican Republic that really enjoys to
          create and learn new things <MoreInfo serverTime={serverTime}/>
        </p>
        <div className="mt-8">
          {SocialLinks.map((link) => (
            <LinkCard className="mt-4" link={link} key={link.url} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = (async ({req})=>{
  const referrer = req.headers.referer;
  const serverTime = new Date().getTime();
  await InsertVisit(req.connection.remoteAddress ?? 'unknown',referrer ??"no-referer");
  return {props:{tracked:true,  serverTime}};
}) satisfies GetServerSideProps<{tracked:boolean}>
