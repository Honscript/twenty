import { v4 as uuidv4 } from 'uuid';

import { FieldActorSource } from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { WorkspaceEntityManager } from 'src/engine/twenty-orm/entity-manager/workspace-entity-manager';

export const promotoraPrefillData = async (
  entityManager: WorkspaceEntityManager,
  schemaName: string,
) => {
  const promotoras = [
    { name: 'BEVI Cred', domain: 'bevioficial.com.br' },
  ];  const promotoraValues = promotoras.map((promotora, index) => ({
    id: uuidv4(),
    name: promotora.name,
    domainNamePrimaryLinkUrl: promotora.domain ? `https://${promotora.domain}` : null,
    position: index + 1,
    createdBySource: FieldActorSource.SYSTEM,
    createdByWorkspaceMemberId: null,
    createdByName: 'System',
  }));  await entityManager
    .createQueryBuilder(undefined, undefined, undefined, {
      shouldBypassPermissionChecks: true,
    })
    .insert()
    .into(`${schemaName}.promotora`, [
      'id',
      'name',
      'domainNamePrimaryLinkUrl',
      'position',
      'createdBySource',
      'createdByWorkspaceMemberId',
      'createdByName',
    ])
    .orIgnore()
    .values(promotoraValues)
    .returning('*')
    .execute();
};
