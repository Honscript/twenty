import { ObjectMetadataStandardIdToIdMap } from 'src/engine/metadata-modules/object-metadata/interfaces/object-metadata-standard-id-to-id-map';

import { AGGREGATE_OPERATIONS } from 'src/engine/api/graphql/graphql-query-runner/constants/aggregate-operations.constant';
import {
    BASE_OBJECT_STANDARD_FIELD_IDS,
    PROMOTORA_STANDARD_FIELD_IDS,
} from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';

export const seedPromotorasAllView = (
  objectMetadataStandardIdToIdMap: ObjectMetadataStandardIdToIdMap,
) => {
  return {
    name: 'All',
    objectMetadataId:
      objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].id,
    type: 'table',
    key: 'INDEX',
    position: 0,
    icon: 'IconList',
    kanbanFieldMetadataId: '',
    filters: [],
    fields: [
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            PROMOTORA_STANDARD_FIELD_IDS.name
          ],
        position: 0,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            PROMOTORA_STANDARD_FIELD_IDS.domainName
          ],
        position: 1,
        isVisible: false,
        size: 100,
        aggregateOperation: AGGREGATE_OPERATIONS.count,
      },
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            PROMOTORA_STANDARD_FIELD_IDS.createdBy
          ],
        position: 2,
        isVisible: false,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            PROMOTORA_STANDARD_FIELD_IDS.accountOwner
          ],
        position: 3,
        isVisible: false,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            BASE_OBJECT_STANDARD_FIELD_IDS.createdAt
          ],
        position: 4,
        isVisible: false,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataStandardIdToIdMap[STANDARD_OBJECT_IDS.promotora].fields[
            PROMOTORA_STANDARD_FIELD_IDS.address
          ],
        position: 7,
        isVisible: true,
        size: 170,
        aggregateOperation: AGGREGATE_OPERATIONS.countNotEmpty,
      },
    ],
  };
};
