const InputError = ({fieldName, isPhone}) => {

    if(isPhone) {
        return <p className="input-error">{fieldName} must be 10 digits</p>

    }

    return (
        <p className="input-error">{fieldName} is required</p>
    )
}

export default InputError;