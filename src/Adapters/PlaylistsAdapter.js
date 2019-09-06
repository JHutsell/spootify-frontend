import Headers from "./Headers";
import Routes from "./Routes";

export default class PlaylistsAdapter {
    static getPlaylists() {
        return fetch(Routes.user_playlists, {
            method: "GET",
            headers: Headers()
        }).then(resp => resp.json())            
    }
}
