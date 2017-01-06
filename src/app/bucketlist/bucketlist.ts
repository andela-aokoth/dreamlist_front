import { IBucketlistItem } from './bucketlist-item';
export interface IBucketlist {
    bucketlistId: number;
    name: string;
    items: IBucketlistItem[],
    date_created: Date;
    date_modifiied: Date;
    created_by: number;
}