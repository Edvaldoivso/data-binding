import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importação do Erro:
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImputPropertyComponent } from './imput-property/imput-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, ImputPropertyComponent, OutputPropertyComponent],
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
