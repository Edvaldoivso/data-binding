import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importação do Erro:
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, DataBindingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Aqui a importação Complementar
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
