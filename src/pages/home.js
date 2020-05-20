import React from 'react';
import { Row, Col } from 'antd';
import useFetch from '../hooks/useFetch';
import SliderMovies from '../components/SliderMovies';
import { URL_API, API } from '../utils/constants';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default function Home() {
    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=en-US&page=1`);

    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=en-US&page=1`);

    const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=en-US&page=1`);


    //const movies = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=cdf984c843cf9ecaacac6c2cfdfc9f7f&language=en-US&page=1');

    return (
        <>
            <SliderMovies movies={newMovies}>
            </SliderMovies>
            <Row>
                <Col span={12}>
                    <MovieList title="Popular films" movies={popularMovies}>

                    </MovieList>
                </Col>
                <Col span={12}>
                    <MovieList title="Top best films" movies={topRatedMovies}>

                    </MovieList>
                </Col>
            </Row>
            <Footer></Footer>
        </>
    )

}