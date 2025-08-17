export default function UsersPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px'
    }}>
      {/* Header Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        marginBottom: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <div>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#333',
              margin: '0 0 8px 0'
            }}>
              👥 Users Management
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              margin: '0'
            }}>
              Manage app users and permissions
            </p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Total Users: 1,234
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Active Today: 156
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {/* New Users */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '25px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#666',
                margin: '0 0 8px 0',
                textTransform: 'uppercase'
              }}>
                New Users This Week
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                89
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                +12% from last week
              </p>
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
            }}>
              <span style={{ fontSize: '30px' }}>👤</span>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '25px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#666',
                margin: '0 0 8px 0',
                textTransform: 'uppercase'
              }}>
                Monthly Active Users
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                2.4K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                +18% growth
              </p>
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(79, 172, 254, 0.3)'
            }}>
              <span style={{ fontSize: '30px' }}>🔥</span>
            </div>
          </div>
        </div>

        {/* User Retention */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '25px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#666',
                margin: '0 0 8px 0',
                textTransform: 'uppercase'
              }}>
                User Retention Rate
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                87%
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                Above industry average
              </p>
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #f093fb, #f5576c)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)'
            }}>
              <span style={{ fontSize: '30px' }}>📈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          fontSize: '64px',
          marginBottom: '20px'
        }}>
          🚧
        </div>
        <h3 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 15px 0'
        }}>
          Advanced User Management
        </h3>
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Detailed user profiles, activity logs, permission management, and advanced analytics coming soon to help you better understand and manage your AIShortCut app users.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            📊 User Analytics
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            🔐 Permission Controls
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            📝 Activity Logs
          </div>
        </div>
      </div>
    </div>
  );
}
