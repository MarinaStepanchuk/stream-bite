const CircleProgress = ({ progress }: { progress: number }): JSX.Element => {
  const circumference = 2 * Math.PI * 34;

  return (
    <div>
      <svg width={100} height={100}>
        <circle
          cx="50"
          cy="50"
          r="34"
          strokeWidth={8}
          stroke="#0ff0fc"
          style={{
            transformOrigin: 'center',
            transform: 'rotate(-90deg)',
            strokeDasharray: `${(progress / 100) * circumference} ${circumference}`,
            transition: `all 0.3s linear`,
          }}
        />
      </svg>
    </div>
  );
};

export { CircleProgress };
