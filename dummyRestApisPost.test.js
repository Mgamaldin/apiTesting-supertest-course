const request = require('supertest');
jest.setTimeout(5000);



//Test the Mock API
describe('Testing Dymmy Rest APIs' , () =>{

// test('Testing POST APIs',(done) =>{
//     request('https://request.in')
//     .post('/api/users')
//     .send({
//         "name": "Gimmy",
//         "job": "leader"})
//     .set('Content-Type', 'application/json')
//     .expect(201,done);
// })

// test('Testing PUT APIs',(done) =>{
//     request('https://request.in')
//     .put('/api/users')
//     .send({"name": "Gimmy"})
//     .set('Content-Type', 'application/json')
//     .expect(200)
//     .expect({
//         "name": "morpheus",
//         "job": "zion resident",
//         "updatedAt": "2021-08-04T20:23:07.877Z"
//     },done);
// })

test('Testing POST APIs',(done) =>{
    request('https://reqres.in')
    .post('/api/users')
    .send({
        "name": "Gimmy",
        "job": "leader"})
    .set('Content-Type', 'application/json')
    .end((err,res) =>{
        expect(res.status).toBe(201);
        expect(res.statusCode).toBe(201);
        console.log(res.body);
        if (err) return done(err);
        return done();
    });
})

test('Testing PUT APIs',(done) =>{
    request('https://reqres.in')
    .put('/api/users')
    .send({"name": "Gimmy"})
    .set('Content-Type', 'application/json')
    .expect(200)
    .end((err,res) =>{
    expect(res.body.name).toBe("Gimmy")
    console.log(res.body);
    if (err) return done(err);
    return done();
});
})



})

