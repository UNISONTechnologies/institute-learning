export interface Course {
    id: string;
    name: string;
    description: string;
}

export interface Unit {
    id: number;
    name: string;
    subtitle?: string;
    description: string;
    filename: string;
    latex?: boolean;
}
