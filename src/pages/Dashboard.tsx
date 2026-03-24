import { useState, useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { Calendar, Zap, Mail, BarChart3, Plus, Edit2, Trash2, Copy, CheckCircle, Clock } from 'lucide-react'

interface ContentItem {
  id: string
  type: 'social' | 'email'
  content: string
  status: 'draft' | 'scheduled' | 'published'
  scheduledDate?: string
  createdAt: string
}

export default function Dashboard() {
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<'social' | 'email' | 'analytics'>('social')
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(false)
  const [showGenerateModal, setShowGenerateModal] = useState(false)
  const [topic, setTopic] = useState('')
  const [count, setCount] = useState(3)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const stats = [
    { label: 'Posts Generated', value: contentItems.filter(c => c.type === 'social').length, icon: <Zap size={24} /> },
    { label: 'Emails Created', value: contentItems.filter(c => c.type === 'email').length, icon: <Mail size={24} /> },
    { label: 'Scheduled', value: contentItems.filter(c => c.status === 'scheduled').length, icon: <Calendar size={24} /> },
    { label: 'Published', value: contentItems.filter(c => c.status === 'published').length, icon: <CheckCircle size={24} /> }
  ]

  useEffect(() => {
    // Load content on mount
    loadContent()
  }, [])

  const loadContent = async () => {
    try {
      const response = await fetch(`/api/content/${user?.id}`)
      if (response.ok) {
        const data = await response.json()
        setContentItems(data.content || [])
      }
    } catch (error) {
      console.error('Failed to load content:', error)
    }
  }

  const generateContent = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeTab === 'analytics' ? 'social' : activeTab,
          topic,
          count,
          userId: user?.id
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        // Add generated content to list
        const newItems = data.content.map((content: string, i: number) => ({
          id: data.contentIds[i],
          type: activeTab === 'analytics' ? 'social' : activeTab,
          content,
          status: 'draft' as const,
          createdAt: new Date().toISOString()
        }))

        setContentItems([...newItems, ...contentItems])
        setTopic('')
        setCount(3)
        setShowGenerateModal(false)
        alert(`✨ Generated ${count} ${activeTab} content items!`)
      }
    } catch (error) {
      console.error('Generation failed:', error)
      alert('Failed to generate content')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/content/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setContentItems(contentItems.filter(item => item.id !== id))
      }
    } catch (error) {
      console.error('Delete failed:', error)
    }
  }

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const schedulePost = async (contentId: string) => {
    const scheduledDate = prompt('Enter scheduled date (YYYY-MM-DD HH:MM):')
    if (!scheduledDate) return

    try {
      const response = await fetch('/api/zapier/schedule-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentId,
          platforms: ['instagram', 'tiktok', 'facebook'],
          scheduledTime: scheduledDate
        })
      })

      if (response.ok) {
        // Update content status
        setContentItems(contentItems.map(item =>
          item.id === contentId
            ? { ...item, status: 'scheduled' as const, scheduledDate }
            : item
        ))
        alert('✅ Post scheduled successfully!')
      }
    } catch (error) {
      console.error('Scheduling failed:', error)
    }
  }

  return (
    <div className="bg-dark-bg min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
          <p className="text-text-secondary">Manage your AI-generated content and track performance</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="card">
              <div className="text-accent-blue mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border-color">
          {['social', 'email', 'analytics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-3 font-medium capitalize border-b-2 transition ${
                activeTab === tab
                  ? 'border-accent-blue text-accent-blue'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Tabs */}
        {(activeTab === 'social' || activeTab === 'email') && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold capitalize">{activeTab} Content</h2>
              <button
                onClick={() => setShowGenerateModal(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={20} /> Generate New
              </button>
            </div>

            {/* Generate Modal */}
            {showGenerateModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="card max-w-md w-full">
                  <h3 className="text-2xl font-bold mb-4">Generate {activeTab} Content</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Topic or Product</label>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Summer collection, New shoes, Flash sale"
                        className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-border-color focus:border-accent-blue focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Items</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                        className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-border-color focus:border-accent-blue focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowGenerateModal(false)}
                        className="btn-secondary flex-1"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={generateContent}
                        disabled={loading}
                        className="btn-primary flex-1"
                      >
                        {loading ? 'Generating...' : 'Generate'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content List */}
            <div className="space-y-4">
              {contentItems
                .filter(item => item.type === activeTab)
                .map(item => (
                  <div key={item.id} className="card">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            item.status === 'published' ? 'bg-green-500/20 text-green-400' :
                            item.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {item.status}
                          </span>
                          {item.scheduledDate && (
                            <span className="text-xs text-text-secondary flex items-center gap-1">
                              <Clock size={12} /> {item.scheduledDate}
                            </span>
                          )}
                        </div>
                        <p className="text-text-secondary mb-4 break-words">{item.content}</p>
                        <p className="text-xs text-text-secondary">
                          Created: {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleCopy(item.content, item.id)}
                          className="p-2 hover:bg-card-bg rounded-lg transition"
                          title="Copy"
                        >
                          {copiedId === item.id ? (
                            <CheckCircle size={18} className="text-green-400" />
                          ) : (
                            <Copy size={18} className="text-accent-blue" />
                          )}
                        </button>
                        {item.status === 'draft' && (
                          <button
                            onClick={() => schedulePost(item.id)}
                            className="p-2 hover:bg-card-bg rounded-lg transition"
                            title="Schedule"
                          >
                            <Calendar size={18} className="text-accent-green" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:bg-card-bg rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={18} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              {contentItems.filter(item => item.type === activeTab).length === 0 && (
                <div className="card text-center py-12">
                  <p className="text-text-secondary mb-4">No {activeTab} content yet</p>
                  <button
                    onClick={() => setShowGenerateModal(true)}
                    className="btn-primary inline-block"
                  >
                    Generate Your First Post
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Content Performance</h3>
              <div className="space-y-4">
                {[
                  { title: 'Total Posts Generated', value: contentItems.filter(c => c.type === 'social').length },
                  { title: 'Total Emails Created', value: contentItems.filter(c => c.type === 'email').length },
                  { title: 'Scheduled Posts', value: contentItems.filter(c => c.status === 'scheduled').length },
                  { title: 'Published Content', value: contentItems.filter(c => c.status === 'published').length }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-dark-bg rounded-lg">
                    <span className="text-sm">{stat.title}</span>
                    <span className="font-bold text-accent-green text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-6">Estimated Monthly Impact</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-secondary mb-2">Time Saved Per Month</p>
                  <p className="text-3xl font-bold text-accent-green">
                    {Math.round((contentItems.length * 15) / 60)} hours
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Content Items Generated</p>
                  <p className="text-3xl font-bold text-accent-blue">{contentItems.length}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">Estimated Reach</p>
                  <p className="text-3xl font-bold text-primary-teal">
                    {Math.round(contentItems.length * 500)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
