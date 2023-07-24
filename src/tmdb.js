import { API_KEY } from "./keys_api";
const API_BASE = "https://api.themoviedb.org/3"



const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}&language=pt-BR`)

            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-BR`)

            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR`)

            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=pt-BR`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case "movie":
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                    break;
                case "tv":
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                    break;
                default:
                    info = null;

            }

        }
        return info
    }

}