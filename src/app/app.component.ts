import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bonusP = false;
  total = 0;

  sumarAlTotal(valor: number): void {
    this.total += valor;
  }

  ngOnInit(): void {
    window.setTimeout(() => {
      this.bonusP = true;

      window.setTimeout(() => {
        this.bonusP = false;
      }, 5000);

    }, 4000);
  }

}
