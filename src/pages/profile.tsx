import { restful } from '@/js-sdk/utils/http';
import User from '@/model/User';
import { Spin, Card, Typography, Descriptions } from 'antd';
import { useQuery } from 'react-query';
import styles from './profile.less';

const { Link } = Typography;
const { Item } = Descriptions;

export default () => {
  const profile = useQuery<{ data: User }>(['profile'], () => restful.get('user-center/profile'));
  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className={styles.content}>
      <Card
        title="个人档案"
        style={{ height: 720, width: 405 }}
        extra={<Link onClick={logout}>登出</Link>}
      >
        <Spin spinning={profile.isFetching}>
          <Descriptions column={1}>
            <Item label="昵称">{profile.data?.data?.name}</Item>
            <Item label="Email">{profile.data?.data?.email}</Item>
          </Descriptions>
        </Spin>
      </Card>
    </div>
  );
};
