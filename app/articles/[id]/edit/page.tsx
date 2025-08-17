'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const [headline, setHeadline] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState(''); // New content field
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [topics, setTopics] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'articles', params.id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setHeadline(data.headline || '');
          setSummary(data.summary || '');
          setContent(data.content || ''); // Load existing content
          setAuthor(data.author || '');
          setPublishDate(data.publishDate || '');
          setReadTime(data.readTime || '');
          setImageUrl(data.imageUrl || '');
          setTopics(data.topics ? data.topics.join(', ') : '');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params.id]);

  const handleUpdate = async () => {
    if (!headline || !summary || !content) {
      alert('Please fill in headline, summary, and content');
      return;
    }

    setSaving(true);
    try {
      const topicsArray = topics.split(',').map(topic => topic.trim()).filter(topic => topic);
      
      const docRef = doc(db, 'articles', params.id);
      await updateDoc(docRef, {
        headline,
        summary,
        content, // Save the rich content
        author,
        publishDate,
        readTime,
        imageUrl,
        topics: topicsArray,
        updatedAt: new Date()
      });
      
      alert('Article updated successfully!');
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Error updating article');
    }
    setSaving(false);
  };

  // Rich text editor functions
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
  };

  const insertVideo = () => {
    const url = prompt('Enter YouTube video URL:');
    if (url) {
      let videoId = '';
      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('/').pop();
      }
      
      if (videoId) {
        const embedHtml = `<div style="margin: 20px 0;"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
        document.execCommand('insertHTML', false, embedHtml);
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          margin: '0 auto'
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
          <p style={{ fontSize: '18px', color: '#666' }}>Loading article...</p>
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
          alignItems: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <Link href="/articles">
            <button style={{
              background: 'linear-gradient(135deg, #f093fb, #f5576c)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(245, 87, 108, 0.3)'
            }}>
              ← Back to Articles
            </button>
          </Link>
        </div>
        
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 8px 0'
        }}>
          ✏️ Edit Article
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          margin: '0'
        }}>
          Update article information and content
        </p>
      </div>
      
      {/* Form Section */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Headline */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Headline *
            </label>
            <input 
              type="text" 
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '16px',
                backgroundColor: '#f8f9fa',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>
          
          {/* Summary */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Summary *
            </label>
            <textarea 
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Brief article summary for preview..."
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '16px',
                backgroundColor: '#f8f9fa',
                outline: 'none',
                transition: 'border-color 0.2s',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Rich Content Editor */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Content * (Rich Text Editor)
            </label>
            
            {/* Editor Toolbar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              padding: '10px',
              background: '#f1f3f4',
              borderRadius: '12px 12px 0 0',
              border: '2px solid #e0e0e0',
              borderBottom: '1px solid #e0e0e0'
            }}>
              {/* Text Formatting */}
              <button type="button" onClick={() => formatText('bold')} style={{
                padding: '8px 12px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
              }}>B</button>
              
              <button type="button" onClick={() => formatText('italic')} style={{
                padding: '8px 12px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer', fontStyle: 'italic'
              }}>I</button>
              
              <button type="button" onClick={() => formatText('underline')} style={{
                padding: '8px 12px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer', textDecoration: 'underline'
              }}>U</button>
              
              {/* Font Size */}
              <select onChange={(e) => formatText('fontSize', e.target.value)} style={{
                padding: '8px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer'
              }}>
                <option value="">Font Size</option>
                <option value="1">Small</option>
                <option value="3">Normal</option>
                <option value="5">Large</option>
                <option value="7">Extra Large</option>
              </select>
              
              {/* Text Color */}
              <input type="color" onChange={(e) => formatText('foreColor', e.target.value)} 
                style={{ width: '40px', height: '35px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' }} 
                title="Text Color"
              />
              
              {/* Lists */}
              <button type="button" onClick={() => formatText('insertUnorderedList')} style={{
                padding: '8px 12px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer'
              }}>• List</button>
              
              <button type="button" onClick={() => formatText('insertOrderedList')} style={{
                padding: '8px 12px', background: 'white', border: '1px solid #ddd', 
                borderRadius: '6px', cursor: 'pointer'
              }}>1. List</button>
              
              {/* Media */}
              <button type="button" onClick={insertImage} style={{
                padding: '8px 12px', background: 'linear-gradient(135deg, #4facfe, #00f2fe)', 
                color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
              }}>🖼️ Image</button>
              
              <button type="button" onClick={insertVideo} style={{
                padding: '8px 12px', background: 'linear-gradient(135deg, #f093fb, #f5576c)', 
                color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
              }}>📹 YouTube</button>
            </div>
            
            {/* Content Editor */}
            <div
              contentEditable={true}
              dangerouslySetInnerHTML={{ __html: content }} // Pre-fill with existing content
              onInput={(e) => setContent(e.currentTarget.innerHTML)}
              style={{
                minHeight: '300px',
                padding: '20px',
                border: '2px solid #e0e0e0',
                borderTop: 'none',
                borderRadius: '0 0 12px 12px',
                backgroundColor: 'white',
                outline: 'none',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Author */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Author
            </label>
            <input 
              type="text" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '16px',
                backgroundColor: '#f8f9fa',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Row with Publish Date and Read Time */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '8px'
              }}>
                Publish Date
              </label>
              <input 
                type="date" 
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '12px',
                  border: '2px solid #e0e0e0',
                  fontSize: '16px',
                  backgroundColor: '#f8f9fa',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '8px'
              }}>
                Read Time
              </label>
              <input 
                type="text" 
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '12px',
                  border: '2px solid #e0e0e0',
                  fontSize: '16px',
                  backgroundColor: '#f8f9fa',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Featured Image URL
            </label>
            <input 
              type="url" 
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '16px',
                backgroundColor: '#f8f9fa',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Topics */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Topics (comma separated)
            </label>
            <input 
              type="text" 
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                fontSize: '16px',
                backgroundColor: '#f8f9fa',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>
          
          {/* Form Buttons */}
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
          }}>
            <button 
              onClick={handleUpdate}
              disabled={saving}
              style={{
                background: saving ? '#ccc' : 'linear-gradient(135deg, #4facfe, #00f2fe)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: saving ? 'not-allowed' : 'pointer',
                boxShadow: saving ? 'none' : '0 8px 20px rgba(79, 172, 254, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              {saving ? '💾 Updating...' : '💾 Update Article'}
            </button>
            
            <Link href="/articles">
              <button 
                type="button" 
                style={{
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)',
                  textDecoration: 'none'
                }}
              >
                ❌ Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
