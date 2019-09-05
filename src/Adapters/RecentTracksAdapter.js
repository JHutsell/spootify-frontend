import Headers from "./Headers";
import Routes from "./Routes";

export default class RecentTracksAdapter {
    static getRecentTracks() {
        return fetch(Routes.recent_tracks, 
            {headers: Headers()}
            // body: JSON.stringify({ code })
        ).then(resp => resp.json())
            .then(console.log)
        
    }
}