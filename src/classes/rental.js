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
}