import {
  Injectable,
  OnInit
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  db = {

    "foodCategories": [{
        "id": "100",
        "name": "Pizza",
        "position": "1",
        "imageCat": "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=150",
        "choicesAndAddons": {
          "Crust": ["Fluffy", "Crispy"],
          "ExtraToppings": ["Corn", "Extra mozzarella"]
        },
        "fooditems": [{
            "id": "101",
            "name": "Pizza Suprema",
            "position": 1,
            "description": "Sos tomat și brânză Mozzarella.",
            "choicesAndAddons": ["Extra Toppings"],
            "image": "https://www.pizzahutdelivery.ro/egendaOnline/image/MzAyMjRfNTkzXzU5M18xXzJfX18/30224_1.jpg",
            "inDetail": {
              "price": "25.00",
              "cuisine_name": "Italian",
              "category_name": "Pizza",
              "discount": {
                "type": "",
                "amount": "0.00"
              },
              "tags": []
            }
          },
          {
            "id": "101",
            "name": "PIZZA si mai Suprema",
            "position": 2,
            "description": "Sos tomat, brânză Mozzarella, pepperoni, vită, ceapă, ciuperci, ardei.",
            "choicesAndAddons": ["CHEEEEESE"],
            "image": "https://www.pizzahutdelivery.ro/egendaOnline/image/MzAyMTdfNTkzXzU5M18xXzJfX18/30217_1.jpg",
            "inDetail": {
              "price": "40.00",
              "cuisine_name": "Italian",
              "category_name": "Pizza",
              "discount": {
                "type": "",
                "amount": "0.00"
              },
              "tags": []
            }
          }
        ]
      },

      {
        "id": "200",
        "name": "Pasta",
        "position": "2",
        "imageCat": "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",
        "choicesAndAddons": {
          "Crust": [],
          "ExtraToppings": ["PISTACHIO ", "FRESH TOMATO"]
        },
        "fooditems": [{
          "id": "201",
          "name": "Penne Arrabbiata",
          "position": 1,
          "description": "Un preparat traditional italian cu un “foc” aparte. Pastele Arrabiata, adica suparate, se prepara fara carne in reteta originala, insa am adaugat baconul pentru un plus de savoare si pentru o masa mai satioasa.",
          "choicesAndAddons": ["Secret Ingridient"],
          "image": "https://www.retetepractice.ro/wp-content/uploads/2016/08/Penne-Arrabbiata.jpg",
          "inDetail": {
            "price": "22.00",
            "cuisine_name": "Italian",
            "category_name": "Pizza",
            "discount": {
              "type": "",
              "amount": "0.00"
            },
            "tags": []
          }
        }]
      }
    ]
  }




  getData() {
    return this.db
  }

  ngOnInit() {}

}
