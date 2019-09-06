import Headers from "./Headers";
import Routes from "./Routes";

export default class CurrentSongAdapter {
    static getCurrentSong() {
        return fetch(Routes.current_song, {
            method: "GET",
            headers: Headers()
        }).then(resp => resp.json())            
    }
}