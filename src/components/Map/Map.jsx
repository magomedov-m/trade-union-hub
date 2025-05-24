import React from 'react'
import styles from './Map.module.scss'
import Image from 'next/image'
import message from '../../../public/iconMessage.png'
import location from '../../../public/iconLocation.png'

export default function Map() {
  return (
    <div className={styles.mapContainer}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5838.240207724354!2d47.4876838659387!3d42.9757435855901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404ea0509397a327%3A0x5327ee4987827e9c!2z0JTQsNCz0LXRgdGC0LDQvdGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2sru!4v1748084966504!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className={styles.messageUs}>
            <Image className={styles.iconMessage} src={message} /> <h2>Связаться с нами: ourMail@gmail.com</h2>
        </div>
        <div className={styles.locationMe}>
            <Image className={styles.location} src={location} />
            <h2>Республика Дагестан, г. Махачкала</h2>
        </div>
    </div>
  )
}
