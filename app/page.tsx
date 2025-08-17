export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          🚀 AIShortCut Admin
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Professional Dashboard
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>📝</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>24</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Total Articles</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(245, 87, 108, 0.3)'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>👥</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>1.2K</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Active Users</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(79, 172, 254, 0.3)'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>📊</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>98.5%</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Performance</div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px'
        }}>
          <a href="/articles" style={{
            background: '#667eea',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
            transition: 'transform 0.2s'
          }}>
            📝 Articles
          </a>
          
          <a href="/users" style={{
            background: '#f5576c',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)',
            transition: 'transform 0.2s'
          }}>
            👥 Users
          </a>
          
          <a href="/analytics" style={{
            background: '#00f2fe',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(0, 242, 254, 0.3)',
            transition: 'transform 0.2s'
          }}>
            📊 Analytics
          </a>
        </div>
      </div>
    </div>
  );
}
