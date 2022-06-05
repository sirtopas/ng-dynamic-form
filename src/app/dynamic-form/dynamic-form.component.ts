import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from './model/form-input-base';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

    @Input() formFields: FormInputBase<string | boolean>[] | null = [];

    form!: FormGroup;

    ngOnInit(): void {
        this.toFormGroup();
    }

    // Returns whether the form exists and has been modified or not as a helper for the confirmation dialog
    hasFormUnsavedChanges(): boolean {
        return this.form && this.form.dirty;
    }

    onSubmit(): void {
        this.form.markAllAsTouched();

        if (this.form.invalid) return;
        alert('Submit form!');
    }

    private toFormGroup(): void {
        const group: any = {};

        this.formFields?.forEach((field) => {
            group[field.key] = field.required
                ? new FormControl(field.value || '', [
                    ...field.validators,
                    Validators.required,
                ])
                : new FormControl(field.value || '', field.validators);
        });
        this.form = new FormGroup(group);
    }
}
