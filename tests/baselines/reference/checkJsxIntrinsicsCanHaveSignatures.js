//// [tests/cases/conformance/jsx/checkJsxIntrinsicsCanHaveSignatures.tsx] ////

//// [h.d.ts]
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

//// [test.tsx]
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


//// [test.js]
"use strict";
/** @jsx h */
exports.__esModule = true;
var h_1 = require("./h");
var simpleTestNumber = h_1.h("alike", { value: 42 }, 1);
var simpleTestString = h_1.h("alike", { value: "42" }, "1");
var simpleTestErr = h_1.h("alike", { value: 42 }, "1");
var books = [
    { title: '', genre: '' },
    { title: '', genre: '' },
];
var testBooks = (h_1.h("for", { items: books, "with": function (book) { return book.genre === 'scifi'; } }, function (book) { return (h_1.h("b", null, book.title)); }));
var testBooksError = h_1.h("for", { items: books, "with": function (book) { return book.genre === 'scifi'; } }, 1);
