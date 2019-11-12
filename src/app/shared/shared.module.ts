import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTooltipModule, NbCardModule, NbButtonModule, NbIconModule, NbSelectModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbTooltipModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule
  ],
  exports: [NbTooltipModule, NbCardModule, NbButtonModule, NbIconModule, NbSelectModule, NbInputModule]
})
export class SharedModule { }
