# NgJwtClient


## Summary
Modern & simple Angular implementation of a JwT client.

I needed a basic client for this and everything I found online was unsuitable.  Maybe this will help save some one some time.

## Typical Implementation Details

There are several good and bad ways to implement this, and lots of opinions about them.  This simple examples receives a token and keeps it in memory until the SPA shuts down.

1. Front end determines authentication is needed and puts up a login page
2. Server validates the credential & sends back a Bearer token
3. Subsequent API calls by the client include that as a token of their credence

## Features

#### UI
![Example Image](/Selection_010.png)

#### Including the token in subsequent API calls is as simple as adding a few lines to the Service
```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@/service/auth.service';
```
...

```
@Injectable({providedIn: 'root'})
export class FacService {
    static base = "http://127.0.0.1:8000";
    constructor(
        private http: HttpClient,
        private authSvc: AuthService
    ) {
        const token = this.authSvc.getToken();
        this.header = new HttpHeaders ({
            'Authorization': `Bearer ${token?.access_token}`,
            'Content-Type': 'application/json',
        })
    }
    private header: HttpHeaders;

    ...

```
