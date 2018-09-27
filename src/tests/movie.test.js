import Movie from '../classes/movie';

describe('test for movie class', ()=>{
    test('create Movie and get Title', ()=> {
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        expect(movie.getTitle()).toBe('movie 1');
    });
    test('create Movie and get price code', ()=> {
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        expect(movie.getPriceCode()).toBe(Movie.NEW_RELEASE);
    });
    test("expect has exist static propertys", () => {
        expect(Movie).toHaveProperty("NEW_RELEASE");
        expect(Movie).toHaveProperty("CHILDREN");
        expect(Movie).toHaveProperty("REGULAR");
        expect(Movie.REGULAR).toBe(2);
        expect(Movie.CHILDREN).toBe(1);
        expect(Movie.NEW_RELEASE).toBe(3);
    });
    test("expect when set new Title, getTitle return that", () => {
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        expect(movie.getTitle()).toBe("movie 1");
        movie.setTitle("new Title");
        expect(movie.getTitle()).toBe("new Title");
    });
    test("expect when set new priceCode, getPriceCode return that", () => {
        let movie = new Movie('movie 1', Movie.NEW_RELEASE);
        expect(movie.getPriceCode()).toBe(Movie.NEW_RELEASE);
        movie.setPriceCode(Movie.CHILDREN);
        expect(movie.getPriceCode()).toBe(Movie.CHILDREN);
    });
});