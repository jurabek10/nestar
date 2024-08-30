import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { MemberAuthType, MemberType } from '../../enums/member.enum';
import { ViewGroup } from '../../enums/view.enum';
import { ViewModule } from 'apps/nestar-api/src/components/view/view.module';
import { ObjectId } from 'mongoose';

@InputType()
export class ViewInput {
	@IsNotEmpty()
	@Field(() => String)
	viewRefId: ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	memberId: ObjectId;

	@IsNotEmpty()
	@Field(() => ViewGroup)
	viewGroup: ViewModule;
}
