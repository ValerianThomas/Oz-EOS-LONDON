import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import accounts from "./accounts";
import settings from "./settings";

export default async function setTemplate(accountIndex, data){
	const {name, privateKey, publicKey} = accounts[accountIndex];
  console.log(name, privateKey, publicKey);
	const eos = Eos({httpEndpoint: settings.httpEndpoint, "keyProvider": privateKey});
	const result = await eos.transaction({
		actions: [{
        account: settings.contractAccount,
        name: "settemplate",
        authorization: [{
          actor: name,
          permission: 'active',
        }],
        data: {
          _client: name,
          _categories: data.body,
          _client_name: data.name,
          _picture: data.picture,
        },
      }],
    });
    return result
}