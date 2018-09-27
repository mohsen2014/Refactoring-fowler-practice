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

    statement(){
        let frequentRenterPoints = 0;
        let result = `Rental Record for ${this.getName()}\n`;
        _.each(this._rentals, (rental)=>{
            frequentRenterPoints += rental.getFrequentRenterPoints(); 
            result += `\t ${rental.getMovie().getTitle()} \t${rental.getCharge()} \n`;
        });
        result += `Amount owed is ${this.getTotalCharge()} \n
         You earned ${frequentRenterPoints} frequent renter points`;
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