import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ButtonModule,FormsModule, InputTextModule,KeyFilterModule,FileUploadModule,TabViewModule
  ],
  exports: [ProductsListComponent]
})
export class ProductModule { }