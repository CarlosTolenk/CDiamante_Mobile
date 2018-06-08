"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("../../firebase");
var firebase_1 = require("../../firebase");
var firestore;
(function (firestore) {
    var Firestore = /** @class */ (function () {
        function Firestore() {
        }
        Firestore.prototype.collection = function (collectionPath) {
            return firebase.firestore.collection(collectionPath);
        };
        Firestore.prototype.FieldValue = function () {
            return {
                serverTimestamp: function () { return firebase_1.FIRESTORE_SERVER_TS; }
            };
        };
        return Firestore;
    }());
    firestore.Firestore = Firestore;
})(firestore = exports.firestore || (exports.firestore = {}));
