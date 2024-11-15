import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CuboComponentComponent } from './components/cubo-component/cubo-component.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cubo/:id', component: CuboComponentComponent},
  {path: 'marca/:marca', component: MarcaComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
