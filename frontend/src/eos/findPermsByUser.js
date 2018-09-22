import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import accounts from "./accounts";
import settings from "./settings";

export default async function findByUser(accountIndex, user){
	const {name, privateKey, publicKey} = accounts[accountIndex];
	const eos = Eos("privateKey": privateKey});
	let ret = await eos.getTableRows({
		"json": true,
		"code": settings.contractAccount,
		"scope": settings.contractAccount,
		"table": "thrusttable",
		"limit": 100,
		"index_postion": 1,
		"key_type": "name",
		"table_key": user,
	})
	return ret;
}