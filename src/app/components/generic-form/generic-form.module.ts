import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericFormComponent } from '../generic-form/generic-form.component';
import { ItemService } from '../../services/item.service';
@NgModule({
  declarations: [GenericFormComponent],
  imports: [CommonModule, FormsModule],
  providers: [ItemService],
  exports: [GenericFormComponent]
})
export class GenericFormModule {}
