
export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    ageRange: number;
    salaryRange: number;
    resumeName: File;
    email: string;
    password: string;
}


export interface CommonRange {
    id: number; 
    label: string;
}