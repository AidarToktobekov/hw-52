
interface Props{
    rank?: string;
    suit?: string;
}

const Card:React.FC<Props> =({rank, suit})=>{
    let icon:string = '';
    if (suit === 'diams') {
        icon = '♦';
    }
    if (suit === 'hearts') {
        icon = '♥';
    }
    if (suit === 'clubs') {
        icon = '♣';
    }
    if (suit === 'spades') {
        icon = '♠';
    }

    return(
        <>
            <span className={`card rank-${rank} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{icon}</span>
            </span>
        </>
    )
}


export default Card