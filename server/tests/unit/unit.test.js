process.env.NODE_ENV = "local";
const request = require("supertest");
const app = require("../../app");
// for decoding the token and easily extracting the id from the payload
// our global object for storing auth information
//Write tests here.