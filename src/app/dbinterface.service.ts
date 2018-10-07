import {
  Injectable
} from '@angular/core';

export interface Foodmenu {
  foodCategories: FoodCategoriesItem[];
}
export interface FoodCategoriesItem {
  id: string;
  name: string;
  position: string;
  imageCat: string;
  choicesAndAddons: ChoicesAndAddons;
  fooditems: FooditemsItem[];
}
export interface ChoicesAndAddons {
  Crust?: string[];
  ExtraToppings: string[];
}
export interface FooditemsItem {
  id: string;
  name: string;
  position: number;
  description: string;
  choicesAndAddons: string[];
  image: string;
  inDetail: InDetail;
}
export interface InDetail {
  price: string;
  cuisine_name: string;
  category_name: string;
  discount: Discount;
  tags: any[];
}
export interface Discount {
  type: string;
  amount: string;
}

@Injectable()
export abstract class FoodMenuinterfaceService {
  abstract getFoodmenu()
}
