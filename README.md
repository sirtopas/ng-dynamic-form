# Dynamic Forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

A lightweight, reusable form-builder component for Angular: 

`app.component.ts`:

```js
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
```

`app.component.html`:

```html
<div class="container-fluid">
    <div class="row">
        <div class="col-6">
            <h2>My dynamic form</h2>
            <app-dynamic-form [formFields]="testForm"></app-dynamic-form>
        </div>
    </div>
</div>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
