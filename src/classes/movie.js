class Movie{
    constructor(title, priceCode){
        this._title = title;
        this._priceCode = priceCode;
    }

    getPriceCode(){
        return this._priceCode;
    }

    setPriceCode(proceCode){
        this._priceCode = priceCode;
    }
    getTitle(){
        return this._title;
    }
    setTitle(title){
        this._title = title;
    }
};

Movie.CHILDREN = 1;
Movie.REGULAR = 2;
Movie.NEW_RELEASE = 3;

module.exports = Movie;