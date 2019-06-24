export class AuthService {
  logged = false;
  
  isAuth() {
    const promice = new Promise((res, rej) => {
      setTimeout(() => {
        res(this.logged);
      }, 2000);
    });

    return promice;
  }

  login() {
    this.logged = true;
    alert('Your Login');
  }

  logout() {
    this.logged = false;
    alert('Your Logout');
  }
}