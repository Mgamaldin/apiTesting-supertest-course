const express = require('express');
const { TestWatcher } = require('jest');
const request = require('supertest');

//Mock for API call
const app = express();

app.get('/first', (err,resp) => {
    resp.status(200).json({"ok":"response"});
})

//Test the Mock API
describe('Testing Mock API with  express' , () =>{
   
    test('Testing express App Ok Response',() =>{
        request(app)
        .get('/first')
        .end((error,resp) =>{
            expect(resp.statusCode).toBe(200);
        })
    })

    // test('NOt-Ok Response',() =>{
    //     request(app)
    //     .get('/first')
    //     .end((error,resp) =>{
    //         expect(resp.statusCode).toBe(400);
    //     })
    // })

    test('Testing Mocky Site Ok Response',(done) =>{
        request('https://run.mocky.io')
        .get('/v3/5a1774c9-49b0-4017-a71a-b035ad4b6f71')
        .expect(200,done);
    })

    // test('Testing Mocky Site NOT-Ok Response',(done) =>{
    //     request('https://run.mocky.io')
    //     .get('/v3/5a1774c9-49b0-4017-a71a-b035ad4b6f71')
    //     .expect(400,done);
    // })
})

