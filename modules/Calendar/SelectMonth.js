import {StyleSheet} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SelectMonth = ({placeholder, months, open, value, setOpen, setValue}) => {
    return (
        <DropDownPicker
            placeholder={placeholder}
            style={styles.select}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            open={open}
            value={value}
            items={months}
            setOpen={setOpen}
            setValue={setValue}
            placeholderStyle={styles.selectPlaceholder}
            dropDownContainerStyle={{

            }}
        />
    )
}

export default SelectMonth;

const styles = StyleSheet.create({
    dropDownContainerStyle: {
        backgroundColor: 'white',
        zIndex: 1000,
        elevation: 1000,
        width: 150,
    },
    select: {
        width: 150,
        borderWidth: 0,
        marginBottom: 25,
        zIndex: 10,
    },
    selectPlaceholder: {
        fontWeight: "bold",
        fontFamily: 'PTSans_700Bold',
    },
});