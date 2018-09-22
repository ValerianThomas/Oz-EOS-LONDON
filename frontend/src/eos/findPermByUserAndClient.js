import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import settings from "./settings";

export default async function findByUserAndClient(user, client, success=() => {}, error = () => {}){
	const eos = Eos({httpEndpoint: settings.httpEndpoint});
	let intermediate = await eos.getTableRows({
            "json": true,
            "code": settings.contractAccount,
            "scope": settings.contractAccount,
            "table": "thrusttable",
            "limit": 100,
            "index_postion": 1,
            "key_type": "name",
            "table_key": user,
	})
      let ret = [];
      for (var i = 0; i < intermediates.length; i++) {
            if(intermediates[i].client === client){
                  ret.push(intermediates[i]);
            }
      }
	return ret;
}