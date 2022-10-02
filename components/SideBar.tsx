import Link from 'next/link'
import styles from '../styles/SideBar.module.scss'
import { AiOutlineHome, AiOutlineRead, AiOutlineEye, AiOutlineUser, AiOutlineExport } from 'react-icons/ai'
 
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <h1 className={styles.sideBar__heading}>
        <Link href='/'>Chess</Link>
      </h1>
      <nav className={styles.sideBar__navigation}>
        <h2 aria-label='home'><Link href='#'><AiOutlineHome className={styles.sideBar__icon}/></Link></h2>
        <h2 aria-label='profile'><Link href='#'><AiOutlineUser className={styles.sideBar__icon}/></Link></h2>
        <h2 aria-label='watch games'><Link href='#'><AiOutlineEye className={styles.sideBar__icon}/></Link></h2>
        <h2 aria-label='learn chess'><Link href='#'><AiOutlineRead className={styles.sideBar__icon}/></Link></h2>
      </nav>
      <Link href='/'><AiOutlineExport className={styles.sideBar__icon}/></Link>
    </div>
  )
}

export default SideBar