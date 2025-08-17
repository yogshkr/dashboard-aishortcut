'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = [];
        
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          let articleData;
          const dataKeys = Object.keys(docData);
          
          if (dataKeys.length === 1 && dataKeys[0].startsWith('{')) {
            try {
              articleData = JSON.parse(dataKeys[0]);
            } catch (parseError) {
              articleData = docData;
            }
          } else {
            articleData = docData;
          }
          
          articlesData.push({
            id: doc.id,
            ...articleData
          });
        });
        
        setArticles(articlesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (articleId, headline) => {
    const confirmDelete = confirm(`Are you sure you want to delete "${headline}"?`);
    
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'articles', articleId));
        alert('Article deleted successfully!');
        setArticles(articles.filter(article => article.id !== articleId));
      } catch (error) {
        console.error('Error deleting article:', error);
        alert('Error deleting article');
      }
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Loading articles...</p>
        </div>
      </div>
    );
  }

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
              📝 Articles Management
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              margin: '0'
            }}>
              Manage your AI news content
            </p>
          </div>
          
          <Link href="/articles/new">
            <button style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '15px 25px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
              transition: 'transform 0.2s'
            }}>
              ➕ Add New Article
            </button>
          </Link>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Total: {articles.length} Articles
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Published: {articles.length}
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {articles.length === 0 ? (
          <div style={{
            padding: '60px 40px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '64px',
              marginBottom: '20px'
            }}>📝</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              margin: '0 0 10px 0'
            }}>
              No Articles Yet
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '30px'
            }}>
              Get started by creating your first AI news article
            </p>
            <Link href="/articles/new">
              <button style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
              }}>
                Create First Article
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {articles.map((article, index) => (
              <div key={article.id} style={{
                padding: '30px',
                borderBottom: index < articles.length - 1 ? '2px solid #f0f0f0' : 'none',
                transition: 'background 0.2s'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                      }}>
                        {article.headline ? article.headline.charAt(0).toUpperCase() : 'A'}
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: '#333',
                          margin: '0 0 8px 0'
                        }}>
                          {article.headline}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          color: '#666',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          {article.summary}
                        </p>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          fontSize: '12px',
                          color: '#888',
                          marginBottom: '12px'
                        }}>
                          <span>✍️ {article.author}</span>
                          <span>📅 {article.publishDate}</span>
                          <span>⏱️ {article.readTime}</span>
                        </div>
                        
                        {article.topics && article.topics.length > 0 && (
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                          }}>
                            {article.topics.map((topic, topicIndex) => (
                              <span key={topicIndex} style={{
                                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                              }}>
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginLeft: '20px'
                  }}>
                    <Link href={`/articles/${article.id}/edit`}>
                      <button style={{
                        background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(79, 172, 254, 0.3)'
                      }}>
                        ✏️ Edit
                      </button>
                    </Link>
                    <button 
                      onClick={() => handleDelete(article.id, article.headline)}
                      style={{
                        background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(245, 87, 108, 0.3)'
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
