import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from "./Store/store.module";
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { StoreComponent } from './Store/store.component';
import { CartDetailComponent } from './Store/cartDetail.component';
import { CheckoutComponent } from './Store/checkout.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from "./storeFirstGuard";
registerLocaleData(localePL);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule, RouterModule.forRoot(
      [
        { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
        { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]  },
        { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]  },
        { path: "**", redirectTo: "/store" }
      ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
