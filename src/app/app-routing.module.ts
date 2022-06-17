import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']); //esto lo que hace es que cuando alguien no esta logeado e intenta ir a otro lado que no es el login lo mande ahí directamente
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
                    .then(m => m.HomePageModule),
                    canActivate: [AuthGuard],
                    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/profiles/account/account.module')
                    .then(m => m.AccountPageModule),
                    canActivate: [AuthGuard],
                    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'profile-pets',
      loadChildren: () => import('./pages/profiles/profile-pets/profile-pets.module')
                    .then(m => m.ProfilePetsPageModule),
                    canActivate: [AuthGuard],
                    data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'adverts',
    loadChildren: () => import('./pages/Advert/adverts/adverts.module')
                        .then(m => m.AdvertsPageModule),
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'adverts-info/:id',
    loadChildren: () => import('./pages/Advert/adverts-info/adverts-info.module')
                        .then(m => m.AdvertsInfoPageModule),
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/DoLogin/login/login.module')
                        .then(m => m.LoginPageModule),
                        data: { AuthGuardPipe: redirectLoggedInToHome }
  },
  {
    path: 'register/:type',
    loadChildren: () => import('./pages/DoLogin/register/register.module')
                        .then(m => m.RegisterPageModule),
                        canActivate: [],
                        data: { AuthGuardPipe: redirectLoggedInToHome }
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/Advert/more/more.module')
                        .then(m => m.MorePageModule), 
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'register-pets',
    loadChildren: () => import('./pages/register-pets/register-pets.module')
                        .then(m => m.RegisterPetsPageModule), 
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'politic',
    loadChildren: () => import('./pages/menu/settings/politic/politic.module')
                        .then(m => m.PoliticPageModule), 
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'privacity',
    loadChildren: () => import('./pages/menu/settings/privacity/privacity.module')
                        .then(m => m.PrivacityPageModule),
                        canActivate: [AuthGuard],
                        data: { AuthGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'register-selection',
    loadChildren: () => import('./pages/DoLogin/register-selection/register-selection.module')
                        .then( m => m.RegisterSelectionPageModule),
                        canActivate: [],
                        data: { AuthGuardPipe: redirectLoggedInToHome }
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: '**', //si meten otra direccion de las que hemos creado le lleva directamente a la pagina principal y este a su vez si no esta logeado al login
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
