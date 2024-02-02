import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";

class Gallery extends Component {
    state = {
        movies: [],
        error: null,
        loading: true,
    };

    componentDidMount() {
        this.fetchMovies();
    }

    async fetchMovies() {
        try {
            const apiKey = 'b197a20c'        //www.omdbapi.com/?i=${this.props.searchValue}&apikey=b197a20c
            const url = `http://www.omdbapi.com/?i=${this.props.searchValue}&apikey=${apiKey}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Errore HTTP. Stato: ${response.status}`);
            }

            const data = await response.json();
            console.log('Risposta API:', data)
            // utilizzato metodo slice per passare solo i primi 6 film
            const firstSixMovies = data.Search.slice(0, 6);
            this.setState({ movies: firstSixMovies, loading: true });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
            console.error("Errore durante il fetch dei dati: ", error);
        }
    }

    render() {
        const { movies, error, loading } = this.state;

        return (
            <div className="dark-background">
                <h5 className="my-3 text-light text-start ms-3">Explore The {this.props.searchValue} Saga</h5>
                <Row className="g-1 text-light">
                    {error && (
                        <Alert variant="danger">
                            {/* EXTRA gestione errori: compare un alert quando qualcosa non funziona:(src: internet/Appunti prof*/}
                            <Alert.Heading>Oh no! Qualcosa è andato storto...</Alert.Heading>
                            <p>{error}</p>
                            <hr />
                            <p className="mb-0">Riprova più tardi o contattaci se il problema persiste.</p>
                        </Alert>
                    )}

                </Row>
            </div>
        );
    }
}

export default Gallery;
