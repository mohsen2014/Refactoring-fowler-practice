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
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let rentals = _.clone(this._rentals);
        let result = `Rental Record for ${this.getName()}\n`;
        _.each(rentals, (rental)=>{
            frequentRenterPoints += rental.getFrequentRenterPoints(); 
            result += `\t ${rental.getMovie().getTitle()} \t${rental.getCharge()} \n`;
            totalAmount += rental.getCharge();
        });
        result += `Amount owed is ${totalAmount} \n You earned ${frequentRenterPoints} frequent renter points`;
        return result;
    }

    
}