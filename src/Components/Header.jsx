import reactLogo from '../assets/react.svg';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-sm)',
        backgroundColor: 'var(--color-card)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <img src={reactLogo} alt="React Logo" width={40} />
      <h1>Eddit</h1>
    </header>
  );
}

export default Header;