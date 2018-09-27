import _ from 'lodash';
import Movie from './movie';

module.exports = class {
    constructor(name){
        this._name = name;
        this._rentals = [];
    }

    addRental(rental){
        this._rentals.push(rental); 
    }
    
    getName(){
        return this._name; 
    }

    htmlStatemtn(){
        let result = `<h1>Rental Record for <em> ${this.getName()}</em></h1><p>`;
        _.each(this._rentals, (rental)=>{
            result += `${rental.getMovie().getTitle()}
                ${rental.getCharge()}<br>`;
        });
        result += `<p>You owed is <em>${this.getTotalCharge()}</em></p>
            <p><em>You earned ${this.getTotalFrequentRenterPoints()}</em> frequent renter points</p>`;
        return result;
    }

    statement(){
        let result = `Rental Record for ${this.getName()}\n`;
        _.each(this._rentals, (rental)=>{
            result += `\t ${rental.getMovie().getTitle()} \t
                ${rental.getCharge()} \n`;
        });
        result += `Amount owed is ${this.getTotalCharge()} \n
         You earned ${this.getTotalFrequentRenterPoints()} frequent renter points`;
        return result;
    }

    getTotalFrequentRenterPoints(){
        let result = 0;
        _.each(this._rentals, (rental)=>{
            result += rental.getFrequentRenterPoints(); 
        });
        return result;
    }

    getTotalCharge(){
        let result = 0;
        _.each(this._rentals, (rental)=>{
            result += rental.getCharge();
        });
        return result;
    }
    
}