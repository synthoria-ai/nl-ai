import { BookOpen, Volume2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { contentData, teamMembers, ContentType } from '@/lib/data';

export default function Home() {
  const getCardStyle = (type: ContentType) => {
    switch (type) {
      case 'offer':
        return 'border-purple-600 bg-purple-50 dark:bg-purple-950/20';
      case 'audio':
        return 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20';
      default:
        return 'border-gray-200 bg-white dark:bg-gray-950';
    }
  };

  const getCardIcon = (type: ContentType) => {
    switch (type) {
      case 'text':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'offer':
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'audio':
        return <Volume2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getCardButton = (type: ContentType) => {
    switch (type) {
      case 'text':
        return 'Read Guide';
      case 'offer':
        return 'Start Course';
      case 'audio':
        return 'Listen';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Learning Platform</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Master AI for Real Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Practical guides for travel, parenting, and creativity. Learn at your own pace with expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20 px-8 py-6 text-lg rounded-xl">
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Learning Paths
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from text guides, audio lessons, or full courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentData.map((content) => (
              <Card key={content.id} className={`${getCardStyle(content.type)} border-2 transition-all hover:shadow-lg hover:-translate-y-1`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    {getCardIcon(content.type)}
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                      {content.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{content.title}</CardTitle>
                  <CardDescription className="text-base">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className={
                      content.type === 'offer'
                        ? 'w-full bg-purple-600 hover:bg-purple-700 text-white'
                        : 'w-full bg-emerald-600 hover:bg-emerald-700 text-white'
                    }
                  >
                    {getCardButton(content.type)}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-emerald-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Your Instructors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn from experts who make AI accessible and practical
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center border-2 hover:shadow-lg transition-all hover:border-emerald-300 dark:hover:border-emerald-700">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20 border-4 border-emerald-200 dark:border-emerald-800">
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-purple-500 text-white text-2xl font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400 text-sm font-medium">
                    {member.specialty}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              NeuralLearn AI
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Making AI education accessible to everyone
          </p>
        </div>
      </footer>
    </main>
  );
}
