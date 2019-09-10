import Headers from "./Headers";
import Routes from "./Routes";

export default class TopArtistsAdapter {
    static getTopArtists() {
        return fetch(Routes.top_artists, 
            {headers: Headers()}
        ).then(resp => resp.json())
    }
}