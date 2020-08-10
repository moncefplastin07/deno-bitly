
interface ShortenLinkSchema {
    domain?: string,
    group_guid?: string
}

class Bitly {


    // Bitly client Access Token
    private bitlyAccessToken:string;

    // Bitly API Url v4
    private bitlyApiUrl:string = 'https://api-ssl.bitly.com/v4'

    // Constructor
    constructor(bitlyAccessToken:string) {

        // Bitly client Access Token
        this.bitlyAccessToken = bitlyAccessToken
    }

    private async makeRequest(endpoint:string, init?:any) {
        // send request
        return await fetch(`${this.bitlyApiUrl}${endpoint}`, init)
    }
    async shorten(url: string, shortenLinkSchema?: ShortenLinkSchema){

        // request data
        const urlSchema = {long_url: url, ...shortenLinkSchema}

        // send request to api endponit
        const response = await this.makeRequest('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.bitlyAccessToken
            },
            body:JSON.stringify(urlSchema)

        })


        // get json response from request 
        const jsonResponse = await response.json()

        // Check if the link has been shortened
        if(response.status == 201 || response.status == 200){

            // return shorted link
            return jsonResponse.link

        }
        if(response.status == 403){
            
            // throwing Authentication error whene The entred Access token not valid 
            return await Promise.reject('Authentication error, Make sure you are entering the correct Access token')

        }
        
        // Throwing an error when an unexpected problem occurs
        return await Promise.reject('Sorry, an unexpected error occurred')

    }
}

export {Bitly}
