import Movie from '../classes/movie';
import Rental from '../classes/rental';
import Customer from '../classes/customer';

describe("test customer class", ()=>{
    test("create customer class and getName", () => {
        let customer = new Customer('Mohsen');
        expect(customer.getName()).toBe('Mohsen');
    });
    
    test("expext when add a rental that has added to _rentals", ()=>{
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        let rental = new Rental(movie, 2);
        customer.addRental(rental);
        expect(customer._rentals[0]).toBe(rental);
        let rental2 = new Rental(movie, 4);
        customer.addRental(rental2);
        expect(customer._rentals[0]).toBe(rental);
        expect(customer._rentals[1]).toBe(rental2);
        expect(customer._rentals[1]).not.toBe(rental);
        expect(customer._rentals.length).toBe(2);
    });
    test("expect statement method return the text with correct values",()=>{
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        let rental = new Rental(movie, 2);
        customer.addRental(rental);
        expect(customer.statement().length).toBeGreaterThan(0);
    });
    test("expect statement method return wrong text with wrong values", () => {
        let customer = new Customer();
        expect(customer.statement().replace(/\s/g,'')).toBe(`Rental Record for undefined Amount owed is 0 You earned 0 frequent renter points`.replace(/\s/g,''));
    });
    test("expect statement method return text with rented children movies", () => {
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 1', Movie.CHILDREN);
        let rental = new Rental(movie, 0);
        customer.addRental(rental);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie11.5Amountowedis1.5Youearned1frequentrenterpoints`);
        
        let rental2 = new Rental(movie, 1);
        customer.addRental(rental2);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie11.5movie11.5Amountowedis3Youearned2frequentrenterpoints`);
        
        let rental3 = new Rental(movie, 10);
        customer.addRental(rental3);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie11.5movie11.5movie112Amountowedis15Youearned3frequentrenterpoints`);
        
    });
    test("expect statement method return text with rented regular movies", () => {
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 1', Movie.REGULAR);
        let rental = new Rental(movie, 0);
        customer.addRental(rental);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie12Amountowedis2Youearned1frequentrenterpoints`);
        
        let rental2 = new Rental(movie, 1);
        customer.addRental(rental2);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie12movie12Amountowedis4Youearned2frequentrenterpoints`);
        
        let rental3 = new Rental(movie, 10);
        customer.addRental(rental3);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie12movie12movie114Amountowedis18Youearned3frequentrenterpoints`); 
    });

    test("expect statement method return text with rented new_release movies", () => {
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        let rental = new Rental(movie, 0);
        customer.addRental(rental);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie10Amountowedis0Youearned1frequentrenterpoints`);
        
        let rental2 = new Rental(movie, 1);
        customer.addRental(rental2);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie10movie13Amountowedis3Youearned2frequentrenterpoints`);
        
        let rental3 = new Rental(movie, 10);
        customer.addRental(rental3);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie10movie13movie130Amountowedis33Youearned4frequentrenterpoints`); 
    });
    test("expect statement method return text with rented all types movies", () => {
        let customer = new Customer('Mohsen');
        let movie = new Movie('movie 0', Movie.NEW_RELEASE);
        let rental = new Rental(movie, 0);
        customer.addRental(rental);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie00Amountowedis0Youearned1frequentrenterpoints`);

        let movie1 = new Movie('movie 1', Movie.CHILDREN);        
        let rental2 = new Rental(movie1, 1);
        customer.addRental(rental2);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie00movie11.5Amountowedis1.5Youearned2frequentrenterpoints`);
        
        let movie2 = new Movie('movie 2', Movie.REGULAR);
        let rental3 = new Rental(movie2, 10);
        customer.addRental(rental3);
        expect(customer.statement().replace(/\s/g,'')).toBe(`RentalRecordforMohsenmovie00movie11.5movie214Amountowedis15.5Youearned3frequentrenterpoints`); 
    });
});
