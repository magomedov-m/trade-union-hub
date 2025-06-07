import React from 'react'
import styles from './EventsContainer.module.scss'
// import Image from 'next/image'
// import medVenatus from '../../../public/medVenatus.jpg'
// import Goryanka from '../../../public/goryanka.jpg'
// import StreetBall from '../../../public/streetball.jpg'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function EventsContainer() {
  return (
    <div className={styles.content}>
        <Link href='/about'><Button>Написать отзыв</Button></Link>
    </div>
  )
}
