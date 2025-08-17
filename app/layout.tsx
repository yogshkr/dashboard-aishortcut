'use client';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif' }}>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Beautiful Colorful Sidebar */}
          <div style={{
            width: '280px',
            background: 'linear-gradient(145deg, #2d3748 0%, #1a202c 50%, #2b6cb9 100%)',
            boxShadow: '4px 0 20px rgba(0,0,0,0.15)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Logo Section */}
            <div style={{
              padding: '30px 25px',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>
                    AI
                  </span>
                </div>
                <div>
                  <h2 style={{
                    color: 'white',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    margin: '0 0 4px 0'
                  }}>
                    AIShortCut
                  </h2>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '13px',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    Admin Dashboard
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <nav style={{ 
              padding: '25px 15px',
              flex: 1
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/articles" style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}>
                  <span style={{
                    fontSize: '20px',
                    marginRight: '12px'
                  }}>
                    📝
                  </span>
                  <span>Articles</span>
                  <div style={{
                    position: 'absolute',
                    right: '15px',
                    width: '8px',
                    height: '8px',
                    background: 'white',
                    borderRadius: '50%',
                    opacity: 0.8,
                    boxShadow: '0 0 8px rgba(255,255,255,0.5)'
                  }}></div>
                </Link>
                
                <Link href="/users" style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: '500',
                  fontSize: '16px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  e.currentTarget.style.transform = 'translateX(0px)';
                }}>
                  <span style={{
                    fontSize: '20px',
                    marginRight: '12px'
                  }}>
                    👥
                  </span>
                  <span>Users</span>
                </Link>
                
                <Link href="/analytics" style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: '500',
                  fontSize: '16px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  e.currentTarget.style.transform = 'translateX(0px)';
                }}>
                  <span style={{
                    fontSize: '20px',
                    marginRight: '12px'
                  }}>
                    📊
                  </span>
                  <span>Analytics</span>
                </Link>
              </div>
            </nav>
            
            {/* Bottom Profile Section */}
            <div style={{
              padding: '25px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '15px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(79, 172, 254, 0.4)'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    AD
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    margin: '0 0 2px 0'
                  }}>
                    Admin User
                  </p>
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '12px',
                    margin: '0',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: '#4ade80',
                      borderRadius: '50%',
                      marginRight: '6px',
                      boxShadow: '0 0 6px #4ade80'
                    }}></span>
                    Online
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div style={{ 
            flex: 1, 
            overflow: 'auto'
          }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
