import Headers from "./Headers";
import Routes from "./Routes";
import RecentTracksAdapter from './RecentTracksAdapter';

export default class ReccoAdapter {
    static getReccoTracks() {
        RecentTracksAdapter.getRecentTracks()
            .then(data => {
                return fetch(`https://git.heroku.com/spootify.git/getReccos/${data[0].track.id}/${data[1].track.id}/${data[2].track.id}/${data[3].track.id}/${data[4].track.id}`, {
                    method: "POST",
                    headers: Headers()
                }).then(resp => resp.json())
                debugger
            // .then(data => {
            //         this.setState({
            //           reccoTracks: data
            //         })
            //       })
            
        })  
    }
}