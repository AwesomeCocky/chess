import React from 'react'
import Head from 'next/head'
import styles from '../styles/Match.module.scss'

const MatchPage = () => {
  let letters:string[] = ['a','b','c','d','e','f','g','h']
  let numbers:number[] = [1,2,3,4,5,6,7,8]
  let board:JSX.Element[] = []
  for(let i = letters.length-1; i >= 0 ; i--){
    for(let k = 0; k < numbers.length; k++){
      board.push(<div key={i+k} className={styles.board__cell}>{letters[i]}{numbers[k]}</div>)
    }
  }
  console.log(board)
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
      <div className={styles.board__wrapper}>
        {board}
      </div>
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