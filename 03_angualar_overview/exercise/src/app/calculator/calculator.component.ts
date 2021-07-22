import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstOperand: number;
  secondOperand: number;
  operator = '+';
  result: number;
  constructor() { }

  ngOnInit(): void {
  }
  updateFirstOperand(firstOperand) {
    this.firstOperand = Number(firstOperand);
  }
  updateSecondOperand(secondOperand) {
    this.secondOperand = Number(secondOperand);
  }
  updateOperator(operator) {
    this.operator = operator;
  }
  calculate() {
    switch (this.operator) {
      case '+' : {
        this.result = this.firstOperand + this.secondOperand;
        break;
      }
      case '-' : {
        this.result = this.firstOperand - this.secondOperand;
        break;
      }
      case '*' : {
        this.result = this.firstOperand * this.secondOperand;
        break;
      }
      case '/' : {
        this.result = this.firstOperand / this.secondOperand;
        break;
      }
    }
  }

}
