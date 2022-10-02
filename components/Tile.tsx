import styles from '../styles/Tile.module.scss'

interface Props{
    number: number,
    image:string | null
}

const Tile = ({number,image}:Props) => {
  return (
    <div className={`${styles.board__cell} ${number%2!=0?styles.board__white:styles.board__black}`}>{image}</div>
  )
}

export default Tile