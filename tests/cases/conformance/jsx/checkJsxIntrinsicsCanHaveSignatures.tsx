// @jsx: react
// @strict: true
// @esModuleInterop: true

// @filename: h.d.ts
export namespace h {
    namespace JSX {
        interface Element {
            props?: any;
        }

        interface IntrinsicElements {
            alike: <T>(props: {
                value: T,
                children?: T
            }) => Element;

            for: <T>(props: {
                items: T[],
                with?: (item: T) => boolean,
                children?: (item: T) => Element | Element[]
            }) => Element;

            b: { children: string }
        }

        interface ElementAttributesProperty {
            props: any;
        }

        interface ElementChildrenAttribute {
            children: any;
        }
    }
}

export declare function h<T>(tag: any, props: T, ...children: h.JSX.Element[]): h.JSX.Element;

// @filename:test.tsx

/** @jsx h */

import { h } from './h';

const simpleTestNumber = <alike value={42}>{1}</alike>;
const simpleTestString = <alike value="42">1</alike>;
const simpleTestErr = <alike value={42}>{"1"}</alike>;

interface Book {
    title: string;
    genre: string;
}

const books: Book[] = [
    { title: '', genre: ''},
    { title: '', genre: ''},
]

const testBooks = (
    <for items={books} with={book => book.genre === 'scifi'}>
    { book => (
        <b>{book.title}</b>
    ) }
    </for>
);

const testBooksError = <for items={books} with={book => book.genre === 'scifi'}>{1}</for>;
