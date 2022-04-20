const request = require('supertest');



//Test the Mock API
describe('Testing Dymmy Rest APIs' , () =>{
//Using expect SuperTest Assertions

test('Testing GET APIs with expect SuperTest Assertions',(done) =>{

    request('https://reqres.in')
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200,done);
    
})


    //Using Jest Assertions
    test('Testing GET APIs Ok Response',(done) =>{

        request('https://reqres.in')
        .get('/api/users')
        .query({'page' : 2})
        .end((err,res) =>{
            expect(res.statusCode).toBe(200);
            expect(res.statusType).toBe(2);
            expect(res.body.page).toBe(2);
            expect(res.body.data[0]).toStrictEqual({
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            });
            if (err) return done(err);
            return done();
        })
    })

        //Using Jest Assertions
        test('Testing GET APIs Ok Response 2',(done) =>{

            request('https://reqres.in')
            .get('/api/users/2')
            .expect(200)
            .end((err,res) =>{
                expect(res.body.data['id']).toStrictEqual(2);
                expect(res.header['content-type']).toBe('application/json; charset=utf-8');
                //console.log(res.header);
                if (err) return done(err);
                return done();
            })
        })


        test('Testing GET APIs Ok Response 3',(done) =>{

            request('https://reqres.in')
            .get('/api/users/25')
            //.auth('my_token', { type: 'bearer' })
            .timeout({
                response: 5000,  // Wait 5 seconds for the server to start sending,
                deadline: 60000, // but allow 1 minute for the file to finish loading.
              })
            .expect(404)
            .end((err,res) =>{
                expect(res.body).toStrictEqual({});
                if (err) return done(err);
                return done();
            })
        })

})

