# Movie Search API


## Skills

- [x] Can use Express to handle an HTTP `GET`
- [x] Can define routes in Express that follow the Restful Routing pattern
- [x] Can make HTTP requests from Node using the `request-promise` Node package
- [x] Can render json in response to an HTTP request, in Express
- [x] Can effectively use Promises

## Description

Using Express, create a web server that exposes a Movie Search HTTP API which
fetches results by scraping `imdb.com`.

The api should have the following routes
```
request: GET /api/imdb/search/:query
response: {"movies": [{name: "<movie-name>", year: "<year-released>"}]}
```

## Specs

- [x] app uses Express to handle API requests
- [x] http requests to IMDB are made using [request-promise](https://github.com/request/request-promise)
- [x] use the [cheerio library](https://github.com/cheeriojs/cheerio) to extract contents from the HTML page.
- [x] response header `content-type` is `application/json`
- [x] any requests under the `/api/` namespace should render `JSON`

## Example Request

Doing a `GET` to `/api/search/findingnemo` should render something like:

```json
{
  "movies":[
    {"name": "Finding Nemo", "year": "2003"},
    {"name": "Finding Nemo", "year": "2003"},
    {"name": "Finding Nemo", "year": "2001"},
    {"name": "Finding Dory", "year": "2016"},
    {"name": "Finding Nemo Submarine Voyage", "year": "2007"},
    {"name": "Finding Nemo: Studio Tour of Pixar ", "year": "2003"},
    {"name": "Finding Nemo Attraction & Stage Show", "year": "2007"}
  ]
}
```
