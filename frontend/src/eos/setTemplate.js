import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import accounts from "./accounts";
import settings from "./settings";

export default async function setTemplate(accountIndex, data){
	const {name, privateKey, publicKey} = accounts[accountIndex];
	const eos = Eos({httpEndpoint: settings.httpEndpoint, "privateKey": privateKey});
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
          _permissions: data.body,
          _client_name: "name" in data ? data.name : "",
        },
      }],
    });
    return result
}