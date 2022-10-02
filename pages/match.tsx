import React from 'react'
import Head from 'next/head'
import styles from '../styles/Match.module.scss'
import ChessBoard from '../components/ChessBoard'

const MatchPage = () => {
  

  return (
    <>
    <Head>
      <title>Match</title>
    </Head>

    <div className={styles.match__container}>
      <div className={styles.playerInfo__container}>
        {/* Player card */}
        <div className={styles.playerInfo__card}>
          Player 1
        </div>
        {/* Player time */}
        <h2 className={styles.playerInfo__time}>5:00</h2>
      </div>
      {/* BOARD */}
      <ChessBoard/>
      {/*  */}
      <div className={styles.playerInfo__container}>
        {/* Player card */}
        <div className={styles.playerInfo__card}>
          Player 2
        </div>
        {/* Player time */}
        <h2 className={styles.playerInfo__time}>5:00</h2>
      </div>
    </div>
  </>
  )
}

export default MatchPage