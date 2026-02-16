'use client';

import { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { articlesData, categories, type ArticleCategory } from '@/lib/resources-data';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'All'>('All');

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredArticles.find((article) => article.isFeatured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter((article) => article.id !== featuredArticle?.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCategoryColor = (category: ArticleCategory) => {
    switch (category) {
      case 'Tutorial':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Career Advice':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'AI News & Trends':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Project Ideas':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Tool Reviews':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Learn from AI Experts</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tutorials, guides, and insights from AI experts to accelerate your learning journey
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, tutorials, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 shrink-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'All'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    All Articles
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-950/20 dark:to-emerald-950/20 border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-white dark:bg-gray-900 rounded-full">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">Get Weekly AI Insights</CardTitle>
                  <CardDescription className="text-center">
                    Join 10,000+ learners receiving expert tips and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-2"
                    />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Subscribe
                    </Button>
                    <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                      Unsubscribe anytime. No spam.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="flex-1">
              {featuredArticle && (
                <Card className="mb-8 border-2 border-emerald-300 dark:border-emerald-700 overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(featuredArticle.category)}>
                        {featuredArticle.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl mb-3">{featuredArticle.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {featuredArticle.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-purple-500 text-white text-sm">
                            {featuredArticle.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{featuredArticle.author}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(featuredArticle.publishedDate)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {featuredArticle.readTime} min read
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-lg overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <Badge className={`${getCategoryColor(article.category)} w-fit mb-2`}>
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl leading-tight line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3 mt-2">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-2 mb-4">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-purple-500 text-white text-xs">
                            {article.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{article.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(article.publishedDate)}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime} min
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      No articles found
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      Try adjusting your search or filter criteria
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
