import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailsRoutingModule } from './bank-details-routing.module';
import { BankDetailsComponent } from './bank-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankserviceService } from './bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BankdetailContainerComponent } from './bankdetail-container/bankdetail-container.component';
import { BankdetailPresentationComponent } from './bankdetail-container/bankdetail-presentation/bankdetail-presentation.component';
import { CurrencyPipe } from '@angular/common';
import { AccountNameFilterPipe } from './pipes/account-name-filter.pipe';
import { PhoneMaskDirective } from './phone-mask.directive';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { BankListContainerComponent } from './bank-list-container/bank-list-container.component';
import { BankListPresentationComponent } from './bank-list-container/bank-list-presentation/bank-list-presentation.component';

//import { AsYouType } from "libphonenumber-js";


@NgModule({
  declarations: [
    BankDetailsComponent,
    BankdetailContainerComponent,
    BankdetailPresentationComponent,
    AccountNameFilterPipe,
    PhoneMaskDirective,
    CurrencyPipePipe,
    BankListContainerComponent,
    BankListPresentationComponent,
  ],
  imports: [
    CommonModule,
    BankDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [BankserviceService, CurrencyPipe]
})
export class BankDetailsModule { }
