"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var SearchCharacters = (function () {
    function SearchCharacters() {
    }
    SearchCharacters.prototype.getCharacterIds = function (stringToSearch) {
        return new Promise(function (resolve, reject) {
            axios_1.default.get("https://esi.tech.ccp.is/latest/search/?categories=character&datasource=tranquility&language=en-us&search=" + stringToSearch + "&strict=false")
                .then(function (res) { return resolve(res.data.character); })
                .catch(reject);
        });
    };
    SearchCharacters.prototype.getCharacterInfoById = function (id) {
        return new Promise(function (resolve, reject) {
            axios_1.default.get("https://esi.tech.ccp.is/latest/characters/" + id + "/?datasource=tranquility")
                .then(function (res) { resolve(res.data); })
                .catch(reject);
        });
    };
    return SearchCharacters;
}());
exports.SearchCharacters = SearchCharacters;
