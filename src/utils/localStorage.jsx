const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "taskDescription": "Complete the report by end of the day.",
                "taskDate": "2024-12-07",
                "category": "Work"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "taskDescription": "Fix bugs in the application.",
                "taskDate": "2024-12-06",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "title": "Task 3",
                "taskDescription": "Update the website design.",
                "taskDate": "2024-12-05",
                "category": "Design"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "taskDescription": "Write project documentation.",
                "taskDate": "2024-12-07",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "taskDescription": "Deploy the application to the production server.",
                "taskDate": "2024-12-06",
                "category": "Deployment"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 3",
                "taskDescription": "Create a new API endpoint.",
                "taskDate": "2024-12-05",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "taskDescription": "Conduct team meeting.",
                "taskDate": "2024-12-07",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "taskDescription": "Complete project analysis.",
                "taskDate": "2024-12-06",
                "category": "Analysis"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 3",
                "taskDescription": "Prepare budget report.",
                "taskDate": "2024-12-05",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "taskDescription": "Develop new feature for app.",
                "taskDate": "2024-12-07",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "taskDescription": "Review pull requests.",
                "taskDate": "2024-12-06",
                "category": "Code Review"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "title": "Task 3",
                "taskDescription": "Update the user interface.",
                "taskDate": "2024-12-05",
                "category": "UI/UX"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "taskDescription": "Fix broken links on the website.",
                "taskDate": "2024-12-07",
                "category": "Maintenance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "taskDescription": "Test new features in the application.",
                "taskDate": "2024-12-06",
                "category": "Testing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 3",
                "taskDescription": "Analyze website traffic and performance.",
                "taskDate": "2024-12-05",
                "category": "Analytics"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
}