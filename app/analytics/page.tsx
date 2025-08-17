export default function AnalyticsPage() {
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
              📊 Analytics Dashboard
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              margin: '0'
            }}>
              App performance and user insights
            </p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Last Updated: Just now
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Live Data
          </div>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginBottom: '30px'
      }}>
        {/* App Downloads */}
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
                Total App Downloads
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                12.4K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                +25% this month
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
              <span style={{ fontSize: '30px' }}>📱</span>
            </div>
          </div>
        </div>

        {/* Articles Read */}
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
                Articles Read
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                89.2K
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                +15% weekly growth
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
              <span style={{ fontSize: '30px' }}>👁️</span>
            </div>
          </div>
        </div>

        {/* User Engagement */}
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
                Avg. Session Duration
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 5px 0'
              }}>
                4.2m
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4ade80',
                margin: '0',
                fontWeight: '600'
              }}>
                +8% improvement
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
              <span style={{ fontSize: '30px' }}>⏱️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Content & Recent Activity */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        {/* Top Performing Articles */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            margin: '0 0 20px 0'
          }}>
            🏆 Top Performing Articles
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{
              padding: '15px',
              background: 'linear-gradient(135deg, #f8faff, #e6f2ff)',
              borderRadius: '12px',
              border: '1px solid #e0f0ff'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0 0 5px 0'
              }}>
                "ChatGPT-5 Release Date Revealed"
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>8.4K views</span>
                <span>4.9⭐ rating</span>
              </div>
            </div>

            <div style={{
              padding: '15px',
              background: 'linear-gradient(135deg, #f0fff4, #dcfce7)',
              borderRadius: '12px',
              border: '1px solid #bbf7d0'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0 0 5px 0'
              }}>
                "Google Gemini vs OpenAI Comparison"
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>6.2K views</span>
                <span>4.7⭐ rating</span>
              </div>
            </div>

            <div style={{
              padding: '15px',
              background: 'linear-gradient(135deg, #fef7ff, #fdf2f8)',
              borderRadius: '12px',
              border: '1px solid #f9a8d4'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0 0 5px 0'
              }}>
              "Tesla AI Robot Latest Updates"
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>5.8K views</span>
                <span>4.6⭐ rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Activity Timeline */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            margin: '0 0 20px 0'
          }}>
            🕐 Recent Activity
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#4ade80',
                borderRadius: '50%',
                boxShadow: '0 0 8px #4ade80'
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0'
                }}>
                  156 new user registrations
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: '2px 0 0 0'
                }}>
                  2 hours ago
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#3b82f6',
                borderRadius: '50%',
                boxShadow: '0 0 8px #3b82f6'
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0'
                }}>
                  3 new articles published
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: '2px 0 0 0'
                }}>
                  5 hours ago
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#f59e0b',
                borderRadius: '50%',
                boxShadow: '0 0 8px #f59e0b'
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0'
                }}>
                  App performance optimized
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: '2px 0 0 0'
                }}>
                  1 day ago
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#8b5cf6',
                borderRadius: '50%',
                boxShadow: '0 0 8px #8b5cf6'
              }}></div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0'
                }}>
                  Database backup completed
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: '2px 0 0 0'
                }}>
                  2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Features Preview */}
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
          📈
        </div>
        <h3 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 15px 0'
        }}>
          Advanced Analytics Coming Soon
        </h3>
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Interactive charts, real-time data visualization, user behavior tracking, and detailed performance reports to help you optimize your AIShortCut app.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
          maxWidth: '700px',
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
            📊 Interactive Charts
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            🎯 User Behavior
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            📋 Custom Reports
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            ⚡ Real-time Data
          </div>
        </div>
      </div>
    </div>
  );
}
