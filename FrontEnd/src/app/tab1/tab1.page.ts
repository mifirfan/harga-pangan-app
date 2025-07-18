import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';      // untuk *ngFor, number pipe
import { FormsModule } from '@angular/forms';        // untuk ngModel
import { IonicModule } from '@ionic/angular';        // untuk ion-* components

@Component({
  selector: 'app-tab1',
  standalone: true,                                  // ✅ ini artinya dia standalone
  imports: [CommonModule, FormsModule, IonicModule], // ✅ tambahkan ini
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  prices: any[] = [];
  selectedCity = 'jakarta';

  constructor() {}

  ionViewWillEnter() {
    this.fetchPrices();
  }

  fetchPrices() {
    fetch(`http://localhost:3000/api/prices?city=${this.selectedCity}`)
      .then(res => res.json())
      .then(data => this.prices = data.data || []);
  }
}
