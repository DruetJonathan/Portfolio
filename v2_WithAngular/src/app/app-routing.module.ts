import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // ? Inscrire les routes ici par exemple celle de contact
  // {
  //   //? loadchildren -> lire les enfants then charger le module demo
  //   path: 'demo', component: DemoComponent, loadChildren: () =>
  //     import("./demo/demo.module").then((m) => m.DemoModule)
  // },
  // {
  //   path: 'exos', component: ExosComponent, loadChildren: () =>
  //     import("./exos/exos.module").then((m) => m.ExosModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
