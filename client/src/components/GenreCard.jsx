import './GenreCard.css'

const GenreCard = (props) => {
  return (
    <div className="GenreCard">
      <h3>{props.genre.name}</h3>
    </div>
  )
}

export default GenreCard
