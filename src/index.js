import './index.scss';
import Customer from './classes/customer';
import Rental from './classes/rental';
import Movie from './classes/movie';
{
    let customer = new Customer('Ali');
    let movie = new Movie('movie 1', Movie.NEW_RELEASE);
    let rental =new Rental(movie, 3);
    customer.addRental(rental);
    console.log(customer.statement());
}
