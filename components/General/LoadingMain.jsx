// This handle main loading component

const LoadingMain = (props) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    }}
  >
    <img
      src="/assets/logo_haitoko.png"
      alt="Logo Haitoko"
      className="imageMainLoading"
    />
    {/* <img className={'imageMainLoading'} src="/assets/logo.png" alt="" /> */}
  </div>
);

export default LoadingMain;
