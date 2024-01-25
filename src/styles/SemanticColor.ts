import PaletteColor from './PaletteColor';

const SemanticColor = {
  Action: {
    Primary: {
      Normal: PaletteColor.blue['500'],
      Hover: PaletteColor.blue['600'],
      Pressed: PaletteColor.blue['600'],
    },

    Danger: {
      Normal: PaletteColor.red['500'],
      Hover: PaletteColor.red['600'],
      Pressed: PaletteColor.red['600'],
    },

    Disabled: PaletteColor.gray['400'],
  },

  Text: {
    Primary: PaletteColor.gray['900'],
    Secondary: PaletteColor.gray['700'],
    Tertiary: PaletteColor.gray['500'],
    Disabled: PaletteColor.gray['400'],
    Placeholder: PaletteColor.gray['400'],
    Link: PaletteColor.blue['500'],
    Danger: PaletteColor.red['500'],
  },

  State: {
    Normal: PaletteColor.blue['500'],
    Positive: PaletteColor.green['500'],
    Warning: PaletteColor.yellow['500'],
    Danger: PaletteColor.red['500'],
  },

  Layout: {
    Main: PaletteColor.white,
    Background: PaletteColor.gray['100'],
    Box: PaletteColor.gray['50'],
  },

  Border: {
    Main: PaletteColor.gray['200'],
    Outer: PaletteColor.gray['300'],
  },
};

export default SemanticColor;
