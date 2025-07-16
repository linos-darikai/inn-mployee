
// Demo User Objects
export interface User {
    id: string,
    name: string,
    type: 'employee' | 'admin',
    hireDate: Date,
    onboardingDeadline: Date

};

// Create a list of tasks for each new user
export interface Task {
    id: string,
    title: string,
    description: string,
    type: 'image' | 'video' | 'document' | 'text' | 'assignment',
    parent: string, // the original section this task belongs to
    link?: string,
    status: 'todo' | 'started' | 'done'
}

// Demo Assignment 
export interface Assignment {
    user_id: string,
    task_id: string,
    status: 'done' | 'started' | 'todo'
}

export const employeeTest: User = {
    id: '0',
    name: 'Phil Kazembe',
    type: 'employee',
    hireDate: new Date('2025-07-01T17:00:00'),
    onboardingDeadline: new Date('2025-07-20T17:00:00')
};

export const adminTest: User = {
    id: '1',
    name: 'Phil Kazembe',
    type: 'admin',
    hireDate: new Date('2025-07-01T17:00:00'),
    onboardingDeadline: new Date('2025-07-20T17:00:00')
};

export const userTests: User[] = [
  {
    id: '0',
    name: 'Phil Kazembe',
    type: 'employee',
    hireDate: new Date('2025-07-01T17:00:00'),
    onboardingDeadline: new Date('2025-07-20T17:00:00')
  },
  {
    id: '1',
    name: 'Tariro Nyasha',
    type: 'admin',
    hireDate: new Date('2025-06-15T17:00:00'),
    onboardingDeadline: new Date('2025-07-10T17:00:00')
  },
  {
    id: '2',
    name: 'Chipo Moyo',
    type: 'employee',
    hireDate: new Date('2025-07-05T17:00:00'),
    onboardingDeadline: new Date('2025-07-25T17:00:00')
  },
  {
    id: '3',
    name: 'Tawanda Dube',
    type: 'employee',
    hireDate: new Date('2025-07-10T17:00:00'),
    onboardingDeadline: new Date('2025-07-30T17:00:00')
  },
  {
    id: '4',
    name: 'Ruvimbo Chari',
    type: 'admin',
    hireDate: new Date('2025-06-20T17:00:00'),
    onboardingDeadline: new Date('2025-07-15T17:00:00')
  }
];




export const taskTests: Task[] = [
  { id: 'task-001', title: 'Welcome Video', description: 'Introduction from CEO', type: 'video', parent: 'orientation', link: 'https://example.com/welcome', status: 'done' },
  { id: 'task-002', title: 'Code of Conduct', description: 'Review the company rules', type: 'document', parent: 'policy', link: 'https://example.com/conduct.pdf', status: 'done' },
  { id: 'task-003', title: 'Upload ID', description: 'Submit a valid government-issued ID', type: 'image', parent: 'kyc', status: 'todo' },
  { id: 'task-004', title: 'Company Values', description: 'Read through the company values', type: 'text', parent: 'culture', status: 'done' },
  { id: 'task-005', title: 'Intro to Team', description: 'Watch the team overview video', type: 'video', parent: 'orientation', status: 'done' },
  { id: 'task-006', title: 'Bank Details', description: 'Fill in your preferred salary account', type: 'text', parent: 'payroll', status: 'started' },
  { id: 'task-007', title: 'Emergency Contact Form', description: 'Submit contact info', type: 'document', parent: 'hr', status: 'todo' },
  { id: 'task-008', title: 'Compliance Quiz', description: 'Complete the compliance training', type: 'assignment', parent: 'compliance', link: 'https://example.com/quiz', status: 'started' },
  { id: 'task-009', title: 'Intro to Benefits', description: 'Read about your benefits', type: 'text', parent: 'hr', status: 'done' },
  { id: 'task-010', title: 'Security Briefing', description: 'Video on security protocols', type: 'video', parent: 'it', status: 'todo' },
  { id: 'task-011', title: 'Setup Workstation', description: 'Checklist for equipment setup', type: 'text', parent: 'it', status: 'started' },
  { id: 'task-012', title: 'Meet Your Buddy', description: 'Introduction to assigned mentor', type: 'text', parent: 'mentorship', status: 'done' },
  { id: 'task-013', title: 'Upload Proof of Residence', description: 'For verification purposes', type: 'image', parent: 'kyc', status: 'todo' },
  { id: 'task-014', title: 'HR Orientation Video', description: 'Overview of HR policies', type: 'video', parent: 'hr', status: 'done' },
  { id: 'task-015', title: 'Sign Contract', description: 'Review and sign the employee contract', type: 'document', parent: 'policy', status: 'started' },
  { id: 'task-016', title: 'Tax Form', description: 'Submit completed tax info', type: 'document', parent: 'payroll', status: 'todo' },
  { id: 'task-017', title: 'Create Work Email', description: 'Follow steps to create email', type: 'assignment', parent: 'it', status: 'started' },
  { id: 'task-018', title: 'Company History', description: 'Read the company timeline', type: 'text', parent: 'culture', status: 'done' },
  { id: 'task-019', title: 'First Day Schedule', description: 'Check your calendar', type: 'document', parent: 'orientation', status: 'done' },
  { id: 'task-020', title: 'Upload Profile Photo', description: 'Add photo for internal directory', type: 'image', parent: 'profile', status: 'todo' },
  { id: 'task-021', title: 'Workplace Safety', description: 'Watch and acknowledge safety video', type: 'video', parent: 'safety', status: 'started' },
  { id: 'task-022', title: 'Anti-Harassment Policy', description: 'Acknowledge policy details', type: 'document', parent: 'policy', status: 'done' },
  { id: 'task-023', title: 'Personal Bio', description: 'Write a short bio for internal portal', type: 'text', parent: 'profile', status: 'started' },
  { id: 'task-024', title: 'Submit Diploma', description: 'Upload academic qualification', type: 'image', parent: 'hr', status: 'todo' },
  { id: 'task-025', title: 'Company Org Chart', description: 'Review the structure', type: 'document', parent: 'orientation', status: 'done' },
  { id: 'task-026', title: 'Data Privacy Training', description: 'Complete assignment on GDPR', type: 'assignment', parent: 'compliance', status: 'todo' },
  { id: 'task-027', title: 'Read IT Policy', description: 'Understand dos and don’ts', type: 'document', parent: 'it', status: 'started' },
  { id: 'task-028', title: 'Feedback Form', description: 'Give feedback on onboarding process', type: 'assignment', parent: 'hr', status: 'todo' },
  { id: 'task-029', title: 'Slack Setup', description: 'Join workspace and set up profile', type: 'assignment', parent: 'it', status: 'done' },
  { id: 'task-030', title: 'Wellness Guide', description: 'Resources for employee wellbeing', type: 'text', parent: 'culture', status: 'done' }
];

