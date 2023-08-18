import {FormGroup, Component} from "./UI";

const Field = ({placeholder, ...props}) => {
    return (
        <FormGroup>
            <Component placeholder={placeholder} autoCapitalize="none" {...props} />
        </FormGroup>
    )
}

export default Field;
