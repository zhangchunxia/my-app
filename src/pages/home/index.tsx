import { Button, Card } from 'antd';
import produce from 'immer';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import { useAppDisPatch, useAppSelector } from '@/store/hooks';
import { decreEment, increment, incrementByAmount } from '@/store/slice/counterSlice';
import { getUserAsync } from '@/store/slice/user';

import styles from './index.module.less';

const Home = () => {
  const count = useAppSelector((_it) => _it.count.value);
  const userInfo = useAppSelector((_) => _.user);
  const dispatch = useAppDisPatch();
  const [num, setNum] = useImmer({ a: 1 });
  const [num1, setNum1] = useState(1);
  const handleGetdata = () => {
    dispatch(getUserAsync());
  };

  const handleNum = () => {
    setNum((draft) => {
      draft.a += 1;
      console.log(num, draft);
    });
    console.log(num);
  };
  const handleNum1 = () => {
    setTimeout(() => {
      setNum1(2);
    }, 0);
    console.log(num1, 0);
  };

  return (
    <div>
      <Card>
        <h1>test</h1>
        <div> num:{num.a}</div>
        <div> num1:{num1}</div>
        <Button aria-label="Increment value" onClick={handleNum}>
          num
        </Button>
        <Button aria-label="Increment value" onClick={handleNum1}>
          setNum
        </Button>
      </Card>
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
