export default interface SingleMovieTest {
    poster_path: string | null;
    release_date: string;
    title: string;
    id: number;
}

export default interface MovieTest {
    page: number;
    results: SingleMovieTest[];
}
