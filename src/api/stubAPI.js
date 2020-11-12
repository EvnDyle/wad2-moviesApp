class StubAPI {
    constructor() {
        this.favoriteMovies = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
    }

    getAll() {
        return this.favoriteMovies;
    }
}

export default new StubAPI();