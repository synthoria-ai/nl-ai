'use client';

import { useState } from 'react';
import { Search, Star, Clock, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { coursesData, skillLevels, topics, durations, priceTypes, type Course, type SkillLevel, type Topic, type Duration, type Price } from '@/lib/courses-data';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<SkillLevel[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<Duration[]>([]);
  const [selectedPriceTypes, setSelectedPriceTypes] = useState<Price[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rated' | 'price'>('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const toggleFilter = <T,>(value: T, selected: T[], setSelected: (values: T[]) => void) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const matchesDuration = (course: Course, duration: Duration) => {
    const hours = course.durationHours;
    switch (duration) {
      case 'Under 5 hours':
        return hours < 5;
      case '5-10 hours':
        return hours >= 5 && hours < 10;
      case '10-20 hours':
        return hours >= 10 && hours < 20;
      case '20+ hours':
        return hours >= 20;
      default:
        return true;
    }
  };

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSkillLevel = selectedSkillLevels.length === 0 || selectedSkillLevels.includes(course.skillLevel);
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(course.topic);
    const matchesDurationFilter = selectedDurations.length === 0 || selectedDurations.some((d) => matchesDuration(course, d));
    const matchesPrice = selectedPriceTypes.length === 0 || selectedPriceTypes.includes(course.priceType);

    return matchesSearch && matchesSkillLevel && matchesTopic && matchesDurationFilter && matchesPrice;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'popular':
        return b.reviewCount - a.reviewCount;
      case 'rated':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = sortedCourses.slice(startIndex, startIndex + coursesPerPage);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              All Courses
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover expert-led courses to master AI and machine learning
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, instructors, topics..."
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
            <aside className="w-full lg:w-64 shrink-0">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Skill Level</h3>
                    <div className="space-y-2">
                      {skillLevels.map((level) => (
                        <div key={level} className="flex items-center gap-2">
                          <Checkbox
                            id={`skill-${level}`}
                            checked={selectedSkillLevels.includes(level)}
                            onCheckedChange={() => toggleFilter(level, selectedSkillLevels, setSelectedSkillLevels)}
                          />
                          <label htmlFor={`skill-${level}`} className="text-sm cursor-pointer">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Topic</h3>
                    <div className="space-y-2">
                      {topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2">
                          <Checkbox
                            id={`topic-${topic}`}
                            checked={selectedTopics.includes(topic)}
                            onCheckedChange={() => toggleFilter(topic, selectedTopics, setSelectedTopics)}
                          />
                          <label htmlFor={`topic-${topic}`} className="text-sm cursor-pointer">
                            {topic}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Duration</h3>
                    <div className="space-y-2">
                      {durations.map((duration) => (
                        <div key={duration} className="flex items-center gap-2">
                          <Checkbox
                            id={`duration-${duration}`}
                            checked={selectedDurations.includes(duration)}
                            onCheckedChange={() => toggleFilter(duration, selectedDurations, setSelectedDurations)}
                          />
                          <label htmlFor={`duration-${duration}`} className="text-sm cursor-pointer">
                            {duration}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Price</h3>
                    <div className="space-y-2">
                      {priceTypes.map((priceType) => (
                        <div key={priceType} className="flex items-center gap-2">
                          <Checkbox
                            id={`price-${priceType}`}
                            checked={selectedPriceTypes.includes(priceType)}
                            onCheckedChange={() => toggleFilter(priceType, selectedPriceTypes, setSelectedPriceTypes)}
                          />
                          <label htmlFor={`price-${priceType}`} className="text-sm cursor-pointer">
                            {priceType}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {startIndex + 1}-{Math.min(startIndex + coursesPerPage, sortedCourses.length)} of {sortedCourses.length} courses
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                  <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rated">Highest Rated</SelectItem>
                      <SelectItem value="price">Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {paginatedCourses.map((course) => (
                  <Card key={course.id} className="group border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {course.isPopular && (
                        <Badge className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-purple-500 text-white text-xs">
                            {course.instructorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.instructor}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2 mt-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 text-emerald-700 dark:text-emerald-400">
                          {course.skillLevel}
                        </Badge>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{course.topic}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.durationHours} hrs</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.lessonCount} lessons</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{course.rating}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            ({course.reviewCount.toLocaleString()})
                          </span>
                        </div>
                        {course.price === 0 ? (
                          <Badge className="bg-green-600 hover:bg-green-700">Free</Badge>
                        ) : (
                          <span className="font-bold text-lg text-gray-900 dark:text-white">
                            ${course.price}/mo
                          </span>
                        )}
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
