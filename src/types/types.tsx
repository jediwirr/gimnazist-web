export interface ICategory {
    title: string;
}

export interface ITopic {
    title: string;
    categories?: ICategory[];
}