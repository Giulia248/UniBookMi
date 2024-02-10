
// WEB APP environment

/*
ALL configs
    test -> YES logs, NO server
    preprod -> YES logs, YES server
    prod -> NO logs, YES server

*/

const config = "null";

function getEnvironment(){
    return config;
}




