import Rental from '../classes/rental';
import Movie from '../classes/movie';

// beforeEach(()=>{

// });

describe('test for rental class', ()=>{
    test("expect create rental class and getDaysRental",() => {
        let movie = new Movie("Movie 1", Movie.NEW_RELEASE);
        let rental = new Rental(movie, 1);
        expect(rental.getDaysRented()).toBe(1);
    });
    test("expect create rental class and getMovie",() => {
        let movie = new Movie("Movie 1", Movie.NEW_RELEASE);
        let rental = new Rental(movie, 1);
        expect(rental.getMovie()).toBe(movie);
        movie.setTitle('Movie 2')
        expect(rental.getMovie()).toBe(movie);
    });
    test("expect create rental class with null movie",() => {
        let rental = new Rental(null, 1);
        expect(rental.getDaysRented()).toBe(1);
        expect(rental.getMovie()).toBeNull();
    });
    test("expect create rental class with undefined movie",() => {
        let rental = new Rental(undefined, 1);
        expect(rental.getDaysRented()).toBe(1);
        expect(rental.getMovie()).toBeUndefined();
    });
});