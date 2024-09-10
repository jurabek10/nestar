import { Injectable } from '@nestjs/common';
import { Like } from '../../libs/dto/like/like';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LikeService {
	constructor(@InjectModel('Like') private readonly likeyModel: Model<Like>) {}
}
