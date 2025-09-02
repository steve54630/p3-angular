import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { CdkAutofill } from "@angular/cdk/text-field";

@Component({
  selector: 'app-legend-dialog',
  templateUrl: './legend-dialog.html',
  imports: [MatDialogActions, MatDialogContent, CdkAutofill]
})
export class LegendDialog {

constructor (private dialog: MatDialogRef<LegendDialog>) {}
closeDialog() {
 this.dialog.close();
}

}
