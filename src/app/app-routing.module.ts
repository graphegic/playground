import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { FoodmenulistingComponent } from './foodmenulisting/foodmenulisting.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';



const  routes: Routes = [
    {
     path: 'JsonDS',
     component: DataStructureComponent
    },

    { 
    path: 'foodmenu',
     component : FoodmenuComponent
    },
    {
        path: 'foodmenulisting',
        component: FoodmenulistingComponent
    },
    {
      path: 'itemdetails',
      component: ItemdetailsComponent
    },
    { 
    path: '',
    redirectTo: 'foodmenu',
    pathMatch: 'full'
  },
  ];
  
  @NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  
  })
  export class AppRoutingModule {
  }
  export const routingComponents = [
LayoutComponent,FoodmenuComponent,FoodmenulistingComponent,ItemdetailsComponent,DataStructureComponent
  ];
  
 