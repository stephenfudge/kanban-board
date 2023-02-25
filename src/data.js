import { v4 as uuidv4 } from 'uuid'

const initialData = [
    {
        id: uuidv4(),
        title: 'To Do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Task 1'
            },
            {
                id: uuidv4(),
                title: 'Task 2'
            },
            {
                id: uuidv4(),
                title: 'Task 3'
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'In Progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Task 4'
            },
            {
                id: uuidv4(),
                title: 'Task 5'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Task 6'
            }
        ]
    }
]

export default initialData;