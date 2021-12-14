import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/DoLogin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/Menu/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/Menu/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'advert',
    loadChildren: () => import('./pages/Adverts/advert/advert.module').then( m => m.AdvertPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/Profiles/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'privacity',
    loadChildren: () => import('./pages/Menu/Settings/Privacity-Security/privacity/privacity.module').then( m => m.PrivacityPageModule)
  },
  {
    path: 'politic',
    loadChildren: () => import('./pages/Menu/Settings/Privacity-Security/politic/politic.module').then( m => m.PoliticPageModule)
  },   {
    path: 'pay-toggle',
    loadChildren: () => import('./pages/Menu/pagos/pay-toggle/pay-toggle.module').then( m => m.PayTogglePageModule)
  },
  {
    path: 'pay-information',
    loadChildren: () => import('./pages/Menu/pagos/pay-information/pay-information.module').then( m => m.PayInformationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/DoLogin/register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
