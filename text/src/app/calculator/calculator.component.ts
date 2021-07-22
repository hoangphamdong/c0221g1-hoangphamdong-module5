import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  fistOperand: number;
  secondOperand: number;
  operator = '+';
  result: number;
  constructor() { }

  ngOnInit(): void {
  }
  updateFirstOperand(firstOperand) {
    this.fistOperand = Number(firstOperand.value);
  }
  updateSecondOperand(secondOperand) {
    this.secondOperand = Number(secondOperand.value);
  }
  updateOperator(operator) {
    this.operator = operator.value;
  }
  calculate() {
    switch (this.operator) {
      case '+' : {
        this.result = this.fistOperand + this.secondOperand;
        break;
      }
      case '-' : {
        this.result = this.fistOperand - this.secondOperand;
        break;
      }
      case '*' : {
        this.result = this.fistOperand * this.secondOperand;
        break;
      }
      case '/' : {
        this.result = this.fistOperand / this.secondOperand;
        break;
      }
    }
  }

}
