import Keycloak from "keycloak-js";
const cloak = new Keycloak({
    url: "http://localhost:8080/auth/",
    realm: "Todo",
    clientId: "todolist",
});

export default cloak;