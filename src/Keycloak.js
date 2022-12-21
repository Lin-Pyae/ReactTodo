import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "Todo",
    clientId: "todolist",
});

// keycloak.init({
//     onLoad: 'login-required',
//     redirectUri: 'http://localhost:3000/home'
//   }).then(authenticated => {
//     if (authenticated) {
//         console.log("User is authenticated")
//     } else {
//         console.log("User's authentication fail")

//     }
//   });

export default keycloak;