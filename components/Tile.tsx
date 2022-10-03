import Image from 'next/image'
import styles from '../styles/Tile.module.scss'

interface Props{
    number: number,
    image:string | null,
    style:string,
}

const Tile = ({number,image, style}:Props) => {
  return (
    <div className={`${styles.board__cell} ${number%2!=0?styles.board__white:styles.board__black}`}>
      {image && <Image className={styles.board__piece} src={`/../public/${image}_${style}.png`} width={70} height={70} />  }
    </div>
  )
}

export default Tile