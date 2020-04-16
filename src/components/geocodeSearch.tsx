const axios = require("axios").default;

export default function search(
    endpoint: string,
    source: string,
    accessToken: string,
    proximity: string,
    bbox: string,
    dtypes: any,
    query: string | number,
    callback: (arg0: any) => void
) {
    console.log('Searching')
    
    var uri =
    endpoint +
    "/geocoding/v5/" +
    source +
    "/" +
    encodeURIComponent(query) +
    ".json" +
    "?access_token=" +
    accessToken +
    (proximity ? "&proximity=" + proximity : "") +
    (bbox ? "&bbox=" + bbox : "") +
    (dtypes ? "&types=" + encodeURIComponent(dtypes) : "");

    axios.get(uri, {
        params: 
            {
                json: true,
            }    
        })
        .then(function (res: any) {
            console.log('res: ', res)
            callback(res);
        })
        .catch(function (error: any) {
        // handle error
        console.log(error);
        });
}