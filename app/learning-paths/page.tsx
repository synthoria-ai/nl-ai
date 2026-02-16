'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Award, BookOpen, Clock, Target, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { learningPathsData } from '@/lib/learning-paths-data';

export default function LearningPathsPage() {
  const [expandedPaths, setExpandedPaths] = useState<number[]>([1]);

  const togglePath = (id: number) => {
    if (expandedPaths.includes(id)) {
      setExpandedPaths(expandedPaths.filter((pathId) => pathId !== id));
    } else {
      setExpandedPaths([...expandedPaths, id]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                <span>Career-Focused Curriculums</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Structured Learning Paths
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Follow expert-curated curriculums from beginner to job-ready. Each path includes courses, projects, and certification.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {learningPathsData.map((path) => {
            const isExpanded = expandedPaths.includes(path.id);
            return (
              <Card
                key={path.id}
                className="border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
              >
                <CardHeader className="cursor-pointer" onClick={() => togglePath(path.id)}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{path.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{path.name}</CardTitle>
                          <Badge className="bg-emerald-600 hover:bg-emerald-700">
                            {path.totalCourses} Courses
                          </Badge>
                        </div>
                        <CardDescription className="text-base mb-3">
                          {path.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{path.duration} (10 hrs/week)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{path.level}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            <span>{path.projects} Projects</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{path.certification}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-6 space-y-6">
                      {path.prerequisites && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                          <p className="text-sm">
                            <span className="font-semibold">Prerequisites:</span> {path.prerequisites}
                          </p>
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-emerald-600" />
                          Learning Phases
                        </h3>
                        <div className="space-y-4">
                          {path.phases.map((phase) => (
                            <div
                              key={phase.number}
                              className="bg-gradient-to-r from-emerald-50 to-purple-50 dark:from-emerald-950/20 dark:to-purple-950/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800"
                            >
                              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                                Phase {phase.number}: {phase.name}
                              </h4>
                              <ul className="space-y-2">
                                {phase.courses.map((course, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                    <span>{course}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Key Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {path.keySkills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="bg-purple-50 dark:bg-purple-950/20 border-purple-300 text-purple-700 dark:text-purple-400">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-emerald-600" />
                            Career Outcomes
                          </h3>
                          <ul className="space-y-2">
                            {path.careerOutcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${path.price}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 ml-2">one-time payment</span>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20">
                            View Details
                          </Button>
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Start Learning Path
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
            Compare Learning Paths
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-emerald-600 to-purple-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Path</th>
                  <th className="py-4 px-6 text-left font-semibold">Duration</th>
                  <th className="py-4 px-6 text-left font-semibold">Courses</th>
                  <th className="py-4 px-6 text-left font-semibold">Level</th>
                  <th className="py-4 px-6 text-left font-semibold">Career Focus</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {learningPathsData.map((path, idx) => (
                  <tr
                    key={path.id}
                    className={`border-b border-gray-200 dark:border-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors ${
                      idx === 0 ? 'bg-emerald-50/50 dark:bg-emerald-950/10' : ''
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{path.icon}</span>
                        <span className="font-semibold">{path.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{path.duration}</td>
                    <td className="py-4 px-6">
                      <Badge className="bg-emerald-600 hover:bg-emerald-700">{path.totalCourses}</Badge>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">{path.level}</td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{path.careerFocus}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-lg text-gray-900 dark:text-white">${path.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-emerald-50 dark:from-purple-950/20 dark:to-emerald-950/20">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg">
                  <Target className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Not sure which path to choose?</CardTitle>
              <CardDescription className="text-lg">
                Take our 2-minute quiz to find your perfect learning path based on your goals and experience
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl">
                Take the Quiz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Get personalized recommendations in minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
