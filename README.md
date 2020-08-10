# deno-bitly
is simple module for deno It helps us to make short url with Bitly

# Usage
### `Firstival`: the module require `--allow-net` flag 
#### like this 
***$*** ``` deno run --allow-net xxx.ts ```
### Shorten link.
```js
import { Bitly } from "https://deno.land/x/bitly/mod.ts";

// Create Bitly instance and pass the bit ly access token for Authorization
const bitlyClinet = new  Bitly('<Access Token>')

// and you can Create new short link with the code below (pass the long url as 1st argument) 
const shortLink = await bitlyClinet.shorten('https://github.com/moncefplastin07')

console.log(shortLink) // https://bit.ly/2PHBRi5

```

# The options
### custom domain:
```js

let shortLinkWithCustomDomain = await bitlyClient.shorten('https://github.com/moncefplastin07',{
    domain:'custom-domain.com'
});

console.log(shortLinkWithCustomDomain) // http://custom-domain.com/<genreated slug>

```

### with some way you can add `group_guid` on the option (This feature must be available on your bitly account for it to work ):
```js

let shortLinkWithGroup_guid = await bitlyClient.shorten('https://github.com/moncefplastin07',{
    group_guid:'groupu_guid'
});

console.log(shortLinkWithGroup_guid) // https://bit.ly/<link-id>

```
