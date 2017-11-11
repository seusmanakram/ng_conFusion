import {baseURL} from './baseurl';

export function RestangularConfigFactory(RestagularProvider){

RestagularProvider.setBaseUrl(baseURL);

}