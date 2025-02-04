import NavBar from "./NavBar";

import styles from "../styles/index.module.css"

function BasePage(props) {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  )
}

export default BasePage;
