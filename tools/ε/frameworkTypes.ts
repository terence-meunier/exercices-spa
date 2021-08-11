// Ecrivez le type des clés d'un élément
export interface Element {
    tagName: string;
    attributes: Attributes[];
    children: Element[];
};

export interface Attributes {
    [key : string]: string;
}