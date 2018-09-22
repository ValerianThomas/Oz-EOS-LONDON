import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import accounts from "./accounts";
import settings from "./settings";

export default async function setPermissions(accountIndex, client, data){
	const {name, privateKey, publicKey} = accounts[accountIndex];
	const eos = Eos({httpEndpoint: settings.httpEndpoint, "keyProvider": privateKey});
	const result = await eos.transaction({
		actions: [{
        account: settings.contractAccount,
        name: "setperms",
        authorization: [{
          actor: name,
          permission: 'active',
        }],
        data: {
          _user: name,
          _client: client,
          _permissions: data,
        },
      }],
    });
    return result;
}