

interface User {
    name: string,
    type: 'employee' | 'admin',
    hireDate: Date,
    onboardingDeadline: Date

};

export const employeeTest: User = {
    name: 'Phil Kazembe',
    type: 'employee',
    hireDate: new Date('2025-07-01T17:00:00'),
    onboardingDeadline: new Date('2025-07-20T17:00:00')
};