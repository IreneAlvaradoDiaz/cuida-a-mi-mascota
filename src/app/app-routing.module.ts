import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adverts',
    loadChildren: () => import('./pages/Advert/adverts/adverts.module').then( m => m.AdvertsPageModule)
  },
  {
    path: 'adverts-info',
    loadChildren: () => import('./pages/Advert/adverts-info/adverts-info.module').then( m => m.AdvertsInfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/DoLogin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/DoLogin/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lenguages',
    loadChildren: () => import('./pages/menu/lenguages/lenguages.module').then( m => m.LenguagesPageModule)
  },
  {
    path: 'pays',
    loadChildren: () => import('./pages/menu/pays/pays.module').then( m => m.PaysPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/profiles/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'profile-pets',
    loadChildren: () => import('./pages/profiles/profile-pets/profile-pets.module').then( m => m.ProfilePetsPageModule)
  },
  {
    path: 'pay-information',
    loadChildren: () => import('./pages/menu/pays/pay-information/pay-information.module').then( m => m.PayInformationPageModule)
  },
  {
    path: 'pay-toggle',
    loadChildren: () => import('./pages/menu/pays/pay-toggle/pay-toggle.module').then( m => m.PayTogglePageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/Advert/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'register-pets',
    loadChildren: () => import('./pages/register-pets/register-pets.module').then( m => m.RegisterPetsPageModule)
  },
  {
    path: 'politic',
    loadChildren: () => import('./pages/menu/settings/politic/politic.module').then( m => m.PoliticPageModule)
  },
  {
    path: 'privacity',
    loadChildren: () => import('./pages/menu/settings/privacity/privacity.module').then( m => m.PrivacityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
