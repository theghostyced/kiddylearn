import WebFont from 'webfontloader';

const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Bubblegum Sans', 'Open Sans']
    }
  });
}

export default loadFonts;
