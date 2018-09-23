import Eos from 'eosjs'; // https://github.com/EOSIO/eosjs
import settings from "./settings";

import getAllTemplates from "./getAllTemplates";
import setPermissions from "./setPermissions";

export default async function findByUserAndClient(user, client){
	const eos = Eos({httpEndpoint: settings.httpEndpoint});
	let intermediates = await eos.getTableRows({
            "json": true,
            "code": settings.contractAccount,
            "scope": settings.contractAccount,
            "table": "thrust",
            "limit": 100,
            "index_postion": 1,
            "key_type": "name",
            "table_key": user,
	})
      for (var i = 0; i < intermediates.rows.length; i++) {
            if(intermediates.rows[i].client === client){
                  return intermediates.rows[i];
            }
      }//else
      let templates = await getAllTemplates();
      templates = templates.rows;
      for (var i = 0; i < templates.length; i++) {
            if(templates[i].client == client){
                  console.log(templates);
                  await setPermissions(0, client, templates[i].categories);
                  return await findByUserAndClient(user, client);
            }
      }
}