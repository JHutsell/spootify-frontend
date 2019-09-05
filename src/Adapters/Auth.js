import Headers from "./Headers";
import Routes from "./Routes";

export default class Auth {
    static login(code) {
        console.log(code)
        return fetch(Routes.login, {
            method: "POST",
            headers: Headers(),
            body: JSON.stringify({ code })
        }).then(res => res.json())
    }

    // static recent_tracks(code) {
    //     return fetch(Routes.recent_tracks, {
    //         method: "POST",
    //         headers: Headers(),
    //         body: JSON.stringify({ code })
    //     }).then(res => res.json()) 
    // }
}