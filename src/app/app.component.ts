import { Component } from '@angular/core';
import { FormCheckbox } from './dynamic-form/model/form-checkbox';
import { FormDropdown } from './dynamic-form/model/form-dropdown';
import { FormInputBase } from './dynamic-form/model/form-input-base';
import { FormTextbox } from './dynamic-form/model/form-textbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    testForm: FormInputBase<string | boolean>[] = [
        new FormTextbox({
            key: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        }),

        new FormTextbox({
            key: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        }),

        new FormTextbox({
            key: 'date',
            label: 'Date',
            type: 'date',
            required: true,
        }),

        new FormTextbox({
            key: 'file',
            label: 'File',
            type: 'file',
            required: true,
        }),

        new FormTextbox({
            key: 'age',
            label: 'Age',
            type: 'number',
            required: true,
        }),

        new FormTextbox({
            key: 'password',
            label: 'Password',
            type: 'password',
            required: true,
        }),

        new FormDropdown({
            key: 'business-unit',
            label: 'Business Unit',
            options: [
                { key: 'corp', value: 'Corporate' },
                { key: 'comm', value: 'Commercial' },
            ],
            required: true,
        }),

        new FormCheckbox({
            key: 'confirmed',
            label: 'Confirmed',
            required: true,
        }),
    ];
}
