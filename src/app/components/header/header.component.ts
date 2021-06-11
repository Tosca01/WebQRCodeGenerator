import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutdialogComponent } from '../aboutdialog/aboutdialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  navigate(url: string) {
    window.open(url, '_blank');
  }

  openDialog() {
    const dialogRef = this.dialog.open(AboutdialogComponent);
  }
}
