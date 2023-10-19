import { MissionUtils } from "@woowacourse/mission-utils";

export const getRandomNumberArr = () => {
  const randomNumberArr = [];
  while (randomNumberArr.length < 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberArr.includes(random)) {
      randomNumberArr.push(random);
    }
  }
  return randomNumberArr;
};

export const getInputNumberArr = (number) => {
  const inputNumberArr = [];
  const strNum = number.toString();
  for (let i = 0; i < 3; i++) {
    inputNumberArr.push(Number(strNum[i]));
  }

  return inputNumberArr;
};

export const checkArr = (randomArr, inputArr) => {
  let ball = 0,
    strike = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (inputArr[i] === randomArr[j]) {
        if (i === j) strike++;
        else ball++;
      }
    }
  }
  return { ball, strike };
};
