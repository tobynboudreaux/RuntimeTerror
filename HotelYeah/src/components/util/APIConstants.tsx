export const USERNAME = 'revature';
export const PASSWORD = '$2a$04$VL1atMwHZONSNJQWdSPexe1rRqgLMzU4mgIMBqcqup7VC8odLfjAq';
export const BASE_URL = 'http://18.188.231.212:8080/hotelbooking-1.0.0/';

let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(USERNAME + ":" + PASSWORD));

export const HEADERS = headers;
