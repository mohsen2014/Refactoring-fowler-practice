import Movie from './movie';
module.exports = class {
    constructor(movie, daysRented){
        this._movie = movie;
        this._daysRented = daysRented;
    }
    getDaysRented(){
        return this._daysRented;
    }
    getMovie(){
        return this._movie;
    }
    
    getFrequentRenterPoints(){
        if ((this.getMovie().getPriceCode() == Movie.NEW_RELEASE) && this.getDaysRented() > 1) {
            return 2;
        }
        return 1;
    }
}