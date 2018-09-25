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

    statement(){ debugger;
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let rentals = _.clone(this._rentals);
        let result = `Rental Record for ${this.getName()}\n`;
        _.each(rentals, (rental)=>{
            let thisAmount = 0;
            switch (rental.getMovie().getPriceCode()) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if(rental.getDaysRented() > 2){
                        thisAmount += (rental.getDaysRented() - 2) * 1.5;
                    }
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount +=rental.getDaysRented() * 3;
                    break;
                case Movie.CHILDREN: 
                    thisAmount += 1.5;
                    if(rental.getDaysRented() > 2){
                        thisAmount += (rental.getDaysRented() - 3) * 1.5;
                    }
                    break;
                default:
                    break;
            }
            frequentRenterPoints++; 
            if ((rental.getMovie().getPriceCode() == Movie.NEW_RELEASE) && rental.getDaysRented() > 1) {
                frequentRenterPoints ++;
            }
            result += `\t ${rental.getMovie().getTitle()} \t${thisAmount} \n`;
            totalAmount += thisAmount;
        });
        result += `Amount owed is ${totalAmount} \n You earned ${frequentRenterPoints} frequent renter points`;
        return result;
    }
}