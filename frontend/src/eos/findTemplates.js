import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import accounts from "./accounts";
import settings from "./settings";

export default async function findByUser(accountIndex, success=() => {}, error = () => {}){
	const {name, privateKey, publicKey} = accounts[accountIndex];
	const eos = Eos({httpEndpoint: settings.httpEndpoint, "privateKey": privateKey});
	let ret = await eos.getTableRows({
	  "json": true,
      "code": settings.contractAccount,
      "scope": settings.contractAccount,
      "table": "templ",
      "limit": 100,
	})
}