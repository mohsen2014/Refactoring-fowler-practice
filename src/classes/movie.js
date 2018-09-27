class Movie{
    constructor(title, priceCode){
        this._title = title;
        this._priceCode = priceCode;
    }

    getPriceCode(){
        return this._priceCode;
    }

    setPriceCode(priceCode){
        this._priceCode = priceCode;
    }
    getTitle(){
        return this._title;
    }
    setTitle(title){
        this._title = title;
    }
    getCharge(daysRented){
        let result = 0;
        switch (this.getPriceCode()) {
            case Movie.REGULAR:
                result += 2;
                if(daysRented > 2){
                    result += (daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                result += daysRented * 3;
                break;
            case Movie.CHILDREN: 
                result += 1.5;
                if(daysRented > 2){
                    result += (daysRented - 3) * 1.5;
                }
                break;
        }
        return result;
    }
};

Movie.CHILDREN = 1;
Movie.REGULAR = 2;
Movie.NEW_RELEASE = 3;

module.exports = Movie;