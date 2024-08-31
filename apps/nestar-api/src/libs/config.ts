import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updtaedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMemberSorts = ['createdAt', 'updtaedAt', 'memberLikes', 'memberViews'];

export const shapeIntoMogoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
