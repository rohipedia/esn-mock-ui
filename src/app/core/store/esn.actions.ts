import { Action } from '@ngrx/store';

export const TRIGGER_VALIDATION = 'TRIGGER_VALIDATION';
export const REFRESH = 'REFRESH';

export class TriggerValidation implements Action {
    readonly type = TRIGGER_VALIDATION;

    constructor(public payload: any) {}
}

export class Refresh implements Action {
    readonly type = REFRESH;

    constructor(public payload: any) {}
}

export type EsnValidationActions = TriggerValidation | Refresh;