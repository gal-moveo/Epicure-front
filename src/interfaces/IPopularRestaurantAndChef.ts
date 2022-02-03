import { IChef } from "./IChef"
export interface IPopularRestaurantAndChef {
  description: string
  name: string
  imgUrl: string
  lastName: string
  _id: string
  chef: [IChef]
}
