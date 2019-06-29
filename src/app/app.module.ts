import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailPerfilComponent } from './components/detail/detail-perfil/detail-perfil.component';
import { DetailRepositoryComponent } from './components/detail/detail-repository/detail-repository.component';


const routeApp: Routes = [
  { path: '', component: SearchComponent, pathMatch: 'full' },
  { path: 'detail/:user', component: DetailComponent },
  { path: 'notfound', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    ErrorComponent,
    DetailPerfilComponent,
    DetailRepositoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeApp),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
