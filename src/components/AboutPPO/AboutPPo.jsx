import React from 'react'
import styles from './AboutPPo.module.scss'
import Image from 'next/image'
import background from '../../app/backgroundUnionImage.png'

export default function AboutPPo() {
  return (
    <div className={styles.aboutPPO}>
        <div className={styles.aboutTitleBlock}>
            <h2 className={styles.title}>О профсоюзе</h2>
            <p className={styles.description}>Первичная профсоюзная организация медицинского университета объединяет студентов и сотрудников для защиты их прав и интересов. Мы стремимся создать комфортные условия для обучения и работы, поддерживаем инициативы, проводим социальные и образовательные мероприятия. Вместе мы делаем университетскую жизнь ярче и справедливее!
            </p>
        </div>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={background} sizes={50} alt='Фон' />
        </div>
    </div>
  )
}
