import { FormControl, ValidationErrors } from '@angular/forms';
export class CustomValidator{
    static noWhiteSpace(control: FormControl) : ValidationErrors{
        if((control.value != null) && (control.value.trim().length === 0)){
            return {'noWhiteSpace': true};
        }else {
            return null;
        }
        
    }
}