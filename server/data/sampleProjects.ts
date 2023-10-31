type ProjectStatus = 'In Progress' | 'Complete' | 'Not Started';

type Project = {
  id: number;
  clientId: number;
  name: string;
  description: string;
  status: ProjectStatus;
};

const projects: Array<Project> = [
  {
    id: 1,
    clientId: 101,
    name: 'Project 1',
    description: 'This is the first project',
    status: 'In Progress',
  },
  {
    id: 2,
    clientId: 102,
    name: 'Project 2',
    description: 'A description of the second project',
    status: 'Complete',
  },
  {
    id: 3,
    clientId: 103,
    name: 'Project 3',
    description: "A project that hasn't started yet",
    status: 'Not Started',
  },
  {
    id: 4,
    clientId: 104,
    name: 'Project 4',
    description: 'A description of the fourth project',
    status: 'In Progress',
  },
  {
    id: 5,
    clientId: 105,
    name: 'Project 5',
    description: "A project that hasn't started yet",
    status: 'Not Started',
  },
];

type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const clients: Client[] = [
  {
    id: 101,
    name: 'User 1',
    email: 'user1@example.com',
    phone: '111-111-1111',
  },
  {
    id: 102,
    name: 'User 2',
    email: 'user2@example.com',
    phone: '222-222-2222',
  },
  {
    id: 103,
    name: 'User 3',
    email: 'user3@example.com',
    phone: '333-333-3333',
  },
  {
    id: 104,
    name: 'User 4',
    email: 'user4@example.com',
    phone: '444-444-4444',
  },
  {
    id: 105,
    name: 'User 5',
    email: 'user5@example.com',
    phone: '555-555-5555',
  },
];

export { projects, clients };
