
import { BASE_URL } from './constant';
import { Network } from './network';
//Write all network functions here

export const userLogin = async (data) => {
 return Network('post', 'login', data, null)
}