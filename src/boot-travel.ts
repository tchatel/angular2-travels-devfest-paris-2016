import {bootstrap}    from 'angular2/platform/browser'
import {provide} from "angular2/core";

import {TravelApp} from "./travel-app";
import {TravelManager} from "./travel-manager";
import {SampleTravelManager} from "./travel-manager";


bootstrap(TravelApp, [
    provide(TravelManager, {useClass: SampleTravelManager})
]);
