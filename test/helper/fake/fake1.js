import '../initial';
import sequelize from '../../../app/lib/db';
import { UserModel } from '../../../app/model/user';
import { GroupModel } from '../../../app/model/group';
import { UserGroupModel } from '../../../app/model/user-group';

const run = async () => {
  // 查找权限组
  const group = await GroupModel.findOne({ where: { name: '普通分组' } });

  const user = await UserModel.findOne({ where: { username: 'pedro' } });

  await UserGroupModel.create({ user_id: user.id, group_id: group.id });

  setTimeout(() => {
    sequelize.close();
  }, 500);
};

run();
