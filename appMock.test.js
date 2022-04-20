const app = require("./src/app");
const request = require('supertest');

describe('Test Get and Post on Mock app' , () =>{
    
    test('basic get request',() =>{
        request(app)
        .get('/course/1')
        .end((error,resp) =>{
            expect(resp.body.id).toBe('1');
        })
    })

    //Supertest passes the json object
    test('basic get request 1',() =>{
        request(app)
        .get('/course')
        .end((error,resp) =>{
            expect(resp.body.id).toBe('1');
        })
    })

    //Supertest passes the json object to string
    test('basic get request 2',() =>{
        request(app)
        .get('/course')
        .end((error,resp) =>{
            expect(resp.text).toMatch(/1/);
        })
    })

    //Supertest passes the json response code
    test('basic get request 3',() =>{
        request(app)
        .get('/course')
        .end((error,resp) =>{
            expect(resp.ok).toBeTruthy();
        })
    })

    test('Get request with query param',(done) =>{
        request(app)
        .get('/course')
        .query({'name' : 'Supertest'})
        .expect(200,{ id: '1', name: 'Supertest' },done)
    })

    test('Get request with query param 2',() =>{
        request(app)
        .get('/course')
        .query({'name' : 'Supertest'})
        .end((error,resp) =>{
            expect(resp.body).toStrictEqual({ id: '1', name: 'Supertest' });
        })
    })

    test('POST validate JSON Response',(done) =>{
        request(app)
        .post('/course')
        .send({name : 'Jest'})
        .set('Accept','application/json')
        .end((err,res) =>{
            expect(res.body.name).toStrictEqual('Jest');
            if (err) return done(err);
            return done();
        })
    })


})