import { Blocks } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
      />
    </div>
  );
};

export default Spinner;
