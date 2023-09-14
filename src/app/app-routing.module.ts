import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
// 各タブに対応するコンポーネントをインポートする
import { RecommendedPage } from './recommended/recommended.page'; // 例: おすすめタブに対応するコンポーネント
import { MonhanNowPage } from './monhan-now/monhan-now.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'recommended',
    loadChildren: () => import('./recommended/recommended.module').then( m => m.RecommendedPageModule)
  },
  {
    path: 'monhan-now',
    loadChildren: () => import('./monhan-now/monhan-now.module').then( m => m.MonhanNowPageModule)
  },
  { path: 'tabs/tab1', component: Tab1Page }, // ニュースタブに対応するコンポーネント
  { path: 'tabs/tab1/recommended', component: RecommendedPage }, // おすすめタブに対応するコンポーネント
  { path: 'tabs/tab1/monhan-now', component: MonhanNowPage }, // モンハンNOWタブに対応するコンポーネント

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
