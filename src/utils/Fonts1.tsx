import { useFonts } from "expo-font";

export const Fontfamilies = {
    "Raleway-Black": "Raleway-Black",
    "Raleway-BlackItalic": "Raleway-BlackItalic",
    "Raleway-Bold": "Raleway-Bold",
    "Raleway-BoldItalic": "Raleway-BoldItalic",
    "Raleway-ExtraBold": "Raleway-ExtraBold",
    "Raleway-ExtraBoldItalic": "Raleway-ExtraBoldItalic",
    "Raleway-ExtraLightItalic": "Raleway-ExtraLightItalic",
    "Raleway-LightItalic": "Raleway-LightItalic",
    "Raleway-MediumItalic": "Raleway-MediumItalic",
    "Raleway-SemiBold": "Raleway-SemiBold",
    "Raleway-SemiBoldItalic": "Raleway-SemiBoldItalic",
    "Raleway-Thin": "Raleway-Thin",
    "Raleway-ThinItalic": "Raleway-ThinItalic",
}

import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    "Raleway-Black": require('./../images/fonts/Raleway-Black.ttf'),
    "Raleway-BlackItalic": require('./../images/fonts/Raleway-BlackItalic.ttf'),
    "Raleway-Bold": require('./../images/fonts/Raleway-Bold.ttf'),
    "Raleway-BoldItalic": require('./../images/fonts/Raleway-BoldItalic.ttf'),
    "Raleway-ExtraBold": require('./../images/fonts/Raleway-ExtraBold.ttf'),
    "Raleway-ExtraBoldItalic": require('./../images/fonts/Raleway-ExtraBoldItalic.ttf'),
    "Raleway-ExtraLightItalic": require('./../images/fonts/Raleway-ExtraLightItalic.ttf'),
    "Raleway-LightItalic": require('./../images/fonts/Raleway-LightItalic.ttf'),
    "Raleway-MediumItalic": require('./../images/fonts/Raleway-MediumItalic.ttf'),
    "Raleway-SemiBold": require('./../images/fonts/Raleway-SemiBold.ttf'),
    "Raleway-SemiBoldItalic": require('./../images/fonts/Raleway-SemiBoldItalic.ttf'),
    "Raleway-Thin": require('./../images/fonts/Raleway-Thin.ttf'),
    "Raleway-ThinItalic": require('./../images/fonts/Raleway-ThinItalic.ttf'),
  });
};
// utils/fonts.js


// Add more font constants as needed



export const lineHeight56 = 56
export const lineHeight46 = 46
export const lineHeight42 = 42
export const lineHeight40 = 40
export const lineHeight34 = 34
export const lineHeight26 = 26
export const lineHeight24 = 24
export const lineHeight22 = 22
export const lineHeight16 = 16
export const lineHeight14 = 14


export const headings = {
    "small": 24,
    "md-small": 30,
    "md": 36,
    "md-large": 40,
    "large": 48
}

export const Subheading = {
    "small": 18,
    "large": 20,
   
}
export const text = {
    "small" : 12,
    "md-small": 14,
    "md-large": 16,
    "large": 18

}

export const input = {
    "small" : 12,
    "md-small": 14,
    "md-large": 16,
    "large": 18

}

export const buttons = {
    "small" : 12,
    "md-small": 14,
    "md-large": 16,
    "large": 18

}

export const caption = {
    "md" : 12,
}

export const overline = {
    "md" : 10,
}
