import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'jjj-login-page',
    imports: [FormsModule],
    template: `
<div class="wrapper">
    <div class="card">
        <h4>Please provide your credentials</h4>
        <form (ngSubmit)="onSubmit()">
            <label for="username">Username:</label>
            <input type="text" id="username" [(ngModel)]="username" name="username" required autocomplete="username">
            <label for="password">Password:</label>
            <input type="password" id="password" [(ngModel)]="password" name="password" required autocomplete="current-password">
            <button type="submit">Login</button>
        </form>
        <div class="error">{{error}}</div>
    </div>
</div>
    `,
    styles: [`
h4 {
    margin-top: 1rem;
    font-weight: 600;
}
div.wrapper, div.card, form {
    display: flex;
    flex-direction: column;
}
div.wrapper, form {
    justify-content: center;
}
div.wrapper {
    align-items: center;
    height: 100vh;
}
div.card {
    align-items: center;
    justify-content: space-evenly;
    height: 20rem;
    width: 20rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 0.5rem;
}

button {
    max-width: 6rem;
    margin-left: auto;
}
label {
    font-size: small;
}
input {
    margin-bottom: 1.5rem;
}
div.error {
    font-size: small;
    height: 1rem;
    color: red;
}
`]
})
export class LoginComponent {
    constructor(private svc: AuthService, private router: Router) { }

    username = '';
    password = '';
    checking = false;
    error = '';

    onSubmit() {
        if (this.username == '') {
            return false
        }
        if (this.password == '') {
            return false
        }

        this.checking = true;
        this.svc.authenticate(this.username, this.password).subscribe({
            next: data => {
                if (data.access_token) {
                    this.checking = false;
                    this.svc.setToken(data);
                    this.router.navigate(['/trusted']);
                    return
                }
            },
            error: err => {
                console.log(err);
                this.error = err.error.detail ? err.error.detail : err.error;
            }

        })
        return true
    }
}