import { Button, Card } from 'antd';

import { useAppDisPatch, useAppSelector } from '@/store/hooks';
import { decreEment, increment, incrementByAmount } from '@/store/slice/counterSlice';
import { getUserAsync } from '@/store/slice/user';

import styles from './index.module.less';

const Home = () => {
  const count = useAppSelector((state) => state.count.value);
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDisPatch();

  const handleGetdata = () => {
    dispatch(getUserAsync());
  };

  return (
    <div>
      <Card>
        <h1>运用redux</h1>
        <div>
          <h3>
            count:<span className={styles.fontColorRed}>{count}</span>
          </h3>
          <div>
            <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <Button aria-label="Increment value" onClick={() => dispatch(decreEment())}>
              decreEment
            </Button>
            <Button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(2))}>
              incrementByAmount
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <h1>用mock获取远程数据</h1>
        <h3>
          data:
          <span className={styles.fontColorRed}>{JSON.stringify(userInfo)}</span>
        </h3>
        <div>
          <Button type="primary" onClick={handleGetdata}>
            button
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;
