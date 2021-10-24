import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data.models';
import { ErrorModel } from '../models/error.models';
import { DivisasService } from '../services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.page.html',
  styleUrls: ['./divisas.page.scss'],
})
export class DivisasPage implements OnInit {
  data!: Data;
  loanding: boolean = false;
  error: ErrorModel = {
    isError: false,
    message: '',
  }
  constructor(private divisasService:DivisasService) { }

  ngOnInit() {
    this.getDivisas();
  }

  getDivisas(): void {
    this.loanding = true;
    this.divisasService.getDivisas().subscribe(d => {
      this.data = d.data;
      this.loanding = false;
    }, error => {
      this.loanding = false;
      this.setError(true, 'Ocurrió  un error');
    });
  }

  setError(isError: boolean, message: string): void {
    this.error = {
      isError: isError,
      message: message,
    }
  }

  reintentar(): void {
    this.getDivisas();
  }

}
