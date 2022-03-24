import {rest, RestRequest} from 'msw'
import {nanoid} from '@reduxjs/toolkit'
import {mockUsers} from "./userMocks";

const token = nanoid()


interface LoginRestRequest extends RestRequest {
    body: {
        username: string
        password: string
    }
}

export const handlers = [

    rest.post('/login', (req: LoginRestRequest, res, ctx) => {

        const user = mockUsers.find(x => x.username === req?.body?.username) || false

        if(user){
            sessionStorage.setItem('is-authenticated', 'true')
            sessionStorage.setItem('TOKEN', token)
            return res(
                ctx.delay(400),
                ctx.json({
                    user: user,
                    token,
                })
            )
        }

        return res(
            ctx.status(403),
            ctx.json({ message: 'Failed to authenticate!' }),
        )
    }),
    rest.post('/logout', (req, res, ctx) => {

        const headers = req.headers.all()

        sessionStorage.setItem('is-authenticated', 'false');
        sessionStorage.setItem('TOKEN', 'NOPE');

        //console.info('LOGOUT', headers, req, res);

        return res(
            ctx.delay(400),
            ctx.json({msg: 'success'})
        )
    }),
    rest.get('/user/:uid', (req, res, ctx) => {

        const headers = req.headers.all()
        console.log('USER', headers, req, res);

        return res(
            ctx.delay(400),
            ctx.json({msg: 'success'})
        )
    }),

    rest.get('/protected', (req, res, ctx) => {

        const headers = req.headers.all()
        const sess_tok = sessionStorage.getItem('TOKEN');

        if (headers.authorization !== `Bearer ${sess_tok}`) {
            return res(
                ctx.json({message: 'Please login'}),
                ctx.status(401)
            )
        }
        return res(
            ctx.json({
                message: 'Request success!',
            })
        )
    }),
]
