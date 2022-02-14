export interface ICategory {
    title: string;
}

export interface ITopic {
    title: string;
    categories?: ICategory[];
}

export interface IArticle {
    id: number;
    title: string;
    category: string;
    imgPath?: string;
    description: string;
    content: string;
    position?: string;
}

export interface IArticles {
    items?: IArticle[];
}