import Headers from "./Headers";
import Routes from "./Routes";

export default class RecentTracksAdapter {
    static getRecentTracks() {
        return fetch(Routes.recent_tracks, { 
            method: "GET",
            headers: Headers()
        }).then(resp => resp.json())
            .then(console.log)
        
    }
}