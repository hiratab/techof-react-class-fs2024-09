import TicketDetailsItem from './TicketDetailsItem';

function TicketDetails(props) {
  return (
    <div>
      <h3>Ticket Details</h3>
      <TicketDetailsItem itemKey="Name" value={props.name} />
      <TicketDetailsItem itemKey="Destination" value={props.destination} />
      <TicketDetailsItem itemKey="Gender" value={props.gender} />
      <TicketDetailsItem itemKey="Seat" value={props.seat} />
    </div>
  )
}

export default TicketDetails;