import styles from "../styles/navBar/NavBar.module.scss"
import Bag from "./svgs/Bag"
import HamburgerMenu from "./svgs/HamburgerMenu"
import User from "./svgs/User"
import Search from "./svgs/Search"
import { NavLink, Link } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles["left-Side"]}>
        <div className={styles.HamburgerMenu}>
          <HamburgerMenu></HamburgerMenu>
        </div>
        {/* for desktop */}
        <Link to="/">
          <div className={styles.logoDesktop}>
            <img src={require("../assets/icons/cutlery/group-10@3x.jpg")}></img>
          </div>
        </Link>
        <Link to="/">
          <header className={styles.EPICURE}>EPICURE</header>
        </Link>
        <Link to="/Restaurants"
        // style={isActive => ({
        //   color: isActive ? "green" : "blue"
        // })}
        >
          <header className={styles.Restaurants}>Restaurants</header>
        </Link>
        <Link to="/Chef" >
          <header className={styles.Chefs}>Chefs</header>
        </Link>
      </div>
      <div className={styles["right-side"]}>
        <div className={styles["input-container"]}>
          <input
            type="text"
            placeholder="Search for restaurant cuisine, chef"
          ></input>
          <Search></Search>
        </div>
        {/* end desktop */}
        <div className={styles.logoMobile}>
          <Link to="/">
            <img src={require("../assets/icons/cutlery/group-10@3x.jpg")}></img>
          </Link>
        </div>
        <div className={styles.search}>
          <Search></Search>
        </div>
        <div className={styles.User}>
          <Link to="/user">
            <User></User>
          </Link>
        </div>
        <div className={styles.Bag}>
          <Bag></Bag>
        </div>
      </div>
    </section>
  )
}

export default NavBar
/*


 <nav className={styles.navBar}>
      <div className={styles.groupNav}>
        <Group></Group>
        <section></section>
      </div>
      <div className={styles.headersNav}>
        <img src={require("../assets/icons/cutlery/group-10@3x.jpg")}></img>
        <header className={styles.logoHeader}>EPICURE</header>
        <header className={styles.navHeaders}>Restaurants</header>
        <header className={styles.navHeaders}>Chefs</header>
      </div>
    
      <div className={styles.inputNav}>
        <input
          type="text"
          placeholder="Search for restaurant cuisine, chef"
        ></input>
        <Search></Search>
      </div>
      <div className={styles.mainLogo}>
        <img src={require("../assets/icons/cutlery/group-10@3x.jpg")}></img>
      </div>
      <div className={styles.navIcons}>
        <div className={styles.searchSVG}>
          <Search></Search>
        </div>
        <User></User>
        <Bag></Bag>
      </div>
    </nav>




*/
