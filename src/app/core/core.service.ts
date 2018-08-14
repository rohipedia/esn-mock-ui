import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CoreService {

    notificationReceived = new Subject();

    constructor() {}

    ngOnInit() {
    }
}