function TicketDetailsItem(props) {
  return (
    <p><span style={{ fontWeight: 600 }}>{props.itemKey}</span>: {props.value}</p>
  )
}

export default TicketDetailsItem;
