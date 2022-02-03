import PopularRestaurants from "../cards/PopularRestaurants"
import SignatureDish from "../cards/SignatureDish"
import ButtonsMobileOnly from "./ButtonsMobileOnly"
import ChefOfTheWeek from "./ChefOfTheWeek"
import HeroSearch from "./HeroSearch"
import OurMeaningIcons from "./OurMeaningIcons"

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSearch></HeroSearch>
      <ButtonsMobileOnly></ButtonsMobileOnly>
      <PopularRestaurants></PopularRestaurants>
      <SignatureDish></SignatureDish>
      <OurMeaningIcons></OurMeaningIcons>
      <ChefOfTheWeek></ChefOfTheWeek>
    </div>
  )
}
export default Home
