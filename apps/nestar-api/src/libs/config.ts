import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updtaedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMemberSorts = ['createdAt', 'updtaedAt', 'memberLikes', 'memberViews'];

/** IMAGE CONFIGURATION  */
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeIntoMogoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
