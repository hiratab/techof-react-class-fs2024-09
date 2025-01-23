import Flat from "./Flat";

function Flats(props) {
  return (
    <div>
      {
        props.flats && props.flats.map(flat => {
          return (
            <Flat key={flat.key} {...flat} />
          )
        })
      }
    </div>
  )
}

export default Flats;
