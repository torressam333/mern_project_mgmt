"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clients = exports.projects = void 0;
const projects = [
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
exports.projects = projects;
const clients = [
    {
        id: 105,
        name: 'User 1',
        email: 'user1@example.com',
        phone: '111-111-1111',
    },
    {
        id: 104,
        name: 'User 2',
        email: 'user2@example.com',
        phone: '222-222-2222',
    },
    {
        id: 104,
        name: 'User 3',
        email: 'user3@example.com',
        phone: '333-333-3333',
    },
    {
        id: 101,
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
    {
        id: 103,
        name: 'User 6',
        email: 'user6@example.com',
        phone: '666-666-6666',
    },
    {
        id: 104,
        name: 'User 7',
        email: 'user7@example.com',
        phone: '777-777-7777',
    },
    {
        id: 104,
        name: 'User 8',
        email: 'user8@example.com',
        phone: '888-888-8888',
    },
    {
        id: 102,
        name: 'User 9',
        email: 'user9@example.com',
        phone: '999-999-9999',
    },
    {
        id: 101,
        name: 'User 10',
        email: 'user10@example.com',
        phone: '101-101-1010',
    },
];
exports.clients = clients;
