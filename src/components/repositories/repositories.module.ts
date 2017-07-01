import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RepositoriesComponent
  ]
})
export class RepositoriesComponentModule {}
