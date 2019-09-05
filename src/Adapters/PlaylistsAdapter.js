import Headers from "./Headers";
import Routes from "./Routes";

export default class PlaylistsAdapter {
    static getPlaylists() {
        return fetch(Routes.playlists, 
            {headers: Headers()}
            // body: JSON.stringify({ code })
        ).then(resp => resp.json())
            .then(console.log)
    }
}