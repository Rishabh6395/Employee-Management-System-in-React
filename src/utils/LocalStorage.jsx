/* eslint-disable no-unused-vars */
const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design Homepage",
          description: "Create a responsive design for the homepage",
          date: "2024-11-01",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix Login Bug",
          description: "Resolve authentication issues on login",
          date: "2024-10-25",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Optimize Database",
          description: "Improve database indexing for performance",
          date: "2024-11-05",
          category: "Database"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Update User Guide",
          description: "Add latest updates to the user guide",
          date: "2024-11-02",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Code Review",
          description: "Review pull requests for the new feature",
          date: "2024-10-20",
          category: "Code Review"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Create API Documentation",
          description: "Document all endpoints in the API",
          date: "2024-10-28",
          category: "API"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Client Meeting",
          description: "Discuss project requirements with client",
          date: "2024-11-03",
          category: "Meetings"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Test New Features",
          description: "Run tests on new application features",
          date: "2024-11-04",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Develop Profile Page",
          description: "Implement front-end for profile page",
          date: "2024-10-22",
          category: "Development"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          title: "Refactor Codebase",
          description: "Improve code readability and structure",
          date: "2024-11-01",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Team Standup",
          description: "Participate in daily team standup meeting",
          date: "2024-10-27",
          category: "Meetings"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)
}