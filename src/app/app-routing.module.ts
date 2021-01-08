import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./table-page/table-page.module').then(m => m.TablePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./table-page/table-page.module').then(m => m.TablePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
