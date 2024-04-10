import { SocialLink } from '@/types/socialLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { json } from 'stream/consumers'

export const LinkCard: FC<{
  link: SocialLink
  className?: string
}> = ({ link, className }) => {
  const handleClick = () => {
    fetch('/api/add-interaction', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'click',
        target: link.name,
      }),
    }).finally(() => {
      window.open(link.url, '_self')
    })
  }

  return (
    <div
      onClick={handleClick}
      className={`${
        className ?? ''
      } bg-white rounded-xl cursor-pointer shadow-md py-4 px-6 hover:shadow-xl hover:-translate-y-1 transition-all`}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={link.icon as any}
          fontSize="35"
          className="px-5 text-gray-900"
        />
        <div className="block">
          <h6 className="text-gray-900 font-semibold">{link.name}</h6>
          <h6 className="text-gray-500">{link.description}</h6>
        </div>
      </div>
    </div>
  )
}
