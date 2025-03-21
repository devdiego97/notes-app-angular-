import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotesComponent } from './pages/notes/notes.component';


export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"cadastro",
    component:RegisterComponent
  },
  {
    path:"entrar",
    component:LoginComponent
  },
  {
    path:"anotacoes",
    component:NotesComponent
  }
];
