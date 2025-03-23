# NgJwtClient


## Summary
Modern & simple Angular implementation of a JwT client.

I needed a basic client for this and everything I found online was unsuitable.  Maybe this will help save some one some time.

## Typical Implementation Details

There are several good and bad ways to implement this, and lots of opinions about them.  This simple examples receives a token and keeps it in memory until the SPA shuts down.

1. Front end determines authentication is needed and puts up a login page
2. Server validates the page & sends back a Bearer token
3. Subsequent API calls by the client include that as a token of their credence