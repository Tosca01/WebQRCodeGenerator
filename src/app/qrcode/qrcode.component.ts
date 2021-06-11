import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SavedialogComponent } from '../components/savedialog/savedialog.component';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit, AfterViewInit {
  @ViewChild('urlOfImage') urlOfImage: ElementRef;

  @ViewChild('canvas', { static: false}) qrcodeCanvas: ElementRef<HTMLCanvasElement>;

  fileForm: any;

  public context: CanvasRenderingContext2D;
  qrcodeSize: number = 300;
  qrcodeText: string = "Welcome to QRCode Generator enter your text here to convert the text to QRCode..";
  useImage: boolean = false;

  imageUrl: string = '';
  imageForm: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.imageForm = this.fb.group({
      imageTextField: [
        '',
        Validators.required
      ]
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  checkboxChanged(event: any): void {
    if(!event.checked) {
      this.imageUrl = "";
      this.urlOfImage.nativeElement.value = '';
    }
  }
  

  urlChange(event: any) {
    this.imageUrl = event.target.value;
  }

  saveQrcode() {

    const dialogRef = this.dialog.open(SavedialogComponent);

  }

}
