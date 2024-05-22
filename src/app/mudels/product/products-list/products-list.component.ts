import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
// Import ButtonModule here
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  onUpload(event: any) {
    // Add your upload logic here
    console.log("File uploaded:", event.files);
  }
}

