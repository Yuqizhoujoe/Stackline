export interface Product {
    name: string;
    description: string;
    tags: string[];
    image: string;
}

export interface Sale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
    month?: string;
}
