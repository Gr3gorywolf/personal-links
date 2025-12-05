import { SocialLink } from "@/types/socialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";
import { json } from "stream/consumers";

export const LinkCard: FC<{
  link: SocialLink;
  className?: string;
}> = ({ link, className }) => {
  return (
    <Link href={link.url}>
      <div className={`${className ?? ""} bg-white rounded-xl cursor-pointer shadow-md py-4 px-6 hover:shadow-xl hover:-translate-y-1 transition-all`}>
        <div className="flex items-center">
          <FontAwesomeIcon icon={link.icon as any} fontSize="35" className="px-5 text-gray-900" />
          <div className="block">
            <h6 className="text-gray-900 font-semibold">{link.name}</h6>
            <h6 className="text-gray-500">{link.description}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};
