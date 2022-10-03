import styles from '../styles/ChessBoard.module.scss'
import Tile from '../components/Tile'


const ChessBoard = () => {
  
    let letters:string[] = ['a','b','c','d','e','f','g','h']
    let numbers:number[] = [1,2,3,4,5,6,7,8]
    let board:JSX.Element[] = []
    
    interface Piece{
      image:string, 
      x:number,
      y:number,
      style:string,
    }
    const pieces:Piece[] = [] 
  
    for(let i = 0; i < 8; i++){
      pieces.push({image:'pawn',style:'w',x:i,y:1})
      pieces.push({image:'pawn',style:'b',x:i,y:6})
      if(i == 0){
        pieces.push({image:'rook',style:'w',x:i,y:0})
        pieces.push({image:'rook',style:'b',x:i,y:7})
      }
      if(i == 1){
        pieces.push({image:'knight',style:'w',x:i,y:0})
        pieces.push({image:'knight',style:'b',x:i,y:7})
      }
      if(i == 2){
        pieces.push({image:'bishop',style:'w',x:i,y:0})
        pieces.push({image:'bishop',style:'b',x:i,y:7})
      }
      if(i == 3){
        pieces.push({image:'queen',style:'w',x:i,y:0})
        pieces.push({image:'queen',style:'b',x:i,y:7})
      }
      if(i == 4){
        pieces.push({image:'king',style:'w',x:i,y:0})
        pieces.push({image:'king',style:'b',x:i,y:7})
      }
      if(i == 5){
        pieces.push({image:'bishop',style:'w',x:i,y:0})
        pieces.push({image:'bishop',style:'b',x:i,y:7})
      }
      if(i == 6){
        pieces.push({image:'knight',style:'w',x:i,y:0})
        pieces.push({image:'knight',style:'b',x:i,y:7})
      }
      if(i == 7){
        pieces.push({image:'rook',style:'w',x:i,y:0})
        pieces.push({image:'rook',style:'b',x:i,y:7})
      }
    }

    for(let i = numbers.length-1; i >= 0 ; i--){
      for(let k = 0; k < letters.length; k++){
        let image = ''
        let style = ''
  
        pieces.forEach(p=>{
          if(p.x === k && p.y === i){
            image = p.image
            style = p.style
          }
        })
        board.push(<Tile key={(pieces.length - i)*k} number={i+k} style={style} image={image}/>)
      }
    }

    return (
        <div className={styles.board__wrapper}>
            {board}
        </div>
    )
}

export default ChessBoard