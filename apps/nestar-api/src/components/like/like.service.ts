import { BadRequestException, Injectable } from '@nestjs/common';
import { Like } from '../../libs/dto/like/like';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LikeInput } from '../../libs/dto/like/like.input';
import { T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class LikeService {
	constructor(@InjectModel('Like') private readonly likeyModel: Model<Like>) {}

	public async toggleLike(input: LikeInput): Promise<number> {
		const search: T = {
				memberId: input.memberId,
				likeRefId: input.likeRefId,
			},
			exist = await this.likeyModel.findOne(search).exec();

		let modifier = 1;

		if (exist) {
			await this.likeyModel.findByIdAndDelete(search).exec();
			modifier = -1;
		} else {
			try {
				await this.likeyModel.create(input);
			} catch (err) {
				console.log('Error, Service.model', err.message);
				throw new BadRequestException(Message.CREATED_FAILED);
			}
		}

		console.log(`-LIKE modifier ${modifier}`);
		return modifier;
	}
}
