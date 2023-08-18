import {TouchableOpacity, View} from "react-native";
import {Item, ItemImage, ItemInfo, ItemInfoImage, ItemInfoText, ItemSubTitle, ItemTitle} from "./UI";

const GoalItem = ({onPress, icon, moneyIcon, timeIcon, title, titleColor, subTitle, moneyValue, timeValue})=> {
    return (
        <TouchableOpacity onPress={onPress}>
            <Item>
                <ItemImage
                    source={icon}/>
                <View>
                    <ItemTitle style={{color: titleColor}}>{title}</ItemTitle>
                    <ItemSubTitle>{subTitle}</ItemSubTitle>
                    <ItemInfo>
                        <ItemInfoImage
                            source={moneyIcon}/>
                        <ItemInfoText>{moneyValue}</ItemInfoText>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemInfoImage
                            source={timeIcon}/>
                        <ItemInfoText>{timeValue}</ItemInfoText>
                    </ItemInfo>
                </View>
            </Item>
        </TouchableOpacity>
    )
}

export default GoalItem;