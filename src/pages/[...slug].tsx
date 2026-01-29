import { RedirectLinks } from "@/data/redirectLinks";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const path = "/" + slug.join("/");

  const match = RedirectLinks.find(r => r.url === path);

  if (!match) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: match.to,
      permanent: false,
    },
  };
};

export default function CatchAllRedirect() {
  return null;
}
