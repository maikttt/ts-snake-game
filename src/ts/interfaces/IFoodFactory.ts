import { IFood } from './IFood';

export interface IFoodFactory {
  getFood(): IFood;
}
