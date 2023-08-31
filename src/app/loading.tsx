import wordings from '@/wordings';

const Loading = () => {
  const { warnings: { loading } } = wordings;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-brand-600 opacity-75"></span>
      <p>{loading}</p>
    </div>
  );
};

export default Loading;
