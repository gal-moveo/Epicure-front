import styles from "../../styles/sections/HeroSearch.module.scss"
import Search from "../svgs/Search"
import { CSSTransition } from "react-transition-group"
//import './HeroSearch_.scss'

const HeroSearch: React.FC = () => {
  return (
    <CSSTransition
      in={true}
      timeout={2000}
      appear={true}
      classNames={styles["fade"]}
    >
      <div>
        <div className={styles.container}>
          <div className={styles["inside-Search-Div"]}>
            <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
            <div className={styles["input-Div"]}>
              <Search></Search>
              <input
                type="text"
                placeholder="Search for restaurant cuisine, chef"
              />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default HeroSearch
