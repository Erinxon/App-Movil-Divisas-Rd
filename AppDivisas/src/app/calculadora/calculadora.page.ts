import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../models/data.models';
import { ErrorModel } from '../models/error.models';
import { DivisasService } from '../services/divisas.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  data!: Data;
  loanding: boolean = false;
  error: ErrorModel = {
    isError: false,
    message: '',
  }
  select: any = {
    selected : 'Dolar',
  }
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private divisasService: DivisasService) { }

  ngOnInit() {
    this.makeForm();
    this.getDivisas();
  }

  makeForm(): void {
    this.form = this.fb.group({
      peso: ['', Validators.required],
      otraMoneda: ['']
    });
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

  onChange(event: any): void {
    if(this.form.valid){
      this.select.selected = event.detail.value;
      this.calcular();
    }
  }

  calcular(): void {
    const peso = Number(this.form.value.peso);
    if(this.select.selected === 'Dolar'){
      const total = (peso /  parseFloat(this.data.dolar.compra)).toFixed(4)
      this.form.patchValue({otraMoneda: `${total}`})
    }else{
      const total = (peso / parseFloat(this.data.euro.compra)).toFixed(4);
      this.form.patchValue({otraMoneda: `${total}`})
    }
  }


}
