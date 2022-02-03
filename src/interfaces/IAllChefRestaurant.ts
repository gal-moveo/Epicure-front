import { IChef } from "./IChef"
export interface IAllChefRestaurant {
  _id: string
  imgUrl: string
  name: string
  description: string
  chef: IChef
  PopularRestaurant: boolean
}
