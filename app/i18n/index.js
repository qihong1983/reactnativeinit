import i18n from 'react-native-i18n';
import en from './en/index';
import zh from './zh/index';

//本地封装的库
import StorageUtil from '../utils/StorageUtil';

StorageUtil.saveJsonObject('lang', 'zh');

let langobj = StorageUtil.getJsonObject('lang');

let lang = 'en';

langobj.then(data => {
	lang = data;
});

// StorageUtil.getJsonObject('lang').then(data => {

// 	console.log(i18n, 'i18n');
// 	console.log(data, 'lang');
// })

console.log(lang, 'lang');

i18n.defaultLocale = lang;
i18n.locale = lang;
i18n.fallbacks = true;
i18n.translations = {
	zh,
	en
};

export {
	i18n
};