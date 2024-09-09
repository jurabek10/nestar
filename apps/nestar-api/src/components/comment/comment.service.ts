import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../../libs/dto/comment/comment';
import { Model } from 'mongoose';

@Injectable()
export class CommentService {
	constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {}
}
