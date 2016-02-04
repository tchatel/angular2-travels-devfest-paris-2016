import {Component} from "angular2/core";

import { Travel } from './travel'
import { TravelShow } from './travel-show'


@Component({
    selector: 'travel-list',
    template: `
        <style>
            table#travel-list img {
                width: 60px;
                height: 45px;
            }
            table#travel-list .old {
                color: brown;
            }
        </style>
        <h2>Travels List:</h2>
        <table class="pure-table pure-table-horizontal" id="travel-list">
            <thead>
                <tr>
                    <td>Picture</td><td>Place</td><td>Country</td><td>Year</td><td></td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#travel of travels">
                    <td><img src="img/{{travel.img || 'none.jpg'}}"/></td>
                    <td [ngClass]="{old: travel.isOld()}">{{travel.place}}</td>
                    <td>{{travel.country}}</td>
                    <td>{{travel.year}}</td>
                    <td>
                        <a href (click)="select(travel)" class="pure-button">
                            <i class="fa fa-caret-square-o-down"></i> Show
                        </a>
                        <a href (click)="remove(travel)" class="pure-button">
                            <i class="fa fa-trash-o"></i> Remove
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <travel-show [travel]="selectedTravel"></travel-show>
    `,
    directives: [TravelShow]
})
export class TravelList {
    travels: Travel[];
    selectedTravel: Travel;
    constructor() {
        this.travels = [
            new Travel("SF2015", "San Francisco", "USA", 2015, "sanfrancisco.jpg"),
            new Travel("NA2014", "Nantes", "France", 2014, "nantes.jpg"),
            new Travel("BX2014", "Bruxelles", "Belgique", 2014, "bruxelles.jpg"),
            new Travel("YO2014", "Yosemite", "USA", 2014, "yosemite.jpg"),
            new Travel("BT2013", "Bretagne", "France", 2013, "bretagne.jpg")
        ];
    }
    select(travel: Travel) {
        this.selectedTravel = travel;
        return false;
    }
    remove(travel: Travel) {
        let index = this.travels.indexOf(travel);
        this.travels.splice(index, 1);
        return false;
    }
}