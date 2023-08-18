import {useEffect, useState} from "react";
import {useWindowDimensions} from "react-native";

import {getStep} from "../../shared/api/welcome";

export const useWelcomeSlide = (step) => {
    const [slide, setSlide] = useState({});

    useEffect(()=> {
        const fetchSlide = async() => {
            try {
                const data = await getStep(step);
                setSlide(data);
            }
            catch(error) {
                console.log(error.message)
            }
        }

        fetchSlide()
    }, []);

    return {slide};
}

export const useContainerStyle = ()=> {
    const {height} = useWindowDimensions();

    return {minHeight: height - 377};
}