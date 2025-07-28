import { Parameter } from "./Parameter";

export type Service = {
    id: string;
    name: string;
<<<<<<< HEAD
    price: number;
    icon: string;
=======
    icon: string;
    price: string;
>>>>>>> b6027b7 (Change: Save price as a string)
    // optional result params
    resultParams?: string[];
    parameters?: Parameter[];
    allowedConnections: string[];
    result?: any;
    categories: string[];
    description: string;
    paramGroups?: any[];
};  



