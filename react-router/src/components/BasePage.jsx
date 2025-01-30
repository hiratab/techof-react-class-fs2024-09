import NavBar from "./NavBar";

function BasePage(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}

export default BasePage;
