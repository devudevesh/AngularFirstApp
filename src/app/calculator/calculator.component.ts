import {Component} from '@angular/core'

@Component({
    selector:'calculator',
    templateUrl:'calculator.component.html',
    styleUrls:['calculator.component.css']
})  

export class CalculatorComponent
{
    public number1 : number;
    public number2 : number;
    public Result : number;

    public Add(){
        this.Result = this.number1 + this.number2;
    }

    public Sub(){
        this.Result = this.number1 - this.number2;
    }

    public Multiply(){
        this.Result = this.number1 * this.number2;
    }

    public Divide(){
        this.Result = this.number1 / this.number2;
    }
}