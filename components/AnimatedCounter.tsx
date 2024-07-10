'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({amount }:{ amount: number}) => {
  return (
    <div>
      <CountUp
        duration={1.25}
        decimals={2}
        prefix="$"
        decimal="."
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter;
