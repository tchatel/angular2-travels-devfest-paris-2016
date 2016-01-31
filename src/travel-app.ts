import {Component} from "angular2/core";

import {TravelList} from "./travel-list";


@Component({
    selector: 'travel-app',
    template: `
        <h1>Angular 2 : Sample Travels Application</h1>
        <travel-list></travel-list>
    `,
    directives: [TravelList]
})
export class TravelApp {
    constructor() {
    }
}