export const assignmentTests: Assignment[] = [
  // Phil Kazembe (employee)
  { user_id: '0', task_id: 'task-001', status: 'done' },
  { user_id: '0', task_id: 'task-002', status: 'done' },
  { user_id: '0', task_id: 'task-003', status: 'todo' },
  { user_id: '0', task_id: 'task-004', status: 'done' },
  { user_id: '0', task_id: 'task-006', status: 'started' },

  // Tariro Nyasha (admin)
  { user_id: '1', task_id: 'task-005', status: 'done' },
  { user_id: '1', task_id: 'task-010', status: 'todo' },
  { user_id: '1', task_id: 'task-011', status: 'started' },
  { user_id: '1', task_id: 'task-014', status: 'done' },
  { user_id: '1', task_id: 'task-027', status: 'started' },

  // Chipo Moyo (employee)
  { user_id: '2', task_id: 'task-008', status: 'started' },
  { user_id: '2', task_id: 'task-013', status: 'todo' },
  { user_id: '2', task_id: 'task-018', status: 'done' },
  { user_id: '2', task_id: 'task-023', status: 'started' },
  { user_id: '2', task_id: 'task-025', status: 'done' },

  // Tawanda Dube (employee)
  { user_id: '3', task_id: 'task-017', status: 'started' },
  { user_id: '3', task_id: 'task-016', status: 'todo' },
  { user_id: '3', task_id: 'task-026', status: 'todo' },
  { user_id: '3', task_id: 'task-029', status: 'done' },
  { user_id: '3', task_id: 'task-012', status: 'done' },

  // Ruvimbo Chari (admin)
  { user_id: '4', task_id: 'task-022', status: 'done' },
  { user_id: '4', task_id: 'task-015', status: 'started' },
  { user_id: '4', task_id: 'task-028', status: 'todo' },
  { user_id: '4', task_id: 'task-030', status: 'done' },
  { user_id: '4', task_id: 'task-019', status: 'done' }
];

// mock data
export interface SimpleUser {
  name: string;
  email: string;
  task1: 'done' | 'in progress' | 'todo';
  task2: 'done' | 'in progress' | 'todo';
  task3: 'done' | 'in progress' | 'todo';
  task4: 'done' | 'in progress' | 'todo';
  task5: 'done' | 'in progress' | 'todo';
}

export const mockUsers: SimpleUser[] = [
  {
    name: 'Phil Kazembe',
    email: 'phil@innbucks.co.zw',
    task1: 'done',
    task2: 'in progress',
    task3: 'todo',
    task4: 'done',
    task5: 'in progress',
  },
  {
    name: 'Tariro Nyasha',
    email: 'tariro@innbucks.co.zw',
    task1: 'todo',
    task2: 'done',
    task3: 'in progress',
    task4: 'todo',
    task5: 'done',
  },
  {
    name: 'Tawanda Dube',
    email: 'tawanda@innbucks.co.zw',
    task1: 'in progress',
    task2: 'in progress',
    task3: 'done',
    task4: 'done',
    task5: 'todo',
  },
  {
    name: 'Ruvimbo Chari',
    email: 'ruvimbo@innbucks.co.zw',
    task1: 'done',
    task2: 'done',
    task3: 'done',
    task4: 'in progress',
    task5: 'todo',
  },
  {
    name: 'Chipo Moyo',
    email: 'chipo@innbucks.co.zw',
    task1: 'todo',
    task2: 'todo',
    task3: 'todo',
    task4: 'in progress',
    task5: 'done',
  }
];
