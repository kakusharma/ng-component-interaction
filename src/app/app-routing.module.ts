import { DataBindingParentComponent } from './data-binding-parent/data-binding-parent.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalVariableParentComponent } from './local-variable-parent/local-variable-parent.component';
import { InterceptInputParentComponent } from './intercept-input-parent/intercept-input-parent.component';
import { ShoppingComponent } from './services/shopping/shopping.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingParentComponent },
  { path: 'intercept-binding', component: InterceptInputParentComponent },
  { path: 'local-variable', component: LocalVariableParentComponent },
  { path: 'view-child', component: ViewChildParentComponent },
  { path: 'services', component: ShoppingComponent },
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
