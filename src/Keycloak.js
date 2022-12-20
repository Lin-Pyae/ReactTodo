import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "Todo",
    clientId: "todolist",
});

export default keycloak;