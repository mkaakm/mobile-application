import {useState, useCallback, useMemo} from "react";
import {Feather} from '@expo/vector-icons';

import {FormGroup, Component} from "../Field/UI";
import {PasswordToggleIcon} from "./UI";

const PasswordField = ({placeholder, password = false, ...props}) => {
    const [showPassword, setShowPassword] = useState(password);

    const toggleShowPassword = useCallback(() => setShowPassword(prevState => !prevState), []) ;

    const iconName = useMemo(()=> !showPassword ? "eye" : "eye-off", [showPassword]);

    return (
        <FormGroup>
            {password && (<PasswordToggleIcon onPress={toggleShowPassword}>
                                            <Feather  name={iconName} size={20} color="#858687"/>
                                        </PasswordToggleIcon>)}
            <Component placeholder={placeholder} secureTextEntry={showPassword} autoCapitalize="none" {...props} />
        </FormGroup>
    )
}

export default PasswordField;
