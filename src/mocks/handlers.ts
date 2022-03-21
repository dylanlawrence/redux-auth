import {rest} from 'msw'
import {nanoid} from '@reduxjs/toolkit'

const token = nanoid()

export const handlers = [
    rest.get('/protected', (req, res, ctx) => {

        const headers = req.headers.all()

        if (headers.authorization !== `Bearer ${token}`) {
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
    rest.post('/login', (req, res, ctx) => {

        sessionStorage.setItem('is-authenticated', 'true');

        return res(
            ctx.delay(400),
            ctx.json({
                user: {
                    first_name: 'Test',
                    last_name: 'User',
                },
                token,
            })
        )
    }),
    rest.post('/logout', (req, res, ctx) => {
        const headers = req.headers.all()
        console.log(headers, req, res);
        return res(
            ctx.delay(400),
            ctx.json({msg: 'success'})
        )
    }),
]
