import WebFont from 'webfontloader';

const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Open Sans']
    }
  });
}

export default loadFonts;
