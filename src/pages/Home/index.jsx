
import React, { useState, useEffect } from "react";
import tmdb from "../../tmdb";
import MovieRow from "../../components/MovieRow/index.jsx";
import '../../App.css';
import Header from "../../components/Header/index.jsx";
import { redirect } from "react-router-dom";


import FeatureMovie from "../../components/FeatureMovie/index.jsx";



export default () => {

    // if (localStorage.getItem("token") == null) {
    //     return redirect("/login");

    // }


    const [movieList, setMovieList] = useState([]);
    const [feautureData, setFeautureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);



    useEffect(() => {
        const loadAll = async () => {

            let list = await tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i => i.slug === "originals");
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");

            setFeautureData(chosenInfo);
        }
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, [])


    return (

        <div className="page">


            <Header black={blackHeader} />

            {feautureData &&
                <FeatureMovie item={feautureData} />}


            <section className="lists">
                {movieList.map((item, key) => (
                    <div>

                        <MovieRow title={item.title} items={item.items} key={key} />
                    </div>
                ))}
            </section>
            <footer>
                Feito com <span role="img" area-label="coração">❤️ por <a href="https://github.com/lucasedson">Lucas Edson</a></span>
                <p>Direitos de imagem da <a href="https://netflix.com/">Netflix</a></p>
                <p>Dados pegos do <a href="https://www.themoviedb.org/">TMDB</a></p>

            </footer>
        </div>
    )
}
