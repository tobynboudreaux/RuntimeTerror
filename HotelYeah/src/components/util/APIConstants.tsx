export const USERNAME = 'revature';
export const PASSWORD = '$2a$04$VL1atMwHZONSNJQWdSPexe1rRqgLMzU4mgIMBqcqup7VC8odLfjAq';

//charles's ec2 with current cors fixes
export const BASE_URL = 'http://3.17.206.158:8080/hotelbooking-1.0.0/';

//new url added in ruben's merge
// export const BASE_URL = 'http://18.188.231.212:8080/hotelbooking-1.0.0/';

//ruben's old url
// export const BASE_URL = 'http://3.128.156.231:8080/hotelbooking-1.0.0/';

let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(USERNAME + ":" + PASSWORD));

export const HEADERS = headers;
