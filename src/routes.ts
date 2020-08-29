import { Request, Response} from 'express'
import createUser  from './services/CreateUser'

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Miguel',
        email: 'miguel@miguel',
        password: '12345',
        techs: [
            'Node.js', 
            'ReactJS', 
            'React Native',
            { title: 'Javascript', experience: 100}
        ]
    })

    return response.json({ message: 'Hello World'})
}