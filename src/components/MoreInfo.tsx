/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { css } from '@emotion/css'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { moreInfoStyles } from './MoreInfoStyles'
import { FC } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faInfo,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

export const MoreInfo: FC<{
  serverTime: number
}> = ({ serverTime }) => {
  const getAge = () => {
    let birthday = new Date('1999-01-15')
    var ageDifMs = serverTime - birthday.getTime()
    var ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  const handleDownloadResume = () => {
    window.open('https://gregoryc.dev/assets/Gregory%20Cabral.pdf')
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-bold">
        {' '}
        <FontAwesomeIcon
          icon={faInfoCircle}
          fontSize="35"
          className="px-5 text-white"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>About me</AlertDialogTitle>
          <AlertDialogDescription className={moreInfoStyles}>
            <img
              alt="gregory's picture"
              className="object-cover rounded-xl mx-auto mb-3"
              src="/images/profile.jpg"
              height={700}
              width={700}
            />
            <h4>
              I'm <strong> Gregory Alexander Cabral De Los Santos</strong>
            </h4>
            <h5 className="grey-text">Fullstack developer</h5>
            <div className="horizontal-line"></div>
            <ul className="profile-list">
              <li className="clearfix">
                <strong className="black-text title">Age</strong>
                <span className="grey-text content">{getAge()}</span>
              </li>
              <li className="clearfix">
                <strong className="black-text title">Country</strong>
                <span className="grey-text content">Dominican Republic</span>
              </li>

              <li className="clearfix">
                <strong className="black-text title">E-Mail</strong>
                <span className="grey-text content">
                  gregoryalexandercabral@gmail.com
                </span>
              </li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel >Close</AlertDialogCancel>
          <AlertDialogAction  onClick={handleDownloadResume}>
            <FontAwesomeIcon
              icon={faDownload}
              fontSize="16"
              className="px-2 text-white"
            />{' '}
            Download resume
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export function getServerSideProps() {
  return { props: { serverDate: new Date() } }
}
