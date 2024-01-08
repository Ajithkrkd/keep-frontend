import {v4 as uuidv4} from 'uuid'

const mockData =[
    {
        id     :  uuidv4(),
        title  : 'To do ',
        tasks  : [
            {
                id: uuidv4(),
                title: 'learn javascript'
            },
            {
                id: uuidv4(),
                title: 'learn react'
            },
            {
                id: uuidv4(),
                title: 'learn java'
            },
            {
                id: uuidv4(),
                title: 'learn python3'
            },
        ]
    },
    {
        id     :  uuidv4(),
        title  : 'In Progress ',
        tasks  : [
            {
                id: uuidv4(),
                title: 'learn CSS'
            },
            {
                id: uuidv4(),
                title: 'learn HTML'
            },
           
        ]
    },
    {
        id     :  uuidv4(),
        title  : 'Done ',
        tasks  : [
            {
                id: uuidv4(),
                title: 'learn Jquery'
            },
            {
                id: uuidv4(),
                title: 'learn .NET'
            },
           
        ]
    }
]

export default mockData;