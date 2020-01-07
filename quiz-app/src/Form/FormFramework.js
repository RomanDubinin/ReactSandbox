import is from "is_js";

export function validateForm(formControls){
    let isFormValid = true;
    Object.keys(formControls).map((controlName) => {
        isFormValid = formControls[controlName].valid && isFormValid;
    });
    return isFormValid;
}

export function createControl(config, validation) {
    return{
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation=null){
    if(!validation)
        return true;
    let isValid = true;
    if (validation.required){
        isValid = value.trim() !== '' && isValid;
    }if (validation.email){
        isValid = is.email(value) && isValid;
    }if (validation.minLength){
        isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
}